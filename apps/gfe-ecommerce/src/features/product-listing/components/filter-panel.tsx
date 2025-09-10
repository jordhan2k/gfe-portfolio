'use client'

import { RiCloseLine, RiFilterLine } from '@remixicon/react'
import { Button } from '@repo/ui/src/components/ui/button'
import clsx from 'clsx'
import { useState } from 'react'
import useFilter from '../use-filter'
import { FilterCategory } from './filter-category'
import { FilterCollection } from './filter-collection'
import { FilterColor } from './filter-colors'
import { FilterRating } from './filter-rating'
import { Separator } from '@/components/ui/separator'


function FilterPanel() {
  return (
    <>
      <div className='hidden xl:block sticky top-[100px] w-full'>
        <Filters />
      </div>
      <MobileFilterPanel />
    </>
  )
}
const Filters = () => (<div className='[&>hr]:text-neutral-300 [&>hr]:my-6 w-full py-4 pr-4'>
  <FilterCollection />
  <Separator />
  <FilterCategory />
  <Separator />
  <FilterColor />
  <Separator />
  <FilterRating />
  <Separator />
  <ClearFilter />
</div>
)

const ClearFilter = () => {
  const { clearFilters: resetFilters, filterCount } = useFilter('clear');
  if (!filterCount) return null;
  return <Button className='w-full' onClick={resetFilters} variant={'link-color'} size={'lg'}>Clear All ({filterCount})</Button>
}

const MobileFilterPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (state?: boolean) => {
    setIsOpen(prev => state !== undefined ? state : !prev);
  }
  return <>
    <div className='flex xl:hidden'>
      <Button onClick={() => toggleMenu()} variant={'secondary'}><RiFilterLine className='size-4.5' />Filter</Button>
    </div>
    <div
      aria-hidden={true}
      className={clsx('z-1000 backdrop-blur-xs xl:hidden fixed h-dvh /data-[visible=false]:bg-transparent data-[visible=true]:bg-neutral-500/50 transition-colors top-0 left-0 duration-100',
        {
          "w-0! bg-transparent": !isOpen,
          "w-dvw bg-neutral-500/50": isOpen
        }
      )}
      onClick={(event) => { event.stopPropagation(); toggleMenu(false) }}
    />
    <aside
      data-visible={isOpen}
      aria-label="Main menu"
      aria-hidden={!isOpen}
      className='z-1001 fixed flex flex-col xl:hidden max-w-[22.5rem] w-full h-dvh bg-white top-0 left-0 justify-between transition-transform -translate-x-[100%] data-[visible=true]:translate-x-0 overflow-y-auto' >
      <div className='flex flex-col bg-white sticky top-0 p-6 pb-3 gap-6 z-1'>
        <div className='flex items-center justify-between'>
          <div className='text-xl font-normal text-neutral-900'>Filter</div>
          <Button onClick={() => toggleMenu(false)} aria-label='Open mobile menu' variant={'link-gray'} size={'sm'}><RiCloseLine /></Button>
        </div>
        <Separator className='text-neutral-300' />
      </div>

      <div className='flex-1 px-6 pt-3 pb-6'>
        <Filters />
      </div>
    </aside >
  </>
}

export default FilterPanel