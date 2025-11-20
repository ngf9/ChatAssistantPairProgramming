/**
 * Chat API Implementation
 *
 * This is the main file you'll be working on for this challenge!
 *
 * Your tasks:
 * 1. Connect to OpenAI's API
 * 2. Add a system prompt to give the assistant personality
 * 3. Read the curriculum file and include it as context
 * 4. (Stretch) Add web search capability
 */

// TODO: Step 1 - Install and import the OpenAI SDK
// Run: npm install openai
// Then uncomment and use:
// import OpenAI from 'openai';

// TODO: Step 2 - Initialize the OpenAI client
// You'll need to create a .env.local file with your API key
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// TODO: Step 3 - Create your system prompt
// This gives your assistant its personality!
// Be creative - make it friendly, professional, funny, or whatever fits your style
// Example:
// const SYSTEM_PROMPT = `You are a helpful and friendly coding tutor.
// You explain concepts clearly and encourage students when they're learning.
// You have access to the Vibe Coding Foundation curriculum.`;

// TODO: Step 4 - Read the curriculum file
// Hint: You can use Node.js fs module to read the file
// import fs from 'fs';
// import path from 'path';
// const curriculumPath = path.join(process.cwd(), 'data', 'curriculum.md');
// const curriculum = fs.readFileSync(curriculumPath, 'utf-8');

/**
 * Send a message and get a response
 *
 * This is the main function that handles communication with the AI.
 * Currently it returns a mock response - your job is to connect it to OpenAI!
 *
 * @param message - The user's message
 * @returns The assistant's response
 */
export async function sendMessage(message: string): Promise<string> {
  // TODO: Step 5 - Replace this mock implementation with a real OpenAI API call
  //
  // Here's the basic structure you'll need:
  //
  // const response = await openai.chat.completions.create({
  //   model: 'gpt-4o-mini', // or 'gpt-4o' for better quality
  //   messages: [
  //     { role: 'system', content: SYSTEM_PROMPT + '\n\nCurriculum:\n' + curriculum },
  //     { role: 'user', content: message }
  //   ],
  // });
  //
  // return response.choices[0].message.content || 'No response';

  // TODO: Step 6 (Stretch Goal) - Add web search capability
  // Look into OpenAI's function calling or tools feature
  // This allows the AI to search the web when it needs current information

  // ============================================
  // MOCK IMPLEMENTATION - DELETE THIS WHEN DONE
  // ============================================

  // Simulate a delay like a real API call would have
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return a mock response
  return `I'm a placeholder assistant! 🤖

To make me work for real, you need to:
1. Get an OpenAI API key
2. Install the OpenAI SDK (npm install openai)
3. Implement the sendMessage function in lib/chat.ts

Your message was: "${message}"

Check the TODO comments in lib/chat.ts for step-by-step instructions!`;
}
