import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900">
      <div className="container-custom">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary via-orange-600 to-pink-600 rounded-3xl shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-56 h-56 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-16 lg:py-20 px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Miễn phí 7 ngày đầu tiên
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Sẵn sàng tạo video viral?
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
                Tham gia cùng hàng nghìn người bán đang tăng doanh số với ReVeo
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => navigate("/dao-pho")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all group"
                >
                  <span>Bắt đầu Dạo Phố</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate("/auth")}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  Đăng ký ngay
                </button>
              </div>

              {/* Trust Line */}
              <p className="text-sm text-white/70 pt-4">
                Không cần thẻ tín dụng • Hủy bất cứ lúc nào
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
