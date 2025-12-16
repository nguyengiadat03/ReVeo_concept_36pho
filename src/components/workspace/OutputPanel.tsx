import { GenerationResult } from '../../data/streets';

interface OutputPanelProps {
  result: GenerationResult | null;
}

const OutputPanel = ({ result }: OutputPanelProps) => {
  if (!result) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Chưa có video
          </h3>
          <p className="text-sm text-gray-600">
            Upload ảnh và link sản phẩm để tạo video
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg sticky top-24 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Video Preview
        </h3>
        <p className="text-sm text-gray-600">
          {result.streetName} • {result.subcategoryName}
        </p>
      </div>

      {/* Video Player or Status */}
      <div className="p-6">
        {result.status === 'processing' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg className="animate-spin h-16 w-16 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Đang tạo video...
            </h4>
            <p className="text-sm text-gray-600">
              AI đang xử lý sản phẩm của bạn
            </p>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          </div>
        )}

        {result.status === 'success' && result.videoUrl && (
          <div className="space-y-4">
            <video
              controls
              className="w-full rounded-lg bg-black"
              src={result.videoUrl}
            >
              Your browser does not support the video tag.
            </video>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Video đã tạo thành công!</span>
            </div>
          </div>
        )}

        {result.status === 'error' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Tạo video thất bại
            </h4>
            <p className="text-sm text-red-600">
              {result.errorMessage || 'Đã có lỗi xảy ra'}
            </p>
          </div>
        )}
      </div>

      {/* Metadata */}
      {result.status === 'success' && (
        <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-3">
          <div>
            <p className="text-xs text-gray-500 mb-1">File name</p>
            <p className="text-sm font-medium text-gray-900">{result.fileName}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Product URL</p>
            <a
              href={result.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline break-all"
            >
              {result.productUrl}
            </a>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Created</p>
            <p className="text-sm text-gray-900">
              {result.createdAt.toLocaleString('vi-VN')}
            </p>
          </div>
          <button className="w-full btn-primary mt-4">
            Tải video xuống
          </button>
        </div>
      )}
    </div>
  );
};

export default OutputPanel;
