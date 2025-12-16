const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-orange-600 to-pink-600 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold">🎉</span>
            <span className="text-white font-medium">
              Miễn phí 7 ngày - Không cần thẻ tín dụng
            </span>
          </div>

          {/* Headline */}
          <h2 className="heading-lg text-white">
            Sẵn sàng tạo video bán hàng<br />
            viral cho shop của bạn?
          </h2>

          {/* Description */}
          <p className="body-lg text-white/90 max-w-2xl mx-auto">
            Tham gia cùng 10,000+ người bán đang sử dụng ReVeo để tăng doanh số mỗi ngày
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-10 py-5 bg-white text-primary font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Bắt đầu miễn phí ngay
            </button>
            <button className="px-10 py-5 bg-transparent text-white font-bold rounded-full text-lg border-2 border-white hover:bg-white hover:text-primary transition-all duration-300">
              Xem bảng giá
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Không cần cài đặt</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Hủy bất cứ lúc nào</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Hỗ trợ 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
