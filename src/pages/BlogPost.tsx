
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Calendar,
  Clock,
  User,
  Send,
  ThumbsUp,
  Flag
} from "lucide-react";
import BlogNavbar from "@/components/BlogNavbar";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(42);

  // Mock post data
  const post = {
    id: 1,
    title: "مستقبل التكنولوجيا اللامركزية: ثورة في عالم البيانات والخصوصية",
    content: `
# مقدمة

التكنولوجيا اللامركزية تمثل نقطة تحول جذرية في كيفية تعاملنا مع البيانات والمعلومات في العصر الرقمي. هذه التقنيات الثورية تقدم حلولاً مبتكرة للتحديات التي نواجهها في عالم مركزي تهيمن عليه الشركات الكبرى.

## ما هي التكنولوجيا اللامركزية؟

التكنولوجيا اللامركزية هي نظام تقني يوزع التحكم والبيانات عبر شبكة من العقد بدلاً من تجميعها في خوادم مركزية. هذا النهج يحقق العديد من الفوائد:

- **الأمان المحسن**: لا توجد نقطة فشل واحدة
- **الخصوصية**: بياناتك تبقى تحت سيطرتك
- **الشفافية**: جميع العمليات قابلة للتدقيق
- **المقاومة للرقابة**: لا يمكن إيقافها بسهولة

## التطبيقات العملية

### 1. العملات المشفرة
البيتكوين وإيثريوم هما أشهر الأمثلة على التطبيق العملي للتكنولوجيا اللامركزية في المجال المالي.

### 2. التخزين اللامركزي
منصات مثل IPFS تسمح بتخزين الملفات بطريقة موزعة وآمنة.

### 3. الشبكات الاجتماعية
بدائل لامركزية لمنصات التواصل التقليدية تحمي خصوصية المستخدمين.

## التحديات والحلول

رغم الفوائد العديدة، تواجه التكنولوجيا اللامركزية تحديات:

**التحديات:**
- صعوبة في الاستخدام للمستخدم العادي
- استهلاك الطاقة في بعض الأنظمة
- قابلية التوسع المحدودة

**الحلول المقترحة:**
- تطوير واجهات مستخدم أكثر بساطة
- الانتقال لآليات إجماع أكثر كفاءة
- تطوير حلول الطبقة الثانية

## المستقبل

نتوقع أن نرى نمواً كبيراً في اعتماد التكنولوجيا اللامركزية خلال السنوات القادمة، خاصة مع تزايد الوعي بأهمية الخصوصية والأمان الرقمي.

التكنولوجيا اللامركزية ليست مجرد اتجاه عابر، بل هي تطور طبيعي لشبكة الإنترنت نحو المزيد من الحرية والخصوصية.
    `,
    author: "أحمد محمد",
    date: "2024-01-15",
    readTime: "8 دقائق",
    category: "تكنولوجيا",
    tags: ["لامركزية", "بلوك تشين", "خصوصية", "أمان"],
    likes: 42,
    comments: 12,
    shares: 8
  };

  const comments = [
    {
      id: 1,
      author: "فاطمة علي",
      content: "مقال رائع ومفيد جداً! شكراً لك على هذا التوضيح الشامل للتكنولوجيا اللامركزية.",
      date: "منذ ساعتين",
      likes: 5
    },
    {
      id: 2,
      author: "محمد حسن",
      content: "أعتقد أن المستقبل فعلاً للتكنولوجيا اللامركزية، خاصة مع تزايد المخاوف حول الخصوصية.",
      date: "منذ 4 ساعات",
      likes: 3
    },
    {
      id: 3,
      author: "سارة أحمد",
      content: "هل يمكنك كتابة مقال آخر عن كيفية البدء في استخدام هذه التقنيات؟",
      date: "منذ 6 ساعات",
      likes: 2
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "تم إلغاء الإشارة المرجعية" : "تم حفظ المقال",
      description: isBookmarked ? "تم إزالة المقال من المحفوظات" : "تم إضافة المقال للمحفوظات",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "تم نسخ الرابط",
      description: "تم نسخ رابط المقال إلى الحافظة",
    });
  };

  const handleComment = () => {
    if (comment.trim()) {
      toast({
        title: "تم إرسال التعليق",
        description: "شكراً لك على تعليقك",
      });
      setComment("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="ionic-gradient text-background">
              {post.category}
            </Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                #{tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`${isLiked ? 'text-red-500' : 'text-muted-foreground'} hover:text-red-500`}
              >
                <Heart className={`ml-1 h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                {likes}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <MessageCircle className="ml-1 h-4 w-4" />
                {post.comments}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-muted-foreground hover:text-foreground"
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBookmark}
                className={`${isBookmarked ? 'text-primary' : 'text-muted-foreground'} hover:text-primary`}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Article Content */}
        <Card className="mb-8 bg-card border-border">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none text-foreground">
              <div className="whitespace-pre-wrap leading-relaxed">
                {post.content}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              التعليقات ({comments.length})
            </h3>
            
            {/* Add Comment */}
            <div className="mb-6">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    أ
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <Textarea
                    placeholder="أضف تعليقك..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="bg-background border-border text-foreground"
                    rows={3}
                  />
                  <div className="flex justify-between items-center">
                    <Button
                      onClick={handleComment}
                      disabled={!comment.trim()}
                      className="ionic-gradient text-background hover:opacity-90"
                    >
                      <Send className="ml-2 h-4 w-4" />
                      إرسال
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-secondary text-foreground">
                      {comment.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-secondary rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-foreground">{comment.content}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <ThumbsUp className="ml-1 h-3 w-3" />
                        {comment.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        رد
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Flag className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
