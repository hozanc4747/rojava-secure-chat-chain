
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, Phone, Video, MoreVertical } from "lucide-react";
import StatusIndicator from "./StatusIndicator";
import MobileMenu from "./MobileMenu";

interface ChatHeaderProps {
  contactName: string;
  contactImage?: string;
  isOnline: boolean;
}

const ChatHeader = ({ contactName, contactImage, isOnline }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-3 md:p-4 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
        <Avatar className="h-8 w-8 md:h-10 md:w-10 flex-shrink-0">
          <AvatarImage src={contactImage} alt={contactName} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            <User className="h-4 w-4 md:h-5 md:w-5" />
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm md:text-lg font-semibold text-foreground truncate">{contactName}</h2>
          <div className="flex items-center gap-2">
            <p className={`text-xs md:text-sm ${isOnline ? 'text-primary' : 'text-muted-foreground'}`}>
              {isOnline ? 'متصل الآن' : 'آخر ظهور منذ 5 دقائق'}
            </p>
            <div className="hidden md:block">
              <StatusIndicator />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground touch-friendly">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground touch-friendly">
            <Video className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground touch-friendly">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        
        <MobileMenu />
      </div>
    </div>
  );
};

export default ChatHeader;
