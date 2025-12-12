import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const lineUrl = "https://line.me/ti/p/YOUR_LINE_ID";

  return (
    <>
      {/* Mobile Bottom Sticky Bar */}
      <div id="consultation" className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:hidden">
        <a 
          href={lineUrl} 
          target="_blank" 
          rel="noreferrer"
          className="block w-full bg-green-500 text-black font-bold text-xl py-3 rounded-lg text-center shadow-md animate-pulse-custom active:scale-95 transition-transform"
        >
          👉 點此免費加 LINE 預約諮詢
        </a>
      </div>
      
      {/* Desktop Floating Button */}
      <a 
        href={lineUrl} 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-6 rounded-full shadow-2xl items-center transition transform hover:scale-110 hover:shadow-green-500/40"
      >
        <MessageCircle className="w-8 h-8 mr-3" />
        <span className="text-lg">免費諮詢</span>
      </a>
    </>
  );
};

export default StickyCTA;