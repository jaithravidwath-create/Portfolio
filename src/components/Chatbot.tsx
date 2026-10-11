import { useEffect, useRef, useState } from 'react'
import { chatbotWelcome, suggestedQuestions } from '../data/profile'
import { Icon } from './Icon'

type Message = { role: 'user' | 'assistant'; content: string }

const initialMessages: Message[] = [{ role: 'assistant', content: chatbotWelcome }]

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) }, [messages, loading])
  useEffect(() => { if (open) window.setTimeout(() => inputRef.current?.focus(), 100) }, [open])

  async function sendMessage(raw: string) {
    const content = raw.trim()
    if (!content || loading || content.length > 300) return
    setError('')
    const nextMessages = [...messages, { role: 'user' as const, content }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: nextMessages.slice(-12) }) })
      const payload = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(payload.error || 'JBot AI is taking a quiet moment. Please try again.')
      setMessages((current) => [...current, { role: 'assistant', content: payload.reply || 'I do not have that detail in Jaithra’s verified profile yet.' }])
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'The chat service is unavailable right now.')
    } finally { setLoading(false) }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') { event.preventDefault(); void sendMessage(input) }
  }

  return <>
    <button className={`chat-launcher ${open ? 'is-open' : ''}`} type="button" aria-label={open ? 'Close JBot AI' : 'Open JBot AI'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
      <span className="chat-launcher__icon"><Icon name={open ? 'close' : 'message'} /></span>
      <span className="chat-launcher__label">JBot AI</span>
    </button>
    <aside className={`chat-panel ${open ? 'is-open' : ''}`} aria-hidden={!open} aria-label="JBot AI chatbot">
      <div className="chat-panel__header">
        <div><span className="chat-status"><i /> online when configured</span><h2>JBot AI</h2></div>
        <button className="icon-button" type="button" aria-label="Close chat" onClick={() => setOpen(false)}><Icon name="close" /></button>
      </div>
      <div className="chat-panel__body">
        <div className="chat-messages" aria-live="polite">
          {messages.map((message, index) => <div className={`chat-message chat-message--${message.role}`} key={`${message.role}-${index}`}><span className="chat-message__role">{message.role === 'assistant' ? 'JVK' : 'You'}</span><p>{message.content}</p></div>)}
          {loading && <div className="chat-message chat-message--assistant"><span className="chat-message__role">JBot AI</span><div className="typing" aria-label="JBot AI is typing"><i /><i /><i /></div></div>}
          <div ref={messagesEndRef} />
        </div>
        {messages.length === 1 && <div className="chat-suggestions"><p>Try asking</p>{suggestedQuestions.slice(0, 4).map((question) => <button type="button" key={question} onClick={() => void sendMessage(question)}>{question}</button>)}</div>}
        {error && <p className="chat-error" role="alert">{error}</p>}
      </div>
      <form className="chat-input" onSubmit={(event) => { event.preventDefault(); void sendMessage(input) }}>
        <input ref={inputRef} type="text" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={handleKeyDown} placeholder="Ask about Jaithra…" maxLength={300} aria-label="Ask a question" disabled={loading} />
        <button type="submit" aria-label="Send message" disabled={loading || !input.trim()}><Icon name="send" /></button>
      </form>
      <p className="chat-note">Verified profile answers only · max 300 characters</p>
    </aside>
  </>
}
