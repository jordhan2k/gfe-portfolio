import { FAQ_DESC, FAQ_QUESTIONS, FAQ_TITLE } from '@/config'
import { FaqSection } from '@repo/ui/components/marketing/fag-section'
import React from 'react'



export default function FagSectionPage() {
  return (
    <div className='min-h-dvh bg-[linear-gradient(147.52deg,#f9fafb_8.89%,#d2d6db_100.48%)]'>
      <div className='max-w-[90rem] w-auto mx-auto p-4 min-h-dvh flex flex-col'>
        <FaqSection
          description={FAQ_DESC}
          questions={FAQ_QUESTIONS}
          title={FAQ_TITLE}
        />
      </div>
    </div>
  )
}
