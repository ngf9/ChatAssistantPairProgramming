'use client';

import { useRef, useEffect } from 'react';

// Props that this component receives
interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  // Reference to the input field for auto-focus
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus the input field when the component loads
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle keyboard events (send message on Enter key)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default Enter behavior
      onSend();
    }
  };

  return (
    <div className="chat-input-container">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        disabled={disabled}
        className="chat-input"
      />
      <button
        onClick={onSend}
        disabled={disabled || !value.trim()}
        className="send-button"
        aria-label="Send message"
      >
        {/* Arrow icon for send button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
}
