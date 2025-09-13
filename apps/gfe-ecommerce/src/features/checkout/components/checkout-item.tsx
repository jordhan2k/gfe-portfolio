import { ICartItem, ICartProduct, ICartUnit } from '@/types'
import Image from 'next/image';
import React from 'react';
import capitalize from 'lodash/capitalize';
import { SIZES } from '@/config';


type CheckoutItemProps = {
  name: ICartProduct['name'];
  color: ICartUnit['color'];
  size: ICartUnit['size'];
  imageUrl: ICartUnit['image_url'];
  quantity: ICartItem['quantity'];
  totalListPrice: ICartItem['total_list_price'];
  totalSalePrice: ICartItem['total_sale_price'];
};

function CheckoutItem({
  name, color, quantity, size, totalListPrice, totalSalePrice, imageUrl
}: CheckoutItemProps) {
  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <div className='flex flex-1 gap-6'>
        <Image
          src={imageUrl}
          width={80}
          height={80}
          alt={`${name}'s image`}
          className='size-14 md:size-20 rounded-lg object-cover'
        />
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl font-medium text-neutral-900 w-fit'>{name}</h3>
          <div className='text-base font-medium text-neutral-600'>
            {capitalize(color)}
            {size ? ` • ${SIZES?.[size as keyof typeof SIZES]?.long ?? size}` : null}
          </div>
          <div className='text-base font-medium text-neutral-600'>
            Quantity: {quantity}
          </div>
        </div>
      </div>

      <div className='text-right'>
        <div className='text-lg font-semibold text-neutral-900'>${totalSalePrice}</div>
        <div hidden={totalListPrice === totalSalePrice} className='text-lg font-normal text-neutral-600 line-through'>${totalListPrice}</div>
      </div>
    </div>
  )
}

export { CheckoutItem }