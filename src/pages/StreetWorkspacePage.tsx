import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStreetById } from '../data/streets';
import { GenerationRequest, GenerationResult } from '../data/streets';
import { generateVideo } from '../lib/videoService';
import SubcategoryPanel from '../components/workspace/SubcategoryPanel';
import OutputPanel from '../components/workspace/OutputPanel';
import { useAuth } from '../app/providers/AuthProvider';

const StreetWorkspacePage = () => {
  const { streetId } = useParams<{ streetId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const street = getStreetById(streetId || '');

  const [generationResult, setGenerationResult] = useState<GenerationResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!street) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Không tìm thấy phố</h2>
          <button onClick={() => navigate('/home')} className="btn-primary">
            Về trang chủ
          </button>
        </div>
      </div>
    );
  }

  const handleGenerate = async (
    imageFile: File,
    imagePreview: string,
    productUrl: string,
    subcategoryId: string
  ) => {
    setIsGenerating(true);

    const request: GenerationRequest = {
      id: Math.random().toString(36).substr(2, 9),
      subcategoryId,
      streetId: street.id,
      imageFile,
      imagePreview,
      productUrl,
      createdAt: new Date(),
    };

    // Set processing state
    const subcategory = street.subcategories.find((s) => s.id === subcategoryId);
    setGenerationResult({
      id: '',
      requestId: request.id,
      videoUrl: null,
      status: 'processing',
      streetName: street.name,
      subcategoryName: subcategory?.name || '',
      productUrl,
      fileName: imageFile.name,
      createdAt: new Date(),
    });

    try {
      const result = await generateVideo(request);
      setGenerationResult(result);
    } catch (error) {
      setGenerationResult({
        id: '',
        requestId: request.id,
        videoUrl: null,
        status: 'error',
        streetName: street.name,
        subcategoryName: subcategory?.name || '',
        productUrl,
        fileName: imageFile.name,
        errorMessage: 'Đã có lỗi xảy ra. Vui lòng thử lại.',
        createdAt: new Date(),
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/home')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Back to home"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center text-3xl">
                  {street.icon}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{street.name}</h1>
                  <p className="text-sm text-gray-600">{street.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-600">{user?.email}</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Subcategories (60%) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Chọn danh mục sản phẩm
              </h2>
              <p className="text-gray-600">
                Upload ảnh và link sản phẩm để tạo video bán hàng AI
              </p>
            </div>

            {street.subcategories.map((subcategory) => (
              <SubcategoryPanel
                key={subcategory.id}
                subcategory={subcategory}
                streetName={street.name}
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
              />
            ))}
          </div>

          {/* Right Column - Output Panel (40%) */}
          <div className="lg:col-span-2">
            <OutputPanel result={generationResult} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StreetWorkspacePage;
