import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, ShieldCheck, Clock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { trackWhatsAppInteraction } from '../utils/analytics';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: typeof Eye;
}

export function FAQSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const faqs_es: FAQItem[] = [
    {
      id: 'faq-1',
      question: '¿Con qué frecuencia debo revisar mis ojos?',
      answer: 'Los especialistas recomendamos realizarte un examen visual completo al menos una vez al año para adultos y niños. Sin embargo, si pasas más de 6 horas al día frente a pantallas de computadora, usas lentes de contacto o experimentas fatiga ocular, visión borrosa o cefaleas frecuentes, es aconsejable evaluarte cada 6 meses.',
      category: 'Salud Visual',
      icon: Eye,
    },
    {
      id: 'faq-2',
      question: '¿Tienen convenios con seguros y aseguradoras?',
      answer: 'Sí. Contamos con convenios y facilidades de reembolso con las principales aseguradoras del país (como GNP, MetLife, AXA, Seguros Monterrey, Mapfre, entre otras). Emitimos factura fiscal detallada con el desglose clínico y cédula del optometrista para que tu trámite de reembolso sea rápido y sin contratiempos.',
      category: 'Seguros y Pagos',
      icon: FileText,
    },
    {
      id: 'faq-3',
      question: '¿El examen de la vista tiene algún costo?',
      answer: 'El examen de la vista computarizado con refracción digital es 100% gratuito al adquirir tu armazón y micas en nuestra boutique. Si únicamente requieres la evaluación optométrica y la receta médica sin adquirir lentes, se aplica una cuota de recuperación de $250 MXN.',
      category: 'Consulta',
      icon: CheckCircle2,
    },
    {
      id: 'faq-4',
      question: '¿Cuánto tiempo tarda la entrega de mis lentes graduados?',
      answer: 'Para graduaciones monofocales convencionales contamos con nuestro servicio de entrega rápida en 24 a 48 horas hábiles. Para micas de alta tecnología (como progresivos digitales de campo amplio, lentes fotocromáticos Transitions o alto índice ultradelgado), el tiempo de tallado en laboratorio es de 3 a 5 días hábiles.',
      category: 'Entrega',
      icon: Clock,
    },
    {
      id: 'faq-5',
      question: '¿Qué tipo de micas recomiendan para trabajar frente a pantallas?',
      answer: 'Recomendamos micas con tratamiento Blue Block selectivo y antirreflejante de alta gama. Esta tecnología filtra la radiación azul nociva emitida por monitores, tabletas y teléfonos, reduciendo notablemente el ojo seco, la fatiga visual nocturna y mejorando el contraste de lectura.',
      category: 'Micas y Tecnología',
      icon: Eye,
    },
    {
      id: 'faq-6',
      question: '¿Puedo llevar mi propio armazón para graduarlo?',
      answer: '¡Por supuesto! Nuestros optometristas evaluarán la estructura, material y estado de tu armazón para confirmar que resista el biselado y montaje. Te asesoraremos con el tipo de mica más adecuado para tu modelo sin compromiso.',
      category: 'Armazones',
      icon: ShieldCheck,
    },
    {
      id: 'faq-7',
      question: '¿Qué garantía ofrecen en sus armazones y micas?',
      answer: 'Ofrecemos 1 año de garantía total contra defectos de fabricación en todos nuestros armazones y desprendimiento de tratamientos en micas. Además, cuentas con 30 días de garantía de satisfacción óptica: si sientes dificultad para adaptarte a tu graduación, reajustamos tus parámetros sin costo alguno.',
      category: 'Garantía',
      icon: ShieldCheck,
    },
  ];

  const faqs_en: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How often should I have my eyes examined?',
      answer: 'Eye care professionals recommend a comprehensive vision exam at least once a year for both adults and children. However, if you spend over 6 hours daily in front of screens, wear contact lenses, or experience eye strain, blurred vision, or headaches, we advise an evaluation every 6 months.',
      category: 'Eye Health',
      icon: Eye,
    },
    {
      id: 'faq-2',
      question: 'Do you work with insurance providers?',
      answer: 'Yes. We provide direct billing agreements and reimbursement documentation for major insurance companies (such as GNP, MetLife, AXA, Seguros Monterrey, and international travel health insurers). We issue detailed itemized fiscal invoices with our optometrist credentials for seamless reimbursement approval.',
      category: 'Insurance & Billing',
      icon: FileText,
    },
    {
      id: 'faq-3',
      question: 'Does the eye exam have a cost?',
      answer: 'The digital computerized refraction eye exam is 100% complimentary when purchasing your frames and prescription lenses at our boutique. If you only require the diagnostic prescription without purchasing eyewear, a modest fee applies.',
      category: 'Appointment',
      icon: CheckCircle2,
    },
    {
      id: 'faq-4',
      question: 'How long does it take to deliver my prescription glasses?',
      answer: 'For standard single-vision lenses, our express lab service delivers within 24 to 48 business hours. For specialized digital progressives or advanced Transitions photochromic lenses, precise laboratory calibration takes 3 to 5 business days.',
      category: 'Delivery',
      icon: Clock,
    },
    {
      id: 'faq-5',
      question: 'Which lens treatments do you recommend for digital screen work?',
      answer: 'We recommend selective Blue-Block lenses paired with high-definition anti-reflective coating. This eliminates digital eye fatigue, dry eyes, and glare caused by prolonged screen exposure while optimizing visual contrast.',
      category: 'Lenses & Optics',
      icon: Eye,
    },
    {
      id: 'faq-6',
      question: 'Can I bring my own frames to have lenses fitted?',
      answer: 'Absolutely! Our specialists inspect your existing frame to verify structural integrity and frame curvature, recommending the ideal lens index and bevel type for a perfect fit.',
      category: 'Frames',
      icon: ShieldCheck,
    },
    {
      id: 'faq-7',
      question: 'What warranty do you offer on frames and lenses?',
      answer: 'We provide a 1-year comprehensive manufacturer warranty on all frames and lens coating integrity. Additionally, you receive our 30-day optical adaptation guarantee: if you experience adaptation difficulties with your new prescription, we readjust your lenses at no extra charge.',
      category: 'Warranty',
      icon: ShieldCheck,
    },
  ];

  const currentFaqs = language === 'en' ? faqs_en : faqs_es;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppInquiry = () => {
    const query = language === 'en' 
      ? 'Hello Blick Optic! 👋 I have a question about vision exams and frames.'
      : '¡Hola Blick Optic! 👋 Tengo una duda sobre los exámenes de la vista y armazones.';

    trackWhatsAppInteraction('faq_whatsapp_inquiry', {
      source: 'faq_bottom_banner',
      language,
    });

    const url = `https://wa.me/525551234567?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-[var(--bg-surface-elevated)] relative transition-colors duration-300 border-t border-[var(--border-subtle)]">
      {/* Alias anchor for preguntas-frecuentes */}
      <span id="preguntas-frecuentes" className="absolute -top-28 pointer-events-none" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-badge)] text-[var(--bg-badge-text)] border border-[var(--border-badge)] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{language === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-outfit">
            {language === 'en' ? 'Answers to Your Vision Questions' : 'Resolvemos tus Dudas sobre Salud Visual'}
          </h2>
          
          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            {language === 'en' 
              ? 'Clear, professional answers about eye exams, insurance coverage, delivery times, and lens technologies.'
              : 'Todo lo que necesitas saber sobre revisiones ópticas, cobertura de aseguradoras, tiempos de entrega y garantías.'}
          </p>
        </div>

        {/* Accordion List (Max 7 Questions) */}
        <div className="space-y-3.5 mb-12">
          {currentFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[var(--bg-card)] border-[#C5A059]/60 shadow-md ring-1 ring-[#C5A059]/30'
                    : 'bg-[var(--bg-card)] border-[var(--border-main)] hover:border-[#C5A059]/40 hover:bg-[var(--bg-card)]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] font-outfit">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 text-[var(--text-muted)] ${
                    isOpen ? 'rotate-180 text-[#C5A059] bg-[#C5A059]/10' : 'bg-[var(--bg-surface-elevated)]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)]">
                        <p className="mt-2">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Inquiry Bottom Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[var(--bg-card)] border border-[#25D366]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-[#25D366]/20 shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[var(--text-primary)] font-outfit">
                {language === 'en' ? 'Have a specific question?' : '¿Tienes alguna otra duda o caso especial?'}
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                {language === 'en' 
                  ? 'Chat with our certified optometrists on WhatsApp. We answer in minutes.'
                  : 'Nuestros optometristas certificados te orientan por WhatsApp de inmediato.'}
              </p>
            </div>
          </div>

          <button
            onClick={handleWhatsAppInquiry}
            id="btn-faq-whatsapp-pregunta"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#25D366]/20 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === 'en' ? 'Ask on WhatsApp' : 'Preguntar por WhatsApp'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
