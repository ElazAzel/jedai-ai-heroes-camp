export type HeroVariant = 'corporate-premium' | 'parent-trust' | 'kids-creator' | 'program-deep-dive' | 'conversion-offer'

export type AudienceSegment = 'hr' | 'csr' | 'parent' | 'company' | 'geo' | 'industry' | 'program' | 'conversion'

export type ExperimentVariant = `audience_${AudienceSegment}`

export type CTAType = 'get-offer' | 'discuss-format' | 'request-calculation' | 'view-program'

export type FormatType = 'on-site' | 'external' | 'weekend-ai-lab' | 'family-day' | 'not-sure'

export interface FAQItem {
  question: string
  answer: string
}

export interface LandingPage {
  slug: string
  audience: string
  intent: string
  h1: string
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  heroVariant: HeroVariant
  ctaPrimary: string
  ctaSecondary?: string
  aeoAnswer: string
  geoSummary: string
  faq: FAQItem[]
  relatedPages: string[]
  experimentVariant: ExperimentVariant
  jsonLdType?: string
  heroAngle: string
}

export interface ProgramDay {
  day: number
  title: string
  description: string
}

export interface Outcome {
  title: string
  description: string
}

export interface SafetyTopic {
  title: string
  description: string
}
