import { useState, useEffect, type FormEvent } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle, Sparkles, Send, ShieldCheck, AlertCircle, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { AppointmentFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AppointmentSectionProps {
  initialService?: string;
}

export function AppointmentSection({ initialService = '' }: AppointmentSectionProps) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    branch: t.appointment.branchesData[0]?.name || 'Sucursal Principal - Paseo de la Reforma',
    service: initialService || t.appointment.servicesOptions[0] || 'Examen de la Vista Computarizado',
    date: '',
    timeSlot: '10:00 AM',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const timeSlots = [
    '08:30 AM', '09:15 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '02:00 PM', '03:30 PM', '04:45 PM', '06:00 PM'
  ];

  // Minimum date today
  const todayDate = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Por favor ingresa tu nombre completo');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Por favor ingresa tu número telefónico');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Por favor ingresa tu correo electrónico');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Por favor selecciona una fecha');
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical scheduling
    setTimeout(() => {
      const randomCode = `VP-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingCode(randomCode);
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }
    }, 800);
  };

  const createWhatsAppLink = () => {
    const text = encodeURIComponent(
      `¡Hola Blick Optic! Acabo de agendar una cita en su web con el folio ${bookingCode}.\n` +
      `👤 Nombre: ${formData.fullName}\n` +
      `📍 Sucursal: ${formData.branch}\n` +
      `🩺 Servicio: ${formData.service}\n` +
      `📅 Fecha: ${formData.date} a las ${formData.timeSlot}`
    );
    return `https://wa.me/525551234567?text=${text}`;
  };

  const createGoogleCalendarLink = () => {
    const title = encodeURIComponent(`Cita en Blick Optic (${formData.service})`);
    const details = encodeURIComponent(`Cita confirmada código ${bookingCode} en ${formData.branch}. Teléfono: +52 (55) 5123-4567`);
    const location = encodeURIComponent(formData.branch);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section id="contacto" className="py-20 bg-[var(--bg-page)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Branch Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-badge)] text-[var(--bg-badge-text)] border border-[var(--border-badge)] text-xs font-bold uppercase tracking-wider mb-3">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                {t.appointment.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-outfit">
                {t.appointment.title}
              </h2>
              <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
                {t.appointment.subtitle}
              </p>
            </div>

            {/* Benefits of booking */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <CheckCircle className="w-5 h-5 text-[#4E715B] dark:text-[#5C876D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)]">{t.appointment.benefit1Title}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{t.appointment.benefit1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)]">{t.appointment.benefit2Title}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{t.appointment.benefit2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)]">{t.appointment.benefit3Title}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{t.appointment.benefit3Desc}</p>
                </div>
              </div>
            </div>

            {/* Branch Directory Cards */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">{t.appointment.branchesHeader}:</h4>
              <div className="space-y-3">
                {t.appointment.branchesData.map((b) => (
                  <div key={b.id} className="p-4 rounded-2xl border border-[var(--border-main)] hover:border-[#C5A059] transition-colors bg-[var(--bg-card)] shadow-2xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-[var(--text-primary)]">{b.name}</span>
                      {b.isMain && (
                        <span className="px-2 py-0.5 rounded-md bg-[var(--bg-badge)] text-[var(--bg-badge-text)] border border-[var(--border-badge)] text-[10px] font-bold">{t.appointment.mainBadge}</span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{b.address} • {b.city}</span>
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#4E715B] dark:text-[#5C876D] shrink-0" />
                      <span>{b.scheduleWeek}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--bg-card)] rounded-3xl p-6 sm:p-10 border border-[var(--border-main)] shadow-sm relative">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-outfit">
                  {t.appointment.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                  {t.appointment.formSubtitle}
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" id="form-agendar-cita">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                    {t.appointment.fullNameLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder={t.appointment.fullNamePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[var(--bg-page)] rounded-xl border border-[var(--border-main)] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[var(--text-primary)] transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                      {t.appointment.phoneLabel}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder={t.appointment.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[var(--bg-page)] rounded-xl border border-[var(--border-main)] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[var(--text-primary)] transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                      {t.appointment.emailLabel}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder={t.appointment.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[var(--bg-page)] rounded-xl border border-[var(--border-main)] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[var(--text-primary)] transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Branch Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                    {t.appointment.branchLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[var(--bg-page)] rounded-xl border border-[var(--border-main)] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[var(--text-primary)] transition-all outline-none"
                    >
                      {t.appointment.branchesData.map((branch) => (
                        <option key={branch.id} value={branch.name} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                          {branch.name} — {branch.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                    {t.appointment.serviceLabel}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-page)] rounded-xl border border-[var(--border-main)] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[var(--text-primary)] transition-all outline-none"
                  >
                    {t.appointment.servicesOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-[var(--bg-card)] text-[var(--text-primary)]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                      {t.appointment.dateLabel}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        min={todayDate}
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[var(--bg-page)] rounded-xl border border-[var(--border-main)] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[var(--text-primary)] transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                      {t.appointment.timeSlotLabel}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[var(--bg-page)] rounded-xl border border-[var(--border-main)] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[var(--text-primary)] transition-all outline-none"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-[var(--bg-card)] text-[var(--text-primary)]">{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Optional Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                    {t.appointment.notesLabel}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t.appointment.notesPlaceholder}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[var(--bg-page)] rounded-xl border border-[var(--border-main)] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[var(--text-primary)] transition-all outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="btn-confirmar-agendamiento"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#B88E3E] via-[#C5A059] to-[#9E7440] hover:from-[#A6763D] hover:to-[#8C5E2D] text-[#18181B] font-extrabold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-3 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#18181B] border-t-transparent rounded-full animate-spin"></div>
                      <span>{t.appointment.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-[#18181B]" />
                      <span>{t.appointment.submitBtn}</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[var(--text-muted)]">
                  {t.appointment.securityNote}
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Appointment Success Modal */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[var(--bg-card)] text-[var(--text-primary)] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[var(--border-main)]"
            >
              <div className="p-7 text-center bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)]">
                <div className="w-16 h-16 rounded-full bg-[#4E715B]/20 text-[#4E715B] dark:text-[#5C876D] mx-auto flex items-center justify-center mb-4 shadow-inner">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#4E715B]/20 text-[#4E715B] dark:text-[#5C876D] text-xs font-bold">
                  {t.appointment.successTitle}
                </span>
                <h3 className="text-2xl font-black text-[var(--text-primary)] font-outfit mt-2">
                  {t.appointment.successSubtitle}, {formData.fullName.split(' ')[0]}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  {t.appointment.folioLabel}: <strong className="text-[#C5A059]">{bookingCode}</strong>
                </p>
              </div>

              <div className="p-6 space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2 text-[var(--text-primary)]">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">{t.appointment.branchLabel}:</span>
                    <span className="font-bold text-[var(--text-primary)]">{formData.branch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">{t.appointment.serviceLabel}:</span>
                    <span className="font-bold text-[#C5A059] text-right">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">{t.appointment.dateLabel}:</span>
                    <span className="font-bold text-[var(--text-primary)]">{formData.date} - {formData.timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">{t.appointment.phoneLabel}:</span>
                    <span className="font-medium text-[var(--text-primary)]">{formData.phone}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{t.appointment.confirmWhatsAppBtn}</span>
                  </a>

                  <a
                    href={createGoogleCalendarLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-main)] text-[var(--text-primary)] border border-[var(--border-main)] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    <span>Google Calendar</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSuccessModalOpen(false)}
                  className="w-full py-2.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-semibold cursor-pointer"
                >
                  {t.common.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
