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
    about: {
      '@type': 'Thing',
      name: 'Корпоративный AI-лагерь для детей',
      description: '10-дневный образовательный лагерь по искусственному интеллекту для детей сотрудников компаний',
    },
    keywords: ['AI-лагерь', 'искусственный интеллект дети', 'корпоративный лагерь', 'обучение AI', 'лагерь программирования', page.audience, page.intent],
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
    sameAs: [
      `${SITE_URL}`,
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

export function CourseJsonLd({ page }: { page: LandingPage }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: page.h1,
    description: page.description,
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    educationalCredentialAwarded: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certificate',
      name: 'Сертификат JEDAI AI Heroes Camp',
    },
    totalHistoricalEnrollment: '12-30',
    inLanguage: 'ru',
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        description: 'Стоимость рассчитывается индивидуально',
      },
    },
    audience: {
      '@type': 'Audience',
      suggestedGender: 'unisex',
      suggestedMaxAge: 16,
      suggestedMinAge: 10,
    },
    timeRequired: 'P10D',
    keywords: ['AI для детей', 'обучение AI', 'лагерь программирования', page.audience],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}

export function EventJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Demo Day JEDAI AI Heroes Camp',
    description: 'Финальная защита AI-проектов детей перед родителями и представителями компании.',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    inLanguage: 'ru',
    organizer: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    performer: {
      '@type': 'Organization',
      name: COMPANY_NAME,
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}

export function ProductJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'JEDAI AI Heroes Camp',
    description: 'Корпоративный AI-лагерь для детей сотрудников компаний. 10 учебных дней, AI-проекты, Demo Day.',
    brand: {
      '@type': 'Brand',
      name: COMPANY_NAME,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'KZT',
      availability: 'https://schema.org/InStock',
      offerCount: '4',
      offers: [
        { '@type': 'Offer', name: 'On-site', description: 'Лагерь на базе компании' },
        { '@type': 'Offer', name: 'Внешняя площадка', description: 'Готовый формат под ключ' },
        { '@type': 'Offer', name: 'Weekend AI Lab', description: 'Формат выходного дня' },
        { '@type': 'Offer', name: 'Family Day', description: 'Семейное мероприятие' },
      ],
    },
    audience: {
      '@type': 'Audience',
      suggestedMinAge: 10,
      suggestedMaxAge: 16,
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}

export function SoftwareApplicationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'JEDAI AI Heroes Camp Platform',
    description: 'Образовательная платформа для проведения корпоративного AI-лагеря для детей сотрудников.',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}

export function VideoObjectJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'JEDAI AI Heroes Camp — корпоративный AI-лагерь для детей',
    description: 'Обзор корпоративного AI-лагеря для детей сотрудников компаний: программа, форматы, Demo Day.',
    thumbnailUrl: `${SITE_URL}/og-image.jpg`,
    uploadDate: '2025-01-01',
    duration: 'PT2M',
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitize(JSON.stringify(jsonLd)) }}
    />
  )
}
