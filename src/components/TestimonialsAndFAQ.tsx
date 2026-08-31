import { useState } from 'react';
import { Star, ChevronDown, ChevronUp, MessageSquare, HelpCircle, CheckCircle, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function TestimonialsAndFAQ() {
  const { t } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>(t.testimonials.faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const testimonialImages: string[] = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
  ];

  return (
    <section id="opiniones" className="py-20 bg-[var(--bg-page)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= TESTIMONIALS ================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-badge)] text-[var(--bg-badge-text)] border border-[var(--border-badge)] text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
              {t.testimonials.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-outfit">
              {t.testimonials.title}
            </h2>
            <p className="mt-4 text-base text-[var(--text-secondary)]">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.items.map((test, idx) => (
              <div
                key={test.id}
                className="bg-[var(--bg-card)] rounded-3xl p-7 border border-[var(--border-main)] shadow-xs hover:shadow-md hover:border-[#C5A059] transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Stars and Branch Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#C5A059]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[var(--text-muted)] px-2.5 py-0.5 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                      {test.branch}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic mb-6">
                    &ldquo;{test.comment}&rdquo;
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-[var(--border-subtle)]">
                  <img
                    src={testimonialImages[idx % testimonialImages.length]}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[var(--border-main)]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1">
                      <span>{test.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#4E715B] dark:text-[#5C876D]" />
                    </h4>
                    <span className="text-xs text-[var(--text-muted)]">{test.role}</span>
                  </div>
                </div>

                <div className="absolute top-6 right-6 text-[var(--border-main)] group-hover:text-[#C5A059]/40 transition-colors pointer-events-none">
                  <Quote className="w-8 h-8 opacity-40" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FAQ SECTION ================= */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-badge)] text-[var(--bg-badge-text)] border border-[var(--border-badge)] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              {t.testimonials.faqBadge}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-outfit">
              {t.testimonials.faqTitle}
            </h3>
          </div>

          <div className="space-y-4">
            {t.testimonials.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'bg-[var(--bg-card)] border-[#C5A059] shadow-md' 
                      : 'bg-[var(--bg-card)] border-[var(--border-main)] hover:border-[#C5A059]/60'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                      {faq.question}
                    </span>
                    <div className="p-1 rounded-full bg-[var(--bg-surface-elevated)] text-[#C5A059] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)]">
                          <p className="pt-3">{faq.answer}</p>
                          <div className="mt-3 inline-block text-[11px] font-semibold text-[#C5A059] bg-[var(--bg-surface-elevated)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)]">
                            {faq.category}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
