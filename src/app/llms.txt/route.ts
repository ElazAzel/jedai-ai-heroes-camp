import { LANDING_PAGES, SITE_URL } from '@/data/landingPages'

export const dynamic = 'force-static'

export async function GET() {
  const lines = [
    '# JEDAI AI Heroes Camp',
    '',
    '> Корпоративный AI-лагерь для детей сотрудников компаний. 10 учебных дней, AI-проекты, Demo Day.',
    '',
    '## Company',
    '- Name: JEDAI AI Heroes Camp',
    '- URL: https://jedai-camp.vercel.app',
    '- Phone: +7 747 070 1495',
    '- Email: info@jedai-camp.vercel.app',
    '- Location: Алматы, Казахстан',
    '- Area served: Алматы, Астана, Казахстан',
    '',
    '## Summary',
    'JEDAI AI Heroes Camp is a corporate AI camp for employees children aged 10-16. The 10-day program covers AI tools (image generation, video, chatbots, prompt engineering) and culminates in a Demo Day where kids present their projects to parents and company representatives. Available formats: on-site, external venue, Weekend AI Lab, Family Day.',
    '',
    '## Target Audience',
    '- Companies (HR, CSR, Employer Brand)',
    '- Parents of children 10-16 years old',
    '- Kazakhstan: Almaty, Astana, Shymkent, Atyrau, Karaganda, Aktau',
    '',
    '## Key Features',
    '- 10 educational days of AI learning',
    '- Age range: 10-16 years',
    '- Group size: 12-30 children',
    '- Corporate format (B2B)',
    '- Demo Day with project presentations',
    '- Certificate upon completion',
    '- Available in 4 formats: on-site, external, weekend, family day',
    '',
    '## All Pages',
  ]

  LANDING_PAGES.forEach((page) => {
    lines.push(`- ${page.h1}: ${SITE_URL}/${page.slug}`)
  })

  lines.push('')
  lines.push('## Static Pages')
  lines.push(`- Главная: ${SITE_URL}/`)
  lines.push(`- Все страницы: ${SITE_URL}/landing-pages`)
  lines.push(`- Форматы и цены: ${SITE_URL}/pricing`)
  lines.push(`- Политика конфиденциальности: ${SITE_URL}/privacy-policy`)
  lines.push(`- Sitemap: ${SITE_URL}/sitemap.xml`)
  lines.push(`- Robots: ${SITE_URL}/robots.txt`)
  lines.push('')
  lines.push('## Categories')
  lines.push('- For Companies: /for-companies')
  lines.push('- For Parents: /for-parents')
  lines.push('- All Cities: /cities')
  lines.push('- Corporate AI Camp: /corporate-ai-camp')
  lines.push('- HR Benefit: /hr-benefit-ai-camp')
  lines.push('- CSR Program: /csr-ai-camp-for-kids')
  lines.push('- Employer Brand: /employer-brand-ai-camp')
  lines.push('- Program Details: /ai-camp-program')
  lines.push('- Commercial Offer: /ai-camp-commercial-offer')
  lines.push('')
  lines.push('## Almaty Pages')
  lines.push('- AI Camp Almaty: /ai-camp-almaty')
  lines.push('- Kids AI Camp Almaty: /deti-ai-almaty')
  lines.push('- AI Extended Day Almaty: /ai-prodlenka-almaty')
  lines.push('- Summer AI Camp Almaty: /summer-ai-camp-almaty')
  lines.push('- AI Courses Almaty: /ai-courses-for-kids-almaty')
  lines.push('- AI Club Almaty: /ai-club-for-kids-almaty')
  lines.push('')
  lines.push('## Kazakhstan Cities')
  lines.push('- Astana: /ai-camp-astana')
  lines.push('- Shymkent: /ai-camp-shymkent')
  lines.push('- Atyrau: /ai-camp-atyrau')
  lines.push('- Karaganda: /ai-camp-karaganda')
  lines.push('- Aktau: /ai-camp-aktau')
  lines.push('- Kazakhstan: /ai-camp-for-kids-kazakhstan')
  lines.push('')
  lines.push('## Industry Pages')
  lines.push('- Banks: /ai-camp-for-banks')
  lines.push('- IT Companies: /ai-camp-for-it-companies')
  lines.push('- Telecom: /ai-camp-for-telecom')
  lines.push('- Energy: /ai-camp-for-energy-companies')
  lines.push('- Universities: /ai-camp-for-universities')
  lines.push('')
  lines.push('## Formats')
  lines.push('- On-site: /onsite-ai-camp')
  lines.push('- External: /external-ai-camp')
  lines.push('- Weekend AI Lab: /weekend-ai-lab')
  lines.push('- Family Day: /family-day-ai-camp')
  lines.push('')
  lines.push('## Special Pages')
  lines.push('- Teens: /ai-camp-for-teens')
  lines.push('- Project Camp: /ai-project-camp-for-kids')
  lines.push('- AI Video: /ai-video-camp-for-kids')
  lines.push('- Chatbots: /chatbot-camp-for-kids')
  lines.push('- Prompt Engineering: /prompt-engineering-for-kids')
  lines.push('- Future Skills: /future-skills-for-kids')
  lines.push('- Demo Day: /demo-day-ai-camp')
  lines.push('- Summer Camp: /ai-camp-summer')
  lines.push('- School Break: /ai-camp-school-break')
  lines.push('- Safety: /safe-ai-for-kids')
  lines.push('- For Parents: /ai-camp-for-parents')
  lines.push('')
  lines.push('## FAQ Topics Covered Across Pages')
  lines.push('- Age requirements (10-16 years)')
  lines.push('- Prerequisites (none needed)')
  lines.push('- Duration and schedule')
  lines.push('- Camp location options')
  lines.push('- What children learn (AI tools, chatbots, video, images)')
  lines.push('- Demo Day and certificate')
  lines.push('- Group sizes (12-30)')
  lines.push('- Corporate benefits (HR, CSR, Employer Brand)')
  lines.push('- Safety and ethics of AI')
  lines.push('- Pricing and formats')
  lines.push('')
  lines.push('## Schema.org Types Used')
  lines.push('- WebPage, FAQPage, BreadcrumbList')
  lines.push('- Course, EducationalOccupationalCredential, Event')
  lines.push('- Organization, LocalBusiness, Product, SoftwareApplication, VideoObject')

  const content = lines.join('\n')

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
