import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Modal from "../ui/Modal";
import { streets } from "../../data/streets";

interface ChoosePhoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChoosePhoModal = ({ isOpen, onClose }: ChoosePhoModalProps) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStreets = streets.filter(
    (street) =>
      street.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      street.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectPho = (streetId: string) => {
    navigate(`/streets/${streetId}`);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Chọn Phố để tạo video"
      size="lg"
    >
      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm phố..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Pho Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5 max-h-[50vh] overflow-y-auto pr-1">
        {filteredStreets.map((street) => (
          <button
            key={street.id}
            onClick={() => handleSelectPho(street.id)}
            className="p-2.5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg hover:border-primary hover:shadow-md transition-all duration-200 group"
          >
            <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {street.icon}
            </div>
            <h3 className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-0.5 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
              {street.name}
            </h3>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">
              {street.subcategories.length} danh mục
            </p>
          </button>
        ))}
      </div>

      {filteredStreets.length === 0 && (
        <div className="text-center py-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Không tìm thấy phố phù hợp
          </p>
        </div>
      )}
    </Modal>
  );
};

export default ChoosePhoModal;
