import React from 'react';
import { Shield, Dumbbell, Carrot } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "高隱私環境",
      desc: "專屬工作室空間，專注訓練，無需排隊等器材，也不必擔心被旁人打擾的尷尬視線。"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "客製化菜單",
      desc: "絕不套用公式。根據您的骨骼排列、肌力現況與目標（增肌/減脂/體態矯正）設計專屬課表。"
    },
    {
      icon: <Carrot className="w-8 h-8" />,
      title: "全方位指導",
      desc: "包含日常飲食建議與生活作息調整。不只是帶練一個小時，而是建立能維持一輩子的健康習慣。"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">為鼓山區菁英量身打造的訓練計畫</h2>
          <p className="text-gray-400 text-lg">不只是教練，更是你的體態管理顧問</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition duration-300 border border-gray-700 hover:border-green-500/50 group">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#consultation" className="inline-block bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold text-lg py-3 px-8 rounded-full transition duration-300">
            了解課程細節
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;