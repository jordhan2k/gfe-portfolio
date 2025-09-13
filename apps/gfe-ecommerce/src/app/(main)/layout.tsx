import Footer from '@/components/common/footer'
import { NavBar } from '@/components/navigation/nav-bar'
import React from 'react'


export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar navLinks={[
        {
          href: '/products',
          label: 'Shop all'
        },
        {
          href: '/latest',
          label: 'Latest arrivals'
        }
      ]} />
      <main className='max-w-[90rem] w-auto mx-auto p-4 flex flex-col'>
        <div className='h-[7rem]' />
        <div className='w-full bg-white shadow rounded-lg flex-1'>
          <div className='min-h-[calc(100dvh-7rem)]'>
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}
