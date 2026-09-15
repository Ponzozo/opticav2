import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  ExternalLink, 
  Send, 
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { trackWhatsAppInteraction } from '../utils/analytics';

interface AppointmentSectionProps {
  initialService?: string;
}

export function AppointmentSection({ initialService = '' }: AppointmentSectionProps) {
  const { t, language } = useLanguage();
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Single Flagship Branch Information
  const branchInfo = {
    name: 'Boutique Insignia - Paseo de la Reforma',
    address: 'Av. Paseo de la Reforma 222, Piso 1, Col. Juárez, Cuauhtémoc, CDMX',
    city: 'Ciudad de México',
    phone: '+52 (55) 5123-4567',
    waNumber: '525551234567',
    mapUrl: 'https://maps.google.com/?q=Paseo+de+la+Reforma+222+CDMX',
    scheduleWeek: 'Lunes a Viernes: 09:00 - 20:00 hrs',
    scheduleSat: 'Sábados: 10:00 - 18:00 hrs',
    scheduleSun: 'Domingos: 11:00 - 16:00 hrs',
  };

  const handleSendMainWhatsApp = (customQuery?: string) => {
    const serviceText = initialService ? ` para el servicio de ${initialService}` : '';
    const query = customQuery || `¡Hola Blick Optic! 👋 Me gustaría agendar mi examen de la vista${serviceText} en la Boutique de Paseo de la Reforma. ¿Qué horarios tienen disponibles?`;
    
    trackWhatsAppInteraction('contact_section_whatsapp', {
      source: 'contact_section_main_cta',
      branch: branchInfo.name,
      service: initialService,
      language,
      message_preview: query,
    });

    const url = `https://wa.me/${branchInfo.waNumber}?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  };

  const handleCopyPhone = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(branchInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const quickInquiries = [
    { label: '📅 Agendar examen de la vista', text: '¡Hola! Quisiera agendar un examen de la vista computarizado en su boutique de Reforma.' },
    { label: '👓 Cotizar armazones y micas', text: '¡Hola! Me gustaría cotizar armazones graduados y tipos de micas.' },
    { label: '📍 Ubicación y estacionamiento', text: '¡Hola! ¿Podrían indicarme la ubicación exacta y detalles de acceso de su boutique en Reforma 222?' },
    { label: '⚡ Entrega express en 24h', text: '¡Hola! Quisiera saber más sobre su servicio de graduación y entrega express.' },
  ];

  return (
    <section id="citas" className="py-20 bg-[var(--bg-page)] relative transition-colors duration-300">
      {/* Alias anchors for contacto and appointment */}
      <span id="contacto" className="absolute -top-28 pointer-events-none" aria-hidden="true" />
      <span id="appointment" className="absolute -top-28 pointer-events-none" aria-hidden="true" />
      <span id="agenda" className="absolute -top-28 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-badge)] text-[var(--bg-badge-text)] border border-[var(--border-badge)] text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            {t.appointment.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight font-outfit">
            {t.appointment.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {t.appointment.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase: Left = Agenda tu Examen & Benefits | Right = Direct WhatsApp Action Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
          
          {/* Left Column: Agenda tu Examen (Clinical Values & Steps) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[var(--bg-card)] rounded-3xl p-7 border border-[var(--border-main)] shadow-xs">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                Atención Optométrica Profesional
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-outfit mb-4">
                Tu salud visual en manos de expertos
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                En Blick Optic realizamos una evaluación clínica integral con tecnología alemana de refracción digital. Nuestro equipo te guía para encontrar la graduación idónea y el armazón que mejor armonice con tu rostro.
              </p>

              {/* 3 Value Pillars */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                  <div className="w-8 h-8 rounded-xl bg-[#4E715B]/20 text-[#4E715B] dark:text-[#5C876D] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                      {t.appointment.benefit1Title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      {t.appointment.benefit1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                  <div className="w-8 h-8 rounded-xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                      {t.appointment.benefit2Title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      {t.appointment.benefit2Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                  <div className="w-8 h-8 rounded-xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                      {t.appointment.benefit3Title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      {t.appointment.benefit3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Badge for Free Exam with Frames */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#B88E3E]/15 via-[#C5A059]/15 to-[#8C5E2D]/15 border border-[#C5A059]/30 flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-xs font-bold text-[var(--text-primary)]">
                  Examen de la vista sin costo
                </p>
                <p className="text-[11px] text-[var(--text-secondary)]">
                  Al adquirir tu armazón y micas en cualquiera de nuestras boutiques.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Contact Action Card (Replaces the old form) */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--bg-card)] rounded-3xl p-7 sm:p-10 border-2 border-[#25D366]/40 dark:border-[#25D366]/30 shadow-lg relative overflow-hidden">
              
              {/* Decorative WhatsApp Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Status Header */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-[#25D366]/30 shrink-0">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                      <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider">
                        Atención Inmediata por WhatsApp
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-outfit mt-0.5">
                      Agenda tu Examen en 1 Clic
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[11px] font-semibold text-[var(--text-muted)]">
                  ⚡ Respuesta &lt; 5 min
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Sin trámites ni formularios largos. Envíanos un mensaje directo por WhatsApp para agendar tu examen de la vista, consultar disponibilidad en tu sucursal favorita o cotizar tus micas personalizadas.
              </p>

              {/* Single Branch Location Banner */}
              <div className="mb-6 p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-main)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                        Boutique Insignia
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#4E715B]/15 text-[#4E715B] dark:text-[#5C876D] text-[10px] font-bold">
                        Abierto Hoy
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] font-outfit block mt-0.5">
                      {branchInfo.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Prominent WhatsApp Button */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleSendMainWhatsApp()}
                  id="btn-enviar-mensaje-whatsapp"
                  className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-base sm:text-lg shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-3 group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Mandar mensaje de WhatsApp</span>
                  <Send className="w-4 h-4 opacity-80" />
                </button>
                <p className="text-center text-[11px] text-[var(--text-muted)]">
                  Te responderemos al instante con los horarios disponibles para tu examen.
                </p>
              </div>

              {/* Quick Consultation Pills */}
              <div>
                <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-2.5">
                  O elige una consulta rápida:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {quickInquiries.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMainWhatsApp(q.text)}
                      className="text-left p-3 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[#25D366]/10 hover:border-[#25D366]/50 border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer truncate shadow-2xs group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">
                        {q.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= SUCURSAL DIRECTORY (SINGLE BOUTIQUE) ================= */}
        <div className="pt-8 border-t border-[var(--border-subtle)]">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                Ubicación Principal
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-outfit">
                Nuestra Boutique Insignia
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Ven a conocer nuestra boutique insignia o escríbenos directamente por WhatsApp.
            </p>
          </div>

          {/* Single Branch Full Presentation Card */}
          <div className="rounded-3xl p-6 sm:p-8 border border-[#C5A059]/50 bg-[var(--bg-card)] shadow-lg relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Branch Details & Hours (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-badge)] text-[var(--bg-badge-text)] border border-[var(--border-badge)] text-xs font-bold">
                      {t.appointment.mainBadge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#4E715B]/15 text-[#4E715B] dark:text-[#5C876D] text-xs font-bold">
                      Valet Parking de Cortesía
                    </span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-outfit">
                    {branchInfo.name}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2">
                    <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold">
                      <MapPin className="w-4 h-4 text-[#C5A059]" />
                      <span>Dirección</span>
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {branchInfo.address}
                    </p>
                    <p className="text-[11px] text-[var(--text-muted)]">
                      Ref: A pasos de Glorieta de la Palma y estación Metrobús Reforma.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2">
                    <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold">
                      <Clock className="w-4 h-4 text-[#4E715B] dark:text-[#5C876D]" />
                      <span>Horarios de Atención</span>
                    </div>
                    <p className="text-xs text-[var(--text-primary)] font-semibold">
                      {branchInfo.scheduleWeek}
                    </p>
                    <p className="text-[11px] text-[var(--text-muted)]">
                      {branchInfo.scheduleSat} • {branchInfo.scheduleSun}
                    </p>
                  </div>
                </div>

                {/* Telephone & Contact */}
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-subtle)]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--text-muted)] uppercase font-bold block">Teléfono Directo</span>
                      <span className="font-mono text-sm font-bold text-[var(--text-primary)]">{branchInfo.phone}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[#C5A059] text-xs font-bold text-[var(--text-primary)] flex items-center gap-2 cursor-pointer transition-all shadow-2xs"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-4 h-4 text-[#4E715B]" />
                        <span className="text-[#4E715B]">¡Teléfono Copiado!</span>
                      </>
                    ) : (
                      <>
                        <span>Copiar Teléfono</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Actions & Amenities (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  Contacto y Cómo Llegar
                </h5>

                <button
                  onClick={() => handleSendMainWhatsApp()}
                  id="btn-whatsapp-sucursal-unica"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-md shadow-[#25D366]/20 transition-all cursor-pointer group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Escribir por WhatsApp a la Sucursal</span>
                </button>

                <a
                  href={branchInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--border-main)] text-[var(--text-primary)] border border-[var(--border-main)] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#C5A059]" />
                  <span>Abrir ubicación en Google Maps</span>
                </a>

                {/* Highlights */}
                <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4E715B] dark:text-[#5C876D] shrink-0" />
                    <span>Examen de la vista computarizado de alta precisión</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4E715B] dark:text-[#5C876D] shrink-0" />
                    <span>Más de 500 armazones de diseñador para probarte</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4E715B] dark:text-[#5C876D] shrink-0" />
                    <span>Barra de café espresso de cortesía para pacientes</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
