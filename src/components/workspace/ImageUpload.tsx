import { useState, useCallback } from 'react';

interface ImageUploadProps {
  onImageSelect: (file: File, preview: string) => void;
  onImageRemove: () => void;
  imagePreview: string | null;
  disabled?: boolean;
}

const ImageUpload = ({ onImageSelect, onImageRemove, imagePreview, disabled }: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (disabled) return;

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageSelect(file, event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [disabled, onImageSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageSelect(file, event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Ảnh sản phẩm <span className="text-red-500">*</span>
      </label>

      {imagePreview ? (
        <div className="relative group">
          <img
            src={imagePreview}
            alt="Product preview"
            className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-3">
            <label className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium cursor-pointer hover:bg-gray-100 transition-colors">
              Thay đổi
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
                disabled={disabled}
              />
            </label>
            <button
              onClick={onImageRemove}
              disabled={disabled}
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              Xóa
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center transition-all
            ${isDragging ? 'border-primary bg-orange-50' : 'border-gray-300 hover:border-gray-400'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="text-sm text-gray-600 mb-2">
            Kéo thả ảnh vào đây hoặc
          </p>
          <label className="inline-block px-4 py-2 bg-primary text-white rounded-lg font-medium cursor-pointer hover:bg-primary/90 transition-colors">
            Chọn ảnh
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
              disabled={disabled}
            />
          </label>
          <p className="text-xs text-gray-500 mt-2">
            PNG, JPG, WEBP (Max 10MB)
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
