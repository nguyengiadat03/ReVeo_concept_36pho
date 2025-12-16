import { useNavigate } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { streets } from '../../data/streets';

const FeaturedPhoRow = () => {
  const navigate = useNavigate();

  // Select 6 featured streets (you can customize this logic)
  const featuredStreets = streets.slice(0, 6);

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Phố nổi bật hôm nay
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {featuredStreets.map((street) => (
            <button
              key={street.id}
              onClick={() => navigate(`/streets/${street.id}`)}
              className="group flex-shrink-0 w-48 snap-start"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 border border-orange-100 dark:border-orange-900/30 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                  {street.icon}
                </div>

                {/* Name */}
                <h3 className="text-center font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">
                  {street.name}
                </h3>

                {/* Tag */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {street.subcategories.length} danh mục
                  </span>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              </div>
            </button>
          ))}
        </div>

        {/* Scroll Hint (Mobile) */}
        <div className="md:hidden flex justify-center mt-2">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span>Vuốt để xem thêm</span>
            <svg className="w-4 h-4 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPhoRow;
