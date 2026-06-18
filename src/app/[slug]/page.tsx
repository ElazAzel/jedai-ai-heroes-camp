import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LANDING_PAGES, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/data/landingPages'
import { LandingPageTemplate } from '@/components/LandingPageTemplate'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = LANDING_PAGES.find((p) => p.slug === slug)

  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `${SITE_URL}/${page.slug}`,
    },
    openGraph: {
      title: page.ogTitle,
      description: page.ogDescription,
      url: `${SITE_URL}/${page.slug}`,
      siteName: SITE_NAME,
      locale: 'ru_RU',
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.ogTitle,
      description: page.ogDescription,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params
  const page = LANDING_PAGES.find((p) => p.slug === slug)

  if (!page) {
    notFound()
  }

  return <LandingPageTemplate page={page} />
}
