import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navLinks = [
    { id: "home", name: "Trang chủ", href: "#home" },
    { id: "categories", name: "36 Phố", href: "#categories" },
    { id: "features", name: "Tính năng", href: "#features" },
    { id: "how-it-works", name: "Cách hoạt động", href: "#how-it-works" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 transition-colors">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/logos/logoR.png"
              alt="ReVeo Studio"
              className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-zinc-100">
              Re<span className="text-gradient">Veo</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all",
                  activeSection === link.id
                    ? "text-primary bg-orange-50 dark:bg-orange-900/20"
                    : "text-gray-700 dark:text-zinc-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-zinc-800"
                )}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/auth"
              className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-zinc-300 hover:text-primary transition-colors"
            >
              Đăng nhập
            </Link>
            <Link
              to="/auth"
              className="px-5 py-2 bg-gradient-to-r from-primary to-orange-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Dùng thử miễn phí
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-zinc-800 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-all",
                    activeSection === link.id
                      ? "text-primary bg-orange-50 dark:bg-orange-900/20"
                      : "text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-gray-200 dark:border-zinc-800">
                <Link
                  to="/auth"
                  className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition-colors text-center"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/auth"
                  className="px-4 py-3 bg-gradient-to-r from-primary to-orange-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all text-center"
                >
                  Dùng thử miễn phí
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
