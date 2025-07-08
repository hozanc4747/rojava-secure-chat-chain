
import { Wifi, WifiOff, Shield, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const StatusIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSecure] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs">
      <div className={`flex items-center gap-1 ${isOnline ? 'text-primary' : 'text-destructive'}`}>
        {isOnline ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
        <span>{isOnline ? 'متصل' : 'غير متصل'}</span>
      </div>
      
      <div className="w-px h-3 bg-border" />
      
      <div className={`flex items-center gap-1 ${isSecure ? 'text-primary' : 'text-destructive'}`}>
        {isSecure ? <ShieldCheck className="h-3 w-3" /> : <Shield className="h-3 w-3" />}
        <span>مشفر</span>
      </div>
    </div>
  );
};

export default StatusIndicator;
