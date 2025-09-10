'use client'


import { QuantityControl } from '@/features/cart/components/quantity-control';
import { Button } from '@repo/ui/src/components/ui/button';
import { useMediaQuery } from 'usehooks-ts';
import { useCartControlContext, useProductActions } from '../context';

function CartQuantity() {

  const { onDecrease, onIncrease } = useProductActions();
  const { inventory, quantity } = useCartControlContext();
  const isMobile = useMediaQuery('(max-width: 767px)');

  const disabledDecrease = quantity === 0;
  const disabledIncrease = !inventory?.stock || (quantity > 0 && quantity >= inventory?.stock);
  const disableAddToCart = !inventory?.stock || quantity === 0

  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='text-sm font-normal text-neutral-500'>Quantity</div>
        <QuantityControl
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          quantity={quantity}
          disabledDecrease={disabledDecrease}
          disabledIncrease={disabledIncrease}
        />
        {/* <div className='w-[125px] bg-neutral-50 flex items-center justify-between px-1.5 py-1.5 rounded-md border border-neutral-200 '>
          <Button aria-label='Decrease quantity' disabled={disabledDecrease} onClick={onDecrease} variant={'link-gray'}><RiSubtractFill /></Button>
          <span>{quantity}</span>
          <Button aria-label='Increase quantity' disabled={disabledIncrease} onClick={onIncrease} variant={'link-gray'}><RiAddFill /> </Button>
        </div> */}
      </div>
      {!inventory?.stock ? <div className='text-xl text-neutral-900 font-semibold'>Sorry, this item is out of stock</div> : null}
      <Button disabled={disableAddToCart} className='w-full' size={isMobile ? 'xl' : '2xl'}>Add to Cart</Button>
    </>
  )
}

export { CartQuantity };
