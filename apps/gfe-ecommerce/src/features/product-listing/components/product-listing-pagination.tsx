'use client'
import { Pagination } from '@repo/ui/src/components/ui/pagination'
import React from 'react'
import useFilter from '../use-filter';

function ProductListingPagination
  ({
    total,
    perPage
  }: {
    total: number;
    perPage: number;
  }) {
  const { onSortSelect, page } = useFilter('page');
  return (
    <Pagination
      className='w-full flex justify-center'
      iconOnly
      onPageChange={(page) => onSortSelect(undefined, undefined, page.toString())}
      totalPages={Math.ceil(total / perPage)}
      initialPage={Number(page) ?? 1} />
  )
}

export default ProductListingPagination
