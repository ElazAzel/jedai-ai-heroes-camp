import { SITE_URL } from '@/data/landingPages'

export const dynamic = 'force-static'

export async function GET() {
  const robots = `User-agent: *
Allow: /
Allow: /ai-camp-for-employees-children
Allow: /corporate-ai-camp
Allow: /hr-benefit-ai-camp
Allow: /csr-ai-camp-for-kids
Allow: /employer-brand-ai-camp
Allow: /family-day-ai
Allow: /onsite-ai-camp
Allow: /external-ai-camp
Allow: /weekend-ai-lab
Allow: /ai-camp-for-kids-kazakhstan
Allow: /ai-camp-almaty
Allow: /ai-camp-astana
Allow: /ai-camp-for-parents
Allow: /ai-camp-for-teens
Allow: /ai-project-camp-for-kids
Allow: /ai-video-camp-for-kids
Allow: /chatbot-camp-for-kids
Allow: /prompt-engineering-for-kids
Allow: /future-skills-for-kids
Allow: /demo-day-ai-camp
Allow: /ai-camp-for-banks
Allow: /ai-camp-for-it-companies
Allow: /ai-camp-for-telecom
Allow: /ai-camp-for-energy-companies
Allow: /ai-camp-for-universities
Allow: /ai-camp-summer
Allow: /ai-camp-school-break
Allow: /safe-ai-for-kids
Allow: /ai-camp-program
Allow: /ai-camp-commercial-offer
Allow: /landing-pages

Sitemap: ${SITE_URL}/sitemap.xml
`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
