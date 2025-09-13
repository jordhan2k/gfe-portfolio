import { RiCouponLine } from '@remixicon/react'
import { Button, LinkButton } from '@repo/ui/src/components/ui/button'
import React, { useMemo } from 'react'
import CouponCode from './coupon-code'
import { DashedSeparator } from '@/components/ui/separator'
import { useCartContext } from '@/contexts/cart-context'
import { formatPrice } from '@/lib'
import SummaryItem from '@/components/ui/summary-item'

function OrderSummary() {
  const { cartItems, discount } = useCartContext();

  const subTotal = cartItems.reduce((acc, curr) => {
    return acc + curr.total_sale_price
  }, 0);

  const discountValue = useMemo(() => {
    let value = 0;
    if (discount?.discount_amount) {
      value = discount?.discount_amount
    } else if (discount?.discount_percentage) {
      value = (subTotal * discount?.discount_percentage) / 100
    }
    return value;
  }, [discount, subTotal]);

  const total = subTotal - discountValue;


  return (
    <div className='w-full rounded-lg p-4 md:p-8 flex flex-col gap-8 border border-neutral-200'>
      <h2 className='text-2xl font-semibold text-neutral-900'>Order summary</h2>

      <div className='flex flex-col gap-4'>
        <SummaryItem label='Subtotal' value={subTotal} />
        <SummaryItem label='Shipping' value={0} />
        <CouponCode />
      </div>
      <DashedSeparator />
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-medium text-neutral-900'>Total</div>
        <div className='text-4xl font-semibold text-neutral-900'>${formatPrice(total)}</div>
      </div>
      <LinkButton href={'/checkout'} className='w-full' size={'2xl'}>Checkout</LinkButton>

    </div>
  )
}



export default OrderSummary