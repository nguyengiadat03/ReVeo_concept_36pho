import { useNavigate } from 'react-router-dom';
import { Play, Sparkles, Zap, Package, Palette } from 'lucide-react';
import { bannerImages } from '../../lib/images';
import { useI18n } from '../../app/providers/I18nProvider';

const PhoHeroBanner = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  const promoChips = [
    { icon: Play, label: 'TikTok 9:16', color: 'from-pink-500 to-purple-500' },
    { icon: Package, label: 'Shopee 1:1', color: 'from-orange-500 to-red-500' },
    { icon: Zap, label: 'Batch Creator', color: 'from-blue-500 to-cyan-500' },
    { icon: Palette, label: 'Brand Kit', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-900/20 dark:via-pink-900/20 dark:to-purple-900/20 border border-orange-100 dark:border-orange-900/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-orange-200 dark:border-orange-900/50">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Hà Nội 36 Phố Phường
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Khám phá{' '}
              <span className="text-gradient">36 Phố</span>
              {' '}– Tạo video bán hàng theo ngành hàng
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Mỗi phố là một chuyên môn. Chọn phố phù hợp, tạo video chuyên nghiệp với AI trong vài phút.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/home')}
              className="px-8 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Bắt đầu tạo video
            </button>
            <button
              onClick={() => navigate('/templates')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-lg transition-all"
            >
              Xem template theo Phố
            </button>
          </div>

          {/* Promo Chips */}
          <div className="flex flex-wrap gap-3">
            {promoChips.map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 group hover:scale-105 transition-transform cursor-pointer"
              >
                <div className={`p-1.5 bg-gradient-to-r ${chip.color} rounded-full`}>
                  <chip.icon className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {chip.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={bannerImages.phoHero}
              alt="36 Phố Phường"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Floating Stats */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              <div className="flex-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">36</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Phố chuyên môn</p>
              </div>
              <div className="flex-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">1000+</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Templates</p>
              </div>
              <div className="flex-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">AI</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Powered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoHeroBanner;
