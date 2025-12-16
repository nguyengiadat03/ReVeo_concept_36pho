import { Search, Plus, Menu } from 'lucide-react';
import AvatarMenu from '../components/common/AvatarMenu';
import ThemeSwitcher from '../components/common/ThemeSwitcher';
import LanguageSwitcher from '../components/common/LanguageSwitcher';
import NotificationDropdown from '../components/common/NotificationDropdown';
import { useI18n } from '../app/providers/I18nProvider';

interface TopbarProps {
  onMenuClick: () => void;
  onNewVideoClick: () => void;
}

const Topbar = ({ onMenuClick, onNewVideoClick }: TopbarProps) => {
  const { t } = useI18n();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30 transition-colors">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Mobile Menu + Breadcrumb */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Breadcrumb */}
          <div className="hidden sm:flex items-center gap-2 text-sm">
            <span className="text-gray-600 dark:text-gray-400">Home</span>
            <span className="text-gray-400 dark:text-gray-600">/</span>
            <span className="text-gray-900 dark:text-gray-100 font-medium">{t('nav.home')}</span>
          </div>
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-2xl mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder={t('button.search') + '...'}
              className="w-full pl-12 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* New Video Button */}
          <button 
            onClick={onNewVideoClick}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <Plus className="w-5 h-5" />
            <span className="text-sm">{t('button.newVideo')}</span>
          </button>

          {/* Mobile New Video Button */}
          <button 
            onClick={onNewVideoClick}
            className="sm:hidden p-2.5 bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <Plus className="w-5 h-5" />
          </button>

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Notifications */}
          <NotificationDropdown />

          {/* Avatar Menu */}
          <div className="hidden sm:block">
            <AvatarMenu />
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-6 pb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder={t('button.search') + '...'}
            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
