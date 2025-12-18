const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Tính năng", href: "#features" },
      { name: "36 Phố Phường", href: "#categories" },
      { name: "Bảng giá", href: "#pricing" },
      { name: "Template", href: "#templates" },
    ],
    company: [
      { name: "Về chúng tôi", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Tuyển dụng", href: "#careers" },
      { name: "Liên hệ", href: "#contact" },
    ],
    support: [
      { name: "Trung tâm trợ giúp", href: "#help" },
      { name: "Hướng dẫn", href: "#guide" },
      { name: "API Documentation", href: "#api" },
      { name: "Cộng đồng", href: "#community" },
    ],
    legal: [
      { name: "Điều khoản sử dụng", href: "#terms" },
      { name: "Chính sách bảo mật", href: "#privacy" },
      { name: "Chính sách hoàn tiền", href: "#refund" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 pb-12 border-b border-gray-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <img
                src="/images/logos/logoR.png"
                alt="ReVeo Studio"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-white">ReVeo</span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm">
              Nền tảng tạo video bán hàng AI cho 36 Phố Phường TMĐT Việt. Giúp
              người bán tăng doanh số với video viral chuyên nghiệp.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {["facebook", "youtube", "tiktok", "zalo"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social}
                >
                  <span className="text-lg">
                    {social === "facebook" && "📘"}
                    {social === "youtube" && "📺"}
                    {social === "tiktok" && "🎵"}
                    {social === "zalo" && "💬"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Sản phẩm
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Công ty
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Hỗ trợ
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Pháp lý
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 ReVeo. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Made with ❤️ in Vietnam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
