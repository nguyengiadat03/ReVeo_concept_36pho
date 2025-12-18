import { useNavigate } from "react-router-dom";
import {
  Store,
  Video,
  Image,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface PhoCard {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  stats: string;
  trending?: boolean;
}

const phoData: PhoCard[] = [
  {
    id: "hang-bac",
    name: "Hàng Bạc",
    description: "Trang sức, vàng bạc, đá quý cao cấp",
    icon: Sparkles,
    color: "from-yellow-500 to-orange-500",
    stats: "120+ templates",
    trending: true,
  },
  {
    id: "hang-sac",
    name: "Hàng Sắc",
    description: "Mỹ phẩm, skincare, làm đẹp",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    stats: "200+ templates",
    trending: true,
  },
  {
    id: "hang-dien",
    name: "Hàng Điện",
    description: "Điện tử, công nghệ, gadgets",
    icon: Store,
    color: "from-blue-500 to-cyan-500",
    stats: "150+ templates",
  },
  {
    id: "thoi-trang",
    name: "Phố Thời Trang",
    description: "Quần áo, phụ kiện, giày dép",
    icon: ShoppingBag,
    color: "from-purple-500 to-pink-500",
    stats: "180+ templates",
  },
  {
    id: "xuong-video",
    name: "Xưởng Video",
    description: "Tạo video bán hàng chuyên nghiệp",
    icon: Video,
    color: "from-orange-500 to-red-500",
    stats: "AI Powered",
  },
  {
    id: "xuong-hinh-anh",
    name: "Xưởng Hình Ảnh",
    description: "Thiết kế ảnh sản phẩm, poster",
    icon: Image,
    color: "from-green-500 to-emerald-500",
    stats: "AI Powered",
  },
];

const PhoGrid = () => {
  const navigate = useNavigate();

  const handlePhoClick = (phoId: string) => {
    if (phoId === "xuong-video") {
      navigate("/xuong-video");
    } else if (phoId === "xuong-hinh-anh") {
      navigate("/xuong-hinh-anh");
    } else {
      navigate("/dao-pho");
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-zinc-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="heading-lg mb-4">
            Khám phá <span className="text-gradient">36 Phố Phường</span>
          </h2>
          <p className="body-lg">
            Mỗi Phố là một chuyên ngành TMĐT với AI templates, trends và
            insights được tối ưu riêng. Chọn Phố phù hợp với sản phẩm của bạn.
          </p>
        </div>

        {/* Pho Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {phoData.map((pho) => (
            <button
              key={pho.id}
              onClick={() => handlePhoClick(pho.id)}
              className="group relative card card-hover text-left p-6 lg:p-8 transition-all duration-300"
            >
              {/* Trending Badge */}
              {pho.trending && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  <span>Hot</span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pho.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                <pho.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100 group-hover:text-primary transition-colors">
                  {pho.name}
                </h3>
                <p className="body-sm text-gray-600 dark:text-zinc-400 line-clamp-2">
                  {pho.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-zinc-800">
                <span className="text-sm font-medium text-gray-500 dark:text-zinc-500">
                  {pho.stats}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              {/* Hover Gradient Border */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${pho.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}
              ></div>
            </button>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/dao-pho")}
            className="btn-secondary group"
          >
            <span>Xem tất cả 36 Phố</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhoGrid;
