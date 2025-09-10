'use client'

import { RiTShirt2Line } from "@remixicon/react";
import useFilter from "../use-filter";
import { Button } from "@repo/ui/src/components/ui/button";


const EmptyGrid = () => {
  const { clearFilters } = useFilter('clear');
  return <div className={'w-full flex flex-col items-center justify-center gap-5 min-h-[612px] md:min-h-[776px] p-6 '}>
    <div className='size-12 shadow rounded-full text-indigo-700 flex items-center justify-center'>
      <RiTShirt2Line />
    </div>
    <div className=' flex flex-col gap-2 text-center'>
      <div className='text-xl font-medium text-neutral-900'>
        Nothing found just yet
      </div>
      <p className='text-base font-normal text-neutral-900'>
        Adjust your filters a bit, and let's see what we can find!
      </p>
    </div>
    <Button onClick={clearFilters} size={'lg'} >Reset filters</Button>
  </div>
}

export { EmptyGrid }