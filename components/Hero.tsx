import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const handleConsultationClick = () => {
    // In a real scenario, this would link to LINE
    window.open('https://lin.ee/EwSR70X', '_blank');
  };

  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="反作用力訓練空間環境" 
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl flex flex-col items-center">
        {/* H1 Headline */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-wide shadow-sm drop-shadow-lg">
          高雄美術館特區<br />
          <span className="text-green-500">專屬您的一對一</span><br />
          私人健身教練
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-2xl mb-10 text-gray-200 font-light leading-relaxed">
          拒絕健身房的人擠人與推銷。<br className="block md:hidden" />
          在隱私空間，用<span className="font-bold text-white border-b-2 border-green-500 mx-1">科學化訓練</span>打造理想體態。
        </p>
        
        {/* CTA Button */}
        <button 
          onClick={handleConsultationClick} 
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-bold text-xl md:text-2xl py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1 animate-pulse-custom"
        >
          <MessageCircle className="mr-2 w-6 h-6 md:w-8 md:h-8" />
          立即加 LINE 諮詢方案
        </button>
      </div>
    </header>
  );
};

export default Hero;