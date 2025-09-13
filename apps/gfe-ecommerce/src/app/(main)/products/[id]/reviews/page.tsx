import { OverallRating } from '@/features/product-review/components/overall-rating';
import { ReviewList } from '@/features/product-review/components/review-list';
import { IProduct } from '@/types';

export const revalidate = 60

export async function generateStaticParams() {
  const result = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?per_page=100').then((res) => res.json())

  return result.data.map((product: IProduct) => ({
    id: product.product_id,
  }))
}

export default function ReviewPage() {
  return (
    <div className='grid grid-cols-4 lg:grid-cols-10 gap-x-8 gap-y-10 h-[calc(100vh_-_32px)] overflow-auto py-6'>
      <OverallRating />
      <ReviewList className='h-full!' />
    </div>
  )
}
