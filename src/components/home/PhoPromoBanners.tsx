import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { bannerImages } from '../../lib/images';

interface PromoBanner {
  id: string;
  image: string;
  title: string;
  description: string;
  cta: string;
  link: string;
  badge?: string;
}

const PhoPromoBanners = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const promos: PromoBanner[] = [
    {
      id: '1',
      image: bannerImages.hangBac,
      title: 'Hàng Bạc – Luxury Templates',
      description: 'Video cao cấp cho trang sức, đồng hồ, phụ kiện sang trọng',
      cta: 'Xem templates',
      link: '/templates?pho=hang-bac',
      badge: 'Premium',
    },
    {
      id: '2',
      image: bannerImages.hangSac,
      title: 'Hàng Sắc – Skincare Hooks 3s',
      description: 'Hook mạnh mẽ cho mỹ phẩm, skincare, làm đẹp',
      cta: 'Khám phá ngay',
      link: '/templates?pho=hang-sac',
      badge: 'Trending',
    },
    {
      id: '3',
      image: bannerImages.hangDien,
      title: 'Hàng Điện – Review + Specs',
      description: 'Review chuyên nghiệp với overlay thông số kỹ thuật',
      cta: 'Tạo video review',
      link: '/templates?pho=hang-dien',
      badge: 'Hot',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % promos.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + promos.length) % promos.length);
  };

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Ưu đãi & Gợi ý theo Phố
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Templates nổi bật được chọn lọc cho từng ngành hàng
          </p>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden gap-2">
          <button
            onClick={prev}
            className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={next}
            className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Promo Cards */}
      <div className="relative">
        {/* Desktop: Show all 3 */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <PromoCard key={promo.id} promo={promo} navigate={navigate} />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {promos.map((promo) => (
                <div key={promo.id} className="w-full flex-shrink-0 px-1">
                  <PromoCard promo={promo} navigate={navigate} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {promos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-6'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Promo Card Component
const PromoCard = ({ promo, navigate }: { promo: PromoBanner; navigate: any }) => {
  return (
    <div
      onClick={() => navigate(promo.link)}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={promo.image}
          alt={promo.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Badge */}
        {promo.badge && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
            {promo.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
          {promo.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {promo.description}
        </p>
        
        {/* CTA */}
        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
          <span>{promo.cta}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default PhoPromoBanners;
