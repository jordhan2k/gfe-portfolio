import { ProductImageSkeleton } from '@/features/product-detail/components/product-images'
import React from 'react'

export default function Loading() {
  return (
    <div className='px-4 py-12 xl:p-24 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12'>
      <div className='col-span-4 md:col-span-6'>
        <ProductImageSkeleton />
      </div>
      <div className='col-span-4 md:col-span-6'>
        {/* <ProductMeta
        description={product.description}
        name={product.name}
        info={product.info}
        key={`meta-${product.product_id}`}
        rating={product.rating}
        reviews={product.reviews}
      /> */}
      </div>
    </div>
  )
}
