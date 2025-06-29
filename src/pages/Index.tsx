
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";

const Index = () => {
  const [selectedChatId, setSelectedChatId] = useState<string>("1");

  const mockChats = [
    {
      id: "1",
      name: "أحمد محمد",
      lastMessage: "هل جربت تطبيق Rojava الجديد؟",
      timestamp: "٢:٣٥ م",
      unreadCount: 0,
      isOnline: true,
    },
    {
      id: "2", 
      name: "فاطمة علي",
      lastMessage: "شكراً لك على المساعدة",
      timestamp: "١٢:٢٠ م",
      unreadCount: 2,
      isOnline: false,
    },
    {
      id: "3",
      name: "مجموعة العمل",
      lastMessage: "محمد: سنبدأ الاجتماع في الساعة ٣",
      timestamp: "١١:٤٥ ص",
      unreadCount: 5,
      isOnline: true,
    },
    {
      id: "4",
      name: "سارة خالد", 
      lastMessage: "تم إرسال الملفات",
      timestamp: "أمس",
      unreadCount: 0,
      isOnline: false,
    },
    {
      id: "5",
      name: "عبد الله يوسف",
      lastMessage: "موافق، سأراجع التقرير",
      timestamp: "أمس",
      unreadCount: 1,
      isOnline: true,
    }
  ];

  const selectedChat = mockChats.find(chat => chat.id === selectedChatId);

  return (
    <div className="h-screen flex bg-background overflow-hidden">
      <Sidebar 
        chats={mockChats}
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
      />
      
      {selectedChat ? (
        <ChatWindow
          chatId={selectedChat.id}
          contactName={selectedChat.name}
          isOnline={selectedChat.isOnline}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="text-2xl font-bold mb-2 message-gradient bg-clip-text text-transparent">
              مرحباً بك في Rojava
            </h2>
            <p className="text-muted-foreground">
              اختر محادثة لبدء المراسلة
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
