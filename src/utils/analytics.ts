/**
 * Analytics Utility for Blick Optic
 * Handles event tracking across Google Analytics (gtag), Google Tag Manager (dataLayer),
 * Custom DOM Events, and telemetry storage.
 */

export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: number;
  action?: string;
  source?: string;
  message_preview?: string;
  language?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Dispatch an analytics tracking ping for user interactions.
 */
export function trackAnalyticsEvent(
  eventName: string,
  params: AnalyticsEventParams = {}
): void {
  try {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      path: typeof window !== 'undefined' ? window.location.pathname + window.location.hash : '',
      device: typeof window !== 'undefined' && window.innerWidth < 768 ? 'mobile' : 'desktop',
      ...params,
    };

    // 1. Google Analytics (gtag.js)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    }

    // 2. Google Tag Manager (dataLayer)
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
    }

    // 3. Custom DOM Event for embedders or third-party listeners
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(
        new CustomEvent('blick_analytics', {
          detail: payload,
          bubbles: true,
        })
      );

      // Specific event name dispatch
      window.dispatchEvent(
        new CustomEvent(eventName, {
          detail: payload,
          bubbles: true,
        })
      );
    }

    // 4. Session audit log for debugging & verification
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        const stored = sessionStorage.getItem('blick_analytics_log');
        const logs = stored ? JSON.parse(stored) : [];
        logs.push(payload);
        // Keep last 50 events in session log
        if (logs.length > 50) logs.shift();
        sessionStorage.setItem('blick_analytics_log', JSON.stringify(logs));
      } catch {
        // Silently ignore storage quota errors
      }
    }

    // 5. Console telemetry log for development & inspection
    console.info(`[Blick Analytics Ping] 🎯 Event: "${eventName}"`, payload);
  } catch (error) {
    console.warn('[Blick Analytics] Error tracking event:', error);
  }
}

/**
 * Helper specifically for WhatsApp trigger interactions
 */
export function trackWhatsAppInteraction(
  action: 'open_chat' | 'close_chat' | 'send_message' | 'quick_question' | 'contact_section_whatsapp' | 'branch_whatsapp' | 'navbar_whatsapp' | 'modal_whatsapp' | string,
  details: AnalyticsEventParams = {}
): void {
  trackAnalyticsEvent('whatsapp_click', {
    category: 'engagement',
    label: details.label || 'WhatsApp Interaction',
    action,
    ...details,
  });
}
