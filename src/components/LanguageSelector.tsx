import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage, Language, AVAILABLE_LANGUAGES } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { FlagIcon } from './FlagIcon';

interface LanguageSelectorProps {
  variant?: 'dropdown' | 'inline' | 'compact' | 'segmented';
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
}

export function LanguageSelector({ 
  variant = 'dropdown', 
  className = '',
  theme = 'auto' 
}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  let isDarkTheme = false;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const themeContext = useTheme();
    isDarkTheme = theme === 'auto' ? themeContext.isDark : theme === 'dark';
  } catch {
    isDarkTheme = theme === 'dark';
  }

  const currentLangObj = AVAILABLE_LANGUAGES.find(l => l.code === language) || AVAILABLE_LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  // Segmented Pill Variant (Perfect for Mobile Menu & Quick Bar)
  if (variant === 'segmented') {
    return (
      <div 
        id="language-selector-segmented" 
        className={`flex items-center p-1 rounded-xl border ${
          isDarkTheme 
            ? 'bg-[#18181B] border-[#2D2A26]' 
            : 'bg-[#F3EFE6] border-[#E2D8C7]'
        } ${className}`}
      >
        {AVAILABLE_LANGUAGES.map((lang) => {
          const isSelected = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] text-[#18181B] shadow-xs font-extrabold'
                  : isDarkTheme
                    ? 'text-[#A89F91] hover:text-white hover:bg-[#2A2621]'
                    : 'text-[#5C5349] hover:text-[#18181B] hover:bg-[#EBE3D3]'
              }`}
              title={lang.name}
            >
              <FlagIcon code={lang.code} size="xs" />
              <span>{lang.shortLabel}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Inline List Variant
  if (variant === 'inline') {
    return (
      <div id="language-selector-inline" className={`flex flex-wrap items-center gap-1.5 ${className}`}>
        {AVAILABLE_LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              language === lang.code
                ? 'bg-[#C5A059] text-[#18181B] font-bold shadow-xs'
                : 'text-[#A89F91] hover:text-white hover:bg-[#2A2621]'
            }`}
          >
            <FlagIcon code={lang.code} size="xs" />
            <span>{lang.nativeName}</span>
          </button>
        ))}
      </div>
    );
  }

  // Dropdown Variant (Default for Desktop Header)
  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`} id="language-selector-dropdown">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        id="language-dropdown-btn"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer ${
          isDarkTheme
            ? 'bg-[#22201D] border-[#38332C] text-[#EDE5D8] hover:bg-[#2D2A26] hover:border-[#C5A059]/50'
            : 'bg-[#FAF8F5] border-[#E2D8C7] text-[#2B2723] hover:bg-[#F3EFE6] hover:border-[#C5A059]'
        } shadow-xs`}
      >
        <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
        <FlagIcon code={currentLangObj.code} size="sm" />
        <span className="tracking-wide uppercase text-xs">{currentLangObj.shortLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#C5A059]' : 'text-[#8C8375]'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute right-0 mt-2 w-52 rounded-2xl border shadow-xl z-50 p-1.5 focus:outline-none overflow-hidden ${
              isDarkTheme
                ? 'bg-[#1C1A17] border-[#38332C]'
                : 'bg-[#FAF8F5] border-[#E2D8C7]'
            }`}
          >
            <div className={`px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider border-b mb-1 ${
              isDarkTheme ? 'text-[#A89E90] border-[#2D2A26]' : 'text-[#8C8375] border-[#EBE3D3]'
            }`}>
              Seleccionar Idioma / Language
            </div>
            {AVAILABLE_LANGUAGES.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  id={`lang-option-${lang.code}`}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    isSelected
                      ? isDarkTheme 
                        ? 'bg-[#2A2621] text-[#E5C378] font-bold'
                        : 'bg-[#F3EFE6] text-[#18181B] font-bold'
                      : isDarkTheme
                        ? 'text-[#D8CEBE] hover:bg-[#25221E] hover:text-[#E5C378]'
                        : 'text-[#5C5349] hover:bg-[#EBE3D3] hover:text-[#18181B]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FlagIcon code={lang.code} size="md" />
                    <div className="text-left">
                      <div className="font-bold leading-tight">{lang.nativeName}</div>
                      <div className={`text-[10px] ${isDarkTheme ? 'text-[#8C8275]' : 'text-[#8C8375]'}`}>{lang.name}</div>
                    </div>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#C5A059] font-bold shrink-0" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

