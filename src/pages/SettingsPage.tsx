import { useState } from 'react';
import { User, Bell, Sun, Moon, Monitor, Globe, Save, Check } from 'lucide-react';
import AppShell from '../layout/AppShell';
import { useAuth } from '../app/providers/AuthProvider';
import { useTheme } from '../app/providers/ThemeProvider';
import { useI18n } from '../app/providers/I18nProvider';
import { Locale } from '../i18n/translations';
import Input from '../components/ui/Input';
import { cn } from '../lib/utils';

const SettingsPage = () => {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
  });
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const themeOptions: { value: typeof theme; label: string; icon: typeof Sun }[] = [
    { value: 'light', label: t('settings.theme.light'), icon: Sun },
    { value: 'dark', label: t('settings.theme.dark'), icon: Moon },
    { value: 'system', label: t('settings.theme.system'), icon: Monitor },
  ];

  const languageOptions: { code: Locale; label: string; flag: string }[] = [
    { code: 'vi', label: t('settings.lang.vi'), flag: '🇻🇳' },
    { code: 'en', label: t('settings.lang.en'), flag: '🇺🇸' },
    { code: 'zh', label: t('settings.lang.zh'), flag: '🇨🇳' },
  ];

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            {t('settings.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('settings.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('settings.profile')}</h2>
              </div>

              <div className="space-y-4">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm">
                    Đổi ảnh đại diện
                  </button>
                </div>

                {/* Form */}
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

                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {t('button.save')}
                </button>
              </div>
            </div>

            {/* Appearance Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl flex items-center justify-center">
                  <Sun className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('settings.appearance')}</h2>
              </div>

              <div className="space-y-3">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={cn(
                      'w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all',
                      theme === option.value
                        ? 'border-primary bg-orange-50 dark:bg-orange-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    )}
                  >
                    <div className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center',
                      theme === option.value
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    )}>
                      <option.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className={cn(
                        'font-semibold',
                        theme === option.value
                          ? 'text-primary'
                          : 'text-gray-900 dark:text-gray-100'
                      )}>
                        {option.label}
                      </p>
                    </div>
                    {theme === option.value && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('settings.language')}</h2>
              </div>

              <div className="space-y-3">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    onClick={() => setLocale(option.code)}
                    className={cn(
                      'w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all',
                      locale === option.code
                        ? 'border-primary bg-orange-50 dark:bg-orange-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    )}
                  >
                    <div className="text-3xl">
                      {option.flag}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={cn(
                        'font-semibold',
                        locale === option.code
                          ? 'text-primary'
                          : 'text-gray-900 dark:text-gray-100'
                      )}>
                        {option.label}
                      </p>
                    </div>
                    {locale === option.code && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t('settings.notifications')}</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Email thông báo</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Nhận thông báo qua email</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, email: !notifications.email })}
                    className={cn(
                      'relative w-12 h-6 rounded-full transition-colors',
                      notifications.email ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                    )}
                  >
                    <div className={cn(
                      'absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform',
                      notifications.email ? 'left-6' : 'left-0.5'
                    )} />
                  </button>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Push notification</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Nhận thông báo trên trình duyệt</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, push: !notifications.push })}
                    className={cn(
                      'relative w-12 h-6 rounded-full transition-colors',
                      notifications.push ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                    )}
                  >
                    <div className={cn(
                      'absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform',
                      notifications.push ? 'left-6' : 'left-0.5'
                    )} />
                  </button>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Email marketing</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Nhận tin tức và ưu đãi</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, marketing: !notifications.marketing })}
                    className={cn(
                      'relative w-12 h-6 rounded-full transition-colors',
                      notifications.marketing ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                    )}
                  >
                    <div className={cn(
                      'absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform',
                      notifications.marketing ? 'left-6' : 'left-0.5'
                    )} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Account Info */}
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-orange-100 dark:border-orange-900/30">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Thông tin tài khoản</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Loại tài khoản</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Free</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Ngày tham gia</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">15/12/2024</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Video đã tạo</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">47 video</p>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-red-200 dark:border-red-900/30">
              <h3 className="font-bold text-red-600 dark:text-red-400 mb-4">Vùng nguy hiểm</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-sm">
                  Đổi mật khẩu
                </button>
                <button className="w-full px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-sm">
                  Xóa tài khoản
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl animate-slide-up z-50 flex items-center gap-3">
            <Save className="w-5 h-5" />
            <span>Đã lưu thay đổi!</span>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default SettingsPage;
