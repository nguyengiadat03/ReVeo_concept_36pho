import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Store, Zap, Users, TrendingUp } from 'lucide-react';
import AppShell from '../layout/AppShell';
import { useI18n } from '../app/providers/I18nProvider';
import { bannerImages } from '../lib/images';

const PhoPhuong = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  const features = [
    {
      icon: Store,
      title: '36 Phố Chuyên Môn',
      description: 'Mỗi phố đại diện cho một ngành hàng TMĐT',
    },
    {
      icon: Zap,
      title: 'AI Tạo Nội Dung',
      description: 'Video và hình ảnh chuyên nghiệp trong vài phút',
    },
    {
      icon: Users,
      title: 'Template Theo Phố',
      description: 'Thư viện mẫu được tối ưu cho từng ngành',
    },
    {
      icon: TrendingUp,
      title: 'Tăng Chuyển Đổi',
      description: 'Nội dung được thiết kế để bán hàng hiệu quả',
    },
  ];

  const showcasePhotos = [
    { name: 'Hàng Bạc', icon: '💍', image: bannerImages.hangBac, color: 'from-yellow-500 to-orange-500' },
    { name: 'Hàng Sắc', icon: '💄', image: bannerImages.hangSac, color: 'from-pink-500 to-purple-500' },
    { name: 'Hàng Điện', icon: '📱', image: bannerImages.hangDien, color: 'from-blue-500 to-cyan-500' },
  ];

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full border border-orange-200 dark:border-orange-900/50">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {t('welcome')}
            </span>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">
              <span className="text-gradient">{t('title')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate('/dao-pho')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105"
          >
            <span>{t('cta')}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Concept Section */}
        <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-900/10 dark:via-pink-900/10 dark:to-purple-900/10 rounded-3xl p-8 lg:p-12 border border-orange-100 dark:border-orange-900/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t('concept-title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('concept-desc')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Showcase Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Khám Phá Các Phố Nổi Bật
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Mỗi phố có phong cách riêng, phù hợp với từng loại sản phẩm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcasePhotos.map((pho, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                onClick={() => navigate('/dao-pho')}
              >
                {/* Image */}
                <img
                  src={pho.image}
                  alt={pho.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${pho.color} opacity-60 group-hover:opacity-70 transition-opacity`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {pho.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pho.name}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="text-4xl font-bold text-gradient mb-2">36</div>
            <div className="text-gray-600 dark:text-gray-400">Phố Chuyên Môn</div>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-400">Templates</div>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="text-4xl font-bold text-gradient mb-2">AI</div>
            <div className="text-gray-600 dark:text-gray-400">Powered</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-12 bg-gradient-to-r from-primary to-pink-500 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu?
          </h2>
          <button
            onClick={() => navigate('/dao-pho')}
            className="px-8 py-4 bg-white text-primary font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            {t('cta')}
          </button>
        </div>
      </div>
    </AppShell>
  );
};

export default PhoPhuong;
