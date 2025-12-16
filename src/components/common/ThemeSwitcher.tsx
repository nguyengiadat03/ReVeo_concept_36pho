import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../app/providers/ThemeProvider';
import { useI18n } from '../../app/providers/I18nProvider';

const ThemeSwitcher = () => {
  const { actualTheme, setTheme } = useTheme();
  const { t } = useI18n();

  const toggleTheme = () => {
    const newTheme = actualTheme === 'dark' ? 'light' : 'dark';
    console.log('🎨 Switching theme from', actualTheme, 'to', newTheme);
    setTheme(newTheme);
  };

  console.log('🎨 ThemeSwitcher render - actualTheme:', actualTheme);

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
      title={actualTheme === 'dark' ? t('settings.theme.light') : t('settings.theme.dark')}
      aria-label={actualTheme === 'dark' ? t('settings.theme.light') : t('settings.theme.dark')}
    >
      {actualTheme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
