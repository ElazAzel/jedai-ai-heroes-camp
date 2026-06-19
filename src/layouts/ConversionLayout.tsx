import type { LandingPage } from '@/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroSection } from '@/components/HeroSection'
import { FormatsSection } from '@/components/FormatsSection'
import { FAQSection } from '@/components/FAQSection'
import { RelatedPages } from '@/components/RelatedPages'
import { LeadForm } from '@/components/LeadForm'
import { StickyCTA } from '@/components/StickyCTA'
import { WebPageJsonLd, FAQPageJsonLd, BreadcrumbListJsonLd, CourseJsonLd, EventJsonLd, ProductJsonLd, SoftwareApplicationJsonLd, VideoObjectJsonLd } from '@/components/JsonLd'

export function ConversionLayout({ page }: { page: LandingPage }) {
  return (
    <>
      <SeoBlock page={page} />
      <div className="min-h-screen bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: page.h1 }]} />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="card p-6 sm:p-10 text-center">
            <span className="badge mb-4">Коммерческое предложение</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{page.h1}</h1>
            <p className="text-sm sm:text-base text-zinc-400 mb-6 max-w-xl mx-auto">{page.heroAngle}</p>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-xs sm:text-sm text-zinc-500 mb-8 max-w-lg mx-auto">{page.aeoAnswer}</p>
          </div>
        </div>
        <FormatsSection />
        <section id="form-section" className="py-20 bg-zinc-950">
          <hr className="section-divider" />
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <h2 className="section-header">Заполните форму</h2>
            <p className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8">Мы подберём оптимальный формат для вашей компании</p>
            <LeadForm sourcePage={page.slug} audienceSegment={page.experimentVariant} experimentVariant={page.experimentVariant} />
          </div>
        </section>
        <FAQSection items={page.faq} />
        <RelatedPages slugs={page.relatedPages} />
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
