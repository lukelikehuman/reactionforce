import React from 'react';
import { X } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      title: "買了大型健身房會籍，卻因為人多不想去？",
      desc: "下班尖峰時刻器材都要排隊，甚至常常被業務教練打擾，這不是你要的運動品質。"
    },
    {
      title: "看網路影片跟練，卻練出一身傷？",
      desc: "每個人的身體結構不同，盲目模仿動作容易導致代償與受傷，不僅沒效果還傷身。"
    },
    {
      title: "Project B 或其他場館只有團體課，無法調整？",
      desc: "團體課程氣氛好，但教練無法照顧到每個人的細節，你需要的是針對你「個人體態」的專屬調整。"
    },
    {
      title: "想要增肌減脂，卻不知道怎麼吃才有效？",
      desc: "練得很勤卻看不到線條？通常是因為飲食出了問題，沒有營養規劃的訓練事倍功半。"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">你是否也遇過這些問題？</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          {points.map((point, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-50 rounded-xl shadow-sm border-l-4 border-red-500 transition-transform hover:scale-[1.01] duration-300">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                   <X className="text-red-500 w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;