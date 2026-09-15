import { Phone, Mail, MapPin, Clock, ArrowUp, MessageCircle } from 'lucide-react';
import { BlickLogo } from './BlickLogo';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { trackWhatsAppInteraction } from '../utils/analytics';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121214] text-[#D8CEBE] pt-16 pb-12 border-t border-[#2A2621] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2A2621]">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BlickLogo size="md" theme="dark" showTagline={true} />

            <p className="text-xs text-[#A89E90] leading-relaxed pr-4 pt-1">
              {t.footer.bioText}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Blick Optic"
                className="w-9 h-9 rounded-xl bg-[#1E1C1A] hover:bg-[#C5A059] text-[#A89E90] hover:text-[#18181B] flex items-center justify-center transition-all font-bold text-xs"
              >
                fb
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Blick Optic"
                className="w-9 h-9 rounded-xl bg-[#1E1C1A] hover:bg-[#C5A059] text-[#A89E90] hover:text-[#18181B] flex items-center justify-center transition-all font-bold text-xs"
              >
                ig
              </a>
              <a
                href="https://wa.me/525551234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Blick Optic"
                className="w-9 h-9 rounded-xl bg-[#1E1C1A] hover:bg-[#25D366] text-[#A89E90] hover:text-white flex items-center justify-center transition-all font-bold text-xs"
              >
                wa
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Blick Optic"
                className="w-9 h-9 rounded-xl bg-[#1E1C1A] hover:bg-[#C5A059] text-[#A89E90] hover:text-[#18181B] flex items-center justify-center transition-all font-bold text-xs"
              >
                tk
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C378]">{t.footer.navHeader}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-[#E5C378] transition-colors">{t.navbar.home}</a></li>
              <li><a href="#servicios" className="hover:text-[#E5C378] transition-colors">{t.navbar.services}</a></li>
              <li><a href="#catalogo" className="hover:text-[#E5C378] transition-colors">{t.navbar.catalog}</a></li>
              <li><a href="#acerca-de" className="hover:text-[#E5C378] transition-colors">{t.navbar.boutique}</a></li>
              <li><a href="#preguntas-frecuentes" className="hover:text-[#E5C378] transition-colors">FAQ</a></li>
              <li><a href="#contacto" className="hover:text-[#E5C378] transition-colors">{t.navbar.contact}</a></li>
            </ul>
          </div>

          {/* Column 3: Optical Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C378]">{t.footer.treatmentsHeader}</h4>
            <ul className="space-y-2 text-xs text-[#A89E90]">
              {t.footer.treatments.map((item, idx) => (
                <li key={idx} className="hover:text-white transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C378]">{t.footer.contactHeader}</h4>
            <div className="space-y-2.5 text-xs text-[#A89E90]">
              
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{t.footer.mainAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/525551234567?text=%C2%A1Hola%20Blick%20Optic!%20Quisiera%20agendar%20mi%20examen%20de%20la%20vista." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppInteraction('footer_whatsapp', { source: 'footer_contact_link' })}
                  className="hover:text-[#25D366] text-[#25D366] font-semibold transition-colors"
                >
                  WhatsApp: +52 (55) 5123-4567
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+525551234567" className="hover:text-white transition-colors">+52 (55) 5123-4567</a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:citas@blickoptic.com" className="hover:text-white transition-colors">citas@blickoptic.com</a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#2A2621]">
                <Clock className="w-4 h-4 text-[#4E715B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#D8CEBE]">{t.footer.scheduleLabel}</p>
                  <p className="text-[11px] text-[#A89E90]">{t.footer.scheduleHours}</p>
                  <p className="text-[10px] text-[#8C8275]">{t.footer.scheduleSunday}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright & Language Switcher & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8275]">
          <p>{t.footer.copyrightText}</p>
          
          <div className="flex items-center gap-4">
            <LanguageSelector variant="segmented" theme="dark" />

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#1E1C1A] hover:bg-[#2A2621] text-[#A89E90] hover:text-[#E5C378] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Volver arriba"
            >
              <span>{t.footer.scrollTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
