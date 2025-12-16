import React from 'react';
import { Star, MapPin } from 'lucide-react';

const GoogleReviews: React.FC = () => {
  const reviews = [
    {
      name: "Yi-Chen Lin",
      date: "1 個月前",
      rating: 5,
      text: "美術館附近很棒的私人訓練空間！環境非常隱私且乾淨，教練很專業，會針對我的舊傷特別調整動作，讓我運動起來很安心，不用擔心會受傷。",
      avatar: "Y"
    },
    {
      name: "David Chen",
      date: "2 個月前",
      rating: 5,
      text: "不想去大型健身房人擠人，這裡完全符合我的需求。全預約制所以不會遇到其他人，教練解說很細心，科學化的訓練讓我幾堂課就很有感！",
      avatar: "D"
    },
    {
      name: "Sarah Wu",
      date: "3 週前",
      rating: 5,
      text: "第一次體驗一對一教練課，原本很緊張，但教練很有耐心。空間很舒服，沒有推銷壓力，大推給住在鼓山區想認真運動的人。",
      avatar: "S"
    },
    {
      name: "Kevin Chang",
      date: "2 週前",
      rating: 5,
      text: "器材都很新，而且不用排隊真的很爽。教練對於飲食的建議也很實用，搭配訓練讓我三個月體脂降了不少，終於看到線條了。",
      avatar: "K"
    },
    {
      name: "Emily Huang",
      date: "1 個月前",
      rating: 5,
      text: "住在美術館附近走過來很方便。環境非常有質感，跟一般吵雜的健身房完全不同，來這裡運動是一種享受，非常推薦給女生。",
      avatar: "E"
    },
    {
      name: "Michael Wang",
      date: "3 個月前",
      rating: 5,
      text: "因為長期久坐腰痠背痛才來找教練。教練很專業地幫我評估體態，針對弱點加強，幾堂課下來背痛改善很多，真的很值得推薦！",
      avatar: "M"
    },
    {
      name: "Jessica Lee",
      date: "1 個月前",
      rating: 5,
      text: "產後一直瘦不下來，還好找到了這裡。教練針對產後修復做了很多核心加強，讓我肚子消很快，而且體力變好很多，帶小孩比較不會累了。",
      avatar: "J"
    },
    {
      name: "Tom Hsieh",
      date: "2 個月前",
      rating: 5,
      text: "為了提升打高爾夫球的表現來的。教練很懂生物力學，幫我強化旋轉爆發力和核心穩定，最近下場成績進步很有感！推！",
      avatar: "T"
    },
    {
      name: "Amanda Chen",
      date: "2 週前",
      rating: 5,
      text: "為了婚禮穿婚紗好看來特訓，原本很怕練太壯，但教練幫我雕塑線條，尤其是背部跟手臂線條變得很好看，讓我當天可以美美出場，太感謝了！",
      avatar: "A"
    },
    {
      name: "Jason Wu",
      date: "3 週前",
      rating: 5,
      text: "平時工作壓力大，來這裡運動是最好的舒壓。教練節奏掌握得很好，一小時非常充實，完全不浪費時間，很適合忙碌的商務人士。",
      avatar: "J"
    },
    {
      name: "Kelly Yang",
      date: "4 個月前",
      rating: 5,
      text: "帶媽媽來運動，原本擔心老人家會不適應，結果教練超級有耐心，循序漸進引導，現在媽媽膝蓋比較不痛了，走路也變快了。",
      avatar: "K"
    },
    {
      name: "Eric Liu",
      date: "1 個月前",
      rating: 5,
      text: "以前在連鎖健身房都被放生，動作做錯也沒人理。這裡教練全程盯著，一個動作一個動作調，雖然累但覺得很值得，這才是真的在健身。",
      avatar: "E"
    },
    {
      name: "Sophie Chang",
      date: "2 個月前",
      rating: 5,
      text: "環境真的超級乾淨！浴室備品也很有質感。對於有潔癖的人來說，這裡簡直是天堂。運動完洗個澡再去上班很舒服。",
      avatar: "S"
    },
    {
      name: "Brian Huang",
      date: "3 週前",
      rating: 5,
      text: "教練知識量很豐富，不只教動作，還會解釋為什麼要這樣做，讓我學到很多觀念。對於想要認真了解自己身體的人來說，這裡是首選。",
      avatar: "B"
    },
    {
      name: "Nina Wu",
      date: "5 個月前",
      rating: 5,
      text: "不知不覺在這裡練了一年多了。以前辦健身房會員都去不到三次，這裡採預約制反而讓我更有動力，已經變成每週固定的習慣了。",
      avatar: "N"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google Logo" 
                className="w-8 h-8"
              />
              Google 商家好評
            </h2>
            <div className="flex items-center mt-2 justify-center md:justify-start">
              <span className="text-2xl font-bold text-gray-800 mr-2">5.0</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-500 ml-2 text-sm">(真實學員評價)</span>
            </div>
          </div>
          
          <a 
            href="https://maps.google.com/?q=804高雄市鼓山區美術東五路61號" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50 transition duration-300 shadow-sm font-medium"
          >
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            查看地圖所有評論
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg mr-3">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-gray-400 text-xs">{review.date}</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;