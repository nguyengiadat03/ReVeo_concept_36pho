import { useNavigate } from "react-router-dom";
import { Map, Layers, Zap, ArrowRight } from "lucide-react";

const PhoIdeasSection = () => {
  const navigate = useNavigate();

  const ideas = [
    {
      icon: Map,
      title: "Đi Dạo Phố theo ngành hàng",
      description: "Khám phá 36 phố phường, mỗi phố một phong cách riêng biệt",
      link: "/dao-pho",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Layers,
      title: "Chọn template theo Phố",
      description: "Hàng nghìn template được tối ưu cho từng ngành hàng",
      link: "/templates",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Tạo nhanh từ sản phẩm mẫu",
      description: "Bắt đầu ngay với các mẫu có sẵn, chỉnh sửa theo ý bạn",
      link: "/dao-pho?quickStart=1",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <div className="container-custom py-12 lg:py-16">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Gợi ý <span className="text-gradient">hôm nay</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Bắt đầu hành trình sáng tạo của bạn với những gợi ý từ ReVeo
          </p>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ideas.map((idea, index) => (
            <div
              key={index}
              onClick={() => navigate(idea.link)}
              className="group relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${idea.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative space-y-3">
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${idea.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <idea.icon className="w-6 h-6 text-white" />
                </div>

                {/* Text */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {idea.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {idea.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Bắt đầu ngay</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Street Vibe Microcopy */}
        <div className="text-center pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            💡 Mỗi phố là một câu chuyện, mỗi video là một tác phẩm nghệ thuật
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoIdeasSection;
