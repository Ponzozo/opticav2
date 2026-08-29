import { useState, useRef } from 'react';
import { Eye, Glasses, Sparkles, CheckCircle, ArrowRight, Shield, Zap, Clock, Cpu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export function Services({ onOpenBookingModal }: ServicesProps) {
  const { t } = useLanguage();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const serviceImages: Record<string, string> = {
    'optometria-digital': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    'graduacion-armazones': 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80',
    'lentes-contacto': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  };

  const getServiceImage = (id: string, idx: number) => {
    return serviceImages[id] || Object.values(serviceImages)[idx % 3];
  };

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Eye className="w-6 h-6 text-[#C5A059]" />;
      case 1:
        return <Glasses className="w-6 h-6 text-[#8C5E2D]" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-[#4E715B]" />;
      default:
        return <Eye className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector<HTMLElement>('[data-service-card]')?.offsetWidth || 300;
      container.scrollTo({
        left: index * (cardWidth + 24),
        behavior: 'smooth',
      });
      setActiveSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector<HTMLElement>('[data-service-card]')?.offsetWidth || 300;
      const scrollIndex = Math.round(container.scrollLeft / (cardWidth + 24));
      setActiveSlide(Math.min(Math.max(scrollIndex, 0), t.services.items.length - 1));
    }
  };

  const selectedService = t.services.items.find(s => s.id === selectedServiceId);

  return (
    <section id="servicios" className="py-16 sm:py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBE3D3] text-[#18181B] border border-[#D5C6AC] text-xs font-bold tracking-wide uppercase mb-3">
            {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight font-outfit">
            {t.services.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5C5349]">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Mobile / Tablet Horizontal Carousel Controls */}
        <div className="flex md:hidden items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-[#8C5E2D] uppercase tracking-wide">
              {activeSlide + 1} / {t.services.items.length}
            </span>
            <span className="text-xs text-[#8C8375]">• Desliza para explorar</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSlide(Math.max(activeSlide - 1, 0))}
              disabled={activeSlide === 0}
              aria-label="Servicio anterior"
              className="w-8 h-8 rounded-full bg-white border border-[#E2D8C7] flex items-center justify-center text-[#18181B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F5EFE3] transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSlide(Math.min(activeSlide + 1, t.services.items.length - 1))}
              disabled={activeSlide === t.services.items.length - 1}
              aria-label="Siguiente servicio"
              className="w-8 h-8 rounded-full bg-white border border-[#E2D8C7] flex items-center justify-center text-[#18181B] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F5EFE3] transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Main Service Cards (Standardized Responsive Height with Internal Content Scroll & Mobile Carousel) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {t.services.items.map((service, idx) => (
            <motion.div
              key={service.id}
              data-service-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="w-[85vw] max-w-[340px] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-center group bg-white rounded-3xl overflow-hidden border border-[#EBE4D8] shadow-xs hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between h-[520px] sm:h-[550px] md:h-[570px] lg:h-[590px]"
            >
              {/* Card Header (Fixed Height) */}
              <div className="relative h-40 sm:h-44 shrink-0 overflow-hidden bg-[#18181B]">
                <img
                  src={getServiceImage(service.id, idx)}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 via-[#18181B]/30 to-transparent"></div>
                
                {/* Top Floating Badge */}
                <div className="absolute top-3 left-3">
                  {service.isFree ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4E715B] text-white font-bold text-xs shadow-md">
                      <Zap className="w-3 h-3 text-[#E5C378]" />
                      {t.common.freeWithFrames}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#18181B] text-[#E5C378] border border-[#C5A059]/40 font-bold text-xs shadow-md">
                      <Shield className="w-3 h-3 text-[#C5A059]" />
                      {t.common.oneYearWarranty}
                    </span>
                  )}
                </div>

                {/* Icon badge floating bottom */}
                <div className="absolute -bottom-3 right-4 w-12 h-12 rounded-2xl bg-white shadow-md border border-[#EBE4D8] flex items-center justify-center">
                  {getIcon(idx)}
                </div>
              </div>

              {/* Card Body with Clean Internal Scroll to Standardize Card Height */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 pt-4 space-y-3">
                <div>
                  <div className="text-[11px] font-bold text-[#8C5E2D] uppercase tracking-wider mb-1">
                    {service.tagline}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#18181B] font-outfit leading-snug group-hover:text-[#8C5E2D] transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 pt-2 border-t border-[#F3EFE6]">
                  <span className="text-[10px] font-bold text-[#8C5E2D] uppercase tracking-wider block">
                    {t.services.equipmentLabel}
                  </span>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs font-medium text-[#3F3931]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#4E715B] shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions (Fixed at Bottom) */}
              <div className="shrink-0 p-4 sm:p-5 border-t border-[#F3EFE6] flex items-center justify-between gap-2 bg-[#FAF8F5]">
                <button
                  onClick={() => setSelectedServiceId(service.id)}
                  className="text-xs font-bold text-[#5C5349] hover:text-[#18181B] transition-colors inline-flex items-center gap-1 cursor-pointer py-1.5"
                >
                  <span>{t.common.viewCatalog}</span>
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" />
                </button>

                <button
                  onClick={() => onOpenBookingModal(service.title)}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] hover:from-[#A6763D] hover:to-[#8C5E2D] text-[#18181B] text-xs font-bold shadow-2xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
                >
                  {t.common.bookAppointment}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slide Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4">
          {t.services.items.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToSlide(dotIdx)}
              aria-label={`Ir al servicio ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === dotIdx
                  ? 'w-6 bg-[#C5A059]'
                  : 'w-2 bg-[#D8CEBE] hover:bg-[#BFA88F]'
              }`}
            />
          ))}
        </div>

        {/* Diagnostic Equipment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#18181B] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#2D2A26]"
        >
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#E5C378] items-center justify-center shrink-0">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">{t.services.freeTag}</span>
              <h4 className="text-lg sm:text-xl font-bold font-outfit text-white">
                {t.common.digitalExam100}
              </h4>
              <p className="text-xs sm:text-sm text-[#D8CEBE] mt-1 max-w-2xl">
                {t.services.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenBookingModal(t.services.items[0]?.title || 'Examen de la Vista')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] hover:from-[#A6763D] hover:to-[#8C5E2D] text-[#18181B] font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              {t.services.bookExamBtn}
            </button>
          </div>
        </motion.div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FAF8F5] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EBE4D8]"
            >
              <div className="relative h-44 bg-[#18181B]">
                <img src={getServiceImage(selectedService.id, 0)} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#18181B]/70"></div>
                <button
                  onClick={() => setSelectedServiceId(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wide">{selectedService.tagline}</span>
                  <h3 className="text-xl font-bold text-white font-outfit">{selectedService.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-[#5C5349] leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="p-3.5 bg-white rounded-2xl border border-[#EBE4D8] space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#3F3931]">
                    <Cpu className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span><strong>{t.services.equipmentLabel}:</strong> {selectedService.equipment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#3F3931]">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span><strong>{t.services.durationLabel}:</strong> {selectedService.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase text-[#8C5E2D] tracking-wider">{t.services.badge}:</h5>
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#3F3931]">
                      <CheckCircle className="w-4 h-4 text-[#4E715B] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedServiceId(null);
                      onOpenBookingModal(title);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] hover:from-[#A6763D] hover:to-[#8C5E2D] text-[#18181B] font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    {t.common.bookAppointment}
                  </button>
                  <button
                    onClick={() => setSelectedServiceId(null)}
                    className="py-3 px-4 rounded-xl border border-[#D8CEBE] text-[#3F3931] font-semibold text-sm hover:bg-[#F3EFE6] transition-all cursor-pointer"
                  >
                    {t.common.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
