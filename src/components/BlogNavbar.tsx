
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  PenTool,
  Search,
  Menu,
  User,
  Settings,
  LogOut,
  BookOpen,
  Bell,
  Shield,
  Moon,
  Sun
} from "lucide-react";
import { Link } from "react-router-dom";
import RecoverModal from "./RecoverModal";

const BlogNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { label: "الرئيسية", href: "/blog", icon: BookOpen },
    { label: "المقالات", href: "/blog/posts", icon: BookOpen },
    { label: "الكتاب", href: "/blog/authors", icon: User },
    { label: "الفئات", href: "/blog/categories", icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/blog" className="flex items-center gap-2">
            <div className="text-2xl font-bold ionic-gradient bg-clip-text text-transparent">
              Rojava Blog
            </div>
            <Badge variant="outline" className="text-xs ionic-gradient text-background">
              لامركزي
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="البحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 bg-background border-border text-foreground"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Write Button */}
            <Link to="/blog/write">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex ionic-gradient text-background hover:opacity-90"
              >
                <PenTool className="ml-2 h-4 w-4" />
                كتابة
              </Button>
            </Link>

            {/* Recover Button */}
            <div className="hidden md:block">
              <RecoverModal />
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* User Menu */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        أ
                      </AvatarFallback>
                    </Avatar>
                    <Bell className="absolute -top-1 -right-1 h-4 w-4 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card border-border">
                  <DropdownMenuItem className="text-foreground hover:bg-accent">
                    <User className="ml-2 h-4 w-4" />
                    الملف الشخصي
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-foreground hover:bg-accent">
                    <PenTool className="ml-2 h-4 w-4" />
                    مقالاتي
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-foreground hover:bg-accent">
                    <Settings className="ml-2 h-4 w-4" />
                    الإعدادات
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive hover:bg-destructive/10">
                    <LogOut className="ml-2 h-4 w-4" />
                    تسجيل الخروج
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLoggedIn(true)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  تسجيل الدخول
                </Button>
                <Button
                  size="sm"
                  onClick={() => setIsLoggedIn(true)}
                  className="ionic-gradient text-background hover:opacity-90"
                >
                  إنشاء حساب
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-border w-80">
                <div className="space-y-4 mt-6">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold ionic-gradient bg-clip-text text-transparent">
                      Rojava Blog
                    </h2>
                    <p className="text-xs text-muted-foreground">منصة تدوين لامركزية</p>
                  </div>

                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="البحث في المقالات..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-10 bg-background border-border text-foreground"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="w-full justify-start text-foreground hover:bg-accent/50"
                      asChild
                    >
                      <Link to={item.href}>
                        <item.icon className="ml-2 h-5 w-5" />
                        {item.label}
                      </Link>
                    </Button>
                  ))}

                  <div className="border-t border-border pt-4">
                    <Link to="/blog/write">
                      <Button className="w-full ionic-gradient text-background hover:opacity-90 mb-2">
                        <PenTool className="ml-2 h-4 w-4" />
                        كتابة مقال
                      </Button>
                    </Link>
                    
                    <div className="mb-4">
                      <RecoverModal />
                    </div>

                    {!isLoggedIn && (
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => setIsLoggedIn(true)}
                        >
                          تسجيل الدخول
                        </Button>
                        <Button
                          className="w-full ionic-gradient text-background hover:opacity-90"
                          onClick={() => setIsLoggedIn(true)}
                        >
                          إنشاء حساب
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar;
