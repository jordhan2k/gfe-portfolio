import React from 'react'
import { ContactSection } from '../../../features/contact/contact-section'
import { RiBuildingLine, RiMailLine, RiPhoneLine } from '@remixicon/react'

export default function ContactSectionPage() {
  return (
    <div className='min-h-dvh bg-[linear-gradient(147.52deg,#f9fafb_8.89%,#d2d6db_100.48%)]'>
      <div className='max-w-[90rem] w-auto mx-auto p-4'>
        <ContactSection
          title='Talk to our team'
          description="We're committed to delivering the support you require to make your experience as smooth as possible."
          contactItems={[
            {
              icon: <RiBuildingLine />,
              title: '123 Maple Street, Springfield, IL, USA',
              type: 'address'
            },
            {
              icon: <RiPhoneLine />,
              title: '+1 (650) 555-0198',
              type: 'phone'
            },

            {
              icon: <RiMailLine />,
              title: 'hello@abstractly.com',
              type: 'email'
            }
          ]}
        />
      </div>
    </div>
  )
}
