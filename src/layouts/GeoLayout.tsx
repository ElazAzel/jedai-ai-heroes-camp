import type { LandingPage } from '@/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroSection } from '@/components/HeroSection'
import { AeoAnswerBlock } from '@/components/AeoBlock'
import { GeoSummaryBlock } from '@/components/GeoSummary'
import { ProgramTimeline } from '@/components/ProgramTimeline'
import { OutcomesGrid } from '@/components/OutcomesGrid'
import { CompanyValueSection } from '@/components/CompanyValue'
import { FAQSection } from '@/components/FAQSection'
import { RelatedPages } from '@/components/RelatedPages'
import { LeadForm } from '@/components/LeadForm'
import { StickyCTA } from '@/components/StickyCTA'
import { WebPageJsonLd, FAQPageJsonLd, BreadcrumbListJsonLd, CourseJsonLd, EventJsonLd, ProductJsonLd, SoftwareApplicationJsonLd, VideoObjectJsonLd } from '@/components/JsonLd'

export function GeoLayout({ page }: { page: LandingPage }) {
  const cityName = extractCity(page.h1)
  const year = new Date().getFullYear()

  return (
    <>
      <SeoBlock page={page} />
      <div className="min-h-screen bg-zinc-950">
        <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950">
          <HeroSection page={page} variant={page.heroVariant} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: page.h1 }]} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="card border-l-4 border-l-amber-500 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold text-sm">{cityName ? cityName[0] : '📍'}</div>
              <div>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Программа проводится в <strong>{cityName || 'вашем городе'}</strong> в {year} году
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-500">Для корпоративных групп от 12 детей</p>
              </div>
            </div>
          </div>
        </div>
        <AeoAnswerBlock answer={page.aeoAnswer} />
        <GeoSummaryBlock summary={page.geoSummary} />
        <CompanyValueSection audience={page.audience} />
        <ProgramTimeline />
        <OutcomesGrid />
        <FAQSection items={page.faq} />
        <RelatedPages slugs={page.relatedPages} />
        <section id="form-section" className="py-20 bg-zinc-950">
          <hr className="section-divider" />
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <h2 className="section-header">Получить предложение</h2>
            <p className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8">Оставьте заявку, и мы свяжемся с вами</p>
            <LeadForm sourcePage={page.slug} audienceSegment={page.experimentVariant} experimentVariant={page.experimentVariant} />
          </div>
        </section>
        <StickyCTA label={page.ctaPrimary} href="#form-section" />
      </div>
    </>
  )
}

function extractCity(h1: string): string {
  const cities = ['Алматы', 'Астана', 'Шымкент', 'Атырау', 'Караганда', 'Актау', 'Казахстан']
  for (const city of cities) {
    if (h1.includes(city)) return city
  }
  return ''
}

function SeoBlock({ page }: { page: LandingPage }) {
  return (
    <>
      <WebPageJsonLd page={page} />
      <FAQPageJsonLd page={page} />
      <BreadcrumbListJsonLd page={page} />
      <CourseJsonLd page={page} />
      <EventJsonLd />
      <ProductJsonLd />
      <SoftwareApplicationJsonLd />
      <VideoObjectJsonLd />
    </>
  )
}
