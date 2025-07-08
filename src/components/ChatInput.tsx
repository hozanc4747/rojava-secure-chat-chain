
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Smile, Send, Mic, Camera, Image } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

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

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="p-3 md:p-4 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-end gap-2 md:gap-3">
        {/* Attachment Button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground touch-friendly"
          >
            <Paperclip className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Desktop Attachment Options */}
        <div className="hidden md:flex gap-1">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground touch-friendly">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground touch-friendly">
            <Camera className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground touch-friendly">
            <Image className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Message Input */}
        <div className="flex-1 flex items-end gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="اكتب رسالة..."
            className="flex-1 min-h-[40px] md:min-h-[44px] text-right bg-secondary border-border focus:border-primary transition-colors resize-none touch-friendly"
            dir="rtl"
          />
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground touch-friendly"
          >
            <Smile className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Send/Voice Button */}
        {message.trim() ? (
          <Button 
            onClick={handleSend}
            className="ionic-gradient hover:opacity-90 transition-opacity px-3 md:px-4 py-2 h-10 md:h-11 touch-friendly"
          >
            <Send className="h-4 w-4 ml-1 md:ml-2" />
            <span className="hidden md:inline">إرسال</span>
          </Button>
        ) : (
          <Button 
            onClick={toggleRecording}
            className={`px-3 md:px-4 py-2 h-10 md:h-11 touch-friendly transition-all ${
              isRecording 
                ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground" 
                : "ionic-gradient hover:opacity-90"
            }`}
          >
            <Mic className={`h-4 w-4 ${isRecording ? 'animate-pulse' : ''}`} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
