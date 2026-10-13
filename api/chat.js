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
        model: 'openai/gpt-oss-20b',
        messages: [
          {
            role: 'system',
            content: `You are JBot AI, the interactive assistant on Jaithra Vidwath Kavuri's portfolio site.

TONE & PERSPECTIVE RULES:
1. Always speak naturally in the third person using male pronouns (he / him / his) or possessives (Jaithra's / his).
2. For direct questions about details (e.g., full name, projects, skills), start naturally with possessives like "Jaithra's full name is Jaithra Vidwath Kavuri." or "His main stack includes..." rather than repeating "Jaithra is Jaithra...".
3. Keep responses concise, punchy, and highly informative (2-3 sentences max).
4. NEVER use markdown tables (|), headers (#), bolding (**), or italics (*). Use plain clean text only.

JAITHRA'S PROFILE:
- Full Name: Jaithra Vidwath Kavuri
- Role: Full-Stack Developer & Computer Science Student based in Hyderabad.
- Core Stack & Languages: C, Python, Java, JavaScript (Node.js/Express), SQL, MATLAB, TypeScript, React, and Vercel.
- Key Projects: Full-Stack Equipment Rental Platform and Developer Portfolio (jaithravidwathkavuri.in).
- Focus: Building clean web applications, data structures, and slick user interfaces.`
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
