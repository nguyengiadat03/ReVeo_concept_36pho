import AppShell from "../layout/AppShell";
import HomeHero from "../components/home/HomeHero";
import PhoPromoBanners from "../components/home/PhoPromoBanners";
import PhoVideoMockCard from "../components/home/PhoVideoMockCard";
import PhoIdeasSection from "../components/home/PhoIdeasSection";

const PhoPhuong = () => {
  return (
    <AppShell>
      {/* Main Content */}
      <div className="space-y-0">
        {/* Hero Section with Time Widget */}
        <HomeHero />

        {/* Promo Banners */}
        <PhoPromoBanners />

        {/* Video Mock */}
        <PhoVideoMockCard />

        {/* Ideas Section */}
        <PhoIdeasSection />

        {/* Final CTA */}
        <div className="container-custom py-16 lg:py-24">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary via-pink-500 to-purple-500 rounded-3xl shadow-2xl">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 text-center py-16 lg:py-20 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
                Sẵn sàng Dạo Phố?
              </h2>
              <p className="text-base lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Hãy để ReVeo đồng hành cùng bạn trong hành trình tạo nội dung
                bán hàng chuyên nghiệp
              </p>
              <button
                onClick={() => (window.location.href = "/dao-pho")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <span>Bắt đầu ngay</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default PhoPhuong;
