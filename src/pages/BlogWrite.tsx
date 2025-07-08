
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Save,
  Eye,
  Image,
  Bold,
  Italic,
  Link,
  List,
  Hash,
  Quote,
  Upload,
  X
} from "lucide-react";
import BlogNavbar from "@/components/BlogNavbar";
import { useToast } from "@/hooks/use-toast";

const BlogWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const { toast } = useToast();

  const categories = [
    "تكنولوجيا",
    "أمان",
    "ذكاء اصطناعي",
    "بلوك تشين",
    "خصوصية",
    "لامركزية",
    "تطوير",
    "تصميم",
    "ريادة أعمال",
    "تعليم"
  ];

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSave = () => {
    toast({
      title: "تم حفظ المقال",
      description: "تم حفظ مقالك كمسودة بنجاح",
    });
  };

  const handlePublish = () => {
    if (!title || !content || !category) {
      toast({
        title: "معلومات ناقصة",
        description: "يرجى ملء العنوان والمحتوى والفئة",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "تم نشر المقال",
      description: "تم نشر مقالك بنجاح وهو متاح الآن للقراء",
    });
  };

  const formatText = (format: string) => {
    const textarea = document.querySelector('textarea[name="content"]') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    let formattedText = selectedText;
    
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'heading':
        formattedText = `## ${selectedText}`;
        break;
      case 'quote':
        formattedText = `> ${selectedText}`;
        break;
      case 'list':
        formattedText = `- ${selectedText}`;
        break;
    }

    const newContent = content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogNavbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-foreground">
                  {isPreview ? "معاينة المقال" : "كتابة مقال جديد"}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsPreview(!isPreview)}
                    >
                      <Eye className="ml-2 h-4 w-4" />
                      {isPreview ? "تعديل" : "معاينة"}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isPreview ? (
                  <>
                    <div>
                      <Input
                        placeholder="عنوان المقال..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="text-2xl font-bold bg-background border-border text-foreground h-12"
                      />
                    </div>

                    <div>
                      <Textarea
                        placeholder="ملخص قصير للمقال..."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="bg-background border-border text-foreground min-h-[80px]"
                      />
                    </div>

                    {/* Formatting Toolbar */}
                    <div className="flex items-center gap-2 p-2 bg-secondary rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => formatText('bold')}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Bold className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => formatText('italic')}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Italic className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => formatText('heading')}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Hash className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => formatText('quote')}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Quote className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => formatText('list')}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <List className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Image className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Link className="h-4 w-4" />
                      </Button>
                    </div>

                    <div>
                      <Textarea
                        name="content"
                        placeholder="ابدأ كتابة مقالك هنا... يمكنك استخدام Markdown للتنسيق"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="bg-background border-border text-foreground min-h-[400px] resize-none"
                      />
                    </div>
                  </>
                ) : (
                  /* Preview Mode */
                  <div className="prose prose-invert max-w-none">
                    <h1 className="text-3xl font-bold text-foreground mb-4">
                      {title || "عنوان المقال"}
                    </h1>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {excerpt || "ملخص المقال"}
                    </p>
                    <div className="text-foreground whitespace-pre-wrap">
                      {content || "محتوى المقال سيظهر هنا..."}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">نشر المقال</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handlePublish}
                  className="w-full ionic-gradient text-background hover:opacity-90"
                >
                  <Upload className="ml-2 h-4 w-4" />
                  نشر الآن
                </Button>
                <Button
                  variant="outline"
                  onClick={handleSave}
                  className="w-full"
                >
                  <Save className="ml-2 h-4 w-4" />
                  حفظ كمسودة
                </Button>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">الفئة</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="اختر فئة للمقال" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat} className="text-foreground hover:bg-accent">
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">العلامات</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="أضف علامة..."
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                    className="bg-background border-border text-foreground"
                  />
                  <Button onClick={handleAddTag} size="sm" variant="outline">
                    إضافة
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      #{tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SEO */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">تحسين محركات البحث</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-foreground">عنوان SEO</Label>
                  <Input
                    placeholder={title || "عنوان المقال"}
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <Label className="text-foreground">وصف Meta</Label>
                  <Textarea
                    placeholder={excerpt || "وصف مختصر للمقال"}
                    className="bg-background border-border text-foreground"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">إحصائيات</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>عدد الكلمات:</span>
                  <span>{content.split(' ').filter(word => word.length > 0).length}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>عدد الأحرف:</span>
                  <span>{content.length}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>وقت القراءة المتوقع:</span>
                  <span>{Math.ceil(content.split(' ').length / 200)} دقائق</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWrite;
