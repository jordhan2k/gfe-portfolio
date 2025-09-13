
import ProductGrid from '@/components/product-grid';
import { IGetProductListData } from '@/types';
import { LinkButton } from '@repo/ui/src/components/ui/button';

async function ProductGridSection() {
  const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=latest');
  const result: IGetProductListData = await response.json();



  return (
    <section className='px-3 py-12 md:px-4 md:py-16 xl:p-24 flex flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl md:text-3xl font-semibold text-neutral-900'>Latest Arrivals</h2>
        <LinkButton href={'/products?collection=latest'} size='lg' variant='secondary'>View all</LinkButton>
      </div>
      <ProductGrid products={result.data} />
    </section>
  )
}

export default ProductGridSection