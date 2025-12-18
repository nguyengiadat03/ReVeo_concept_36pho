import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HomeHero = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dao-pho");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full border border-gray-200 dark:border-zinc-800 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">
              Nền tảng AI Video cho TMĐT Việt
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="heading-xl text-gray-900 dark:text-zinc-50">
              Khám phá <span className="text-gradient">36 Phố Phường</span>
              <br />
              Tạo video bán hàng trong 60 giây
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Mỗi "Phố" là một chuyên ngành TMĐT với AI templates, trends và
              insights riêng. Chọn Phố phù hợp, tạo video viral ngay.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/dao-pho")}
              className="btn-primary btn-lg group"
            >
              <span>Bắt đầu Dạo Phố</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/auth")}
              className="btn-secondary btn-lg"
            >
              Xem Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-gray-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>36 Phố chuyên biệt</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>1000+ AI Templates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Tạo video trong 60s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
