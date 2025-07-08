
import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
  onBack?: () => void;
}

const ChatWindow = ({ chatId, contactName, contactImage, isOnline, onBack }: ChatWindowProps) => {
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
      {/* Mobile Back Button */}
      {onBack && (
        <div className="md:hidden flex items-center p-2 border-b border-border bg-card/50">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="text-foreground hover:bg-accent touch-friendly"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      <ChatHeader 
        contactName={contactName}
        contactImage={contactImage}
        isOnline={isOnline}
      />
      
      <div className="flex-1 overflow-y-auto p-3 md:p-4 chat-gradient mobile-optimized">
        <div className="max-w-4xl mx-auto space-y-2 md:space-y-4">
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
