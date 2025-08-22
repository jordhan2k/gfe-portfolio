import { NotFoundSection } from '@repo/ui/components/marketing/404-section'
import React from 'react'

function NotFoundPage() {
  return (
    <div className='min-h-dvh bg-[linear-gradient(147.52deg,#f9fafb_8.89%,#d2d6db_100.48%)]'>
      <div className='max-w-[90rem] w-auto mx-auto p-4 min-h-dvh flex flex-col'>
        <NotFoundSection />
      </div>
    </div>
  )
}

export default NotFoundPage