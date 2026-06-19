import { SITE_URL } from '@/data/landingPages'

export const dynamic = 'force-static'

export async function GET() {
  const robots = `# JEDAI AI Heroes Camp — Robots.txt
# https://jedai-camp.vercel.app

# Allowed crawlers
User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/

# Google-specific
User-agent: Googlebot
Allow: /
Allow: /*.xml$
Allow: /*.txt$

# Google Image
User-agent: Googlebot-Image
Allow: /

# Yandex
User-agent: Yandex
Allow: /
Allow: /*.xml$
Allow: /*.txt$
Disallow: /_next/

# Yandex Images
User-agent: YandexImages
Allow: /

# AI crawlers
User-agent: GPTBot
Allow: /
Allow: /*.txt$
Allow: /*.xml$

User-agent: Google-Extended
Allow: /
Allow: /*.txt$
Allow: /*.xml$

User-agent: CCBot
Allow: /
Allow: /*.txt$
Allow: /*.xml$

User-agent: ChatGPT-User
Allow: /
Allow: /*.txt$
Allow: /*.xml$

User-agent: PerplexityBot
Allow: /
Allow: /*.txt$
Allow: /*.xml$

User-agent: Claude-Web
Allow: /
Allow: /*.txt$
Allow: /*.xml$

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# LLMs
LLMs: ${SITE_URL}/llms.txt

# Host
Host: ${SITE_URL.replace('https://', '')}

# Crawl-delay
Crawl-delay: 1
`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
