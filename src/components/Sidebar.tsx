
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Search, Plus } from "lucide-react";
import ChatList from "./ChatList";
import RecoverModal from "./RecoverModal";
import StatusIndicator from "./StatusIndicator";

interface SidebarProps {
  chats: any[];
  selectedChatId?: string;
  onSelectChat: (chatId: string) => void;
}

const Sidebar = ({ chats, selectedChatId, onSelectChat }: SidebarProps) => {
  return (
    <div className="w-full md:w-80 bg-card border-r border-border flex flex-col h-full">
      {/* Header */}
      <div className="p-3 md:p-4 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
            <Avatar className="h-8 w-8 md:h-10 md:w-10">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <User className="h-4 w-4 md:h-5 md:w-5" />
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg md:text-xl font-bold ionic-gradient bg-clip-text text-transparent">
                Rojava
              </h2>
              <p className="text-xs text-muted-foreground truncate">محادثة لا مركزية آمنة</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1 md:gap-2">
            <RecoverModal />
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground touch-friendly"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="البحث في المحادثات..."
            className="text-right bg-secondary border-border focus:border-primary pr-10 touch-friendly"
            dir="rtl"
          />
        </div>
        
        <div className="mt-2 flex justify-center">
          <StatusIndicator />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-hidden">
        <ChatList 
          chats={chats} 
          selectedChatId={selectedChatId}
          onSelectChat={onSelectChat}
        />
      </div>
    </div>
  );
};

export default Sidebar;
