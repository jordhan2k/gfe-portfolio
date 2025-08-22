// import CookieConsent from '@/components/common/cookie-consent';
import { Footer } from '@/features/common/footer';
import { Header } from '@/features/common/header';
import dynamic from 'next/dynamic';
import React from 'react';

const CookieConsent = dynamic(() => import('@/features/common/cookie-consent'))

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className='max-w-[90rem] w-auto mx-auto p-4'>
        <div className='w-full bg-white shadow-md rounded-md'>
          {children}
          <Footer />
        </div>
      </main>
      <CookieConsent />
    </>
  )
}
