
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface ChatHeaderProps {
  contactName: string;
  contactImage?: string;
  isOnline: boolean;
}

const ChatHeader = ({ contactName, contactImage, isOnline }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={contactImage} alt={contactName} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold text-foreground">{contactName}</h2>
          <p className={`text-sm ${isOnline ? 'text-green-400' : 'text-muted-foreground'}`}>
            {isOnline ? 'متصل الآن' : 'آخر ظهور منذ 5 دقائق'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          📞
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          📹
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
