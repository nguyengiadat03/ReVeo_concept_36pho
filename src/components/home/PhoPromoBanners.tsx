import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PhoPromoBanners = () => {
  const navigate = useNavigate();

  const largeBanner = {
    title: "Hàng Bạc – Luxury Script Pack",
    description:
      "Bộ template cao cấp cho ngành trang sức, nhấn mạnh chất liệu và bảo hành",
    gradient: "from-yellow-500 via-orange-500 to-yellow-600",
    icon: "💍",
    link: "/dao-pho?focus=hang-bac",
  };

  const promoCards = [
    {
      title: "Hàng Sắc – Beauty Trends",
      description: "Video skincare & makeup trending",
      gradient: "from-pink-500 to-purple-500",
      icon: "💄",
      link: "/dao-pho?focus=hang-sac",
    },
    {
      title: "Hàng Điện – Tech Review",
      description: "Review nhanh với specs overlay",
      gradient: "from-blue-500 to-cyan-500",
      icon: "📱",
      link: "/dao-pho?focus=hang-dien",
    },
    {
      title: "Phố Thời Trang – Lookbook",
      description: "Bộ sưu tập mùa hè năng động",
      gradient: "from-orange-500 to-red-500",
      icon: "👕",
      link: "/dao-pho?focus=pho-thoi-trang",
    },
  ];

  return (
    <div className="container-custom py-12 lg:py-16">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Hơi thở <span className="text-gradient">Phố Phường</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Khám phá các phố nổi bật và template được yêu thích nhất
          </p>
        </div>

        {/* Large Banner */}
        <div
          onClick={() => navigate(largeBanner.link)}
          className="group relative overflow-hidden rounded-2xl aspect-[21/9] cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Background Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${largeBanner.gradient}`}
          ></div>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-between p-6 lg:p-8">
            <div className="space-y-3 max-w-2xl">
              <div className="text-5xl lg:text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {largeBanner.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                {largeBanner.title}
              </h3>
              <p className="text-base lg:text-lg text-white/90">
                {largeBanner.description}
              </p>

              {/* CTA Button - appears on hover */}
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:scale-105 transition-transform text-sm">
                  <span>Dạo Phố</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Hint Text */}
            <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white/80 text-sm">
                Khám phá mặt hàng & tạo video →
              </p>
            </div>
          </div>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {promoCards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.link)}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
              ></div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-5">
                <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {card.icon}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">{card.title}</h4>
                  <p className="text-white/90 text-xs">{card.description}</p>

                  {/* CTA - appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                      <span>Dạo Phố</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoPromoBanners;
