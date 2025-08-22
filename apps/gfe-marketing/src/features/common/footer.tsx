import { FOOTER_NAV_LINKS, FOOTER_SOCIAL_LINKS } from '@/config'
import { FooterSection } from '@repo/ui/src/components/marketing/footer-section'
import React from 'react'

function Footer() {
  return (
    <FooterSection
      navLinks={FOOTER_NAV_LINKS}
      socialLinks={FOOTER_SOCIAL_LINKS}
    />
  )
}

export { Footer }