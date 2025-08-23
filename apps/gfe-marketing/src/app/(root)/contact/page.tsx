import { ContactSection } from '@/features/contact/contact-section'
import { CONTACT_DESC, CONTACT_ITEMS, CONTACT_TITLE, FAQ_DESC, FAQ_QUESTIONS, FAQ_TITLE } from '@/config'
import { FaqSection } from '@repo/ui/src/components/marketing/fag-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us'
}

export default function ContactUsPage() {
  return (
    <div>
      <ContactSection
        title={CONTACT_TITLE}
        description={CONTACT_DESC}
        contactItems={CONTACT_ITEMS}
      />
      <FaqSection
        description={FAQ_DESC}
        questions={FAQ_QUESTIONS}
        title={FAQ_TITLE}
      />
    </div>
  )
}
