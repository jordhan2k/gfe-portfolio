import { RiArrowRightLine, RiShoppingCart2Line, RiTShirt2Line } from '@remixicon/react'
import { Button, LinkButton } from '@repo/ui/src/components/ui/button'
import Image from 'next/image'
import React from 'react'

function EmptyCart() {
  return (
    <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8'>

      <div className='col-span-4 md:col-span-6 xl:col-span-5 flex flex-col items-center justify-center p-6 gap-5 min-h-[240px] md:min-h-[400px]'>
        {/* <div className={'w-full flex flex-col items-center justify-center gap-5 min-h-[612px] md:min-h-[776px] p-6 '}> */}
        <div className='size-12 shadow rounded-full text-indigo-700 flex items-center justify-center'>
          <RiShoppingCart2Line />
        </div>
        <div className=' flex flex-col gap-2 text-center'>
          <div className='text-xl font-medium text-neutral-900'>
            Your cart is empty
          </div>
          <p className='text-base font-normal text-neutral-900'>
            Let's go explore some products
          </p>
        </div>
        <LinkButton href={'/products'} size={'lg'} >Explore products <RiArrowRightLine /></LinkButton>
        {/* </div> */}
      </div>

      <div className='col-span-4 md:col-span-6 xl:col-span-7'>
        <Image
          src={'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/empty-cart.jpg'}
          alt="Empty cart illustration"
          width={700}
          height={500}
          className='h-[180px] w-full md:h-[320] xl:h-[432px] object-cover'

        />
      </div>


    </div>
  )
}

export { EmptyCart }