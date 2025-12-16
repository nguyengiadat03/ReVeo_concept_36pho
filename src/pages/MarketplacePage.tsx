import { useState } from 'react';
import { Search, Download, Crown, ShoppingCart } from 'lucide-react';
import AppShell from '../layout/AppShell';
import { marketplaceItems } from '../data/mockData';
import { useCredits } from '../app/providers/CreditsProvider';
import { cn } from '../lib/utils';

const MarketplacePage = () => {
  const { credits, deductCredits } = useCredits();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'Templates', label: 'Templates' },
    { id: 'Voice', label: 'Giọng đọc' },
    { id: 'Music', label: 'Nhạc nền' },
    { id: 'Effects', label: 'Hiệu ứng' },
    { id: 'Text', label: 'Text Animation' },
  ];

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBuy = (item: typeof marketplaceItems[0]) => {
    if (deductCredits(item.price)) {
      setToastMessage(`Đã mua "${item.name}" thành công!`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      setToastMessage('Không đủ credits! Vui lòng nạp thêm.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-gradient">Marketplace</span>
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Mua template, voice pack, và nhiều tài nguyên khác
            </p>
          </div>
          <div className="bg-white px-6 py-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-600">Credits của bạn</p>
            <p className="text-2xl font-bold text-primary">{credits.toLocaleString()}</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all',
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md shadow-primary/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center text-6xl">
                {item.thumbnail}
                {item.isPremium && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Premium
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {item.downloads.toLocaleString()}
                  </span>
                  <span className="font-bold text-primary text-lg">
                    {item.price.toLocaleString()} credits
                  </span>
                </div>

                <button
                  onClick={() => handleBuy(item)}
                  className="w-full px-4 py-2.5 bg-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Mua ngay
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600">Không tìm thấy sản phẩm phù hợp</p>
          </div>
        )}

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl animate-slide-up z-50">
            {toastMessage}
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default MarketplacePage;
