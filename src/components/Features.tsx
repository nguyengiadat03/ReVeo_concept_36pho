const Features = () => {
  const features = [
    {
      title: 'AI Lồng tiếng tự động',
      description: 'Giọng nói tự nhiên bằng tiếng Việt, 3 miền Bắc - Trung - Nam',
      icon: '🎙️',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Template theo từng Phố',
      description: 'Mỗi phố có riêng template phù hợp với sản phẩm của bạn',
      icon: '🎨',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Tạo hàng loạt video',
      description: 'Upload nhiều sản phẩm cùng lúc, AI tạo video tự động',
      icon: '⚡',
      gradient: 'from-primary to-yellow-500',
    },
    {
      title: 'Tối ưu cho TikTok & Shopee',
      description: 'Video đúng tỷ lệ, thời lượng, format cho từng nền tảng',
      icon: '📱',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Thư viện nhạc nền',
      description: 'Hàng nghìn bản nhạc trending, bản quyền sẵn sàng',
      icon: '🎵',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Chỉnh sửa dễ dàng',
      description: 'Thay đổi text, màu sắc, hiệu ứng chỉ bằng vài click',
      icon: '✨',
      gradient: 'from-violet-500 to-fuchsia-500',
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            Tính năng <span className="text-gradient">nổi bật</span>
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Mọi thứ bạn cần để tạo video bán hàng viral và tăng doanh số
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="heading-sm mb-3 text-gray-900 relative">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed relative">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10K+', label: 'Người bán' },
            { number: '100K+', label: 'Video đã tạo' },
            { number: '36', label: 'Phố phường' },
            { number: '4.9/5', label: 'Đánh giá' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
