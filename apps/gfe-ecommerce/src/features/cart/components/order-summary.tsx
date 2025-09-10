import { RiCouponLine } from '@remixicon/react'
import { Button, LinkButton } from '@repo/ui/src/components/ui/button'
import React from 'react'
import CouponCode from './coupon-code'
import { DashedSeparator } from '@/components/ui/separator'

function OrderSummary() {
  return (
    <div className='w-full rounded-lg p-4 md:p-8 flex flex-col gap-8 border border-neutral-200'>
      <h2 className='text-2xl font-semibold text-neutral-900'>Order summary</h2>

      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center w-full'>
          <div className='text-base font-normal text-neutral-600'>Subtotal</div>
          <div className='text-lg font-semibold text-neutral-900'>$162.50</div>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='text-base font-normal text-neutral-600'>Shipping</div>
          <div className='text-lg font-semibold text-neutral-900'>FREE</div>
        </div>

        <CouponCode />
      </div>

      <DashedSeparator />

      <div className='flex justify-between items-center'>
        <div className='text-2xl font-medium text-neutral-900'>Total</div>
        <div className='text-4xl font-semibold text-neutral-900'>$162.50</div>
      </div>

      <LinkButton href={'/checkout'} className='w-full' size={'2xl'}>Checkout</LinkButton>

    </div>
  )
}



export default OrderSummary