'use client'


import { QuantityControl } from '@/features/cart/components/quantity-control';
import { Button } from '@repo/ui/src/components/ui/button';
import { useMediaQuery } from 'usehooks-ts';
import { useCartControlContext, useImageContext, useProductActions, useProductDetail } from '../context';
import { useCartContext } from '@/contexts/cart-context';
import { useToast } from '@repo/ui/src/hooks/use-toast';

function CartQuantity() {
  const { toast } = useToast();
  const { onDecrease, onIncrease } = useProductActions();
  const { inventory, quantity } = useCartControlContext();
  const { product } = useProductDetail();
  const { images } = useImageContext();
  const { addToCart } = useCartContext();
  const isMobile = useMediaQuery('(max-width: 767px)');

  const disabledDecrease = quantity === 0;
  const disabledIncrease = !inventory?.stock || (quantity > 0 && quantity >= inventory?.stock);
  const disableAddToCart = !inventory?.stock || quantity === 0;

  const handleAddToCart = () => {
    if (disableAddToCart || !product) return;
    addToCart({
      inventory,
      product,
      quantity,
      imageUrl: images[0]?.image_url ?? ''
    })
    toast({
      variant: "success",
      message: "Successfully added to your cart!"
    })
  }

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
      </div>
      {!inventory?.stock ? <div className='text-xl text-neutral-900 font-semibold'>Sorry, this item is out of stock</div> : null}
      <Button onClick={handleAddToCart} disabled={disableAddToCart} className='w-full' size={isMobile ? 'xl' : '2xl'}>Add to Cart</Button>
    </>
  )
}

export { CartQuantity };
