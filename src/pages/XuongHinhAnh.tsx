import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Image as ImageIcon,
  Upload,
  Link as LinkIcon,
  Sparkles,
  ArrowLeft,
  X,
  Loader2,
  Download,
  RotateCcw,
  Layers,
  FileImage,
} from "lucide-react";
import AppShell from "../layout/AppShell";

type ImageMode = "product" | "poster" | "banner";

interface UploadedFile {
  file: File;
  preview: string;
}

const XuongHinhAnh = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedMode, setSelectedMode] = useState<ImageMode>("product");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [productUrl, setProductUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);

  const modes = [
    { id: "product" as ImageMode, label: "Ảnh SP", icon: ImageIcon },
    { id: "poster" as ImageMode, label: "Poster", icon: Layers },
    { id: "banner" as ImageMode, label: "Banner", icon: Layers },
  ];

  // Mock image data
  const mockImages = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
  ];

  const handleFileSelect = useCallback((files: FileList | null) => {
    if (!files) return;
    const newFiles: UploadedFile[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/") && file.size <= 10 * 1024 * 1024) {
        const preview = URL.createObjectURL(file);
        newFiles.push({ file, preview });
      }
    });
    setUploadedFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    if (newFiles.length > 0) setSelectedPreview(newFiles[0].preview);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFileSelect(e.dataTransfer.files);
    },
    [handleFileSelect]
  );

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      if (selectedPreview === prev[index].preview) {
        setSelectedPreview(newFiles[0]?.preview || null);
      }
      return newFiles;
    });
  };

  const handleGenerate = async () => {
    if (uploadedFiles.length === 0 && !productUrl) return;
    setIsGenerating(true);
    setGeneratedImage(null);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    // Random mock image
    const randomImage =
      mockImages[Math.floor(Math.random() * mockImages.length)];
    setGeneratedImage(randomImage);
    setIsGenerating(false);
  };

  const handleReset = () => {
    setGeneratedImage(null);
    setUploadedFiles([]);
    setProductUrl("");
    setSelectedPreview(null);
  };

  const canGenerate = uploadedFiles.length > 0 || productUrl.trim().length > 0;

  return (
    <AppShell>
      <div className="container-custom py-4 lg:py-6">
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => navigate("/dao-pho")}
            className="text-gray-600 dark:text-gray-400 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Quay lại
          </span>
        </div>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-pink-500 rounded-xl mb-3">
            <FileImage className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Xưởng Hình Ảnh
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tạo hình ảnh bán hàng chuyên nghiệp với AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          {/* Mode Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Chọn loại hình ảnh
            </label>
            <div className="flex gap-3">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`flex-1 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                    selectedMode === mode.id
                      ? "border-primary bg-orange-50 dark:bg-orange-900/20 text-primary"
                      : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* Upload Section */}
          <div className="mb-6">
            <div
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all ${
                isDragging
                  ? "border-primary bg-orange-50 dark:bg-orange-900/20 scale-[1.02]"
                  : "border-gray-300 dark:border-gray-700 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <p className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Kéo và thả ảnh vào đây
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                hoặc click để chọn file (tối đa 5 ảnh, mỗi ảnh &lt; 10MB)
              </p>
              <p className="text-xs text-gray-400">PNG, JPG, JPEG, WEBP</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleFileSelect(e.target.files)}
              className="hidden"
            />
          </div>

          {/* Preview Thumbnails */}
          {uploadedFiles.length > 0 && (
            <div className="mb-6">
              <div className="flex gap-3 overflow-x-auto pb-2">
                {uploadedFiles.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedPreview(item.preview)}
                    className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      selectedPreview === item.preview
                        ? "border-primary shadow-lg scale-105"
                        : "border-gray-200 dark:border-gray-700 hover:border-primary"
                    }`}
                  >
                    <img
                      src={item.preview}
                      alt=""
                      className="w-20 h-20 object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(i);
                      }}
                      className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* URL Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hoặc nhập link sản phẩm
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                placeholder="https://shopee.vn/product/..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-900/30">
            <p className="text-xs font-semibold text-orange-900 dark:text-orange-200 mb-2">
              💡 Hướng dẫn
            </p>
            <ul className="text-xs text-orange-800 dark:text-orange-300 space-y-1">
              <li>
                • Tải lên ảnh sản phẩm hoặc dán link từ Shopee/Tiktok Shop
              </li>
              <li>• AI sẽ tự động tạo hình ảnh bán hàng chuyên nghiệp</li>
              <li>• Chọn loại: Ảnh sản phẩm, Poster hoặc Banner</li>
            </ul>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!canGenerate || isGenerating}
            className={`w-full py-4 font-bold text-base rounded-xl flex items-center justify-center gap-3 transition-all ${
              canGenerate && !isGenerating
                ? "bg-gradient-to-r from-primary to-pink-500 text-white hover:shadow-xl hover:scale-[1.02]"
                : "bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Đang tạo hình ảnh...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Tạo Hình Ảnh</span>
              </>
            )}
          </button>

          {/* Output Section */}
          {(isGenerating || generatedImage) && (
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  🖼️ Hình ảnh đầu ra
                </h3>
                {generatedImage && (
                  <button
                    onClick={handleReset}
                    className="text-sm text-gray-500 hover:text-primary flex items-center gap-2 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Làm mới</span>
                  </button>
                )}
              </div>

              {isGenerating ? (
                <div className="aspect-square bg-gray-50 dark:bg-gray-800 rounded-xl flex flex-col items-center justify-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 border-4 border-primary/30 rounded-full"></div>
                    <div className="absolute inset-0 w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Đang tạo hình ảnh...
                  </p>
                  <p className="text-sm text-gray-500">
                    AI đang xử lý ảnh của bạn
                  </p>
                </div>
              ) : generatedImage ? (
                <div>
                  <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-4">
                    <img
                      src={generatedImage}
                      alt="Generated"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                      AI Generated
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-gradient-to-r from-primary to-pink-500 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                      <Download className="w-4 h-4" />
                      <span>Tải xuống</span>
                    </button>
                    <button className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                      Chia sẻ
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
};

export default XuongHinhAnh;
