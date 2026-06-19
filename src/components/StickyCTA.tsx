'use client'

import { trackEvent } from '@/lib/analytics'

export function StickyCTA({ label, href }: { label: string; href?: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={href || '#form-section'}
        onClick={() => trackEvent('cta_click', { cta_text: label, location: 'sticky_mobile' })}
        className="block w-full py-4 px-6 bg-gradient-to-r from-electric via-violet to-cyan text-white font-semibold text-center hover:opacity-95 transition-all duration-300 glow"
      >
        {label}
      </a>
    </div>
  )
}
