import { Award, ShieldCheck, HeartHandshake, Eye, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-6 h-6 text-[#C5A059]" />;
      case 1:
        return <Eye className="w-6 h-6 text-[#8C5E2D]" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-[#4E715B]" />;
      case 3:
        return <HeartHandshake className="w-6 h-6 text-[#8C5E2D]" />;
      default:
        return <Award className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="acerca-de" className="py-20 bg-[var(--bg-page)] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[var(--border-main)] bg-[#18181B]">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                  alt="Clínica y consultorio optométrico moderno en Blick Optic"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[var(--bg-card)] p-5 rounded-2xl shadow-xl border border-[var(--border-main)] max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface-elevated)] text-[#C5A059] flex items-center justify-center font-black text-xl border border-[var(--border-subtle)]">
                    15+
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">{t.about.yearsExperience}</h4>
                    <p className="text-xs text-[var(--text-muted)]">{t.about.yearsBadgeDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-badge)] text-[var(--bg-badge-text)] border border-[var(--border-badge)] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
              {t.about.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-outfit">
              {t.about.title}
            </h2>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {t.about.p2}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[var(--border-main)]">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#C5A059] font-outfit block">{t.about.stats.patients}</span>
                <span className="text-xs text-[var(--text-muted)] font-medium">{t.about.stats.patientsLabel}</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#C5A059] font-outfit block">{t.about.stats.branches}</span>
                <span className="text-xs text-[var(--text-muted)] font-medium">{t.about.stats.branchesLabel}</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#C5A059] font-outfit block">{t.about.stats.guarantee}</span>
                <span className="text-xs text-[var(--text-muted)] font-medium">{t.about.stats.guaranteeLabel}</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.about.values.map((val, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-xs hover:shadow-md hover:border-[#C5A059] transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center">
                {getPillarIcon(idx)}
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-outfit">{val.title}</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Clinical Protocol Steps (4 Steps) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">{t.about.protocolTitle}</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-outfit mt-1">
              {t.about.protocolSubtitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {t.about.steps.map((step, idx) => (
              <div key={idx} className="relative p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2">
                <span className="text-3xl font-black text-[#C5A059]/40 font-outfit block">
                  {step.num}
                </span>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">{step.title}</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
