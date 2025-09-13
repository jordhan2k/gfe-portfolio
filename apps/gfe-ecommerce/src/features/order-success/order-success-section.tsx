'use client'

import { IGetOrder } from '@/types';
import { RiFileCopy2Line } from '@remixicon/react';
import { Button } from '@repo/ui/src/components/ui/button';
import { useToast } from '@repo/ui/src/hooks/use-toast';
import clsx from 'clsx';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react'
import { CheckoutItem } from '../checkout/components/checkout-item';
import { DashedSeparator, Separator } from '@/components/ui/separator';
import SummaryItem from '@/components/ui/summary-item';
import { formatPrice } from '@/lib';
import { Visa } from '@/assets/icons/visa';

type OrderSuccessSectionProps = {
  orderId: string;
}
function OrderSuccessSection({
  orderId
}: OrderSuccessSectionProps) {

  const [orderDetail, setOrderDetail] = useState<IGetOrder>();
  const { toast } = useToast();

  const getOrderData = () => {
    if (!orderId) return;
    const localData = localStorage.getItem(`order_${orderId}`);
    if (localData) {
      setOrderDetail(JSON.parse(localData))
    }

  }

  useEffect(() => {
    getOrderData();
  }, [orderId])

  if (!orderDetail) return null;




  const { address, phone } = orderDetail?.shipping_details;
  const { discount, discount_code, shipping, subtotal, total } = orderDetail?.summary;
  const { exp_month, exp_year, last_4 } = orderDetail?.payment_method;

  const handleCopyOrderId = () => {

    if (orderDetail.order_id) {
      navigator.clipboard.writeText(orderDetail.order_id)
      toast({
        variant: 'success',
        message: 'Order id copied to clipboard!'
      })
    }

  }
  return (
    <section className='py-12 px-3 md:px-4 md:py-16 xl:p-24 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8 gap-y-12'>

      <div className='col-span-4 md:col-span-6'>
        <Image
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/order-success-desktop.jpg"
          alt="Order success banner"
          width={411}
          height={968}
          className={clsx('hidden xl:block h-full w-full object-cover')}
        />
        <Image
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/order-success-tablet.jpg"
          alt="Order success banner"
          width={411}
          height={968}
          className={clsx('hidden md:block xl:hidden h-[420px] w-full object-cover')}
        />
        <Image
          src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/order-success-mobile.jpg"
          alt="Order success banner"
          width={411}
          height={968}
          className={clsx('block md:hidden h-[196px] w-full object-cover')}
        />


      </div>

      <div className='col-span-4 md:col-span-6 flex flex-col gap-12'>
        <div>
          <h1 className='text-3xl font-semibold text-neutral-900 mb-4'>Your order is confirmed.</h1>
          <p className='text-base font-normal text-neutral-600'>Your order is now in the queue and being processed. We'll let you know when we ship it out!</p>
        </div>

        <div>
          <div className='text-base font-normal text-neutral-600'>Order number</div>
          <Button onClick={handleCopyOrderId} variant={'link-color'} size={'lg'}>{orderDetail?.order_id} <RiFileCopy2Line /></Button>
        </div>

        <div className='flex flex-col gap-8'>
          {
            orderDetail?.items?.map((item, index) => (

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
                {index !== orderDetail?.items.length - 1 ? <Separator /> : null}

              </Fragment>
            ))
          }
        </div>

        <DashedSeparator />

        <div className=' flex flex-col gap-6'>
          <SummaryItem label='Subtotal' value={subtotal ?? 0} />
          <SummaryItem label='Shipping' value={shipping ?? 0} />
          {discount ? <SummaryItem
            label='Coupon discount'
            badgeProps={{ children: discount_code }}
            value={`-$${discount ?? 0}`}
          /> : null}

          <DashedSeparator />
          <div className='flex justify-between items-center'>
            <div className='text-2xl font-medium text-neutral-900'>Total</div>
            <div className='text-4xl font-semibold text-neutral-900'>${formatPrice(total ?? 0)}</div>
          </div>
        </div>

        <div className='w-full grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-8 gap-y-8'>
          <div className='col-span-4 md:col-span-3 flex flex-col gap-4'>
            <div className='text-base font-normal text-neutral-600'>Shipping address</div>
            <div className='text-sm font-normal text-neutral-600'>
              <p>{phone}</p>
              <p>{address?.line1}</p>
              {address?.line2 ? <p>{address?.line2}</p> : null}
              <p>{address?.city}, {address?.state} {address?.zip}</p>
              <p>{address?.country}</p>
            </div>


          </div>
          <div className='col-span-4 md:col-span-3 flex flex-col gap-4'>
            <div className='text-base font-normal text-neutral-600'>Payment</div>
            <div className='flex gap-4'>
              <Visa />


              <div>

                <div className='text-sm font-normal text-neutral-900'>Ending with {last_4}</div>
                <div className='text-sm font-normal text-neutral-600'>Payment {exp_month}/{exp_year}</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default OrderSuccessSection