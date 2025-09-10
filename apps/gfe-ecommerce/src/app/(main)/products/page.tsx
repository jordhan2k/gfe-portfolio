import FilterPanel from '@/features/product-listing/components/filter-panel'
import ProductListingGrid, { ListingGridSkeleton } from '@/features/product-listing/components/product-listing-grid'
import { SortingButton } from '@/features/product-listing/components/sorting-button'
import { getListingQueryString } from '@/lib'
import { IProductListingSearchParams } from '@/types'
import clsx from 'clsx'
import { Suspense } from 'react'

export default async function ProductsPage(props: {
  searchParams?: Promise<IProductListingSearchParams>
}) {
  const searchParams = await props.searchParams;
  const queryString = getListingQueryString(searchParams);

  return (
    <section className={clsx('px-3 py-12 md:px-4 md:py-16 xl:p-24',
      'flex flex-col gap-8',
      'grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12')}>
      <div className='col-span-4 md:col-span-6 xl:col-span-3 flex xl:block justify-between'>
        <FilterPanel />
        <div className='xl:hidden'>
          <SortingButton />
        </div>
      </div>
      <div className='col-span-4 md:col-span-6 xl:col-span-9 flex flex-col gap-8'>
        <div className='hidden xl:flex justify-end'>
          <SortingButton />
        </div>
        <Suspense
          key={queryString}
          fallback={<ListingGridSkeleton />}>
          <ProductListingGrid queryString={queryString} />
        </Suspense>
      </div>
    </section>
  )
}
