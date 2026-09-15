/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Catalog } from './components/Catalog';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';
import { SEO } from './components/SEO';

function MainApp() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (serviceOrFrame?: string) => {
    setPreselectedService(serviceOrFrame);
    setIsBookingModalOpen(true);
  };

  const handleScrollToCatalog = () => {
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
      const navOffset = 80;
      const elementPosition = catalogElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] selection:bg-[#C5A059] selection:text-[#18181B] relative transition-colors duration-300">
      <SEO />
      {/* 1. Navigation Bar with Multilingual Switcher and Dark/Light Mode Toggle */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      <main>
        {/* 2. Hero Section */}
        <Hero 
          onOpenBookingModal={() => handleOpenBookingModal()} 
          onScrollToCatalog={handleScrollToCatalog}
        />

        {/* 3. Services Section (3 main cards) */}
        <Services onOpenBookingModal={handleOpenBookingModal} />

        {/* 4. Catalog / Featured Frames Section (4 categories) */}
        <Catalog onOpenBookingModal={handleOpenBookingModal} />

        {/* 5. About Us / Medical Quality Section */}
        <AboutSection />

        {/* 6. Frequently Asked Questions (FAQ) Section */}
        <FAQSection />

        {/* 7. Appointment / WhatsApp Contact Section (Agenda tu Examen y Sucursal) */}
        <AppointmentSection initialService={preselectedService} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating Interactive WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 11. Quick Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedService={preselectedService}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}

