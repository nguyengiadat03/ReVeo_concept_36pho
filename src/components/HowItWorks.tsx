const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Chọn Phố của bạn',
      description: 'Chọn 1 trong 36 phố phường phù hợp với sản phẩm bạn đang bán',
      icon: '🏪',
    },
    {
      number: '02',
      title: 'Upload sản phẩm',
      description: 'Tải ảnh sản phẩm lên hoặc dán link từ Shopee, TikTok Shop',
      icon: '📸',
    },
    {
      number: '03',
      title: 'AI tạo video',
      description: 'AI tự động tạo video bán hàng với lời thoại, nhạc nền, hiệu ứng',
      icon: '🤖',
    },
    {
      number: '04',
      title: 'Tải về & đăng bán',
      description: 'Tải video về và đăng lên các sàn TMĐT để tăng doanh số',
      icon: '🚀',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            Cách hoạt động
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Chỉ 4 bước đơn giản để có video bán hàng chuyên nghiệp
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mb-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl flex items-center justify-center text-5xl">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="heading-sm mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Bắt đầu ngay - Miễn phí
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
