import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'icon' | 'pill' | 'segmented';
  className?: string;
}

export function ThemeToggle({ variant = 'icon', className = '' }: ThemeToggleProps) {
  const { theme, isDark, toggleTheme, setTheme } = useTheme();

  if (variant === 'segmented') {
    return (
      <div 
        id="theme-toggle-segmented"
        className={`flex items-center p-1 rounded-xl border ${
          isDark 
            ? 'bg-[#18181B] border-[#2D2A26]' 
            : 'bg-[#F3EFE6] border-[#E2D8C7]'
        } ${className}`}
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
            !isDark
              ? 'bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] text-[#18181B] shadow-xs'
              : 'text-[#8C8275] hover:text-[#EDE5D8]'
          }`}
          title="Modo Claro"
        >
          <Sun className="w-3.5 h-3.5 text-current" />
          <span>Claro</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
            isDark
              ? 'bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] text-[#18181B] shadow-xs'
              : 'text-[#8C8275] hover:text-[#18181B]'
          }`}
          title="Modo Oscuro"
        >
          <Moon className="w-3.5 h-3.5 text-current" />
          <span>Oscuro</span>
        </button>
      </div>
    );
  }

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        id="theme-toggle-pill"
        className={`flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
          isDark
            ? 'bg-[#1C1A17] border-[#38332C] text-[#EDE5D8] hover:border-[#C5A059]'
            : 'bg-[#FAF8F5] border-[#E2D8C7] text-[#2B2723] hover:border-[#C5A059]'
        } ${className}`}
        aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        <span className="flex items-center gap-2">
          {isDark ? (
            <Moon className="w-4 h-4 text-[#C5A059]" />
          ) : (
            <Sun className="w-4 h-4 text-[#C5A059]" />
          )}
          <span>{isDark ? 'Modo Oscuro' : 'Modo Claro'}</span>
        </span>
        <span className={`w-8 h-4.5 rounded-full p-0.5 transition-colors relative flex items-center ${
          isDark ? 'bg-[#C5A059]' : 'bg-[#D8CEBE]'
        }`}>
          <motion.span
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className={`w-3.5 h-3.5 rounded-full bg-white shadow-xs block ${
              isDark ? 'ml-auto' : 'mr-auto'
            }`}
          />
        </span>
      </button>
    );
  }

  // Default 'icon' button for Desktop & Mobile Header
  return (
    <button
      type="button"
      onClick={toggleTheme}
      id="theme-toggle-navbar-btn"
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={`relative p-2 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center ${
        isDark
          ? 'bg-[#22201D] border-[#38332C] text-[#E5C378] hover:bg-[#2D2A26] hover:border-[#C5A059]'
          : 'bg-[#FAF8F5] border-[#E2D8C7] text-[#8C5E2D] hover:bg-[#F3EFE6] hover:border-[#C5A059]'
      } shadow-xs group ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="dark-sun"
            initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-[#E5C378]"
          >
            <Sun className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </motion.div>
        ) : (
          <motion.div
            key="light-moon"
            initial={{ opacity: 0, rotate: 60, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -60, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-[#8C5E2D]"
          >
            <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
