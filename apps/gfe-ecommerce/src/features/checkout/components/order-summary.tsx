'use client'

import { DashedSeparator, Separator } from '@/components/ui/separator';
import SummaryItem from '@/components/ui/summary-item';
import { useCartContext } from '@/contexts/cart-context';
import { formatPrice } from '@/lib';
import { RiLockLine } from '@remixicon/react';
import { Button } from '@repo/ui/src/components/ui/button';
import { Fragment, useMemo } from 'react';
import { CheckoutItem } from './checkout-item';
import { useFormContext } from 'react-hook-form';

function OrderSummary() {
  // const res: IGetCartData = await fetch(`https://www.greatfrontend.com/api/projects/challenges/e-commerce/cart-sample`).then((res) => res.json());
  // const data: ICartItem[] = res.items;
  const { cartItems, discount } = useCartContext();
  const { watch } = useFormContext();

  const selectedDelivery = watch('deliveryMethod');

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

  const total = subTotal - discountValue + (selectedDelivery?.fee ?? 0);

  return (
    <div className='w-full p-4 md:p-8 rounded-lg border border-neutral-200 flex flex-col gap-8 h-full'>
      <h2 className='text-neutral-900 text-xl font-semibold'>Order summary</h2>

      {
        cartItems.map((item, index) => (

          <Fragment key={item.unit.sku} >
            <CheckoutItem
              color={item.unit.color}
              imageUrl={item.unit.image_url}
              quantity={item.quantity}
              name={item.product.name}
              size={item.unit.size}
              totalListPrice={item.total_list_price}
              totalSalePrice={item.total_sale_price}

            />
            {index !== cartItems.length - 1 ? <DashedSeparator /> : null}

          </Fragment>
        ))
      }



      <Separator />

      <div className='flex-1 flex flex-col gap-4'>
        <SummaryItem label='Subtotal' value={subTotal} />
        <SummaryItem label='Shipping' value={selectedDelivery?.fee ?? 0} />
        {discount ? <SummaryItem
          label='Coupon discount'
          badgeProps={{ children: discount?.coupon_code }}
          value={discount?.discount_amount ? `-$${formatPrice(discount?.discount_amount)}` : `-${discount?.discount_percentage}%`}
        /> : null}

      </div>

      <DashedSeparator />
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-medium text-neutral-900'>Total</div>
        <div className='text-4xl font-semibold text-neutral-900'>${formatPrice(total)}</div>
      </div>

      <Button type='submit' size='xl'><RiLockLine />Checkout</Button>
    </div>
  )
}

export { OrderSummary };
