import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useI18n } from '../../app/providers/I18nProvider';
import { Locale } from '../../i18n/translations';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale, t } = useI18n();

  const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'vi', label: t('settings.lang.vi'), flag: '🇻🇳' },
    { code: 'en', label: t('settings.lang.en'), flag: '🇺🇸' },
    { code: 'zh', label: t('settings.lang.zh'), flag: '🇨🇳' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleLanguageChange = (code: Locale) => {
    console.log('🌍 Switching language from', locale, 'to', code);
    setLocale(code);
    setIsOpen(false);
  };

  console.log('🌍 LanguageSwitcher render - locale:', locale);

  return (
    <div className="relative" ref={menuRef}>
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
        title={t('settings.language')}
        aria-label={t('settings.language')}
      >
        <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="flex-1 text-left">{lang.label}</span>
              {locale === lang.code && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
