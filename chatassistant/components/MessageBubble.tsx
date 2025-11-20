import { Message } from './ChatContainer';

// Props that this component receives
interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  // Check if this message is from the user or the assistant
  const isUser = message.role === 'user';

  return (
    <div className={`message-bubble-container ${isUser ? 'user' : 'assistant'}`}>
      <div className={`message-bubble ${isUser ? 'user' : 'assistant'}`}>
        {/* Display the message content */}
        <p>{message.content}</p>
      </div>
    </div>
  );
}
