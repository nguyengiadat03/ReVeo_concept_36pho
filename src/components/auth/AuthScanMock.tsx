import { useState, useEffect } from 'react';

const AuthScanMock = () => {
  const [progress, setProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsScanning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    } else {
      // Reset after completion
      const timeout = setTimeout(() => {
        setProgress(0);
        setIsScanning(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isScanning]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Product Card Mock */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-500 rounded-lg flex items-center justify-center text-3xl">
              📦
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-white/30 rounded w-3/4"></div>
              <div className="h-3 bg-white/20 rounded w-1/2"></div>
            </div>
          </div>

          {/* Scanning Line */}
          {isScanning && (
            <div className="mt-4 relative h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-pink-500 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </div>

        {/* Status */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            {isScanning ? (
              <>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-white font-medium">
                  Đang phân tích sản phẩm... {progress}%
                </span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-green-400 font-medium">
                  Hoàn thành!
                </span>
              </>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          {['AI Lồng tiếng', 'Auto Edit', 'Smart Cut', 'HD Export'].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span className="text-xs text-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthScanMock;
