import { Zap, Target, TrendingUp, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Tạo video trong 60 giây",
    description:
      "AI tự động tạo video từ ảnh sản phẩm, không cần kỹ năng chỉnh sửa",
  },
  {
    icon: Target,
    title: "Tối ưu cho từng Phố",
    description: "Templates và trends được cập nhật riêng cho mỗi chuyên ngành",
  },
  {
    icon: TrendingUp,
    title: "Insights thời gian thực",
    description: "Biết trend nào đang hot, nên đăng lúc nào để viral",
  },
  {
    icon: Sparkles,
    title: "AI hiểu TMĐT Việt",
    description: "Được train trên data Shopee, TikTok Shop, Lazada Việt Nam",
  },
];

const ValueSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="heading-lg mb-4">
            Tại sao chọn <span className="text-gradient">ReVeo</span>?
          </h2>
          <p className="body-lg">
            Nền tảng AI video duy nhất được thiết kế riêng cho người bán hàng
            Việt Nam
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-pink-500/10 border border-primary/20">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-zinc-100">
                  {feature.title}
                </h3>
                <p className="body-sm text-gray-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
