import { IProduct } from '@/types'
import React from 'react'
import { ProductCard } from './product-card'

function ProductGrid({
  products
}: React.ComponentProps<'ul'> & {
  products: IProduct[];
}) {
  return (
    <ul className={'grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8 gap-y-8'}>
      {
        products.map((product) => (
          <li key={product.product_id} className='col-span-4 md:col-span-3 xl:col-span-3'>
            <ProductCard product={product} />
          </li>
        ))
      }
    </ul>
  )
}

export default ProductGrid