import { ArrowRight, Tag } from 'lucide-react';
import { Street } from '../../data/streets';

interface PhoCardProps {
  street: Street;
  onClick: () => void;
}

const PhoCard = ({ street, onClick }: PhoCardProps) => {
  // Generate sample tags based on street
  const tags = street.subcategories.slice(0, 3).map(sub => sub.name);

  return (
    <button
      onClick={onClick}
      className="group w-full bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon in Blob */}
        <div className="w-16 h-16 mb-4 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          {street.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {street.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {street.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Tag className="w-4 h-4" />
            <span>{street.subcategories.length} danh mục</span>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
            <span className="text-sm font-semibold">Tạo video</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default PhoCard;
