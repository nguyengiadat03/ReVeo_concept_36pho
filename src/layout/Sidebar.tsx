import { useNavigate, useLocation } from "react-router-dom";
import {
  Store,
  Footprints,
  Video,
  Image,
  Layout,
  ShoppingBag,
  GraduationCap,
  Wallet,
  Settings,
  ChevronLeft,
  LogOut,
} from "lucide-react";
import { useAuth } from "../app/providers/AuthProvider";
import { useCredits } from "../app/providers/CreditsProvider";
import { useI18n } from "../app/providers/I18nProvider";
import { cn } from "../lib/utils";

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  className?: string;
}

const Sidebar = ({
  isCollapsed,
  onToggleCollapse,
  className,
}: SidebarProps) => {
  const { user, logout } = useAuth();
  const { credits } = useCredits();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useI18n();

  const navItems = [
    { id: "pho-phuong", icon: Store, label: t("pho-phuong"), path: "/home" },
    { id: "dao-pho", icon: Footprints, label: t("dao-pho"), path: "/dao-pho" },
    {
      id: "xuong-video",
      icon: Video,
      label: t("xuong-video"),
      path: "/xuong-video",
    },
    {
      id: "xuong-hinh-anh",
      icon: Image,
      label: t("xuong-hinh-anh"),
      path: "/xuong-hinh-anh",
    },
    { id: "mau-pho", icon: Layout, label: t("mau-pho"), path: "/templates" },
    {
      id: "cho-pho",
      icon: ShoppingBag,
      label: t("cho-pho"),
      path: "/marketplace",
    },
    {
      id: "hoc-vien-pho",
      icon: GraduationCap,
      label: t("hoc-vien-pho"),
      path: "/academy",
    },
    { id: "vi-pho", icon: Wallet, label: t("vi-pho"), path: "/credits" },
    { id: "cai-dat", icon: Settings, label: t("cai-dat"), path: "/settings" },
  ];

  const isActive = (path: string, id: string) => {
    // Phố Phường - only /home
    if (id === "pho-phuong") {
      return location.pathname === "/home";
    }
    // Dạo Phố - /dao-pho and /streets/:id
    if (id === "dao-pho") {
      return (
        location.pathname === "/dao-pho" ||
        location.pathname.startsWith("/streets")
      );
    }
    // Xưởng Video - exact match
    if (id === "xuong-video") {
      return location.pathname === "/xuong-video";
    }
    // Xưởng Hình Ảnh - exact match
    if (id === "xuong-hinh-anh") {
      return location.pathname === "/xuong-hinh-anh";
    }
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <aside
      className={cn(
        "bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300",
        isCollapsed ? "w-20" : "w-64",
        className
      )}
    >
      {/* Brand */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <h1 className="text-base font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">
                ReVeo Studio
              </h1>
              <p className="text-[10px] text-gray-600 dark:text-gray-400 whitespace-nowrap">
                36 Phố Phường TMĐT
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={cn(
              "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200",
              "hover:bg-orange-50 dark:hover:bg-orange-900/20 group",
              isActive(item.path, item.id)
                ? "bg-orange-50 dark:bg-orange-900/20 text-primary"
                : "text-gray-700 dark:text-gray-300 hover:text-primary"
            )}
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon
              className={cn(
                "w-4.5 h-4.5 flex-shrink-0 transition-colors",
                isActive(item.path, item.id)
                  ? "text-primary"
                  : "text-gray-600 dark:text-gray-400 group-hover:text-primary"
              )}
            />
            {!isCollapsed && (
              <span className="font-medium text-xs whitespace-nowrap">
                {item.label}
              </span>
            )}
            {isActive(item.path, item.id) && !isCollapsed && (
              <div className="ml-auto w-1.5 h-1.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </nav>

      {/* User Section - Bottom (Compact) */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-800 space-y-1.5">
        {/* Credits Display */}
        {!isCollapsed && (
          <div className="px-3 py-2 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-lg border border-orange-200 dark:border-orange-900/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Wallet className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  Credits
                </span>
              </div>
              <span className="text-xs font-bold text-primary">
                {credits.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {isCollapsed && (
          <div className="flex justify-center">
            <div
              className="w-9 h-9 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center border border-orange-200 dark:border-orange-900/30"
              title={`${credits.toLocaleString()} Credits`}
            >
              <Wallet className="w-4 h-4 text-primary" />
            </div>
          </div>
        )}

        {/* Admin Card - Click to go to Settings/Profile */}
        <button
          onClick={() => navigate("/settings")}
          className={cn(
            "w-full flex items-center gap-2.5 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-700",
            isCollapsed && "justify-center"
          )}
          title={isCollapsed ? user?.name : undefined}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0 text-left">
              <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 truncate">
                {user?.name}
              </p>
              <p className="text-[10px] text-gray-600 dark:text-gray-400 truncate">
                {user?.email}
              </p>
            </div>
          )}
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className={cn(
            "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors",
            "text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600",
            isCollapsed && "justify-center"
          )}
          title={isCollapsed ? t("logout") : undefined}
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!isCollapsed && (
            <span className="font-medium text-xs">{t("logout")}</span>
          )}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-24 w-6 h-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow hidden lg:flex"
      >
        <ChevronLeft
          className={cn(
            "w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform",
            isCollapsed && "rotate-180"
          )}
        />
      </button>
    </aside>
  );
};

export default Sidebar;
