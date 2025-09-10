import { CustomerDetails } from '@/features/checkout/components/customer-details'
import { OrderSummary } from '@/features/checkout/components/order-summary'
import { RiArrowLeftSLine } from '@remixicon/react'
import { LinkButton } from '@repo/ui/src/components/ui/button'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Checkout'
}

export default async function CheckoutPage() {

  return (
    <section className='py-12 px-3 md:px-4 md:py-16 xl:p-24'>

      <LinkButton href={'/cart'} replace variant={'link-color'} className='mb-8'>
        <RiArrowLeftSLine /> Back to shopping cart
      </LinkButton>

      <h1 className='text-2xl font-semibold text-neutral-900 md:text-3xl xl:text-4xl mb-8'>Checkout</h1>

      <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8 gap-y-8'>

        <div className='col-span-4 md:col-span-6'>
          <CustomerDetails />
        </div>
        <div className='col-span-4 md:col-span-6'>
          <Suspense>
            <OrderSummary />
          </Suspense>
        </div>

      </div>
    </section>
  )
}
