import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Video, 
  Layout, 
  FolderOpen, 
  ShoppingBag, 
  GraduationCap, 
  Wallet, 
  Settings,
  ChevronLeft,
  LogOut
} from 'lucide-react';
import { useAuth } from '../app/providers/AuthProvider';
import { useI18n } from '../app/providers/I18nProvider';
import { cn } from '../lib/utils';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  className?: string;
}

const Sidebar = ({ isCollapsed, onToggleCollapse, className }: SidebarProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useI18n();

  const navItems = [
    { id: 'home', icon: Home, label: t('nav.home'), path: '/home' },
    { id: 'create', icon: Video, label: t('nav.create'), path: '/home' },
    { id: 'templates', icon: Layout, label: t('nav.templates'), path: '/templates' },
    { id: 'projects', icon: FolderOpen, label: t('nav.projects'), path: '/projects' },
    { id: 'marketplace', icon: ShoppingBag, label: t('nav.marketplace'), path: '/marketplace' },
    { id: 'academy', icon: GraduationCap, label: t('nav.academy'), path: '/academy' },
    { id: 'credits', icon: Wallet, label: t('nav.credits'), path: '/credits' },
    { id: 'settings', icon: Settings, label: t('nav.settings'), path: '/settings' },
  ];

  const isActive = (path: string) => {
    if (path === '/home') {
      return location.pathname === '/home' || location.pathname.startsWith('/streets');
    }
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <aside
      className={cn(
        'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300',
        isCollapsed ? 'w-20' : 'w-64',
        className
      )}
    >
      {/* Brand */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">ReVeo Studio</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">36 Phố Phường TMĐT</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={cn(
              'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
              'hover:bg-orange-50 dark:hover:bg-orange-900/20 group',
              isActive(item.path)
                ? 'bg-orange-50 dark:bg-orange-900/20 text-primary'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary'
            )}
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon 
              className={cn(
                'w-5 h-5 flex-shrink-0 transition-colors',
                isActive(item.path) ? 'text-primary' : 'text-gray-600 dark:text-gray-400 group-hover:text-primary'
              )} 
            />
            {!isCollapsed && (
              <span className="font-medium text-sm whitespace-nowrap">{item.label}</span>
            )}
            {isActive(item.path) && !isCollapsed && (
              <div className="ml-auto w-1.5 h-1.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
        {!isCollapsed && (
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">{user?.name}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{user?.email}</p>
            </div>
          </div>
        )}
        
        {isCollapsed && (
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className={cn(
            'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
            'text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600'
          )}
          title={isCollapsed ? t('nav.logout') : undefined}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium text-sm">{t('nav.logout')}</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-24 w-6 h-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow hidden lg:flex"
      >
        <ChevronLeft 
          className={cn(
            'w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform',
            isCollapsed && 'rotate-180'
          )} 
        />
      </button>
    </aside>
  );
};

export default Sidebar;
