import type { LandingPage } from '@/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { GeolistSection } from '@/components/GeolistSection'
import { RelatedPages } from '@/components/RelatedPages'
import { LeadForm } from '@/components/LeadForm'
import { StickyCTA } from '@/components/StickyCTA'
import { WebPageJsonLd, FAQPageJsonLd, BreadcrumbListJsonLd, CourseJsonLd, EventJsonLd, ProductJsonLd, SoftwareApplicationJsonLd, VideoObjectJsonLd } from '@/components/JsonLd'

export function HubLayout({ page }: { page: LandingPage }) {
  return (
    <>
      <SeoBlock page={page} />
      <div className="min-h-screen bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6">
          <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: page.h1 }]} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{page.h1}</h1>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">{page.heroAngle}</p>
          </div>
          <GeolistSection />
        </div>
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
