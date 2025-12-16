import { useState, useEffect } from 'react';

const industries = [
  { name: 'Mỹ phẩm', icon: '💄', color: 'from-pink-500 to-rose-500' },
  { name: 'Thời trang', icon: '👗', color: 'from-purple-500 to-pink-500' },
  { name: 'Điện tử', icon: '📱', color: 'from-blue-500 to-cyan-500' },
  { name: 'Gia dụng', icon: '🏠', color: 'from-orange-500 to-amber-500' },
];

const AuthShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          AI Video cho mọi ngành hàng
        </h3>
        <p className="text-gray-600">
          Tự động tạo video bán hàng chuyên nghiệp
        </p>
      </div>

      {/* Rotating Industry Card */}
      <div className="relative h-64 flex items-center justify-center">
        {industries.map((industry, index) => (
          <div
            key={industry.name}
            className={`
              absolute inset-0 transition-all duration-700 ease-in-out
              ${
                index === currentIndex
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-90 rotate-12'
              }
            `}
          >
            <div className={`h-full bg-gradient-to-br ${industry.color} rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-2xl`}>
              <div className="text-7xl mb-4 animate-bounce">{industry.icon}</div>
              <h4 className="text-3xl font-bold">{industry.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2">
        {industries.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }
            `}
            aria-label={`Chuyển sang ${industries[index].name}`}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">36</div>
          <div className="text-xs text-gray-600">Phố phường</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">10K+</div>
          <div className="text-xs text-gray-600">Người bán</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">100K+</div>
          <div className="text-xs text-gray-600">Video</div>
        </div>
      </div>
    </div>
  );
};

export default AuthShowcase;
