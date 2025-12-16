import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Clock, Sun, Cloud } from "lucide-react";
import { useTypewriter } from "../../lib/typewriter";

const HomeHero = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(new Date());

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  const formatDate = (date: Date) =>
    date.toLocaleDateString("vi-VN", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  const hour = time.getHours();
  const isDay = hour >= 6 && hour < 18;
  const WeatherIcon = isDay ? Sun : Cloud;

  const prompts = [
    "Tạo video cho Hàng Bạc: nhấn mạnh bảo hành và chất liệu vàng 24K...",
    "Dạo Phố Hàng Sắc: video skincare 9:16 hook 3 giây với trending sound...",
    "Hàng Điện: video review nhanh có overlay specs và giá shock...",
    "Phố Thời Trang: lookbook mùa hè với transition mượt mà...",
    "Hàng Gốm Sứ: video ASMR unboxing bộ trà cao cấp...",
    "Phố Mỹ Phẩm: before-after makeup transformation 15s...",
    "Hàng Đồ Cổ: video storytelling về nguồn gốc sản phẩm...",
  ];

  const typewriterText = useTypewriter(prompts, 80, 3000);

  const suggestionChips = [
    "Tạo video Hàng Bạc",
    "Dạo Phố Hàng Sắc",
    "Review Hàng Điện",
  ];

  const handleChipClick = (chip: string) => {
    setInputValue(chip);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dao-pho");
  };

  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-pink-50/50 dark:from-orange-900/5 dark:to-pink-900/5"></div>
        </div>
      </div>

      <div className="container-custom py-6 lg:py-8">
        {/* Time & Weather Widget - Inline */}
        <div className="flex justify-end mb-4">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 px-3 py-1.5 inline-flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span className="font-bold text-gray-900 dark:text-gray-100 tabular-nums">
                {formatTime(time)}
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
            <span className="text-gray-600 dark:text-gray-400 capitalize">
              {formatDate(time)}
            </span>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center gap-1.5">
              <WeatherIcon className="w-3.5 h-3.5 text-primary" />
              <span className="text-gray-700 dark:text-gray-300">
                Hà Nội • 28°C
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left: Text + Input */}
          <div className="space-y-5 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full border border-orange-200 dark:border-orange-900/50">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                Chào mừng đến với ReVeo
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                Xin chào,{" "}
                <span className="text-gradient block mt-0.5">
                  hôm nay của bạn thế nào?
                </span>
              </h1>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Cùng ReVeo đi{" "}
                <span className="font-semibold text-primary">Dạo Phố</span> để
                cảm nhận vẻ đẹp của{" "}
                <span className="font-semibold">36 Phố Phường</span> và tạo nội
                dung bán hàng thật nhanh.
              </p>
            </div>

            {/* Large Prompt Input */}
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={typewriterText}
                    className="w-full px-4 py-3 text-sm bg-transparent border-none focus:outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-primary to-pink-500 text-white font-semibold rounded-md hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all flex items-center gap-1.5 text-xs"
                  >
                    <span className="hidden sm:inline">Dạo Phố ngay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Suggestion Chips */}
              <div className="flex flex-wrap gap-1.5">
                {suggestionChips.map((chip, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gradient-to-r hover:from-primary hover:to-pink-500 hover:text-white transition-all hover:scale-105"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              {/* Main Visual Card */}
              <div className="relative bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl p-5 shadow-xl border border-orange-200 dark:border-orange-900/30">
                <div className="space-y-4">
                  {/* Mock Video Preview */}
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-pink-500/20"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-white border-b-6 border-b-transparent ml-1"></div>
                      </div>
                      <p className="text-white font-semibold text-sm">
                        Preview: Hàng Bạc Collection
                      </p>
                      <p className="text-white/70 text-xs mt-0.5">
                        Nhấn để Dạo Phố
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                      <div className="text-xl font-bold text-gradient">36</div>
                      <div className="text-[10px] text-gray-600 dark:text-gray-400">
                        Phố
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                      <div className="text-xl font-bold text-gradient">
                        1000+
                      </div>
                      <div className="text-[10px] text-gray-600 dark:text-gray-400">
                        Templates
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white/50 dark:bg-gray-900/50 rounded-lg">
                      <div className="text-xl font-bold text-gradient">AI</div>
                      <div className="text-[10px] text-gray-600 dark:text-gray-400">
                        Powered
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl rotate-12 opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
