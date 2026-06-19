import { LANDING_PAGES, SITE_URL } from '@/data/landingPages'

export const dynamic = 'force-static'

export async function GET() {
  const staticPages = ['', 'landing-pages', 'pricing', 'privacy-policy']
  const allPages = [...staticPages, ...LANDING_PAGES.map((p) => p.slug)]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map((slug) => {
    const url = slug ? `${SITE_URL}/${slug}` : SITE_URL
    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${slug === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${slug === '' ? '1.0' : '0.8'}</priority>
  </url>`
  }).join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
