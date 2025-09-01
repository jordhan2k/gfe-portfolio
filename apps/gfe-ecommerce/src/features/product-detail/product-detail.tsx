import React from 'react'
import { ProductImages } from './components/product-images'
import { ProductMeta } from './components/product-meta'

function ProductDetail() {
  return (
    <section className='px-4 py-12 xl:p-24 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12'>
      <div className='col-span-4 md:col-span-6'>
        <ProductImages />
      </div>
      <div className='col-span-4 md:col-span-6'>
        <ProductMeta />
      </div>
    </section>
  )
}

export { ProductDetail }