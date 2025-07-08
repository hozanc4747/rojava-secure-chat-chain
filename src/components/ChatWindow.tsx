
import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

interface Message {
  id: string;
  text: string;
  isSent: boolean;
  timestamp: string;
  isRead: boolean;
}

interface ChatWindowProps {
  chatId: string;
  contactName: string;
  contactImage?: string;
  isOnline: boolean;
}

const ChatWindow = ({ chatId, contactName, contactImage, isOnline }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "مرحباً! كيف حالك اليوم؟",
      isSent: false,
      timestamp: "٢:٣٠ م",
      isRead: true
    },
    {
      id: "2", 
      text: "الحمد لله بخير، وأنت كيف حالك؟",
      isSent: true,
      timestamp: "٢:٣٢ م",
      isRead: true
    },
    {
      id: "3",
      text: "أنا بخير أيضاً، شكراً لك. هل جربت تطبيق Rojava الجديد؟",
      isSent: false,
      timestamp: "٢:٣٥ م",
      isRead: false
    }
  ]);

  const handleSendMessage = (messageText: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isSent: true,
      timestamp: new Date().toLocaleTimeString('ar-SA', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }),
      isRead: false
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <ChatHeader 
        contactName={contactName}
        contactImage={contactImage}
        isOnline={isOnline}
      />
      
      <div className="flex-1 overflow-y-auto p-4 chat-gradient">
        <div className="max-w-4xl mx-auto">
          {messages.map(message => (
            <MessageBubble
              key={message.id}
              message={message.text}
              isSent={message.isSent}
              timestamp={message.timestamp}
              isRead={message.isRead}
            />
          ))}
        </div>
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
