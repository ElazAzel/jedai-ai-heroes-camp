type EventName = 'page_view' | 'cta_click' | 'form_start' | 'form_submit' | 'faq_open' | 'program_day_open' | 'format_card_click' | 'scroll_50' | 'scroll_90'

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void
    dataLayer?: Record<string, unknown>[]
  }
}

export function trackEvent(name: EventName, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return

  if (window.gtag) {
    window.gtag('event', name, params)
  }

  if (window.dataLayer) {
    window.dataLayer.push({ event: name, ...params })
  }

  try {
    localStorage.setItem(`jedai_event_${name}`, JSON.stringify({ timestamp: Date.now(), ...params }))
  } catch {
    // localStorage not available
  }
}
