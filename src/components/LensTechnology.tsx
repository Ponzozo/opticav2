import { useState } from 'react';
import { Sun, Laptop, Shield, Zap, CheckCircle2, Sliders } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function LensTechnology() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'normal' | 'blue' | 'antiglare' | 'photochromic'>('blue');

  return (
    <section id="tecnologia" className="py-20 bg-gradient-to-b from-[#18181B] via-[#201D19] to-[#18181B] text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#9E7440]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 text-[#E5C378] border border-[#C5A059]/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5 text-[#C5A059]" />
            {t.lensTech.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-outfit">
            {t.lensTech.title}
          </h2>
          <p className="mt-4 text-base text-[#D8CEBE]">
            {t.lensTech.subtitle}
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Filter Controller Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-[#A89F91] uppercase tracking-wider mb-2">
              {t.lensTech.selectLabel}
            </h3>

            <button
              onClick={() => setActiveFilter('normal')}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer ${
                activeFilter === 'normal'
                  ? 'bg-[#2D2A26] border-[#8C8375] shadow-lg ring-2 ring-[#8C8375]/30'
                  : 'bg-[#22201D]/70 border-[#36322C] hover:bg-[#2A2621]'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-[#36322C] text-[#D8CEBE]">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{t.lensTech.filters.normal.title}</h4>
                <p className="text-xs text-[#A89F91] mt-0.5">{t.lensTech.filters.normal.desc}</p>
              </div>
            </button>

            <button
              onClick={() => setActiveFilter('blue')}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer ${
                activeFilter === 'blue'
                  ? 'bg-[#2E281E] border-[#C5A059] shadow-lg ring-2 ring-[#C5A059]/40'
                  : 'bg-[#22201D]/70 border-[#36322C] hover:bg-[#2A2621]'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-[#C5A059]/20 text-[#E5C378] border border-[#C5A059]/30">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">{t.lensTech.filters.blue.title}</h4>
                  <span className="px-2 py-0.5 rounded-md bg-[#C5A059] text-[#18181B] text-[10px] font-extrabold">{t.lensTech.filters.blue.badge}</span>
                </div>
                <p className="text-xs text-[#D8CEBE] mt-0.5">{t.lensTech.filters.blue.desc}</p>
              </div>
            </button>

            <button
              onClick={() => setActiveFilter('antiglare')}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer ${
                activeFilter === 'antiglare'
                  ? 'bg-[#2E281E] border-[#9E7440] shadow-lg ring-2 ring-[#9E7440]/40'
                  : 'bg-[#22201D]/70 border-[#36322C] hover:bg-[#2A2621]'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-[#9E7440]/20 text-[#E5C378] border border-[#9E7440]/30">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{t.lensTech.filters.antiglare.title}</h4>
                <p className="text-xs text-[#D8CEBE] mt-0.5">{t.lensTech.filters.antiglare.desc}</p>
              </div>
            </button>

            <button
              onClick={() => setActiveFilter('photochromic')}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer ${
                activeFilter === 'photochromic'
                  ? 'bg-[#2E281E] border-[#C5A059] shadow-lg ring-2 ring-[#C5A059]/40'
                  : 'bg-[#22201D]/70 border-[#36322C] hover:bg-[#2A2621]'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-[#C5A059]/20 text-[#E5C378] border border-[#C5A059]/30">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{t.lensTech.filters.photochromic.title}</h4>
                <p className="text-xs text-[#D8CEBE] mt-0.5">{t.lensTech.filters.photochromic.desc}</p>
              </div>
            </button>

          </div>

          {/* Right: Visual Stage with Simulated Filter Overlay */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#36322C] bg-[#18181B] shadow-2xl">
              
              {/* The Base Scene Image */}
              <div className="relative h-72 sm:h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Oficina y trabajo con pantallas"
                  className="w-full h-full object-cover"
                />

                {/* Simulated Optical Lens Mask in Center */}
                <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
                  
                  {/* Lens frame silhouette */}
                  <motion.div 
                    key={activeFilter}
                    initial={{ scale: 0.96, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`relative w-72 sm:w-96 h-44 sm:h-56 rounded-[40px] border-4 transition-all duration-500 shadow-2xl flex items-center justify-center overflow-hidden ${
                      activeFilter === 'normal' 
                        ? 'border-slate-400/60 bg-white/10 backdrop-blur-[0.5px]' 
                        : activeFilter === 'blue'
                        ? 'border-[#C5A059] bg-[#18181B]/20 backdrop-contrast-125'
                        : activeFilter === 'antiglare'
                        ? 'border-[#9E7440] bg-transparent backdrop-contrast-150 backdrop-brightness-105'
                        : 'border-[#E5C378] bg-[#18181B]/70 backdrop-brightness-75'
                    }`}
                  >
                    {/* Filter specific visual indicator */}
                    {activeFilter === 'blue' && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/20 via-transparent to-amber-200/15 pointer-events-none flex items-end justify-start p-4">
                        <span className="px-2.5 py-1 rounded-md bg-[#18181B]/90 text-[#E5C378] border border-[#C5A059]/40 font-bold text-[11px] shadow-sm">
                          {t.lensTech.filters.blue.visualStatus}
                        </span>
                      </div>
                    )}

                    {activeFilter === 'antiglare' && (
                      <div className="absolute inset-0 pointer-events-none flex items-end justify-start p-4">
                        <span className="px-2.5 py-1 rounded-md bg-[#18181B]/90 text-[#E5C378] border border-[#9E7440]/40 font-bold text-[11px] shadow-sm">
                          {t.lensTech.filters.antiglare.visualStatus}
                        </span>
                      </div>
                    )}

                    {activeFilter === 'photochromic' && (
                      <div className="absolute inset-0 pointer-events-none flex items-end justify-start p-4">
                        <span className="px-2.5 py-1 rounded-md bg-[#18181B]/90 text-[#E5C378] border border-[#C5A059]/40 font-bold text-[11px] shadow-sm">
                          {t.lensTech.filters.photochromic.visualStatus}
                        </span>
                      </div>
                    )}

                    {activeFilter === 'normal' && (
                      <div className="absolute inset-0 bg-white/20 pointer-events-none flex items-end justify-start p-4">
                        <span className="px-2.5 py-1 rounded-md bg-red-600/90 text-white font-bold text-[11px] shadow-sm">
                          {t.lensTech.filters.normal.visualStatus}
                        </span>
                      </div>
                    )}

                  </motion.div>
                </div>

                {/* Bottom interactive legend */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#18181B]/90 backdrop-blur-md border border-[#36322C] flex items-center justify-between text-xs">
                  <span className="text-[#D8CEBE]">
                    {t.lensTech.selectLabel}: <strong className="text-[#E5C378] capitalize">{t.lensTech.filters[activeFilter].title}</strong>
                  </span>
                  <span className="text-[11px] text-[#86EFAC] font-bold">
                    {t.common.graduation24h}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Lens Tech Cards Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {t.lensTech.featuresList.map((tech, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#22201D] border border-[#36322C] space-y-1.5 hover:border-[#C5A059]/50 transition-colors">
              <div className="flex items-center gap-1.5 text-[#E5C378] font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C5A059]" />
                <span>{tech.name}</span>
              </div>
              <p className="text-xs text-[#D8CEBE] leading-relaxed">{tech.desc}</p>
              <span className="text-[10px] text-[#A89F91] font-medium block pt-1">{tech.tag}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
