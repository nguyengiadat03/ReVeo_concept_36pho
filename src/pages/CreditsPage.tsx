import { useState } from 'react';
import { Coins, TrendingUp, Check, Zap } from 'lucide-react';
import AppShell from '../layout/AppShell';
import { useCredits } from '../app/providers/CreditsProvider';
import { cn } from '../lib/utils';

const CreditsPage = () => {
  const { credits, addCredits } = useCredits();
  const [showToast, setShowToast] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      credits: 500,
      price: 99000,
      popular: false,
      features: [
        '500 credits',
        '~50 video',
        'Template cơ bản',
        'Hỗ trợ email',
      ],
    },
    {
      id: 'creator',
      name: 'Creator',
      credits: 1500,
      price: 249000,
      popular: true,
      features: [
        '1,500 credits',
        '~150 video',
        'Tất cả template',
        'Voice pack premium',
        'Hỗ trợ ưu tiên',
      ],
    },
    {
      id: 'studio',
      name: 'Studio',
      credits: 5000,
      price: 699000,
      popular: false,
      features: [
        '5,000 credits',
        '~500 video',
        'Tất cả tính năng',
        'API access',
        'Hỗ trợ 24/7',
        'Custom template',
      ],
    },
  ];

  const handleTopUp = (pkg: typeof packages[0]) => {
    setSelectedPackage(pkg.id);
    // Simulate payment
    setTimeout(() => {
      addCredits(pkg.credits);
      setShowToast(true);
      setSelectedPackage(null);
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nạp <span className="text-gradient">Credits</span>
          </h1>
          <p className="text-lg text-gray-600">
            Mua credits để tạo video và sử dụng các tính năng premium
          </p>
        </div>

        {/* Current Balance */}
        <div className="max-w-md mx-auto bg-gradient-to-br from-primary to-pink-500 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Coins className="w-8 h-8" />
            <h2 className="text-xl font-semibold">Credits hiện tại</h2>
          </div>
          <p className="text-5xl font-bold mb-2">{credits.toLocaleString()}</p>
          <p className="text-sm opacity-90">≈ {Math.floor(credits / 10)} video có thể tạo</p>
        </div>

        {/* Usage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-gray-900">47</p>
            <p className="text-sm text-gray-600">Video đã tạo</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center">
              <Coins className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-gray-900">470</p>
            <p className="text-sm text-gray-600">Credits đã dùng</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-gray-900">10</p>
            <p className="text-sm text-gray-600">Credits/video TB</p>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Chọn gói phù hợp</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={cn(
                  'bg-white rounded-2xl p-6 shadow-sm border-2 transition-all duration-300',
                  pkg.popular
                    ? 'border-primary shadow-xl scale-105'
                    : 'border-gray-100 hover:border-primary hover:shadow-xl'
                )}
              >
                {/* Badge */}
                {pkg.popular && (
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    PHỔ BIẾN NHẤT
                  </div>
                )}

                {/* Package Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">
                    {(pkg.price / 1000).toFixed(0)}K
                  </span>
                  <span className="text-gray-600"> VNĐ</span>
                </div>

                <p className="text-lg font-semibold text-gray-900 mb-6">
                  {pkg.credits.toLocaleString()} credits
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handleTopUp(pkg)}
                  disabled={selectedPackage === pkg.id}
                  className={cn(
                    'w-full px-6 py-3 font-semibold rounded-xl transition-all',
                    pkg.popular
                      ? 'bg-primary text-white hover:shadow-lg hover:shadow-primary/30'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
                    selectedPackage === pkg.id && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {selectedPackage === pkg.id ? 'Đang xử lý...' : 'Mua ngay'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="max-w-2xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Lưu ý</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Credits không có thời hạn sử dụng</li>
            <li>• Mỗi video tốn khoảng 10-15 credits tùy độ dài</li>
            <li>• Template premium có thể tốn thêm credits</li>
            <li>• Hoàn tiền trong 7 ngày nếu không hài lòng</li>
          </ul>
        </div>

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl animate-slide-up z-50 flex items-center gap-3">
            <Check className="w-5 h-5" />
            <span>Nạp credits thành công!</span>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default CreditsPage;
