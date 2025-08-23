import { ContactSection } from '@/features/contact/contact-section'
import HeroSectionWrapper from '@/features/features/hero-section'
import { CONTACT_DESC, CONTACT_ITEMS, CONTACT_TITLE, FAQ_DESC, FAQ_QUESTIONS, FAQ_TITLE, GRID_DESCRIPTION, GRID_FEATURES, GRID_SUPPORTING_TEXT, GRID_TITLE, LEFT_DESC, LEFT_FEATURES, LEFT_IMG_URL, LEFT_TITLE, RIGHT_DESC, RIGHT_FEATURES, RIGHT_IMG_URL, RIGHT_TITLE, TTM_DESC, TTM_SUPPORTING_TEXT, TTM_TESTIMONIALS, TTM_TITLE } from '@/config'
import { FaqSection } from '@repo/ui/src/components/marketing/fag-section'
import { FeatureSectionGrid } from '@repo/ui/src/components/marketing/feature-section-grid'
import { FeatureSectionSideImage } from '@repo/ui/src/components/marketing/feature-section-side-image'
import { TestimonialsSection } from '@repo/ui/src/components/marketing/testimonials-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features'
}

export default function FeaturesPage() {
  return (
    <div className='w-full'>
      <HeroSectionWrapper />
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

      <TestimonialsSection
        description={TTM_DESC}
        testimonials={TTM_TESTIMONIALS}
        title={TTM_TITLE}
        supportingText={TTM_SUPPORTING_TEXT}
      />
      <FaqSection
        description={FAQ_DESC}
        questions={FAQ_QUESTIONS}
        title={FAQ_TITLE}
      />
      <ContactSection
        title={CONTACT_TITLE}
        description={CONTACT_DESC}
        contactItems={CONTACT_ITEMS}
      />

    </div>
  )
}
