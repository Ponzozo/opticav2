import { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BlickLogo } from './BlickLogo';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import { trackWhatsAppInteraction } from '../utils/analytics';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const { t, language } = useLanguage();

  const navLinks = [
    { name: t.navbar.home, href: '#inicio', id: 'inicio' },
    { name: t.navbar.services, href: '#servicios', id: 'servicios' },
    { name: t.navbar.catalog, href: '#catalogo', id: 'catalogo' },
    { name: t.navbar.boutique, href: '#acerca-de', id: 'acerca-de' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: language === 'en' ? 'Appointments' : 'Citas', href: '#citas', id: 'citas' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active visible section
      const sectionIds = ['citas', 'faq', 'acerca-de', 'catalogo', 'servicios', 'inicio'];
      const scrollY = window.scrollY;
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height + 40 : 120;

      for (const id of sectionIds) {
        let el = document.getElementById(id);
        if (!el && id === 'faq') el = document.getElementById('preguntas-frecuentes');
        if (!el && id === 'citas') el = document.getElementById('contacto');

        if (el) {
          const top = el.offsetTop - headerHeight;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    let element = document.getElementById(targetId);

    if (!element) {
      if (targetId === 'faq' || targetId === 'preguntas-frecuentes') {
        element = document.getElementById('faq') || document.getElementById('preguntas-frecuentes');
      } else if (targetId === 'citas' || targetId === 'contacto' || targetId === 'appointment' || targetId === 'agenda') {
        element = document.getElementById('citas') || document.getElementById('contacto') || document.getElementById('appointment') || document.getElementById('agenda');
      }
    }

    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight + 2;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    }
  };

  const isSectionActive = (linkId: string) => {
    if (activeSection === linkId) return true;
    if (linkId === 'faq' && (activeSection === 'faq' || activeSection === 'preguntas-frecuentes')) return true;
    if (linkId === 'citas' && (activeSection === 'citas' || activeSection === 'contacto' || activeSection === 'appointment')) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar for boutique hours & contact & language */}
      <div className="hidden md:block bg-[var(--bg-nav-top)] text-[#D8CEBE] text-xs py-1.5 px-4 border-b border-[#2D2A26] transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#EDE5D8] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              {t.navbar.topBarSchedule}
            </span>
            <span className="flex items-center gap-1.5 text-[#D8CEBE]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              {t.navbar.topBarLocation}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#E5C378] border border-[#C5A059]/30 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
              {t.navbar.topBarPromo}
            </span>
            <a 
              href="https://wa.me/525551234567?text=%C2%A1Hola%20Blick%20Optic!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20o%20agendar%20mi%20examen." 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppInteraction('navbar_whatsapp', { source: 'topbar_whatsapp_link' })}
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#1EBE5D] transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="tel:+525551234567" 
              className="flex items-center gap-1.5 text-[#F5F0E6] hover:text-[#C5A059] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              +52 (55) 5123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[var(--bg-nav)] backdrop-blur-md shadow-md border-b border-[var(--border-main)] py-3' 
            : 'bg-[var(--bg-nav)] backdrop-blur-sm border-b border-[var(--border-main)] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with Exact Blick Optic Emblem */}
          <a 
            href="#inicio" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex items-center group focus:outline-none shrink-0"
            id="brand-logo-link"
          >
            <BlickLogo variant="horizontal" theme="auto" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => {
              const active = isSectionActive(link.id);
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                    active
                      ? 'text-[#C5A059] bg-[#C5A059]/15 shadow-2xs font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Right Controls: Language Selector + Theme Toggle + Booking CTA */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <LanguageSelector variant="dropdown" theme="auto" />
            <ThemeToggle variant="icon" />

            <button
              onClick={onOpenBookingModal}
              id="navbar-agendar-cita-btn"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] hover:from-[#A6763D] hover:to-[#8C5E2D] text-[#18181B] font-bold text-xs sm:text-sm shadow-md shadow-[#C5A059]/25 hover:shadow-lg hover:shadow-[#C5A059]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer shrink-0"
            >
              <Calendar className="w-4 h-4 text-[#18181B]" />
              <span>{t.navbar.bookAppointment}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#18181B]" />
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Language Selector + Mobile Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle variant="icon" />
            <LanguageSelector variant="dropdown" theme="auto" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Abrir menú de navegación"
              className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--bg-page)] border-b border-[var(--border-main)] shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              
              {/* Language Selection Segmented Bar inside Mobile Drawer */}
              <div className="pb-2 border-b border-[var(--border-main)]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-subtle)] mb-1.5 block">
                  {t.navbar.selectLanguage}
                </span>
                <LanguageSelector variant="segmented" theme="auto" />
              </div>

              {/* Theme Toggle Pill inside Mobile Drawer */}
              <div className="pb-2 border-b border-[var(--border-main)]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-subtle)] mb-1.5 block">
                  Tema / Theme
                </span>
                <ThemeToggle variant="segmented" />
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const active = isSectionActive(link.id);
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                        active
                          ? 'text-[#C5A059] bg-[#C5A059]/15 font-bold'
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
              
              <div className="pt-3 border-t border-[var(--border-main)] flex flex-col gap-3">
                <a
                  href="https://wa.me/525551234567?text=%C2%A1Hola%20Blick%20Optic!%20Quisiera%20agendar%20mi%20examen%20de%20la%20vista."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    trackWhatsAppInteraction('navbar_whatsapp', { source: 'mobile_drawer_whatsapp_btn' });
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base shadow-md shadow-[#25D366]/25 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Mandar WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] text-[#18181B] font-bold text-base shadow-md shadow-[#C5A059]/20 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-[#18181B]" />
                  <span>{t.navbar.bookAppointment}</span>
                </button>
                
                <a
                  href="tel:+525551234567"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-main)] text-[var(--text-primary)] font-semibold text-sm hover:bg-[var(--bg-surface-elevated)]"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>+52 (55) 5123-4567</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
