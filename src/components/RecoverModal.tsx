
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, Key, Download, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RecoverModal = () => {
  const [recoveryKey, setRecoveryKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateRecoveryKey = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const key = `ROJAVA-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setRecoveryKey(key);
      setIsGenerating(false);
      toast({
        title: "تم إنشاء مفتاح الاسترداد",
        description: "احفظ هذا المفتاح في مكان آمن",
      });
    }, 2000);
  };

  const downloadRecoveryKey = () => {
    const element = document.createElement("a");
    const file = new Blob([`مفتاح استرداد Rojava: ${recoveryKey}\nتاريخ الإنشاء: ${new Date().toLocaleDateString('ar-SA')}`], 
      {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `rojava-recovery-${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "تم تحميل المفتاح",
      description: "احتفظ بالملف في مكان آمن",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="ionic-gradient text-background hover:opacity-90 transition-all duration-200 touch-friendly"
        >
          <Shield className="ml-2 h-4 w-4" />
          استرداد
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-foreground text-right">استرداد الحساب</DialogTitle>
          <DialogDescription className="text-muted-foreground text-right">
            كونك في شبكة لا مركزية، يمكنك إنشاء مفتاح استرداد آمن لحسابك
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="text-center">
            <Key className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              مفتاح الاسترداد يسمح لك بالوصول لحسابك من أي جهاز
            </p>
          </div>
          
          {!recoveryKey ? (
            <Button
              onClick={generateRecoveryKey}
              disabled={isGenerating}
              className="w-full ionic-gradient text-background hover:opacity-90 touch-friendly"
            >
              {isGenerating ? "جاري الإنشاء..." : "إنشاء مفتاح استرداد"}
            </Button>
          ) : (
            <div className="space-y-3">
              <Input
                value={recoveryKey}
                readOnly
                className="bg-secondary text-foreground text-center font-mono text-xs"
                dir="ltr"
              />
              <div className="flex gap-2">
                <Button
                  onClick={downloadRecoveryKey}
                  className="flex-1 bg-secondary hover:bg-accent text-foreground touch-friendly"
                >
                  <Download className="ml-2 h-4 w-4" />
                  تحميل
                </Button>
                <Button
                  onClick={() => navigator.clipboard.writeText(recoveryKey)}
                  className="flex-1 bg-secondary hover:bg-accent text-foreground touch-friendly"
                >
                  نسخ
                </Button>
              </div>
            </div>
          )}
          
          <div className="border-t border-border pt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">استرداد موجود</h4>
            <div className="flex gap-2">
              <Input
                placeholder="أدخل مفتاح الاسترداد..."
                className="flex-1 bg-secondary border-border text-foreground"
                dir="rtl"
              />
              <Button className="ionic-gradient text-background hover:opacity-90 touch-friendly">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecoverModal;
