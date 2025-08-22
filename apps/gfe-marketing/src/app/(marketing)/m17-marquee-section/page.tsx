import { DemoWrapper } from '@/components/demo-wrapper'
import { BRANDS } from '@/config'
import { MarqueeSection } from '@repo/ui/src/components/marketing/marque-section'
import React from 'react'

export default function Page() {
  return (
    <DemoWrapper>
      <MarqueeSection
        brands={BRANDS}
      />
    </DemoWrapper>
  )
}
