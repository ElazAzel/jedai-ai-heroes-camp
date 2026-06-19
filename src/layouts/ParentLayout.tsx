import type { LandingPage } from '@/types'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroSection } from '@/components/HeroSection'
import { AeoAnswerBlock } from '@/components/AeoBlock'
import { SafetySection } from '@/components/SafetySection'
import { ProgramTimeline } from '@/components/ProgramTimeline'
import { OutcomesGrid } from '@/components/OutcomesGrid'
import { CompanyValueSection } from '@/components/CompanyValue'
import { FAQSection } from '@/components/FAQSection'
import { RelatedPages } from '@/components/RelatedPages'
import { LeadForm } from '@/components/LeadForm'
import { StickyCTA } from '@/components/StickyCTA'
import { WebPageJsonLd, FAQPageJsonLd, BreadcrumbListJsonLd, CourseJsonLd, EventJsonLd, ProductJsonLd, SoftwareApplicationJsonLd, VideoObjectJsonLd } from '@/components/JsonLd'

export function ParentLayout({ page }: { page: LandingPage }) {
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
        <AeoAnswerBlock answer={page.aeoAnswer} />
        <SafetySection />
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
