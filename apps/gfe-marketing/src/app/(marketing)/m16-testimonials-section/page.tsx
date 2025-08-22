import { DemoWrapper } from '@/components/demo-wrapper'
import { TTM_DESC, TTM_SUPPORTING_TEXT, TTM_TESTIMONIALS, TTM_TITLE } from '@/config'
import { TestimonialsSection } from '@repo/ui/src/components/marketing/testimonials-section'
import React from 'react'

export default function TestimonialsSectionPage() {
  return (
    <DemoWrapper>
      <TestimonialsSection
        description={TTM_DESC}
        testimonials={TTM_TESTIMONIALS}
        title={TTM_TITLE}
        supportingText={TTM_SUPPORTING_TEXT}
      />
    </DemoWrapper>
  )
}
