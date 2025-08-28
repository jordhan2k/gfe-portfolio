import { IProduct } from '@/types'
import Link from 'next/link'
import React from 'react'

export default async function ProductsPage() {
  const result = await Promise.all(
    [
      fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products').then((res) => res.json()),
      fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?page=2').then((res) => res.json()),
      fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?page=3').then((res) => res.json()),
    ])

  const products = result.flatMap((item) => item.data)

  return (
    <div>
      {
        products?.map((prod: IProduct) => (
          <Link className='block hover:text-blue-600' key={prod.product_id} href={`/products/${prod.product_id}`}>{prod.name}</Link>
        ))
      }
    </div>
  )
}
