import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { translations, Locale, TranslationKey } from '../../i18n/translations';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'reVeo.locale';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    console.log('🌍 I18nProvider initial locale:', stored || 'vi');
    return (stored as Locale) || 'vi';
  });

  const setLocale = useCallback((newLocale: Locale) => {
    console.log('🌍 setLocale called with:', newLocale);
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    const translation = translations[locale][key];
    if (!translation) {
      console.warn('🌍 Missing translation for key:', key, 'in locale:', locale);
      return key;
    }
    return translation;
  }, [locale]);

  const contextValue = useMemo(() => ({
    locale,
    setLocale,
    t
  }), [locale, setLocale, t]);

  console.log('🌍 I18nProvider render - current locale:', locale);

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
