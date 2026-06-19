import type { LandingPage } from '@/types'
import { Breadcrumbs } from './Breadcrumbs'
import { HeroSection } from './HeroSection'
import { AeoAnswerBlock } from './AeoBlock'
import { AudienceCards } from './AudienceCards'
import { GeoSummaryBlock } from './GeoSummary'
import { ProgramTimeline } from './ProgramTimeline'
import { OutcomesGrid } from './OutcomesGrid'
import { CompanyValueSection } from './CompanyValue'
import { SafetySection } from './SafetySection'
import { FormatsSection } from './FormatsSection'
import { DemoDaySection } from './DemoDaySection'
import { FAQSection } from './FAQSection'
import { RelatedPages } from './RelatedPages'
import { LeadForm } from './LeadForm'
import { StickyCTA } from './StickyCTA'
import { WebPageJsonLd, FAQPageJsonLd, BreadcrumbListJsonLd, CourseJsonLd, EventJsonLd, ProductJsonLd, SoftwareApplicationJsonLd, VideoObjectJsonLd } from './JsonLd';

export function LandingPageTemplate({ page }: { page: LandingPage }) {
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

      <div className="min-h-screen bg-background">
        <HeroSection page={page} variant={page.heroVariant} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs
            items={[
              { label: 'Главная', href: '/' },
              { label: page.h1 },
            ]}
          />
        </div>

        <AeoAnswerBlock answer={page.aeoAnswer} />
        <AudienceCards audience={page.audience} />
        <GeoSummaryBlock summary={page.geoSummary} />
        <ProgramTimeline />
        <OutcomesGrid />
        <CompanyValueSection audience={page.audience} />
        <SafetySection />
        <FormatsSection />
        <DemoDaySection />
        <FAQSection items={page.faq} />
        <RelatedPages slugs={page.relatedPages} />

        <section id="form-section" className="py-20">
          <hr className="section-divider" />
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <h2 className="section-header">
              Получить предложение
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 sm:text-center mb-8">
              Оставьте заявку, и мы свяжемся с вами
            </p>
            <LeadForm
              sourcePage={page.slug}
              audienceSegment={page.experimentVariant}
              experimentVariant={page.experimentVariant}
            />
          </div>
        </section>

        <StickyCTA label={page.ctaPrimary} href="#form-section" />
      </div>
    </>
  )
}
