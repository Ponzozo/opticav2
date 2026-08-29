import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationSchema } from './translations';

export type Language = 'es' | 'en' | 'pt' | 'fr';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  shortLabel: string;
}

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: 'es', name: 'Español', nativeName: 'Español', flag: '🇲🇽', shortLabel: 'ES' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', shortLabel: 'EN' },
  { code: 'pt', name: 'Português', nativeName: 'Português', flag: '🇧🇷', shortLabel: 'PT' },
  { code: 'fr', name: 'Français', nativeName: 'Français', flag: '🇫🇷', shortLabel: 'FR' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  availableLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('blick_optic_language') as Language;
      if (saved && ['es', 'en', 'pt', 'fr'].includes(saved)) {
        return saved;
      }
      // Check browser language
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === 'en' || browserLang === 'pt' || browserLang === 'fr') {
        return browserLang;
      }
    } catch {
      // ignore
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('blick_optic_language', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    try {
      document.documentElement.lang = language;
    } catch {
      // ignore
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations.es,
    availableLanguages: AVAILABLE_LANGUAGES,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
