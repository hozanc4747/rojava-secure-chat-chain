
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import ChatList from "./ChatList";

interface SidebarProps {
  chats: any[];
  selectedChatId?: string;
  onSelectChat: (chatId: string) => void;
}

const Sidebar = ({ chats, selectedChatId, onSelectChat }: SidebarProps) => {
  return (
    <div className="w-80 bg-card border-r border-border flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-bold message-gradient bg-clip-text text-transparent">
                Rojava
              </h2>
              <p className="text-xs text-muted-foreground">محادثة لا مركزية</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            ⚙️
          </Button>
        </div>
        
        <Input
          placeholder="البحث في المحادثات..."
          className="text-right bg-secondary border-border focus:border-primary"
          dir="rtl"
        />
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
