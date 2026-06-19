import type { LandingPage } from '@/types'
import { getLayoutType } from '@/lib/getLayoutType'
import { CorporateLayout } from '@/layouts/CorporateLayout'
import { IndustryLayout } from '@/layouts/IndustryLayout'
import { ParentLayout } from '@/layouts/ParentLayout'
import { CreatorLayout } from '@/layouts/CreatorLayout'
import { ProgramLayout } from '@/layouts/ProgramLayout'
import { ConversionLayout } from '@/layouts/ConversionLayout'
import { GeoLayout } from '@/layouts/GeoLayout'
import { HubLayout } from '@/layouts/HubLayout'

const layoutComponents = {
  corporate: CorporateLayout,
  industry: IndustryLayout,
  parent: ParentLayout,
  creator: CreatorLayout,
  program: ProgramLayout,
  conversion: ConversionLayout,
  geo: GeoLayout,
  hub: HubLayout,
} as const

export function LandingPageTemplate({ page }: { page: LandingPage }) {
  const layoutType = getLayoutType(page.slug)
  const Layout = layoutComponents[layoutType]
  return <Layout page={page} />
}
