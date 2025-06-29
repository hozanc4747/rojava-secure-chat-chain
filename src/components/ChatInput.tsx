
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-end gap-3">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          📎
        </Button>
        <div className="flex-1 flex items-end gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="اكتب رسالة..."
            className="flex-1 min-h-[44px] text-right bg-secondary border-border focus:border-primary transition-colors"
            dir="rtl"
          />
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            😊
          </Button>
        </div>
        <Button 
          onClick={handleSend}
          className="gold-gradient hover:opacity-90 transition-opacity px-4 py-2 h-11"
          disabled={!message.trim()}
        >
          إرسال
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
