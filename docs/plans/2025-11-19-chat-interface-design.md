# Chat Interface Design - Programming Challenge

## Overview

Build a chat interface (UI only) as a programming challenge for beginner students. Students will download the repo and implement:
1. OpenAI API integration
2. System prompt for assistant personality
3. Curriculum file reading for course questions
4. Web search (stretch goal)

## Architecture

### File Structure

```
chatassistant/
├── app/
│   ├── page.tsx          # Main chat page (entry point)
│   ├── layout.tsx        # Keep existing
│   └── globals.css       # Keep existing + chat styles
├── components/
│   ├── ChatContainer.tsx # Main chat wrapper
│   ├── MessageList.tsx   # Displays all messages
│   ├── MessageBubble.tsx # Single message (user/assistant)
│   └── ChatInput.tsx     # Input field + send button
├── lib/
│   └── chat.ts           # TODO: Students add OpenAI here
├── data/
│   └── curriculum.md     # Course curriculum (knowledge base)
└── README.md             # Challenge instructions
```

### Data Flow

1. User types message in `ChatInput`
2. `ChatContainer` manages message state (array of messages)
3. `MessageList` renders all messages
4. `lib/chat.ts` handles sending to API (students implement this)
5. Response added to message state

## Component Details

### ChatContainer.tsx

```typescript
// State management
const [messages, setMessages] = useState<Message[]>([])
const [inputValue, setInputValue] = useState('')
const [isLoading, setIsLoading] = useState(false)

// Message type
interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}
```

### ChatInput.tsx

- Text input field (auto-focuses on load)
- Send button (disabled when empty or loading)
- Submits on Enter key press

### MessageList.tsx

- Maps over messages array
- Auto-scrolls to bottom on new messages
- Shows typing indicator when `isLoading` is true

### MessageBubble.tsx

- Different styling for user (right-aligned, blue) vs assistant (left-aligned, gray)
- Displays message content

### lib/chat.ts

```typescript
// TODO: Students implement this function
export async function sendMessage(message: string): Promise<string> {
  // Currently returns mock response
  // Students will: 1) Add OpenAI API call, 2) Add web search
  return "I'm a placeholder! Connect me to OpenAI to get real answers."
}
```

## Visual Design

### Overall Layout

- Full-height centered container (max-width ~800px)
- Clean white background with subtle border
- Message area takes most of the space, input fixed at bottom

### Message Bubbles

- **User messages**: Right-aligned, blue background (#3B82F6), white text, rounded corners
- **Assistant messages**: Left-aligned, light gray background (#F3F4F6), dark text, rounded corners
- Subtle shadow on each bubble
- Smooth fade-in animation when appearing

### Chat Input Area

- Rounded input field with border
- Focus ring when active
- Send button with arrow icon
- Disabled state (grayed out) when loading
- Sticky to bottom of container

### Loading State

- Animated typing indicator (three bouncing dots)
- Appears in assistant message position while waiting

### Typography

- Clean sans-serif (system fonts via Tailwind)
- 16px base size for readability

### Responsive

- Works on mobile (full width with padding)
- Scales nicely on desktop (centered with max-width)

## README Challenge Instructions

### Part 1: Basic Chat with Personality

- Create OpenAI account and get API key
- Install OpenAI SDK
- Implement `sendMessage` function
- Add creative system prompt for personality
- Handle errors gracefully

### Part 2: Course Knowledge

- Read curriculum from `data/curriculum.md`
- Include curriculum context for course questions
- Assistant references file for Vibe Coding Foundation questions

### Part 3: Web Search (Stretch Goal)

- Add web search capability using OpenAI's tools
- Display search results in response

## Technical Decisions

- **Simple state management**: useState only, no external state libraries
- **Detailed TODO comments**: Guide beginners without giving away solutions
- **Mock responses**: Show data flow working before API integration
- **Single implementation file**: `lib/chat.ts` is the one place students work
