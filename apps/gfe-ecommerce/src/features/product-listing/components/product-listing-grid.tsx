// 'use client'

import { ProductCard, ProductCardSkeleton } from '@/components/product-card';
import { IGetProductListData } from '@/types';
import { EmptyGrid } from './empty-grid';
import ProductListingPagination from './product-listing-pagination';

const getProductListing = async (queryString: string) => {

  const data = await fetch(
    `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products${queryString ? `?${queryString}` : ""
    }`
  );
  const result: IGetProductListData = await data.json();

  if (!data.ok) {
    throw new Error("Cannot fetch product list");
  }
  return result;
};

export default async function ProductListingGrid({ queryString }: {
  queryString: string
}) {

  const { data, pagination } = await getProductListing(queryString);

  if (!data.length) {
    return <EmptyGrid />
  }

  return (
    <>
      <ul className={'grid grid-cols-4 md:grid-cols-6 xl:grid-cols-9 gap-4 md:gap-8 gap-y-8'}>
        {
          data.map((product) => (
            <li key={product.product_id} className='col-span-4 md:col-span-3 xl:col-span-3'>
              <ProductCard product={product} />
            </li>
          ))
        }


      </ul>
      <ProductListingPagination perPage={pagination.per_page ?? 9} total={pagination.total ?? 0} />


    </>
  )
}

// const GridPagination =

export const ListingGridSkeleton = () => (
  <>
    {/* <TopScroller /> */}
    <ul className={'grid grid-cols-4 md:grid-cols-6 xl:grid-cols-9 gap-4 md:gap-8 gap-y-8'}>
      {Array.from({ length: 9 }).map((_, index) => (
        <li key={`listing-skeleton-${index}`} className='col-span-4 md:col-span-3 xl:col-span-3'>
          <ProductCardSkeleton />
        </li>
      ))}

    </ul>
  </>
)


