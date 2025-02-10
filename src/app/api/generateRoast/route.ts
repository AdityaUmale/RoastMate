// src/app/api/generateRoast/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { hobbies, quirks, favorites, relationship } = await req.json();

    if (!hobbies || !quirks || !favorites || !relationship) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const prompt = `Act as a funny best friend creating a playful roast. Follow these rules:
    1. Use Hinglish mix (Hindi in Roman script + English) naturally like friends chat
    2. Follow this structure:
       - Start with funny nickname based on their traits
       - Roast hobbies: "${hobbies}" using exaggeration humor
       - Tease about quirks: "${quirks}" using relatable jokes
       - Mock favorites: "${favorites}" with pop culture comparisons
       - End with warm dig about relationship: "${relationship}"
    3. Style guidelines:
       * Use emojis sparingly (2-3 total)
       * Include 1-2 Hindi phrases like "Yaar", "Bhai", "Arey!" naturally
       * Add humorous metaphors (e.g., "Coffee addiction Starbucks ko sharminda kar de")
       * Use casual abbreviations like "AF", "TBH" but not too much
       * Keep sentences uneven - some short, some longer
       * Add funny rhetorical questions
       * Maximum 70 words, sound like spoken conversation

    Example good output:
    "Chai-pani Kumar! ☕️ Your tea obsession makes Starbucks insecure yaar! 
    10/10 would bail on plans for 'me-time' 😂 But who needs friends when 
    you've got biryani? Swipe-right pro max - we keep you only for your 
    Netflix password! #ForeverSingleGoals but love you bro ❤️"

    Now create the roast:`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.85, // Increased for more creativity
      max_tokens: 150,
    });

    const roast = completion.choices[0].message.content;

    return NextResponse.json({ roast });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error generating roast' },
      { status: 500 }
    );
  }
}