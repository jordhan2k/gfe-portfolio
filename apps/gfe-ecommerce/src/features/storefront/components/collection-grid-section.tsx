import { CollectionGrid } from '@/components/collection-grid'
import { IGetCollectionList } from '@/types';
import React from 'react'

export default async function CollectionGridSection() {

  const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections');

  const result: IGetCollectionList = await response.json();
  return (
    <section className='px-3 py-12 md:px-4 md:py-16 xl:p-24 flex flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl md:text-3xl font-semibold text-neutral-900'>Our Collections</h2>
      </div>
      <CollectionGrid collections={result.data} />
    </section>
  )
}
