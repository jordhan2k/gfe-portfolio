import CartSection from '@/features/cart/cart-section'
import { RiLoader5Line } from '@remixicon/react'
import { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Cart'
}

export default function CartPage() {
  return (
    <Suspense fallback={<div className='w-full py-30'>
      <RiLoader5Line className='size-20 animate-spin mx-auto text-indigo-400' />
    </div>}>
      <CartSection />
    </Suspense>
  )
}
