import { useState } from 'react';
import { Subcategory } from '../../data/streets';
import ImageUpload from './ImageUpload';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { validateProductUrl } from '../../lib/videoService';

interface SubcategoryPanelProps {
  subcategory: Subcategory;
  streetName: string;
  onGenerate: (imageFile: File, imagePreview: string, productUrl: string, subcategoryId: string) => void;
  isGenerating: boolean;
}

const SubcategoryPanel = ({ subcategory, streetName, onGenerate, isGenerating }: SubcategoryPanelProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [productUrl, setProductUrl] = useState('');
  const [urlError, setUrlError] = useState('');

  const handleImageSelect = (file: File, preview: string) => {
    setImageFile(file);
    setImagePreview(preview);
  };

  const handleImageRemove = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProductUrl(value);
    if (value && !validateProductUrl(value)) {
      setUrlError('URL không hợp lệ. Vui lòng nhập URL đầy đủ (http:// hoặc https://)');
    } else {
      setUrlError('');
    }
  };

  const handleGenerate = () => {
    if (!imageFile) {
      return;
    }

    if (!productUrl) {
      setUrlError('Vui lòng nhập link sản phẩm');
      return;
    }

    if (!validateProductUrl(productUrl)) {
      setUrlError('URL không hợp lệ');
      return;
    }

    onGenerate(imageFile, imagePreview!, productUrl, subcategory.id);
  };

  const canGenerate = imageFile && productUrl && !urlError && !isGenerating;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
          {subcategory.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{subcategory.name}</h3>
          <p className="text-sm text-gray-600">{streetName}</p>
        </div>
      </div>

      {/* Image Upload */}
      <ImageUpload
        onImageSelect={handleImageSelect}
        onImageRemove={handleImageRemove}
        imagePreview={imagePreview}
        disabled={isGenerating}
      />

      {/* Product URL */}
      <Input
        id={`url-${subcategory.id}`}
        type="url"
        label="Link sản phẩm"
        placeholder="https://shopee.vn/product/..."
        value={productUrl}
        onChange={handleUrlChange}
        error={urlError}
        disabled={isGenerating}
      />

      {/* Generate Button */}
      <Button
        onClick={handleGenerate}
        disabled={!canGenerate}
        isLoading={isGenerating}
        variant="primary"
        className="w-full"
      >
        {isGenerating ? 'Đang tạo video...' : 'Tạo video AI'}
      </Button>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Cách tạo video hiệu quả:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Chọn ảnh sản phẩm rõ nét, góc chụp đẹp</li>
              <li>Link sản phẩm từ Shopee, Lazada, TikTok Shop</li>
              <li>Video sẽ được tạo trong 30-60 giây</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryPanel;
