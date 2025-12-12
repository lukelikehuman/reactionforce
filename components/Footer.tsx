import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white pb-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">現在預約，享首次體驗評估優惠</h2>
        <p className="text-gray-400 mb-12 text-lg">踏出改變的第一步，其實很簡單。</p>

        {/* 流程步驟 */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center text-2xl font-bold mb-4 bg-gray-800">1</div>
            <span className="text-lg">點擊加 LINE</span>
          </div>
          <div className="hidden md:block w-12 h-0.5 bg-gray-600"></div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center text-2xl font-bold mb-4 bg-gray-800">2</div>
            <span className="text-lg">預約諮詢時間</span>
          </div>
          <div className="hidden md:block w-12 h-0.5 bg-gray-600"></div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-500 text-black flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-green-500/50">3</div>
            <span className="text-lg font-bold text-green-400">現場評估體驗</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} 高雄美術館特區私人健身教練. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;