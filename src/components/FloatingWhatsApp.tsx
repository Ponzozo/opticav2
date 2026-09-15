import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, Send, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { trackWhatsAppInteraction } from '../utils/analytics';

export function FloatingWhatsApp() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  
  // Track if the user has already manually interacted with the WhatsApp widget
  const [hasInteracted, setHasInteracted] = useState(() => {
    return typeof window !== 'undefined' && sessionStorage.getItem('blick_wa_interacted') === 'true';
  });

  const hasAutoTriggeredRef = useRef<boolean>(
    typeof window !== 'undefined' && sessionStorage.getItem('blick_wa_auto_triggered_50') === 'true'
  );

  const markInteracted = useCallback(() => {
    setHasInteracted(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('blick_wa_interacted', 'true');
    }
  }, []);

  // Auto-trigger WhatsApp modal once when scrolling past 50% of the page length
  useEffect(() => {
    if (hasInteracted || hasAutoTriggeredRef.current) return;

    const handleScroll = () => {
      if (hasInteracted || hasAutoTriggeredRef.current) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 100) {
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        if (scrollPercent >= 50) {
          hasAutoTriggeredRef.current = true;
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('blick_wa_auto_triggered_50', 'true');
          }
          trackWhatsAppInteraction('open_chat', {
            source: 'scroll_50_auto_trigger',
            language,
          });
          setIsOpen(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check immediately in case page loads in middle/deep anchor
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasInteracted, language]);

  // Trigger typing simulation whenever user opens the WhatsApp chat modal
  useEffect(() => {
    if (isOpen) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 1600);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [isOpen]);

  // Dynamically calculate greeting, status note and quick questions based on the current hour & active language
  const timeContext = useMemo(() => {
    const hour = new Date().getHours();
    
    if (hour >= 6 && hour < 12) {
      return {
        greeting: t.whatsapp.morningGreeting,
        subtext: t.whatsapp.morningSubtext,
        badge: t.whatsapp.morningBadge,
        questions: t.whatsapp.morningQuestions,
      };
    } else if (hour >= 12 && hour < 19) {
      return {
        greeting: t.whatsapp.afternoonGreeting,
        subtext: t.whatsapp.afternoonSubtext,
        badge: t.whatsapp.afternoonBadge,
        questions: t.whatsapp.afternoonQuestions,
      };
    } else {
      return {
        greeting: t.whatsapp.nightGreeting,
        subtext: t.whatsapp.nightSubtext,
        badge: t.whatsapp.nightBadge,
        questions: t.whatsapp.nightQuestions,
      };
    }
  }, [t]);

  const handleSend = (textToSend?: string) => {
    markInteracted();
    const message = textToSend || customMsg || timeContext.questions[0] || 'Hola Blick Optic';
    trackWhatsAppInteraction(textToSend ? 'quick_question' : 'send_message', {
      source: textToSend ? 'quick_question_pill' : 'chat_input',
      message_preview: message,
      language,
    });
    const url = `https://wa.me/525551234567?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  const handleToggleOpen = () => {
    markInteracted();
    const willBeOpen = !isOpen;
    if (willBeOpen) {
      trackWhatsAppInteraction('open_chat', {
        source: 'floating_trigger_button',
        language,
      });
    } else {
      trackWhatsAppInteraction('close_chat', {
        source: 'floating_trigger_button',
        language,
      });
    }
    setIsOpen(willBeOpen);
  };

  const handleClose = () => {
    markInteracted();
    trackWhatsAppInteraction('close_chat', {
      source: 'modal_close_button',
      language,
    });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Interactive Chat Bubble popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 sm:w-92 bg-white rounded-3xl shadow-2xl border border-[#EBE4D8] overflow-hidden text-[#18181B]"
          >
            {/* Header with Visual Online Indicator & Typing Status Simulation */}
            <div className="p-4 bg-[#18181B] text-white flex items-center justify-between border-b border-[#36322C]">
              <div className="flex items-center gap-3">
                
                {/* Avatar with Live Green Status Pulse */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center font-bold text-xs text-[#E5C378]">
                    BO
                  </div>
                  {/* Glowing online indicator ring */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#4E715B] border-2 border-[#18181B] rounded-full"></span>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#4E715B] rounded-full animate-ping opacity-60"></span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold leading-tight text-[#E5C378]">{t.whatsapp.optometristRole}</h4>
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#E5C378] border border-[#C5A059]/30">
                      {timeContext.badge}
                    </span>
                  </div>

                  {/* Header Subtitle: switches dynamically between typing simulation and live online status */}
                  <div className="text-[11px] mt-0.5 min-h-[16px] flex items-center gap-1.5">
                    {isTyping ? (
                      <div className="flex items-center gap-1 text-[#E5C378] font-medium animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                        <span>{t.whatsapp.typingStatus}</span>
                        <span className="inline-flex gap-0.5 ml-0.5">
                          <span className="w-1 h-1 bg-[#E5C378] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-1 h-1 bg-[#E5C378] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-1 h-1 bg-[#E5C378] rounded-full animate-bounce"></span>
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-[#D8CEBE] transition-opacity duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4E715B] animate-pulse"></span>
                        <span className="text-[#4E715B] font-semibold">{t.whatsapp.onlineStatusLabel}</span>
                        <span className="text-[#8C8275]">•</span>
                        <span className="truncate max-w-[140px]">{timeContext.subtext}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handleClose}
                aria-label="Cerrar chat"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#D8CEBE] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3 bg-[var(--bg-page)] text-xs transition-colors duration-300">
              
              {/* Message Greeting with Typing Transition Effect */}
              {isTyping ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-[var(--bg-card)] rounded-2xl rounded-tl-none shadow-2xs border border-[var(--border-main)] flex items-center gap-2 text-[var(--text-muted)]"
                >
                  <div className="flex items-center gap-1 px-1">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce"></span>
                  </div>
                  <span className="text-[11px] italic font-medium">{t.whatsapp.typingStatus}</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 bg-[var(--bg-card)] rounded-2xl rounded-tl-none shadow-2xs border border-[var(--border-main)] text-[var(--text-secondary)] leading-relaxed"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#4E715B] dark:text-[#5C876D] mb-1 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4E715B] dark:bg-[#5C876D]"></span>
                    <span>{t.whatsapp.onlineStatusLabel}</span>
                  </div>
                  {timeContext.greeting} <strong className="text-[var(--text-primary)]">Blick Optic</strong>. {t.whatsapp.onlineStatus}.
                </motion.div>
              )}

              {/* Quick Questions Section */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    {t.whatsapp.quickHelpTitle}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--text-muted)] font-normal normal-case">
                    <Clock className="w-3 h-3 text-[#C5A059]" /> {t.whatsapp.currentScheduleLabel}
                  </span>
                </div>
                {timeContext.questions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="w-full text-left p-2.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-surface-elevated)] hover:text-[#C5A059] border border-[var(--border-main)] hover:border-[#C5A059] transition-all text-[11px] font-medium text-[var(--text-primary)] block truncate cursor-pointer shadow-2xs group"
                  >
                    <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                      💬 {q}
                    </span>
                  </button>
                ))}
              </div>

              {/* Message Input Box */}
              <div className="pt-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t.whatsapp.customPlaceholder}
                    value={customMsg}
                    onFocus={markInteracted}
                    onChange={(e) => {
                      markInteracted();
                      setCustomMsg(e.target.value);
                    }}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                    className="w-full pl-3.5 pr-10 py-2.5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-main)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#C5A059] shadow-2xs"
                  />
                  <button
                    onClick={() => handleSend()}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-[#C5A059] hover:bg-[#D8B26E] text-[#18181B] rounded-lg transition-colors cursor-pointer"
                    aria-label={t.whatsapp.sendBtn}
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={handleToggleOpen}
        id="btn-floating-whatsapp"
        aria-label="WhatsApp Blick Optic"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <MessageCircle className="w-8 h-8 fill-white text-white" />
        
        {/* Floating tooltip on hover */}
        {!isOpen && (
          <span className="absolute right-20 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#18181B] text-[#E5C378] border border-[#C5A059]/40 text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            {t.whatsapp.tooltipText}
          </span>
        )}

        <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#C5A059] text-[#18181B] text-xs font-black rounded-full flex items-center justify-center border-2 border-white shadow-[0_2px_6px_rgba(255,255,255,0.75)] drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]">
          1
        </span>
      </button>

    </div>
  );
}
