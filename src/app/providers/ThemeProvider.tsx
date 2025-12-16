import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  actualTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'reVeo.theme';

// Get system preference
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

// Apply theme to DOM
const applyTheme = (theme: 'light' | 'dark') => {
  const root = document.documentElement;
  console.log('🎨 Applying theme to DOM:', theme);
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  // Force a repaint
  root.style.colorScheme = theme;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored as Theme) || 'light';
  });

  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme;
    if (stored === 'system' || !stored) {
      return getSystemTheme();
    }
    return stored as 'light' | 'dark';
  });

  // Apply initial theme on mount
  useEffect(() => {
    console.log('🎨 ThemeProvider mounted, initial theme:', theme);
    const calculated = theme === 'system' ? getSystemTheme() : theme;
    applyTheme(calculated);
  }, []);

  // Calculate and apply theme when it changes
  useEffect(() => {
    const calculated = theme === 'system' ? getSystemTheme() : theme;
    console.log('🎨 Theme changed:', theme, '→ Actual theme:', calculated);
    setActualTheme(calculated);
    applyTheme(calculated);
  }, [theme]);

  // Listen to system theme changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const systemTheme = getSystemTheme();
      console.log('🎨 System theme changed to:', systemTheme);
      setActualTheme(systemTheme);
      applyTheme(systemTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    console.log('🎨 setTheme called with:', newTheme);
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, actualTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
