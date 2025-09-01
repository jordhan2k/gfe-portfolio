import { ModalWrapper } from '@/features/product-review/components/modal-wrapper';
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
    <ModalWrapper>
      <div className='grid grid-cols-4 lg:grid-cols-10 gap-x-8 gap-y-10 max-h-[calc(100vh_-_160px)] overflow-auto'>
        <OverallRating />
        <ReviewList />
      </div>
    </ModalWrapper>
  )
}
