import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AnalyticsScripts } from '@/components/AnalyticsScripts'
import { OrganizationJsonLd, LocalBusinessJsonLd } from '@/components/JsonLd'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/data/landingPages'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'JEDAI AI Heroes Camp — корпоративный AI-лагерь для детей сотрудников',
    template: '%s | JEDAI AI Heroes Camp',
  },
  description: 'JEDAI AI Heroes Camp — корпоративный AI-лагерь для детей сотрудников. 10 учебных дней, AI-проекты, чат-боты, видео, Demo Day.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      'ru': SITE_URL,
      'kk': SITE_URL,
    },
  },
  keywords: [
    'AI-лагерь Алматы', 'искусственный интеллект для детей', 'корпоративный лагерь',
    'IT-лагерь для детей', 'программирование для детей', 'AI для детей Казахстан',
    'лагерь по AI', 'обучение AI детей', 'JEDAI camp', 'AI Heroes Camp',
    'детский AI-лагерь', 'летний лагерь AI', 'робототехника Алматы',
    'курсы AI для детей', 'chatGPT для детей', 'нейросети для детей',
  ],
  openGraph: {
    title: 'JEDAI AI Heroes Camp',
    description: 'Корпоративный AI-лагерь для детей сотрудников. 10 учебных дней, AI-проекты и Demo Day.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'JEDAI AI Heroes Camp — корпоративный AI-лагерь' }],
    countryName: 'Казахстан',
    emails: ['info@jedai-camp.vercel.app'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEDAI AI Heroes Camp',
    description: 'Корпоративный AI-лагерь для детей сотрудников. 10 дней AI-проектов и Demo Day.',
    images: [DEFAULT_OG_IMAGE],
    creator: '@jedai_camp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
  },
  category: 'education',
  classification: 'Образование, IT, AI для детей',
  referrer: 'origin-when-cross-origin',
  creator: 'JEDAI',
  publisher: 'JEDAI',
  authors: [{ name: 'JEDAI' }],
  applicationName: 'JEDAI AI Heroes Camp',
  generator: 'Next.js',
  other: {
    'geo.region': 'KZ-ALA',
    'geo.placename': 'Алматы',
    'geo.position': '43.238949;76.889709',
    'ICBM': '43.238949, 76.889709',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID || ''
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || ''
  const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || ''
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''

  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <AnalyticsScripts gaId={gaId} gtmId={gtmId} yandexId={yandexId} pixelId={pixelId} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
