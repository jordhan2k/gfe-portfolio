import { DashedSeparator, Separator } from '@/components/ui/separator';
import { ICartItem, IGetCartData } from '@/types';
import React, { Fragment } from 'react'
import { CheckoutItem } from './checkout-item';
import { Button } from '@repo/ui/src/components/ui/button';
import { RiLockLine } from '@remixicon/react';
import SummaryItem from '@/components/ui/summary-item';

async function OrderSummary() {
  const res: IGetCartData = await fetch(`https://www.greatfrontend.com/api/projects/challenges/e-commerce/cart-sample`).then((res) => res.json());
  const data: ICartItem[] = res.items;

  return (
    <div className='w-full p-4 md:p-8 rounded-lg border border-neutral-200 flex flex-col gap-8 h-full'>
      <h2 className='text-neutral-900 text-xl font-semibold'>Order summary</h2>

      {
        data.map((item, index) => (

          <Fragment key={item.product.product_id} >
            <CheckoutItem
              color={item.unit.color}
              imageUrl={item.unit.image_url}
              quantity={item.quantity}
              name={item.product.name}
              size={item.unit.size}
              totalListPrice={item.total_list_price}
              totalSalePrice={item.total_sale_price}

            />
            {index !== data.length - 1 ? <DashedSeparator /> : null}

          </Fragment>
        ))
      }



      <Separator />

      <div className='flex-1 flex flex-col gap-4'>
        <SummaryItem label='Subtotal' value={100} />
        <SummaryItem label='Shipping' value={0} />
        <SummaryItem label='Coupon discount' badgeProps={{ children: 'GR8FRNTND24' }} value={5} />

      </div>

      <DashedSeparator />

      <Button size='xl'><RiLockLine />Checkout</Button>
    </div>
  )
}

export { OrderSummary }