
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Settings, Users, Shield, Zap, Smartphone } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Users, label: "المجموعات", badge: "3" },
    { icon: Shield, label: "الخصوصية", badge: null },
    { icon: Zap, label: "التشفير المتقدم", badge: "جديد" },
    { icon: Smartphone, label: "المزامنة", badge: null },
    { icon: Settings, label: "الإعدادات", badge: null },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-foreground hover:bg-accent md:hidden touch-friendly"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-card border-border w-80">
        <div className="space-y-4 mt-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold ionic-gradient bg-clip-text text-transparent">
              Rojava
            </h2>
            <p className="text-xs text-muted-foreground">شبكة لا مركزية آمنة</p>
          </div>
          
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="w-full justify-between text-foreground hover:bg-accent/50 touch-friendly"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.badge === "جديد" 
                    ? "ionic-gradient text-background" 
                    : "bg-primary/20 text-primary"
                }`}>
                  {item.badge}
                </span>
              )}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
