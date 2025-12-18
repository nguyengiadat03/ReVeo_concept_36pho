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
          <div className="inline-flex items-center justify-center mb-3">
            <img
              src="/images/logos/logoR.png"
              alt="ReVeo Studio"
              className="w-16 h-16 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Xưởng Hình Ảnh
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Tạo hình ảnh bán hàng chuyên nghiệp với AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-220px)]">
          {/* LEFT PANEL - Input */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm flex flex-col overflow-y-auto">
            {/* Mode Selection */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                Chọn loại hình ảnh
              </label>
              <div className="flex gap-2">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`flex-1 py-2 px-3 rounded-lg border-2 font-semibold text-xs transition-all ${
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
            <div className="mb-4">
              <div
                onDrop={handleDrop}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all min-h-[200px] ${
                  isDragging
                    ? "border-primary bg-orange-50 dark:bg-orange-900/20"
                    : "border-gray-300 dark:border-gray-700 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Kéo và thả ảnh vào đây
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  hoặc click để chọn file (tối đa 5 ảnh, mỗi ảnh &lt; 10MB)
                </p>
                <p className="text-[10px] text-gray-400">
                  PNG, JPG, JPEG, WEBP
                </p>
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
              <div className="mb-4">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {uploadedFiles.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedPreview(item.preview)}
                      className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                        selectedPreview === item.preview
                          ? "border-primary shadow-lg"
                          : "border-gray-200 dark:border-gray-700 hover:border-primary"
                      }`}
                    >
                      <img
                        src={item.preview}
                        alt=""
                        className="w-16 h-16 object-cover"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(i);
                        }}
                        className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
                      >
                        <X className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* URL Input */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hoặc nhập link sản phẩm
              </label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="url"
                  value={productUrl}
                  onChange={(e) => setProductUrl(e.target.value)}
                  placeholder="https://shopee.vn/product/..."
                  className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-900/30">
              <p className="text-[10px] font-semibold text-orange-900 dark:text-orange-200 mb-1.5">
                💡 Hướng dẫn
              </p>
              <ul className="text-[10px] text-orange-800 dark:text-orange-300 space-y-0.5">
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
              className={`w-full py-3 font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-all ${
                canGenerate && !isGenerating
                  ? "bg-gradient-to-r from-primary to-pink-500 text-white hover:shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang tạo hình ảnh...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Tạo Hình Ảnh</span>
                </>
              )}
            </button>
          </div>

          {/* RIGHT PANEL - Output */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                🖼️ Hình ảnh đầu ra
              </h3>
              {generatedImage && (
                <button
                  onClick={handleReset}
                  className="text-xs text-gray-500 hover:text-primary flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Làm mới</span>
                </button>
              )}
            </div>

            <div className="flex-1 flex items-center justify-center">
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 border-4 border-primary/30 rounded-full"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Đang tạo hình ảnh...
                  </p>
                  <p className="text-xs text-gray-500">
                    AI đang xử lý ảnh của bạn
                  </p>
                </div>
              ) : generatedImage ? (
                <div className="w-full">
                  <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-4">
                    <img
                      src={generatedImage}
                      alt="Generated"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full shadow-lg">
                      AI Generated
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 bg-gradient-to-r from-primary to-pink-500 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 hover:shadow-lg transition-all">
                      <Download className="w-3.5 h-3.5" />
                      <span>Tải xuống</span>
                    </button>
                    <button className="px-4 py-2.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                      Chia sẻ
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-3">
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Chưa có hình ảnh
                  </p>
                  <p className="text-xs text-gray-500">
                    Tải ảnh lên và nhấn "Tạo Hình Ảnh"
                    <br />
                    để xem kết quả ở đây
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default XuongHinhAnh;
