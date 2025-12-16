import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const PhoFilters = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'fashion', label: 'Thời trang' },
    { id: 'beauty', label: 'Mỹ phẩm' },
    { id: 'electronics', label: 'Điện tử' },
    { id: 'home', label: 'Gia dụng' },
    { id: 'baby', label: 'Mẹ & Bé' },
    { id: 'sports', label: 'Thể thao' },
    { id: 'books', label: 'Sách vở' },
    { id: 'food', label: 'Thực phẩm' },
  ];

  const sortOptions = [
    { id: 'trending', label: 'Trending' },
    { id: 'a-z', label: 'A-Z' },
    { id: 'most-used', label: 'Nhiều nhất' },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
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

      {/* Sort Dropdown */}
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 cursor-pointer hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        >
          {sortOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
      </div>
    </div>
  );
};

export default PhoFilters;
