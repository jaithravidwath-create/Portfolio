export default async function handler(req, res) {
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
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: `You are JBot AI, the interactive assistant for Jaithra Vidwath Kavuri's portfolio website.

CRITICAL FORMATTING RULES:
1. NEVER use markdown tables (| --- |), headers (#), bolding (**), or italics (*).
2. Write in short, punchy, catchy plain text using simple bullet points (-) when listing items.
3. Maximum 3-4 sentences total. Maximum impact, minimal fluff.

JAITHRA'S PROFILE:
- Full-Stack Developer & CS Student based in Hyderabad.
- Core Stack: Node.js, Express, React, TypeScript, C, Java, SQL, Vercel.
- Key Projects: Full-Stack Equipment Rental App (Node/React/Vercel) & Developer Portfolio (jaithravidwathkavuri.in).
- Focus: Building clean web apps, efficient data structures, and slick user experiences.`
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
