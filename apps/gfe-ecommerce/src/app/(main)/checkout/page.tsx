import CheckoutSection from '@/features/checkout/checkout-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout'
}

export default async function CheckoutPage() {

  return (
    <CheckoutSection />
  )
}
