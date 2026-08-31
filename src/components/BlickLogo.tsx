import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface BlickLogoProps {
  variant?: 'full' | 'horizontal' | 'icon' | 'stacked';
  className?: string;
  theme?: 'dark' | 'light' | 'gold' | 'monochrome' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  height?: number;
}

/**
 * High-definition vector rendition of the official Blick Optic Eyeglasses Isotype.
 * Recreates the continuous dual circular frames, smooth ergonomic bridge arch,
 * and the signature ~50° aperture slit on the upper-right rim with precision math.
 */
export const BlickGlassesIcon: React.FC<{
  className?: string;
  color?: string;
  strokeWidth?: number;
}> = ({ className = 'w-12 h-6', color = 'currentColor', strokeWidth = 24 }) => {
  return (
    <svg
      viewBox="0 0 420 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Blick Optic Icon"
    >
      {/* Left Lens (Solid circular frame) */}
      <circle
        cx="110"
        cy="90"
        r="64"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Smooth Central Bridge Arch connecting the two frames */}
      <path
        d="M 166 90 C 166 42, 254 42, 254 90"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />

      {/* Right Lens with Signature ~50° Aperture Cut on upper-right rim */}
      {/* Arc from 42° clockwise through bottom and around to 62°, leaving the clean gap */}
      <path
        d="M 357.5 47 A 64 64 0 1 1 340 33.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        fill="none"
      />
    </svg>
  );
};

export const BlickLogo: React.FC<BlickLogoProps> = ({
  variant = 'horizontal',
  className = '',
  theme = 'auto',
  size = 'md',
  showTagline = true,
}) => {
  let resolvedTheme = theme;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const themeContext = useTheme();
    if (theme === 'auto') {
      resolvedTheme = themeContext.isDark ? 'light' : 'dark';
    }
  } catch {
    if (theme === 'auto') resolvedTheme = 'dark';
  }

  // Theme color palette calibrated for contrast and aesthetic refinement
  const colorMap = {
    // For light backgrounds (Navbar, modals, light cards)
    dark: {
      icon: '#18181B',
      blick: '#18181B',
      optic: '#8C5E2D',
      tagline: '#7A6F62',
    },
    // For dark backgrounds (Footer, dark hero sections, black canvas)
    light: {
      icon: '#F5EEDB', // Warm ivory
      blick: '#FAF8F5',
      optic: '#E5C378', // Warm gold
      tagline: '#B8AFA4',
    },
    // Pure luxury gold
    gold: {
      icon: '#C5A059',
      blick: '#C5A059',
      optic: '#E5C378',
      tagline: '#9E7440',
    },
    monochrome: {
      icon: 'currentColor',
      blick: 'currentColor',
      optic: 'currentColor',
      tagline: 'currentColor',
    },
  };

  const colors = colorMap[resolvedTheme as keyof typeof colorMap] || colorMap.dark;

  const sizeClasses = {
    sm: {
      iconHorizontal: 'w-8 h-4 sm:w-9 sm:h-4.5',
      iconFull: 'w-16 h-8 mb-1.5',
      blickText: 'text-base sm:text-lg',
      opticText: 'text-base sm:text-lg',
      tagline: 'text-[8px] tracking-[0.2em]',
      gap: 'gap-2.5',
    },
    md: {
      iconHorizontal: 'w-10 h-5 sm:w-11 sm:h-5.5',
      iconFull: 'w-24 h-11 mb-2.5',
      blickText: 'text-lg sm:text-xl',
      opticText: 'text-lg sm:text-xl',
      tagline: 'text-[9px] tracking-[0.24em]',
      gap: 'gap-3',
    },
    lg: {
      iconHorizontal: 'w-14 h-7 sm:w-16 sm:h-8',
      iconFull: 'w-32 h-14 mb-3',
      blickText: 'text-2xl sm:text-3xl',
      opticText: 'text-2xl sm:text-3xl',
      tagline: 'text-[10px] tracking-[0.26em]',
      gap: 'gap-3.5',
    },
    xl: {
      iconHorizontal: 'w-20 h-10 sm:w-24 sm:h-12',
      iconFull: 'w-44 h-20 mb-4',
      blickText: 'text-3xl sm:text-4xl',
      opticText: 'text-3xl sm:text-4xl',
      tagline: 'text-xs tracking-[0.3em]',
      gap: 'gap-4',
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <BlickGlassesIcon
          color={colors.icon}
          className={currentSize.iconHorizontal}
        />
      </div>
    );
  }

  // Full / Stacked Variant matching the user's reference image
  if (variant === 'full' || variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center justify-center text-center select-none group ${className}`}>
        <BlickGlassesIcon
          color={colors.icon}
          className={`${currentSize.iconFull} transition-transform duration-300 group-hover:scale-105`}
        />
        
        {/* Brand Text: BLICK (Bold) + OPTIC (Spaced) */}
        <div className="flex items-center justify-center">
          <span
            className={`font-black font-outfit uppercase tracking-[0.12em] leading-none ${currentSize.blickText}`}
            style={{ color: colors.blick }}
          >
            BLICK
          </span>
          <span
            className={`font-light font-outfit uppercase tracking-[0.28em] leading-none ml-2.5 sm:ml-3 ${currentSize.opticText}`}
            style={{ color: colors.optic }}
          >
            OPTIC
          </span>
        </div>

        {showTagline && (
          <span
            className={`uppercase font-medium mt-1.5 opacity-80 ${currentSize.tagline}`}
            style={{ color: colors.tagline }}
          >
            Boutique Óptica & Salud Visual
          </span>
        )}
      </div>
    );
  }

  // Default Horizontal Variant for Header & Compact Navigation
  return (
    <div className={`inline-flex items-center ${currentSize.gap} select-none group ${className}`}>
      <div className="relative shrink-0 flex items-center justify-center">
        <BlickGlassesIcon
          color={colors.icon}
          className={`${currentSize.iconHorizontal} transition-transform duration-300 group-hover:scale-105`}
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span
            className={`font-black font-outfit uppercase tracking-[0.12em] leading-none ${currentSize.blickText}`}
            style={{ color: colors.blick }}
          >
            BLICK
          </span>
          <span
            className={`font-light font-outfit uppercase tracking-[0.24em] leading-none ml-1.5 sm:ml-2 ${currentSize.opticText}`}
            style={{ color: colors.optic }}
          >
            OPTIC
          </span>
        </div>

        {showTagline && (
          <span
            className={`uppercase font-medium mt-1 opacity-80 ${currentSize.tagline}`}
            style={{ color: colors.tagline }}
          >
            Boutique Óptica
          </span>
        )}
      </div>
    </div>
  );
};
