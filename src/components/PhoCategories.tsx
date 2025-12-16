import { phoCategories } from '../data/phoCategories';

const PhoCategories = () => {
  return (
    <section id="categories" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg">
            <span className="text-gradient">36 Phố Phường</span> TMĐT Việt
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Mỗi phố là một chuyên mục sản phẩm. Chọn phố của bạn và tạo video bán hàng chuyên nghiệp ngay.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {phoCategories.map((pho) => (
            <div
              key={pho.id}
              className="card card-hover-orange p-6 cursor-pointer group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                {pho.icon}
              </div>

              {/* Content */}
              <h3 className="heading-sm mb-2 text-gray-900 group-hover:text-primary transition-colors">
                {pho.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {pho.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-semibold">Tạo video</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Không tìm thấy phố phù hợp?
          </p>
          <button className="btn-secondary">
            Đề xuất phố mới
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhoCategories;
