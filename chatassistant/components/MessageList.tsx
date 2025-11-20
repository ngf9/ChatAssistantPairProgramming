'use client';

import { useEffect, useRef } from 'react';
import { Message } from './ChatContainer';
import { MessageBubble } from './MessageBubble';

// Props that this component receives from its parent
interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  // Reference to the bottom of the message list for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever messages change or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="message-list">
      {/* Show welcome message if no messages yet */}
      {messages.length === 0 && (
        <div className="welcome-message">
          <p>Welcome! Type a message below to start chatting.</p>
        </div>
      )}

      {/* Render each message */}
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}

      {/* Show typing indicator when waiting for response */}
      {isLoading && (
        <div className="typing-indicator">
          <div className="typing-bubble">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      {/* Invisible element at the bottom for auto-scroll target */}
      <div ref={messagesEndRef} />
    </div>
  );
}
