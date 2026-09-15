import { useState, useEffect } from 'react';
import { X, Calendar, MapPin, MessageCircle, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { trackWhatsAppInteraction } from '../utils/analytics';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function AppointmentModal({ isOpen, onClose, preselectedService }: AppointmentModalProps) {
  const { t, language } = useLanguage();

  const boutiqueLocation = 'Boutique Insignia - Paseo de la Reforma (CDMX)';
  const [selectedService, setSelectedService] = useState(
    preselectedService || t.appointment.servicesOptions[0] || 'Examen de la Vista Computarizado'
  );
  const [userName, setUserName] = useState('');
  const [preferredDate, setPreferredDate] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSendWhatsApp = () => {
    const nameText = userName.trim() ? `\n👤 Nombre: ${userName.trim()}` : '';
    const dateText = preferredDate ? `\n📅 Fecha estimada: ${preferredDate}` : '';
    
    const message = `¡Hola Blick Optic! 👋 Quiero agendar una cita por WhatsApp.${nameText}\n🩺 Servicio / Interés: ${selectedService}\n📍 Sucursal: ${boutiqueLocation}${dateText}\n\n¿Qué horarios tienen disponibles?`;

    trackWhatsAppInteraction('modal_whatsapp', {
      source: 'quick_booking_modal',
      service: selectedService,
      branch: boutiqueLocation,
      language,
      message_preview: message,
    });

    const url = `https://wa.me/525551234567?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[var(--bg-card)] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[var(--border-main)] my-8 relative"
      >
        {/* Header */}
        <div className="p-6 bg-[#18181B] border-b border-[#36322C] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-outfit text-[#E5C378]">
                Agenda tu Cita por WhatsApp
              </h3>
              <p className="text-xs text-[#D8CEBE]">Atención inmediata con nuestros optometristas</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 bg-[var(--bg-page)] transition-colors duration-300 space-y-4">
          
          <div className="p-3.5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-xs text-[var(--text-secondary)] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0"></span>
            <span>Confirmamos tu horario de examen directamente en el chat en menos de 5 minutos.</span>
          </div>

          {/* Service / Frame */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1">
              Servicio o Modelo de Interés:
            </label>
            <input
              type="text"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              placeholder="Ej. Examen de la vista, Lentes progresivos, Armazón..."
              className="w-full px-3.5 py-2.5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-main)] focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 text-xs sm:text-sm text-[var(--text-primary)] outline-none"
            />
          </div>

          {/* Single Boutique Location */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1">
              {t.appointment.branchLabel}:
            </label>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-main)]">
              <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-[var(--text-primary)] block truncate">
                  Boutique Insignia — Paseo de la Reforma 222
                </span>
                <span className="text-[11px] text-[var(--text-muted)] block truncate">
                  Col. Juárez, Cuauhtémoc, CDMX • Valet Parking
                </span>
              </div>
            </div>
          </div>

          {/* Optional Name & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1">
                Tu Nombre (Opcional):
              </label>
              <input
                type="text"
                placeholder="Ej. Carlos Mendoza"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-main)] focus:border-[#25D366] text-xs sm:text-sm text-[var(--text-primary)] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1">
                Día Preferido (Opcional):
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[var(--text-muted)]">
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                </div>
                <input
                  type="date"
                  value={preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-main)] focus:border-[#25D366] text-xs sm:text-sm text-[var(--text-primary)] outline-none"
                />
              </div>
            </div>
          </div>

          {/* WhatsApp Submit Button */}
          <div className="pt-2">
            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Mandar mensaje de WhatsApp</span>
              <Send className="w-4 h-4" />
            </button>
            <p className="text-center text-[11px] text-[var(--text-muted)] mt-2">
              Se abrirá WhatsApp con los datos de tu consulta listos para enviar.
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
