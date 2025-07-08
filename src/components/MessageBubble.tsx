
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: string;
  isSent: boolean;
  timestamp: string;
  isRead?: boolean;
}

const MessageBubble = ({ message, isSent, timestamp, isRead }: MessageBubbleProps) => {
  return (
    <div className={cn(
      "flex mb-4 animate-fade-in",
      isSent ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[70%] px-4 py-3 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl",
        isSent 
          ? "message-gradient text-white rounded-bl-md" 
          : "bg-card border border-border text-foreground rounded-br-md"
      )}>
        <p className="text-sm leading-relaxed">{message}</p>
        <div className={cn(
          "flex items-center justify-end gap-2 mt-2 text-xs",
          isSent ? "text-white/70" : "text-muted-foreground"
        )}>
          <span>{timestamp}</span>
          {isSent && (
            <span className={cn(
              "text-xs",
              isRead ? "text-blue-300" : "text-white/50"
            )}>
              ✓✓
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
