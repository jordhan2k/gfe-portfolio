import { ContactSection } from '@/features/contact/contact-section'
import HeroSectionWrapper from '@/features/landing/hero-section'
import { NewsLetterSectionWrapper } from '@/features/landing/newsletter-section'
import { BRANDS, CONTACT_DESC, CONTACT_ITEMS, CONTACT_TITLE, FAQ_DESC, FAQ_QUESTIONS, FAQ_TITLE, GRID_DESCRIPTION, GRID_FEATURES, GRID_SUPPORTING_TEXT, GRID_TITLE, LEFT_DESC, LEFT_FEATURES, LEFT_IMG_URL, LEFT_TITLE, PRICING_DESC, PRICING_PLANS, PRICING_SUPPORTING_TEXT, PRICING_TITLE, RIGHT_DESC, RIGHT_FEATURES, RIGHT_IMG_URL, RIGHT_TITLE } from '@/config'
import { FaqSection } from '@repo/ui/src/components/marketing/fag-section'
import { FeatureSectionGrid } from '@repo/ui/src/components/marketing/feature-section-grid'
import { FeatureSectionSideImage } from '@repo/ui/src/components/marketing/feature-section-side-image'
import { MarqueeSection } from '@repo/ui/src/components/marketing/marque-section'
import { PricingSectionTiers } from '@repo/ui/src/components/marketing/pricing-section-tiers'



export default function LandingPage() {
  return (
    <div className='w-full'>
      <HeroSectionWrapper />
      <MarqueeSection
        brands={BRANDS}
      />
      <FeatureSectionGrid
        description={GRID_DESCRIPTION}
        features={GRID_FEATURES}
        title={GRID_TITLE}
        supportingText={GRID_SUPPORTING_TEXT}
      />
      <FeatureSectionSideImage
        description={RIGHT_DESC}
        features={RIGHT_FEATURES}
        imgUrl={RIGHT_IMG_URL}
        side='right'
        title={RIGHT_TITLE}
      />
      <FeatureSectionSideImage
        description={LEFT_DESC}
        features={LEFT_FEATURES}
        imgUrl={LEFT_IMG_URL}
        side='left'
        title={LEFT_TITLE}
      />
      <PricingSectionTiers
        description={PRICING_DESC}
        title={PRICING_TITLE}
        supportingText={PRICING_SUPPORTING_TEXT}
        plans={PRICING_PLANS}
      />
      <FaqSection
        description={FAQ_DESC}
        questions={FAQ_QUESTIONS}
        title={FAQ_TITLE}
      />
      <NewsLetterSectionWrapper />
      <ContactSection
        title={CONTACT_TITLE}
        description={CONTACT_DESC}
        contactItems={CONTACT_ITEMS}
      />
    </div>
  )
}
