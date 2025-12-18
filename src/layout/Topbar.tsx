import { useNavigate } from "react-router-dom";
import { Search, Plus, Menu, Wallet } from "lucide-react";
import AvatarMenu from "../components/common/AvatarMenu";
import ThemeSwitcher from "../components/common/ThemeSwitcher";
import LanguageSwitcher from "../components/common/LanguageSwitcher";
import NotificationDropdown from "../components/common/NotificationDropdown";
import { useI18n } from "../app/providers/I18nProvider";
import { useCredits } from "../app/providers/CreditsProvider";

interface TopbarProps {
  onMenuClick: () => void;
  onNewVideoClick: () => void;
}

const Topbar = ({ onMenuClick, onNewVideoClick }: TopbarProps) => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const { credits } = useCredits();

  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-30 transition-colors backdrop-blur-sm bg-white/95 dark:bg-zinc-900/95">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Left: Mobile Menu + Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-gray-700 dark:text-zinc-300" />
          </button>

          {/* Breadcrumb - Hidden on small screens */}
          <div className="hidden sm:flex items-center gap-2 text-sm min-w-0">
            <span className="text-gray-500 dark:text-zinc-500 text-xs">
              Home
            </span>
            <span className="text-gray-300 dark:text-zinc-700">/</span>
            <span className="text-gray-900 dark:text-zinc-100 font-medium text-xs truncate">
              {t("pho-phuong")}
            </span>
          </div>
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-zinc-500" />
            <input
              type="text"
              placeholder={t("search") + "..."}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm text-gray-900 dark:text-zinc-100 placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Credits Badge */}
          <button
            onClick={() => navigate("/credits")}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-lg border border-orange-200 dark:border-orange-900/30 hover:shadow-md transition-all"
            title="Xem Credits"
          >
            <Wallet className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {credits.toLocaleString()}
            </span>
          </button>

          {/* Mobile Credits Icon */}
          <button
            onClick={() => navigate("/credits")}
            className="sm:hidden p-2 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-lg border border-orange-200 dark:border-orange-900/30"
            title={`${credits.toLocaleString()} Credits`}
          >
            <Wallet className="w-4 h-4 text-primary" />
          </button>

          {/* New Video Button */}
          <button
            onClick={onNewVideoClick}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all text-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t("new-video")}</span>
          </button>

          {/* Mobile New Video Button */}
          <button
            onClick={onNewVideoClick}
            className="sm:hidden p-2 bg-primary text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
            aria-label="New video"
          >
            <Plus className="w-5 h-5" />
          </button>

          {/* Theme Switcher */}
          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>

          {/* Language Switcher */}
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>

          {/* Notifications */}
          <NotificationDropdown />

          {/* Avatar Menu */}
          <div className="hidden sm:block">
            <AvatarMenu />
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3 border-t border-gray-100 dark:border-zinc-800">
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder={t("search") + "..."}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm text-gray-900 dark:text-zinc-100 placeholder-gray-500 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
