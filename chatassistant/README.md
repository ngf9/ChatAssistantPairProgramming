# Chat Assistant - Programming Challenge

Build a working AI chat assistant that can answer questions about the Vibe Coding Foundation course using OpenAI's API.

## Getting Started

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd chatassistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Go to [http://localhost:3000](http://localhost:3000)

You should see a chat interface. Try sending a message - you'll get a placeholder response telling you the assistant isn't connected yet. Your job is to connect it to OpenAI!

---

## Your Challenge

Complete the `lib/chat.ts` file to make the chat assistant work for real.

### Part 1: Basic Chat with Personality (Required)
- [X] Get an API key from the API Keys section (this has been completed for you and can be found in .env!)
- [ ] Install the OpenAI SDK:
  ```bash
  npm install openai
  ```
- [ ] Create a `.env.local` file in the project root:
  ```
  OPENAI_API_KEY=your-api-key-here
  ```
- [ ] Implement the `sendMessage` function in `lib/chat.ts` to call OpenAI
- [ ] Add a **system prompt** that gives your assistant personality!
  - Be creative - make it friendly, professional, funny, or whatever fits your style
  - Example: "You are a helpful and enthusiastic coding tutor who loves to explain concepts with real-world examples."
- [ ] Handle errors gracefully (what if the API is down?)

### Part 2: Course Knowledge (Required)

Your assistant should be able to answer questions about the Vibe Coding Foundation course by reading from the curriculum file.

- [ ] Read the curriculum from `data/curriculum.md`
- [ ] Include the curriculum as context in your system prompt
- [ ] When users ask about the course, the assistant should reference this information
- [ ] Test by asking: "What topics are covered in Week 4?"

### Part 3: Web Search (Stretch Goal)

Make your assistant even smarter by giving it the ability to search the web for current information.

- [ ] Look into OpenAI's [function calling](https://platform.openai.com/docs/guides/function-calling) feature
- [ ] Add a web search tool that the AI can use when needed
- [ ] The assistant should know when to use its course knowledge vs. when to search the web

---

## Project Structure

```
chatassistant/
├── app/
│   ├── page.tsx          # Main page (already done)
│   ├── layout.tsx         # App layout
│   └── globals.css        # Styles (already done)
├── components/
│   ├── ChatContainer.tsx  # Main chat logic
│   ├── MessageList.tsx    # Displays messages
│   ├── MessageBubble.tsx  # Single message
│   └── ChatInput.tsx      # Input field
├── lib/
│   └── chat.ts            # ⭐ YOUR MAIN FILE - implement here!
├── data/
│   └── curriculum.md      # Course curriculum (knowledge base)
└── README.md              # This file
```

---

## Where to Add Your Code

Look for `// TODO:` comments in `lib/chat.ts` - they guide you step-by-step!

The main function you need to implement is:

```typescript
export async function sendMessage(message: string): Promise<string> {
  // Your implementation here
}
```

---

## Environment Variables

Create a `.env.local` file in the project root (same folder as `package.json`):

```
OPENAI_API_KEY=sk-your-api-key-here
```

**Important:** Never commit your API key to git! The `.gitignore` file already excludes `.env.local`.

---

## Hints

### Reading the curriculum file

```typescript
import fs from 'fs';
import path from 'path';

const curriculumPath = path.join(process.cwd(), 'data', 'curriculum.md');
const curriculum = fs.readFileSync(curriculumPath, 'utf-8');
```

### Basic OpenAI call structure

```typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [
    { role: 'system', content: 'Your system prompt here' },
    { role: 'user', content: message }
  ],
});

return response.choices[0].message.content;
```

---

## Testing Your Implementation

1. **Basic chat**: Send "Hello!" - you should get a friendly response
2. **Personality**: The response should match the personality you defined
3. **Course knowledge**: Ask "What's covered in Module 2?" - it should reference the curriculum
4. **Error handling**: Temporarily use a wrong API key - your app shouldn't crash

---

## Resources

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [OpenAI Node.js SDK](https://github.com/openai/openai-node)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

---

## Common Issues

### "OPENAI_API_KEY is not defined"
Make sure you created `.env.local` in the right place and restarted the dev server.

### "Module not found: openai"
Run `npm install openai` to install the SDK.

### "Rate limit exceeded"
You've made too many API calls. Wait a minute and try again, or check your OpenAI usage limits.

---

Good luck! Remember: the goal is to learn, so don't hesitate to experiment and try different approaches.
