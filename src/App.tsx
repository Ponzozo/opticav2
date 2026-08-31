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
import { LensTechnology } from './components/LensTechnology';
import { AboutSection } from './components/AboutSection';
import { AppointmentSection } from './components/AppointmentSection';
import { TestimonialsAndFAQ } from './components/TestimonialsAndFAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';

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

        {/* 5. Lens Technology & Optical Simulator */}
        <LensTechnology />

        {/* 6. About Us / Medical Quality Section */}
        <AboutSection />

        {/* 7. Appointment / Contact Form Section */}
        <AppointmentSection initialService={preselectedService} />

        {/* 8. Testimonials and FAQs */}
        <TestimonialsAndFAQ />
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

