import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export default async function handler(req: any, res: any) {
  // Allow POST requests only
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, prompt } = req.body || {};

    const systemPrompt = `You are JBot AI, a helpful AI assistant on Jaithra Vidwath Kavuri's personal portfolio website. 
Answer questions concisely and professionally regarding Jaithra's projects, technical skills, and experience.`;

    // Construct message history or single prompt
    const chatMessages = messages && Array.isArray(messages)
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt || 'Hello' }
        ];

    const completion = await groq.chat.completions.create({
      messages: chatMessages,
      model: 'llama-3.3-70b-versatile',
    });

    const responseText = completion.choices[0]?.message?.content || 'No response generated.';

    return res.status(200).json({
      message: responseText,
      reply: responseText,
      response: responseText
    });
  } catch (error: any) {
    console.error('Groq API Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
