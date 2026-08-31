import { Sparkles, ArrowRight, ShieldCheck, Award, Star, CheckCircle2, Glasses } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBookingModal: () => void;
  onScrollToCatalog: () => void;
}

export function Hero({ onOpenBookingModal, onScrollToCatalog }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[var(--bg-surface-elevated)] via-[var(--bg-page)] to-[var(--bg-page)] transition-colors duration-300">
      {/* Warm Ambient Subtle Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E8DCB8]/15 dark:bg-[#C5A059]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#C5A059]/15 dark:bg-[#C5A059]/10 rounded-full blur-2xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#B8864E]/10 dark:bg-[#B8864E]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Value Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-badge)] text-[var(--bg-badge-text)] border border-[var(--border-badge)] text-xs font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-[1.14] tracking-tight font-outfit">
              {t.hero.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#8C5E2D] dark:from-[#C5A059] dark:via-[#E5C378] dark:to-[#C5A059]">{t.hero.titleAccent}</span> {t.hero.titlePart2}
            </h1>

            {/* Subheading / Value description */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 pb-2">
              <div className="flex items-center gap-2 justify-center lg:justify-start text-sm font-bold text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-[#4E715B] dark:text-[#5C876D] shrink-0" />
                <span>{t.hero.check1}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start text-sm font-bold text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-[#4E715B] dark:text-[#5C876D] shrink-0" />
                <span>{t.hero.check2}</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start text-sm font-bold text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-[#4E715B] dark:text-[#5C876D] shrink-0" />
                <span>{t.hero.check3}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBookingModal}
                id="hero-agendar-examen-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] hover:from-[#A6763D] hover:to-[#8C5E2D] text-[#18181B] font-extrabold text-base shadow-lg shadow-[#C5A059]/30 hover:shadow-xl hover:shadow-[#C5A059]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 text-[#18181B] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToCatalog}
                id="hero-ver-catalogo-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-bold text-base border border-[var(--border-main)] shadow-xs hover:border-[#B88E3E] hover:shadow-md transition-all cursor-pointer"
              >
                <Glasses className="w-5 h-5 text-[#C5A059]" />
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Social Trust & Rating */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 border-t border-[var(--border-main)]">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[var(--border-main)] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Paciente satisfecho" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[var(--border-main)] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Paciente satisfecho" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[var(--border-main)] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80" alt="Paciente satisfecho" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[var(--border-main)] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Paciente satisfecho" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                  <span className="text-xs font-bold text-[var(--text-primary)] ml-1">{t.hero.ratingScore}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-medium">
                  {t.hero.patientsTrust}
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background frame with champagne gold aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059] to-[#9E7440] rounded-3xl rotate-2 scale-105 opacity-25 blur-xl"></div>

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--border-main)] bg-[#18181B]">
                <img 
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80" 
                  alt="Armazones de diseño en Blick Optic" 
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/85 via-transparent to-black/20"></div>

                {/* Bottom Card details */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-main)] shadow-lg text-[var(--text-primary)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-[#C5A059]">
                        {t.hero.cardSeason}
                      </span>
                      <h4 className="text-base font-bold text-[var(--text-primary)] font-outfit">
                        {t.hero.cardTitle}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)]">
                        {t.hero.cardSpecs}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 line-through">$130</span>
                      <p className="text-lg font-extrabold text-[#C5A059]">$89 <span className="text-xs font-normal text-[var(--text-secondary)]">{t.common.includedLenses}</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right (Computerized accuracy) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-[var(--bg-card)] p-3.5 rounded-2xl shadow-xl border border-[var(--border-main)] flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface-elevated)] text-[#C5A059] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">{t.hero.check1}</p>
                  <p className="text-[11px] text-[var(--text-muted)]">{t.hero.cardTag}</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Left Middle (Certified warranty) */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden sm:flex absolute -bottom-6 -left-6 bg-[var(--bg-card)] p-3.5 rounded-2xl shadow-xl border border-[var(--border-main)] items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-green-bg)] text-[#4E715B] dark:text-[#5C876D] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">{t.hero.check2}</p>
                  <p className="text-[11px] text-[var(--text-muted)]">{t.common.oneYearWarranty}</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
