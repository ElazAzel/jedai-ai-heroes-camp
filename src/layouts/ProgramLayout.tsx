import type { LandingPage } from '@/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroSection } from '@/components/HeroSection'
import { AeoAnswerBlock } from '@/components/AeoBlock'
import { ProgramTimeline } from '@/components/ProgramTimeline'
import { OutcomesGrid } from '@/components/OutcomesGrid'
import { DemoDaySection } from '@/components/DemoDaySection'
import { FormatsSection } from '@/components/FormatsSection'
import { FAQSection } from '@/components/FAQSection'
import { RelatedPages } from '@/components/RelatedPages'
import { LeadForm } from '@/components/LeadForm'
import { StickyCTA } from '@/components/StickyCTA'
import { WebPageJsonLd, FAQPageJsonLd, BreadcrumbListJsonLd, CourseJsonLd, EventJsonLd, ProductJsonLd, SoftwareApplicationJsonLd, VideoObjectJsonLd } from '@/components/JsonLd'

export function ProgramLayout({ page }: { page: LandingPage }) {
  return (
    <>
      <SeoBlock page={page} />
      <div className="min-h-screen bg-zinc-950">
        <HeroSection page={page} variant={page.heroVariant} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: page.h1 }]} />
        </div>
        <AeoAnswerBlock answer={page.aeoAnswer} />
        <ProgramTimeline />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="card border border-zinc-700 p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Ключевые результаты</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {['AI-изображения', 'AI-видео', 'Чат-бот', 'Презентация', 'Сертификат'].map((item) => (
                <div key={item} className="text-center">
                  <div className="text-2xl font-bold text-accent-light mb-1">✓</div>
                  <div className="text-xs text-zinc-400">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OutcomesGrid />
        <DemoDaySection />
        <FormatsSection />
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
