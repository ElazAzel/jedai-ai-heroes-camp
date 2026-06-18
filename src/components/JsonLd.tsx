import { SITE_URL, COMPANY_NAME } from '@/data/landingPages'
import type { LandingPage } from '@/types'

function sanitize(str: string) {
  return str.replace(/</g, '\\u003c').replace(/>/g, '\\u003e')
}

export function WebPageJsonLd({ page }: { page: LandingPage }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `${SITE_URL}/${page.slug}`,
    inLanguage: 'ru',
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL,
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}

export function FAQPageJsonLd({ page }: { page: LandingPage }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}

export function BreadcrumbListJsonLd({ page }: { page: LandingPage }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: page.h1, item: `${SITE_URL}/${page.slug}` },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: SITE_URL,
    description: 'JEDAI AI Heroes Camp — корпоративный AI-лагерь для детей сотрудников.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Алматы',
      addressRegion: 'Алматы',
      addressCountry: 'KZ',
    },
    telephone: '+7 747 070 1495',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7 747 070 1495',
      contactType: 'sales',
      availableLanguage: ['Russian', 'Kazakh'],
    },
    areaServed: [
      { '@type': 'City', name: 'Алматы' },
      { '@type': 'City', name: 'Астана' },
      { '@type': 'Country', name: 'Казахстан' },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    url: SITE_URL,
    description: 'Корпоративный AI-лагерь для детей сотрудников в Алматы.',
    telephone: '+7 747 070 1495',
    areaServed: ['Алматы', 'Астана', 'Казахстан'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Алматы',
      addressRegion: 'Алматы',
      addressCountry: 'KZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7 747 070 1495',
      contactType: 'sales',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}
