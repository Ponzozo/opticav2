import React from 'react';
import { Language } from '../context/LanguageContext';

interface FlagIconProps {
  code: Language | string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function FlagIcon({ code, className = '', size = 'sm' }: FlagIconProps) {
  const sizeClasses = {
    xs: 'w-4 h-3 rounded-[2px]',
    sm: 'w-5 h-3.5 rounded-[3px]',
    md: 'w-6 h-4 rounded-[4px]',
    lg: 'w-8 h-5.5 rounded-md',
  };

  const baseClass = `inline-flex shrink-0 items-center justify-center overflow-hidden shadow-2xs border border-black/10 select-none ${sizeClasses[size]} ${className}`;

  switch (code) {
    case 'es':
    case 'mx':
    case 'MX':
      // Flag of Mexico 🇲🇽 (Green, White, Red with detailed Coat of Arms)
      return (
        <span className={baseClass} title="México (Español)">
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <g fillRule="evenodd" strokeWidth="1pt">
              <path fill="#006847" d="M0 0h213.3v480H0z" />
              <path fill="#ffffff" d="M213.3 0h213.4v480H213.3z" />
              <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
              {/* Mexican National Coat of Arms Emblem (Eagle, Snake, Nopal cactus & Laurel wreath) */}
              <g transform="translate(320, 240) scale(1.15)">
                {/* Laurel & Oak wreath */}
                <path d="M-42 12 C-38 32 -18 44 0 45 C18 44 38 32 42 12" fill="none" stroke="#226622" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M-36 22 C-26 34 -12 40 0 40 C12 40 26 34 36 22" fill="none" stroke="#997722" strokeWidth="2" strokeLinecap="round" />
                {/* Nopal Cactus & Rock */}
                <ellipse cx="0" cy="22" rx="22" ry="7" fill="#6c757d" />
                <path d="M-14 22 C-14 10 -4 4 0 4 C4 4 14 10 14 22 Z" fill="#2d6a4f" />
                <ellipse cx="-12" cy="14" rx="7" ry="5" fill="#2d6a4f" />
                <ellipse cx="12" cy="14" rx="7" ry="5" fill="#2d6a4f" />
                {/* Golden Eagle */}
                <path d="M-10 8 C-18 -2 -14 -18 -4 -24 C-2 -28 4 -28 6 -24 C14 -16 12 2 4 8 Z" fill="#6f4e37" />
                <path d="M-16 4 C-26 -6 -20 -22 -10 -20 C-4 -14 -8 -2 -12 2 Z" fill="#8d6e63" />
                <path d="M10 4 C20 -6 16 -22 6 -20 C2 -14 6 -2 8 2 Z" fill="#5d4037" />
                {/* Golden head & beak */}
                <circle cx="-1" cy="-22" r="5" fill="#c5a059" />
                <path d="M4 -23 L10 -20 L5 -18 Z" fill="#e5c378" stroke="#8c5e2d" strokeWidth="0.8" />
                {/* Green serpent in beak */}
                <path d="M8 -19 Q16 -12 12 -4 Q6 4 10 12" fill="none" stroke="#1b4332" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            </g>
          </svg>
        </span>
      );

    case 'en':
    case 'us':
    case 'US':
      // Flag of the United States 🇺🇸
      return (
        <span className={baseClass} title="English (USA)">
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <g fillRule="evenodd">
              {/* Stripes */}
              <path fill="#bd3d44" d="M0 0h640v480H0z" />
              <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640" />
              {/* Canton */}
              <path fill="#192f5d" d="M0 0h270v258.5H0z" />
              {/* Star grid representation */}
              <g fill="#fff" transform="translate(18, 14) scale(0.9)">
                {[0, 1, 2, 3, 4].map((row) => (
                  <g key={`r-${row}`} transform={`translate(0, ${row * 48})`}>
                    {[0, 1, 2, 3, 4, 5].map((col) => (
                      <polygon
                        key={`s1-${col}`}
                        points="12,0 15.7,11.4 27.7,11.4 18,18.4 21.7,29.8 12,22.8 2.3,29.8 6,18.4 -3.7,11.4 8.3,11.4"
                        transform={`translate(${col * 44}, 0) scale(0.55)`}
                      />
                    ))}
                  </g>
                ))}
                {[0, 1, 2, 3].map((row) => (
                  <g key={`r2-${row}`} transform={`translate(22, ${row * 48 + 24})`}>
                    {[0, 1, 2, 3, 4].map((col) => (
                      <polygon
                        key={`s2-${col}`}
                        points="12,0 15.7,11.4 27.7,11.4 18,18.4 21.7,29.8 12,22.8 2.3,29.8 6,18.4 -3.7,11.4 8.3,11.4"
                        transform={`translate(${col * 44}, 0) scale(0.55)`}
                      />
                    ))}
                  </g>
                ))}
              </g>
            </g>
          </svg>
        </span>
      );

    case 'pt':
    case 'br':
    case 'BR':
      // Flag of Brazil 🇧🇷
      return (
        <span className={baseClass} title="Português (Brasil)">
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#009b3a" d="M0 0h640v480H0z" />
            <path fill="#fedf00" d="M320 48L592 240 320 432 48 240z" />
            <circle cx="320" cy="240" r="105" fill="#002776" />
            {/* White celestial band */}
            <path
              d="M216 230 C250 200 390 200 424 250"
              fill="none"
              stroke="#ffffff"
              strokeWidth="14"
            />
            {/* Southern Cross stars */}
            <circle cx="320" cy="255" r="3" fill="#ffffff" />
            <circle cx="310" cy="270" r="2.5" fill="#ffffff" />
            <circle cx="330" cy="270" r="2.5" fill="#ffffff" />
            <circle cx="320" cy="285" r="2" fill="#ffffff" />
          </svg>
        </span>
      );

    case 'fr':
    case 'FR':
      // Flag of France 🇫🇷 (Modern tricolor)
      return (
        <span className={baseClass} title="Français (France)">
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <g fillRule="evenodd" strokeWidth="1pt">
              <path fill="#002654" d="M0 0h213.3v480H0z" />
              <path fill="#ffffff" d="M213.3 0h213.4v480H213.3z" />
              <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
            </g>
          </svg>
        </span>
      );

    default:
      return <span className="text-xs">{code}</span>;
  }
}
