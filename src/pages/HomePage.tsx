import { useNavigate } from 'react-router-dom';
import { Sparkles, Clock, Star } from 'lucide-react';
import AppShell from '../layout/AppShell';
import StatsCards from '../components/pho/StatsCards';
import PhoFilters from '../components/pho/PhoFilters';
import PhoCard from '../components/pho/PhoCard';
import { streets } from '../data/streets';
import { useI18n } from '../app/providers/I18nProvider';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  // Mock recent visited streets
  const recentStreets = streets.slice(0, 3);

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary">{t('home.welcome')}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
            {t('home.title')}{' '}
            <span className="relative inline-block">
              <span className="text-gradient">{t('home.title.highlight')}</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C50 2.5 150 2.5 199 5.5"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6A00" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            {t('home.subtitle')}
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left: Filters + Pho Grid */}
          <div className="xl:col-span-2 space-y-6">
            {/* Filters */}
            <PhoFilters />

            {/* Pho Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {streets.map((street) => (
                <PhoCard
                  key={street.id}
                  street={street}
                  onClick={() => navigate(`/streets/${street.id}`)}
                />
              ))}
            </div>
          </div>

          {/* Right Rail (Desktop Only) */}
          <div className="hidden xl:block space-y-6">
            {/* Recently Visited */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{t('home.recent')}</h3>
              </div>
              <div className="space-y-3">
                {recentStreets.map((street) => (
                  <button
                    key={street.id}
                    onClick={() => navigate(`/streets/${street.id}`)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      {street.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {street.name}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {street.subcategories.length} {t('common.categories')}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recommended */}
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-orange-100 dark:border-orange-900/30">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{t('home.recommended')}</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Dựa trên lịch sử của bạn, chúng tôi nghĩ bạn sẽ thích:
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => navigate('/streets/pho-thoi-trang')}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-xl text-left hover:shadow-md transition-shadow"
                >
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">👕 Phố Thời Trang</p>
                </button>
                <button
                  onClick={() => navigate('/streets/pho-my-pham')}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-xl text-left hover:shadow-md transition-shadow"
                >
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">💄 Phố Mỹ Phẩm</p>
                </button>
              </div>
            </div>

            {/* Quick Start */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">{t('home.quickstart')}</h3>
              <ol className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>Chọn phố phù hợp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>Chọn danh mục cụ thể</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>Tải ảnh hoặc nhập link sản phẩm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <span>Nhấn tạo video và chờ AI xử lý</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="text-center py-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Không tìm thấy phố phù hợp?
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all">
            Đề xuất phố mới
          </button>
        </div>
      </div>
    </AppShell>
  );
};

export default HomePage;
