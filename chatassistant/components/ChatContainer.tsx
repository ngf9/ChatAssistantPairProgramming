'use client';

import { useState } from 'react';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { sendMessage } from '../lib/chat';

// Define the structure of a message
// Each message has a unique id, a role (who sent it), and the content
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function ChatContainer() {
  // State to store all messages in the conversation
  const [messages, setMessages] = useState<Message[]>([]);

  // State to track what the user is currently typing
  const [inputValue, setInputValue] = useState('');

  // State to show loading indicator while waiting for response
  const [isLoading, setIsLoading] = useState(false);

  // This function runs when the user sends a message
  const handleSendMessage = async () => {
    // Don't send empty messages
    if (!inputValue.trim()) return;

    // Create a new message object for the user's message
    const userMessage: Message = {
      id: Date.now().toString(), // Simple unique ID using timestamp
      role: 'user',
      content: inputValue.trim(),
    };

    // Add the user's message to the conversation
    setMessages((prev) => [...prev, userMessage]);

    // Clear the input field
    setInputValue('');

    // Show loading indicator
    setIsLoading(true);

    try {
      // Send the message and get a response
      // This calls the function in lib/chat.ts that students will implement
      const response = await sendMessage(inputValue.trim());

      // Create a message object for the assistant's response
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
      };

      // Add the assistant's response to the conversation
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      // If something goes wrong, show an error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      // Hide loading indicator
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <h1>Chat Assistant</h1>
        <p>Ask me anything about the Vibe Coding Foundation course!</p>
      </div>

      {/* Message display area */}
      <MessageList messages={messages} isLoading={isLoading} />

      {/* Input area */}
      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSendMessage}
        disabled={isLoading}
      />
    </div>
  );
}
