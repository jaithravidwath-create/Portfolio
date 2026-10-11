import express, { type Request, type Response } from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer as createViteServer } from 'vite'
import { verifiedKnowledge } from '../src/data/profile'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const app = express()
const port = Number(process.env.PORT || 3000)
const requestTimestamps = new Map<string, number>()

app.use(express.json({ limit: '60kb' }))
app.disable('x-powered-by')

const fallbackReply = (question: string) => {
  const normalized = question.toLowerCase()
  if (normalized.includes('github')) return `Jaithra's GitHub is https://github.com/jaithravidwath-create.`
  if (normalized.includes('linkedin')) return `Jaithra's LinkedIn is https://www.linkedin.com/in/jaithra-vidwath-kavuri-805197371/.`
  if (normalized.includes('leetcode')) return `Jaithra's LeetCode profile is https://leetcode.com/u/vidwath007/.`
  if (normalized.includes('resume') || normalized.includes('cv')) return `The portfolio looks for the resume at ${verifiedKnowledge.resume}. It has not been added to this project yet.`
  if (normalized.includes('contact') || normalized.includes('email')) return `You can contact Jaithra at ${verifiedKnowledge.contact.email}.`
  if (normalized.includes('phone') || normalized.includes('mobile')) return `Jaithra's mobile number is ${verifiedKnowledge.contact.mobile}.`
  if (normalized.includes('project')) return `Jaithra has developed an Equipment Rental Application, a Blood Donor Management System using Python, and a Smart Traffic Management System using C.`
  if (normalized.includes('language') || normalized.includes('skill')) return `The supplied profile lists C, Python, Java, JavaScript, and SQL, plus MongoDB, MongoDB Atlas, Postman, and Visual Studio Code.`
  if (normalized.includes('interest')) return `Jaithra is interested in Internet of Things, Machine Learning, full-stack development, and programming/problem-solving.`
  return `Ask JVK is not connected to its live AI service yet. I can confirm that Jaithra is a sophomore studying B.Tech CSE-IoT at VNR VJIET and exploring practical software.`
}

function validMessages(value: unknown): Array<{ role: 'user' | 'assistant'; content: string }> | null {
  if (!Array.isArray(value) || value.length === 0 || value.length > 12) return null
  const messages = value.filter((message): message is { role: 'user' | 'assistant'; content: string } => {
    if (!message || typeof message !== 'object') return false
    const candidate = message as { role?: unknown; content?: unknown }
    return (candidate.role === 'user' || candidate.role === 'assistant') && typeof candidate.content === 'string' && candidate.content.trim().length > 0 && candidate.content.length <= 2000
  })
  return messages.length === value.length ? messages : null
}

app.post('/api/chat', async (req: Request, res: Response) => {
  const messages = validMessages(req.body?.messages)
  if (!messages) return res.status(400).json({ error: 'Please send a short, valid conversation.' })
  const lastUserMessage = [...messages].reverse().find((message) => message.role === 'user')
  if (!lastUserMessage) return res.status(400).json({ error: 'Please ask a question first.' })

  const address = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0]
  const now = Date.now()
  if (now - (requestTimestamps.get(address) || 0) < 2200) return res.status(429).json({ error: 'Please give Ask JVK a moment before sending another question.' })
  requestTimestamps.set(address, now)
  if (requestTimestamps.size > 500) requestTimestamps.clear()

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return res.json({ reply: `AI configuration is not enabled for this portfolio yet. This is a local verified fallback, not a live LLM response.\n\n${fallbackReply(lastUserMessage.content)}` })

  const baseUrl = (process.env.OPENAI_API_BASE || 'https://api.openai.com/v1').replace(/\/$/, '')
  const model = process.env.OPENAI_MODEL || 'gpt-5-mini'
  const system = `You are Ask JVK, a truthful portfolio assistant. Answer only from the verified profile JSON below. Never invent qualifications, grades, awards, statistics, project features, responsibilities, or employer relationships. Do not claim employment by McKinsey & Company; describe McKinsey Forward as a fellowship/program. Distinguish interests from completed projects. If a detail is not present, say it is not available. Give exact profile links when asked. Only disclose the mobile number when the user explicitly asks for contact details or the phone number; do not include it in greetings or unrelated answers. Keep answers concise, natural, and useful.\n\nVERIFIED PROFILE JSON:\n${JSON.stringify(verifiedKnowledge)}`
  try {
    const upstream = await fetch(`${baseUrl}/chat/completions`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` }, body: JSON.stringify({ model, max_completion_tokens: 420, reasoning: { effort: 'minimal' }, messages: [{ role: 'system', content: system }, ...messages] }) })
    if (!upstream.ok) { console.error('Chat upstream status:', upstream.status); return res.status(502).json({ error: 'The live AI service is unavailable right now. Please try again later.' }) }
    const payload = await upstream.json() as { choices?: Array<{ message?: { content?: string } }> }
    const reply = payload.choices?.[0]?.message?.content?.trim()
    if (!reply) return res.status(502).json({ error: 'The live AI service returned no answer. Please try again.' })
    return res.json({ reply })
  } catch (error) {
    console.error('Chat upstream error:', error instanceof Error ? error.message : 'unknown')
    return res.status(502).json({ error: 'The live AI service is unavailable right now. Please try again later.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({ root, server: { middlewareMode: true }, appType: 'spa' })
    app.use(vite.middlewares)
  } else {
    app.use(express.static(path.join(root, 'dist'), { etag: true, maxAge: '1d' }))
    app.get(/.*/, (_req, res) => res.sendFile(path.join(root, 'dist', 'index.html')))
  }
  app.listen(port, '0.0.0.0', () => console.log(`JVK portfolio listening on 0.0.0.0:${port}`))
}

start().catch((error) => { console.error(error); process.exit(1) })
