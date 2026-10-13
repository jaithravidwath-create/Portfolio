export default async function handler(req, res) {
  // Allow POST requests only
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY environment variable is missing' });
  }

  try {
    const { messages, prompt, message } = req.body || {};
    const userQuery = prompt || message || (messages && messages[messages.length - 1]?.content) || 'Hello';

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: 'You are JBot AI, a helpful AI assistant on Jaithra Vidwath Kavuri\'s personal portfolio website. Answer questions concisely and professionally regarding Jaithra\'s projects, technical skills, and experience.'
          },
          { role: 'user', content: userQuery }
        ],
      }),
    });

    const data = await groqRes.json();

    if (!groqRes.ok) {
      return res.status(groqRes.status).json({ error: data.error?.message || 'Groq API request failed' });
    }

    const replyText = data.choices?.[0]?.message?.content || 'No response generated.';

    // Returns all common fields so whatever key Manus expects is satisfied
    return res.status(200).json({
      reply: replyText,
      message: replyText,
      text: replyText,
      content: replyText,
      response: replyText,
      choices: data.choices
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
