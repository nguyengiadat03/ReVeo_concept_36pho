import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Modal from '../ui/Modal';
import { streets } from '../../data/streets';

interface ChoosePhoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChoosePhoModal = ({ isOpen, onClose }: ChoosePhoModalProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStreets = streets.filter(street =>
    street.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    street.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectPho = (streetId: string) => {
    navigate(`/streets/${streetId}`);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Chọn Phố để tạo video" size="lg">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm phố..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Pho Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
        {filteredStreets.map((street) => (
          <button
            key={street.id}
            onClick={() => handleSelectPho(street.id)}
            className="p-4 bg-white border-2 border-gray-100 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-200 group"
          >
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              {street.icon}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
              {street.name}
            </h3>
            <p className="text-xs text-gray-600">
              {street.subcategories.length} danh mục
            </p>
          </button>
        ))}
      </div>

      {filteredStreets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">Không tìm thấy phố phù hợp</p>
        </div>
      )}
    </Modal>
  );
};

export default ChoosePhoModal;
