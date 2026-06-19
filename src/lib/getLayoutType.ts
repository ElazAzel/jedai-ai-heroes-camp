export type LayoutType =
  | 'corporate'
  | 'industry'
  | 'parent'
  | 'creator'
  | 'program'
  | 'conversion'
  | 'geo'
  | 'hub'

export function getLayoutType(slug: string): LayoutType {
  // Hub pages
  if (slug === 'for-companies' || slug === 'for-parents' || slug === 'cities') return 'hub'

  // Geo pages (city-specific)
  if (
    slug.includes('almaty') ||
    slug.includes('astana') ||
    slug.includes('shymkent') ||
    slug.includes('atyrau') ||
    slug.includes('karaganda') ||
    slug.includes('aktau') ||
    slug.startsWith('deti-') ||
    slug.startsWith('ai-prodlenka')
  ) return 'geo'

  // Industry vertical pages
  if (
    slug.includes('banks') ||
    slug.includes('it-companies') ||
    slug.includes('telecom') ||
    slug.includes('energy')
  ) return 'industry'

  // Parent-facing pages
  if (
    slug.includes('for-parents') ||
    slug.includes('for-teens') ||
    slug.includes('school-break') ||
    slug.includes('future-skills') ||
    slug.includes('safe-ai') ||
    slug === 'ai-camp-summer'
  ) return 'parent'

  // Creator/project-focused pages
  if (
    slug.includes('project') ||
    slug.includes('video') ||
    slug.includes('chatbot') ||
    slug.includes('prompt') ||
    slug.includes('club')
  ) return 'creator'

  // Program/content pages
  if (
    slug.includes('program') ||
    slug.includes('demo-day') ||
    slug.includes('universities') ||
    slug.includes('courses')
  ) return 'program'

  // Conversion pages
  if (
    slug.includes('commercial-offer') ||
    slug.includes('weekend') ||
    slug.includes('family-day')
  ) return 'conversion'

  // Default: corporate
  return 'corporate'
}
