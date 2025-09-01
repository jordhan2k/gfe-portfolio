import React from 'react'

function DemoWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-dvh bg-[linear-gradient(147.52deg,#f9fafb_8.89%,#d2d6db_100.48%)]'>
      <div className='max-w-[90rem] w-auto mx-auto p-4 min-h-dvh flex flex-col'>
        <div className='bg-white rounded-lg shadow-md'>
          {children}
        </div>
      </div>
    </div>
  )
}

export { DemoWrapper }