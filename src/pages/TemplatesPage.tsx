import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Play, TrendingUp, Crown } from 'lucide-react';
import AppShell from '../layout/AppShell';
import { templates } from '../data/mockData';
import { streets } from '../data/streets';
import { cn } from '../lib/utils';

const TemplatesPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const phoFilter = searchParams.get('pho');

  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState(phoFilter || 'all');

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'trending', label: 'Trending' },
    ...streets.map(s => ({ id: s.id, label: s.name })),
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.phoName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || 
                         (activeFilter === 'trending' && template.isTrending) ||
                         template.phoId === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleRemix = (template: typeof templates[0]) => {
    navigate(`/streets/${template.phoId}?mode=remix&templateId=${template.id}`);
  };

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Thư viện <span className="text-gradient">Templates</span>
          </h1>
          <p className="text-lg text-gray-600">
            Chọn template có sẵn và tùy chỉnh theo sản phẩm của bạn
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm template..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all',
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-md shadow-primary/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center text-6xl">
                {template.thumbnail}
                {template.isTrending && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </div>
                )}
                {template.isPremium && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Premium
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600">{template.phoName}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{template.duration}s</span>
                  <span>{(template.views / 1000).toFixed(1)}K lượt xem</span>
                </div>

                <button
                  onClick={() => handleRemix(template)}
                  className="w-full px-4 py-2.5 bg-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Remix Template
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">Không tìm thấy template phù hợp</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Xem tất cả
            </button>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default TemplatesPage;
