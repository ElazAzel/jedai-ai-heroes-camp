'use client'

import { trackEvent } from '@/lib/analytics'

export function StickyCTA({ label, href }: { label: string; href?: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-3 items-center md:hidden">
      <div className="flex-1 text-xs text-zinc-500 leading-tight">
        <span className="text-white font-medium text-sm block">{label}</span>
        JEDAI AI Heroes Camp
      </div>
      <a
        href={href || '#form-section'}
        onClick={() => trackEvent('cta_click', { cta_text: label, location: 'sticky_mobile' })}
        className="btn btn-primary flex-shrink-0 text-sm"
      >
        {label}
      </a>
    </div>
  )
}
