import { useNavigate } from 'react-router-dom';
import { Image as ImageIcon, Upload, Link as LinkIcon, Sparkles, ArrowLeft, Layers } from 'lucide-react';
import { useState } from 'react';
import AppShell from '../layout/AppShell';
import { useI18n } from '../app/providers/I18nProvider';

type ImageMode = 'product' | 'poster' | 'banner';

const XuongHinhAnh = () => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [selectedMode, setSelectedMode] = useState<ImageMode>('product');

  const modes = [
    { id: 'product' as ImageMode, label: t('product-photo'), icon: ImageIcon },
    { id: 'poster' as ImageMode, label: t('poster'), icon: Layers },
    { id: 'banner' as ImageMode, label: t('banner'), icon: Layers },
  ];

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/dao-pho')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">{t('back')}</span>
        </button>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full border border-orange-200 dark:border-orange-900/50">
            <ImageIcon className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {t('image-studio')}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
            <span className="text-gradient">{t('image-studio')}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('image-subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-800 shadow-xl">
            {/* Mode Selection */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Chọn loại hình ảnh
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      selectedMode === mode.id
                        ? 'border-primary bg-orange-50 dark:bg-orange-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary'
                    }`}
                  >
                    <mode.icon className={`w-8 h-8 mx-auto mb-3 ${
                      selectedMode === mode.id ? 'text-primary' : 'text-gray-400 dark:text-gray-600'
                    }`} />
                    <p className={`text-sm font-semibold ${
                      selectedMode === mode.id ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {mode.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Upload Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Tải lên ảnh sản phẩm
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Tải lên ảnh sản phẩm hoặc nhập link để bắt đầu
                </p>
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-12 text-center hover:border-primary dark:hover:border-primary transition-colors cursor-pointer group">
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Kéo thả ảnh vào đây
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      hoặc click để chọn file
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    PNG, JPG, WEBP (max. 10MB)
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                    Hoặc nhập link sản phẩm
                  </span>
                </div>
              </div>

              {/* URL Input */}
              <div className="space-y-3">
                <div className="relative">
                  <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="url"
                    placeholder="https://shopee.vn/product/..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Generate Button */}
              <button className="w-full px-8 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 flex items-center justify-center gap-3 group">
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>{t('generate-image')}</span>
              </button>
            </div>

            {/* Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl border border-orange-100 dark:border-orange-900/30">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">
                💡 Tính năng đang phát triển
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>AI tự động tạo ảnh sản phẩm chuyên nghiệp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Tạo poster và banner quảng cáo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Tùy chỉnh theo phong cách từng phố</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default XuongHinhAnh;
