import { useNavigate } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";

const PhoVideoMockCard = () => {
  const navigate = useNavigate();

  return (
    <div className="container-custom py-8">
      <div
        onClick={() => navigate("/dao-pho")}
        className="group relative overflow-hidden rounded-2xl aspect-video max-w-4xl mx-auto cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,106,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-pink-500/20 group-hover:from-primary/30 group-hover:to-pink-500/30 transition-all duration-300"></div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
          {/* Play Button */}
          <div className="mb-4 relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
              <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h3 className="text-xl lg:text-2xl font-bold text-white">
              Preview Reel (Mock)
            </h3>
            <p className="text-white/80 text-xs lg:text-sm max-w-md">
              Xem trước các video mẫu từ 36 Phố Phường
            </p>

            {/* Hover CTA */}
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pt-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-pink-500 text-white font-semibold rounded-xl">
                <span>Dạo Phố để xem thêm</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white/20 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
          <div className="absolute bottom-8 right-8 w-20 h-20 border-2 border-white/20 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white/80 text-sm text-center">
            💡 Nhấn vào bất kỳ đâu để bắt đầu Dạo Phố
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoVideoMockCard;
