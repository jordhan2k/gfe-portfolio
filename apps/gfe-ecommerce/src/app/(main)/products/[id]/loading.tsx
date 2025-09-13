import { RiLoader5Line } from '@remixicon/react'

export default function Loading() {
  return (
    // <div className='px-4 py-12 xl:p-24 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12'>

    <div className='w-full py-30'>
      <RiLoader5Line className='size-20 animate-spin mx-auto text-indigo-400' />
    </div>
    // </div>
  )
}
