import { ContactSection } from '@/features/contact/contact-section'
import { CONTACT_DESC, CONTACT_ITEMS, CONTACT_TITLE, FAQ_DESC, FAQ_QUESTIONS, FAQ_TITLE, GRID_DESCRIPTION, GRID_FEATURES, GRID_SUPPORTING_TEXT, GRID_TITLE, PRICING_DESC, PRICING_PLANS, PRICING_SUPPORTING_TEXT, PRICING_TITLE, TTM_DESC, TTM_SUPPORTING_TEXT, TTM_TESTIMONIALS, TTM_TITLE } from '@/config'
import { FaqSection } from '@repo/ui/src/components/marketing/fag-section'
import { FeatureSectionGrid } from '@repo/ui/src/components/marketing/feature-section-grid'
import { PricingSectionTiers } from '@repo/ui/src/components/marketing/pricing-section-tiers'
import { TestimonialsSection } from '@repo/ui/src/components/marketing/testimonials-section'



export default function PricingPage() {
  return (
    <div>
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
      <FeatureSectionGrid
        description={GRID_DESCRIPTION}
        features={GRID_FEATURES}
        title={GRID_TITLE}
        supportingText={GRID_SUPPORTING_TEXT}
      />
      <TestimonialsSection
        description={TTM_DESC}
        testimonials={TTM_TESTIMONIALS}
        title={TTM_TITLE}
        supportingText={TTM_SUPPORTING_TEXT}
      />
      <ContactSection
        title={CONTACT_TITLE}
        description={CONTACT_DESC}
        contactItems={CONTACT_ITEMS}
      />
    </div>
  )
}
