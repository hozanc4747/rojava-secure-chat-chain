
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";

const Index = () => {
  const [selectedChatId, setSelectedChatId] = useState<string>("1");
  const [showSidebar, setShowSidebar] = useState(true);

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
      {/* Mobile: Conditional Sidebar */}
      <div className={`${showSidebar ? 'flex' : 'hidden'} md:flex`}>
        <Sidebar 
          chats={mockChats}
          selectedChatId={selectedChatId}
          onSelectChat={(chatId) => {
            setSelectedChatId(chatId);
            setShowSidebar(false); // Hide sidebar on mobile after selection
          }}
        />
      </div>
      
      {/* Chat Window */}
      <div className={`flex-1 ${showSidebar ? 'hidden md:flex' : 'flex'} flex-col`}>
        {selectedChat ? (
          <ChatWindow
            chatId={selectedChat.id}
            contactName={selectedChat.name}
            isOnline={selectedChat.isOnline}
            onBack={() => setShowSidebar(true)} // Show sidebar when back is pressed
          />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-background p-4">
            <div className="text-center animate-bounce-in">
              <div className="text-4xl md:text-6xl mb-4">💬</div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 ionic-gradient bg-clip-text text-transparent">
                مرحباً بك في Rojava
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                شبكة دردشة لا مركزية آمنة ومشفرة
              </p>
              <div className="mt-4 text-xs text-muted-foreground">
                <p>✓ مشفر من النهاية للنهاية</p>
                <p>✓ لا مركزي وآمن</p>
                <p>✓ استرداد المحادثات</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
