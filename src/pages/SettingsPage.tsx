import { useState } from "react";
import { Sun, Moon, Monitor, Save, Check, Shield } from "lucide-react";
import AppShell from "../layout/AppShell";
import { PageHeader, ContentSection } from "../components/layout";
import { useAuth } from "../app/providers/AuthProvider";
import { useTheme } from "../app/providers/ThemeProvider";
import { useI18n } from "../app/providers/I18nProvider";
import { Locale } from "../i18n/translations";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { cn } from "../lib/utils";

const SettingsPage = () => {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
  });
  const [showToast, setShowToast] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const themeOptions: {
    value: typeof theme;
    label: string;
    icon: typeof Sun;
  }[] = [
    { value: "light", label: t("theme-light"), icon: Sun },
    { value: "dark", label: t("theme-dark"), icon: Moon },
    { value: "system", label: t("theme-system"), icon: Monitor },
  ];

  const languageOptions: { code: Locale; label: string; flag: string }[] = [
    { code: "vi", label: t("lang-vi"), flag: "🇻🇳" },
    { code: "en", label: t("lang-en"), flag: "🇺🇸" },
    { code: "zh", label: t("lang-zh"), flag: "🇨🇳" },
  ];

  return (
    <AppShell>
      <div className="page-container-narrow">
        {/* Page Header */}
        <PageHeader
          title={t("cai-dat")}
          description="Quản lý tài khoản và tùy chỉnh trải nghiệm"
        />

        <div className="space-y-6">
          {/* Profile Section */}
          <ContentSection
            title={t("profile")}
            description="Cập nhật thông tin cá nhân của bạn"
            spacing="large"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100 dark:border-zinc-800">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-zinc-100 mb-1">
                  Ảnh đại diện
                </p>
                <Button variant="ghost" size="sm">
                  Đổi ảnh
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập họ và tên"
              />

              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button
                variant="primary"
                leftIcon={<Save className="w-4 h-4" />}
                onClick={handleSave}
                isLoading={isSaving}
              >
                {t("save")}
              </Button>
            </div>
          </ContentSection>

          {/* Appearance Section */}
          <ContentSection
            title={t("appearance")}
            description="Tùy chỉnh giao diện ứng dụng"
          >
            <div className="space-y-2">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTheme(option.value)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all",
                    theme === option.value
                      ? "border-primary bg-orange-50 dark:bg-orange-900/20"
                      : "border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      theme === option.value
                        ? "bg-primary text-white"
                        : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400"
                    )}
                  >
                    <option.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={cn(
                        "font-medium",
                        theme === option.value
                          ? "text-primary"
                          : "text-gray-900 dark:text-zinc-100"
                      )}
                    >
                      {option.label}
                    </p>
                  </div>
                  {theme === option.value && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </ContentSection>

          {/* Language Section */}
          <ContentSection
            title={t("language")}
            description="Chọn ngôn ngữ hiển thị"
          >
            <div className="space-y-2">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  onClick={() => setLocale(option.code)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all",
                    locale === option.code
                      ? "border-primary bg-orange-50 dark:bg-orange-900/20"
                      : "border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600"
                  )}
                >
                  <div className="text-2xl">{option.flag}</div>
                  <div className="flex-1 text-left">
                    <p
                      className={cn(
                        "font-medium",
                        locale === option.code
                          ? "text-primary"
                          : "text-gray-900 dark:text-zinc-100"
                      )}
                    >
                      {option.label}
                    </p>
                  </div>
                  {locale === option.code && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </ContentSection>

          {/* Notifications */}
          <ContentSection
            title={t("notifications")}
            description="Quản lý thông báo và cập nhật"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-zinc-100 mb-0.5">
                    Email thông báo
                  </p>
                  <p className="text-sm text-gray-600 dark:text-zinc-400">
                    Nhận thông báo qua email
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      email: !notifications.email,
                    })
                  }
                  className={cn(
                    "relative w-11 h-6 rounded-full transition-colors flex-shrink-0",
                    notifications.email
                      ? "bg-primary"
                      : "bg-gray-300 dark:bg-zinc-700"
                  )}
                  aria-label="Toggle email notifications"
                >
                  <div
                    className={cn(
                      "absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm",
                      notifications.email ? "left-5" : "left-0.5"
                    )}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-gray-100 dark:border-zinc-800">
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-zinc-100 mb-0.5">
                    Push notification
                  </p>
                  <p className="text-sm text-gray-600 dark:text-zinc-400">
                    Nhận thông báo trên trình duyệt
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      push: !notifications.push,
                    })
                  }
                  className={cn(
                    "relative w-11 h-6 rounded-full transition-colors flex-shrink-0",
                    notifications.push
                      ? "bg-primary"
                      : "bg-gray-300 dark:bg-zinc-700"
                  )}
                  aria-label="Toggle push notifications"
                >
                  <div
                    className={cn(
                      "absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm",
                      notifications.push ? "left-5" : "left-0.5"
                    )}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-gray-100 dark:border-zinc-800">
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-zinc-100 mb-0.5">
                    Email marketing
                  </p>
                  <p className="text-sm text-gray-600 dark:text-zinc-400">
                    Nhận tin tức và ưu đãi
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      marketing: !notifications.marketing,
                    })
                  }
                  className={cn(
                    "relative w-11 h-6 rounded-full transition-colors flex-shrink-0",
                    notifications.marketing
                      ? "bg-primary"
                      : "bg-gray-300 dark:bg-zinc-700"
                  )}
                  aria-label="Toggle marketing emails"
                >
                  <div
                    className={cn(
                      "absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow-sm",
                      notifications.marketing ? "left-5" : "left-0.5"
                    )}
                  />
                </button>
              </div>
            </div>
          </ContentSection>

          {/* Security Section */}
          <ContentSection
            title="Bảo mật"
            description="Quản lý mật khẩu và bảo mật tài khoản"
          >
            <div className="space-y-3">
              <Button
                variant="secondary"
                className="w-full justify-start"
                leftIcon={<Shield className="w-4 h-4" />}
              >
                Đổi mật khẩu
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                Xóa tài khoản
              </Button>
            </div>
          </ContentSection>
        </div>

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl animate-slide-up z-50 flex items-center gap-3">
            <Check className="w-5 h-5" />
            <span>Đã lưu thay đổi!</span>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default SettingsPage;
