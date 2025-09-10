
'use client'

import { SIZES } from '@/config';
import { ICartProduct, ICartUnit } from '@/types';
import capitalize from 'lodash/capitalize';
import Image from 'next/image';
import Link from 'next/link';
import { QuantityControl } from './quantity-control';
import { Button } from '@repo/ui/src/components/ui/button';

type CartItemProps = ICartProduct
  & Partial<ICartUnit>
  & {
    total_list_price: number;
    total_sale_price: number;
    quantity: number;
  }

function CartItem({
  description,
  name,
  product_id,
  quantity,
  image_url,
  total_list_price,
  total_sale_price,
  color,
  size,
  sku
}: CartItemProps) {
  const redirectLink = `/products/${product_id}`;
  const linkName = `Go to detail page of ${name}`;
  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
      <Link href={redirectLink} aria-label={linkName}>
        <Image
          src={image_url ?? ''}
          alt={`${name}'s image`}
          width={280}
          height={200}
          className='h-[200px] w-full md:w-[280px] object-cover rounded-lg bg-neutral-200'
        />
      </Link>
      <div className='flex flex-col gap-4 flex-1'>
        <Link href={redirectLink} aria-label={linkName}>
          <h3 className='text-2xl font-medium text-neutral-900 w-fit'>{name}</h3>
        </Link>
        <div className='text-base font-medium text-neutral-600'>
          {capitalize(color)}
          {size ? ` • ${SIZES?.[size as keyof typeof SIZES]?.long ?? size}` : null}
        </div>
        <p className='text-sm font-normal text-neutral-600'>{description}</p>

        <div className='flex gap-4 items-center'>
          <div className='flex flex-1 gap-4  items-center'>
            <QuantityControl quantity={quantity}
              onDecrease={() => { }}
              onIncrease={() => { }} />

            {sku ? <RemoveCartItem sku={sku} /> : null}
          </div>

          <div className='text-lg font-medium text-neutral-900 flex gap-2 items-center whitespace-nowrap'>
            ${total_sale_price ? total_sale_price : total_list_price}
            {total_sale_price ? <span className='text-xs font-normal text-neutral-600 line-through'>${total_list_price}</span> : null}
          </div>


        </div>
      </div>
    </div>
  )
}

const RemoveCartItem = ({
  sku
}: {
  sku: string;

}) => {

  return (
    <>
      <Button size={'sm'} variant={'link-gray'}>Remove</Button>
    </>
  )
}

export { CartItem };
