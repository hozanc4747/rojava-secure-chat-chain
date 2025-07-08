
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PenTool, Search, Calendar, User, Heart, MessageCircle, Share2, TrendingUp } from "lucide-react";
import BlogNavbar from "@/components/BlogNavbar";
import { Link } from "react-router-dom";

const BlogHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPosts = [
    {
      id: 1,
      title: "مستقبل التكنولوجيا اللامركزية",
      excerpt: "استكشاف كيف تغير التكنولوجيا اللامركزية من طريقة تفاعلنا مع الإنترنت والبيانات...",
      author: "أحمد محمد",
      date: "2024-01-15",
      readTime: "5 دقائق",
      category: "تكنولوجيا",
      likes: 42,
      comments: 12,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "الأمان في العصر الرقمي",
      excerpt: "نصائح وإرشادات للحفاظ على خصوصيتك وأمانك في العالم الرقمي المتطور...",
      author: "فاطمة علي",
      date: "2024-01-14",
      readTime: "7 دقائق",
      category: "أمان",
      likes: 38,
      comments: 8,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "الذكاء الاصطناعي والمستقبل",
      excerpt: "كيف يؤثر الذكاء الاصطناعي على حياتنا اليومية ومستقبل العمل...",
      author: "محمد حسن",
      date: "2024-01-13",
      readTime: "6 دقائق",
      category: "ذكاء اصطناعي",
      likes: 56,
      comments: 15,
      image: "/placeholder.svg"
    }
  ];

  const trendingTopics = ["تكنولوجيا", "أمان", "ذكاء اصطناعي", "بلوك تشين", "خصوصية", "لامركزية"];

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 ionic-gradient bg-clip-text text-transparent">
            مدونة Rojava
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            منصة تدوين لامركزية آمنة حيث يمكن للجميع مشاركة أفكارهم وخبراتهم بحرية تامة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ابحث عن المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 bg-card border-border text-foreground"
              />
            </div>
            <Link to="/write">
              <Button className="ionic-gradient text-background hover:opacity-90 touch-friendly">
                <PenTool className="ml-2 h-4 w-4" />
                ابدأ الكتابة
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">المقالات المميزة</h2>
              <Button variant="ghost" size="sm" className="text-primary hover:bg-accent">
                عرض الكل
              </Button>
            </div>
            
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="bg-card border-border hover:border-primary/50 transition-all duration-200 animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-48 h-32 bg-secondary rounded-lg flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="ionic-gradient text-background">
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="ml-1 h-3 w-3" />
                            {post.date}
                          </div>
                        </div>
                        
                        <Link to={`/post/${post.id}`}>
                          <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors mb-2">
                            {post.title}
                          </h3>
                        </Link>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                {post.author.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium text-foreground">{post.author}</p>
                              <p className="text-xs text-muted-foreground">{post.readTime}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              {post.comments}
                            </div>
                            <Button variant="ghost" size="sm" className="p-1">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  المواضيع الرائجة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="outline"
                      className="hover:bg-primary/10 hover:border-primary cursor-pointer transition-colors"
                    >
                      #{topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Authors */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <User className="h-5 w-5 text-primary" />
                  كتاب مميزون
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "أحمد محمد", posts: 24, followers: "1.2k" },
                  { name: "فاطمة علي", posts: 18, followers: "890" },
                  { name: "محمد حسن", posts: 15, followers: "756" }
                ].map((author) => (
                  <div key={author.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{author.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {author.posts} مقال • {author.followers} متابع
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-accent">
                      متابعة
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">النشرة الإخبارية</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  احصل على أحدث المقالات والأخبار مباشرة في بريدك الإلكتروني
                </p>
                <div className="space-y-2">
                  <Input
                    placeholder="بريدك الإلكتروني"
                    className="bg-secondary border-border text-foreground"
                  />
                  <Button className="w-full ionic-gradient text-background hover:opacity-90">
                    اشترك الآن
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
