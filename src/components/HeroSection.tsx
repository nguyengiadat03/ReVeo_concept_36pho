const HeroSection = () => {
  return (
    <section id="home" className="gradient-bg section-padding pt-32 md:pt-40">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">
                AI Video Creator cho TMĐT Việt
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-xl">
              Tạo video bán hàng AI<br />
              cho <span className="text-gradient">36 Phố Phường</span><br />
              TMĐT Việt
            </h1>

            {/* Subheadline */}
            <p className="body-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Biến sản phẩm thành video viral trong 60 giây. 
              Dành riêng cho người bán Shopee, TikTok Shop, Lazada.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                Tạo video miễn phí ngay
              </button>
              <button className="btn-secondary">
                Xem demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-500 border-2 border-white flex items-center justify-center text-white font-semibold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">10,000+ người bán</p>
                <p className="text-xs text-gray-600">đã tạo video với ReVeo</p>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 aspect-video">
              {/* Mockup Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Mockup Content */}
              <div className="space-y-4">
                <div className="h-8 bg-gradient-to-r from-primary/20 to-pink-500/20 rounded-lg w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="h-24 bg-gradient-to-br from-primary/10 to-pink-500/10 rounded-xl"></div>
                  <div className="h-24 bg-gradient-to-br from-primary/10 to-pink-500/10 rounded-xl"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-2xl shadow-lg flex items-center justify-center text-white text-3xl animate-bounce">
                🎬
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500 rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl">
                ⚡
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
