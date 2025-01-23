// src/app/api/generateRoast/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { name, hobbies, quirks, favorites, relationship } = await req.json();

    // Validate the input
    if (!name || !hobbies || !quirks || !favorites || !relationship) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create the prompt for OpenAI
    const prompt = `Write a funny and loving roast in hindi for ${name}. They love ${hobbies}, have quirks like ${quirks}, enjoy ${favorites}, and our relationship is ${relationship}. Make it humorous, witty, and heartfelt and it should express love, but keep it under 80 words. Use playful teasing and clever wordplay, and avoid anything mean-spirited but dont keep it too formal.`;

    // Call the OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4', // or 'gpt-3.5-turbo'
      messages: [{ role: 'user', content: prompt }],
    });

    // Extract the roast from the response
    const roast = completion.choices[0].message.content;

    // Return the roast as JSON
    return NextResponse.json({ roast });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error generating roast' },
      { status: 500 }
    );
  }
}