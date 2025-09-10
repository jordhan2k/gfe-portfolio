'use client'

import { RatingStars } from '@/components/ui/rating-stars';
import { Badge } from '@repo/ui/src/components/ui/badge';
import { AppLink } from '@repo/ui/src/components/ui/link';
import { useCartControlContext, useProductDetail } from '../context';

function ProductOverview() {
  const { product } = useProductDetail();
  const { inventory } = useCartControlContext();
  if (!product) return null;
  const { name,
    description,
    product_id,
    // info,
    rating,
    reviews } = product!;
  const hasDiscount = !!inventory?.discount_percentage || !!inventory?.discount;
  const roundedRating = Math.round(rating * 10) / 10;
  return (
    <>
      <div>
        {/* name */}
        <h1 className='text-3xl md:text-5xl text-neutral-900 font-semibold mb-5'>
          {name}
        </h1>
        {/* price */}
        <div className='mb-2'>
          <span className='text-neutral-600 text-3xl font-medium'>
            ${hasDiscount ? inventory?.sale_price : inventory?.list_price}
          </span>
          {hasDiscount ? <span className='text-neutral-400 text-lg font-medium line-through ml-1'>${inventory?.list_price}</span> : null}
        </div>
        {inventory?.discount_percentage ? <Badge size={"lg"} variant={"warning"}>{inventory?.discount_percentage}% OFF</Badge> : null}
        {inventory?.discount ? <Badge size={"lg"} variant={"success"}>${inventory?.discount} OFF</Badge> : null}

        {/* review */}
        <div className='flex gap-2 items-center mt-3'>
          <div className='text-xl text-neutral-900'>{roundedRating}</div>
          <RatingStars rating={roundedRating} />
          {
            reviews > 0
              ? <AppLink href={`/products/${product_id}/reviews`}>See all {reviews} {reviews > 1 ? 'reviews' : 'review'}</AppLink>
              : <>
                <div className='text-sm font-normal text-neutral-900'>No review yet.</div>
                <AppLink href={'#review'} >Be the first</AppLink>
              </>
          }
        </div>
      </div>
      <p className='text-base text-neutral-600 font-normal'>
        {description}
      </p>
    </>
  )
}

export { ProductOverview };
