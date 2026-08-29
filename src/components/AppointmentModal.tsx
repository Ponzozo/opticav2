import { useState, useEffect, type FormEvent } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, Send, CheckCircle, AlertCircle, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { AppointmentFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function AppointmentModal({ isOpen, onClose, preselectedService }: AppointmentModalProps) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    branch: t.appointment.branchesData[0]?.name || 'Sucursal Paseo de la Reforma',
    service: preselectedService || t.appointment.servicesOptions[0] || 'Examen de la Vista Computarizado',
    date: '',
    timeSlot: '10:00 AM',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const timeSlots = [
    '08:30 AM', '09:15 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '02:00 PM', '03:30 PM', '04:45 PM', '06:00 PM'
  ];

  const todayDate = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Por favor completa tu nombre');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Por favor completa tu teléfono');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Por favor completa tu email');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Por favor selecciona una fecha');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const code = `VP-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingCode(code);
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 }
        });
      } catch (err) {
        console.log(err);
      }
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const createWhatsAppLink = () => {
    const text = encodeURIComponent(
      `¡Hola Blick Optic! Confirmando cita agendada código ${bookingCode}.\n` +
      `👤 Paciente: ${formData.fullName}\n` +
      `📍 Sucursal: ${formData.branch}\n` +
      `🩺 Servicio: ${formData.service}\n` +
      `📅 Fecha: ${formData.date} a las ${formData.timeSlot}`
    );
    return `https://wa.me/525551234567?text=${text}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 my-8"
      >
        {/* Header */}
        <div className="p-6 bg-[#18181B] border-b border-[#36322C] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#E5C378]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-outfit text-[#E5C378]">{t.appointment.formTitle}</h3>
              <p className="text-xs text-[#D8CEBE]">Blick Optic • {t.common.freeExamBadge}</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!isSuccess ? (
          <div className="p-6 sm:p-8 bg-[#FAF8F5]">
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-1">
                  {t.appointment.fullNameLabel}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C8275]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder={t.appointment.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-[#D5C6AC] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[#18181B] outline-none"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-1">
                    {t.appointment.phoneLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C8275]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder={t.appointment.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-[#D5C6AC] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[#18181B] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-1">
                    {t.appointment.emailLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C8275]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder={t.appointment.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-[#D5C6AC] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[#18181B] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Branch & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-1">
                    {t.appointment.branchLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C8275]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-white rounded-xl border border-[#D5C6AC] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[#18181B] outline-none"
                    >
                      {t.appointment.branchesData.map((b) => (
                        <option key={b.id} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-1">
                    {t.appointment.serviceLabel}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#D5C6AC] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[#18181B] outline-none"
                  >
                    {t.appointment.servicesOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-1">
                    {t.appointment.dateLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C8275]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      min={todayDate}
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-white rounded-xl border border-[#D5C6AC] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[#18181B] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-1">
                    {t.appointment.timeSlotLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C8275]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-white rounded-xl border border-[#D5C6AC] focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm text-[#18181B] outline-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#18181B] hover:bg-[#2A2621] text-[#E5C378] border border-[#C5A059]/50 font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#E5C378] border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C5A059]" />
                      <span>{t.appointment.submitBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-4 bg-[#FAF8F5]">
            <div className="w-16 h-16 rounded-full bg-[#4E715B]/20 text-[#4E715B] mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#18181B] font-outfit">{t.appointment.successTitle}</h3>
              <p className="text-xs text-[#6B6155] mt-1">{t.appointment.folioLabel}: <strong className="text-[#8C5E2D]">{bookingCode}</strong></p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#EBE4D8] text-xs text-left space-y-1.5 text-[#524B42]">
              <p><strong>{t.appointment.fullNameLabel}:</strong> {formData.fullName}</p>
              <p><strong>{t.appointment.branchLabel}:</strong> {formData.branch}</p>
              <p><strong>{t.appointment.serviceLabel}:</strong> {formData.service}</p>
              <p><strong>{t.appointment.dateLabel}:</strong> {formData.date} - {formData.timeSlot}</p>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>{t.appointment.confirmWhatsAppBtn}</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 text-xs text-[#8C8275] hover:text-[#18181B] font-semibold cursor-pointer"
              >
                {t.common.close}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
