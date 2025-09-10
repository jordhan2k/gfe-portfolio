// import ProductGridSection from '@/features/product-grid/product-grid-section'
import ProductGridSection from '@/features/latest/product-grid-section'
import CollectionGridSection from '@/features/storefront/components/collection-grid-section'
import { RiExchangeLine, RiShieldCheckLine, RiTruckLine } from '@remixicon/react'
import { FeatureSectionGrid } from '@repo/ui/src/components/marketing/feature-section-grid'
import { HeroSection } from '@repo/ui/src/components/marketing/hero-section'
import React from 'react'

export default function StoreFrontPage() {
  return (
    <>
      <HeroSection
        imgUrl='https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/banner.jpg'
        title='Summer styles are finally here'
        description="This year, our new summer collection will be your haven from the world's harsh elements."
        buttons={[
          {
            children: 'Shop now',
            variant: 'primary',
            href: '/products'
          }
        ]}
      />

      <ProductGridSection />

      <CollectionGridSection />
      <FeatureSectionGrid
        supportingText='Elevate Your Experience'
        title='Our Commitment to Exceptional Service'
        description='We pride ourselves on a foundation of exceptional customer service, where every interaction is a testament to our dedication to excellence.'
        features={[
          {
            title: 'Complimentary Shipping',
            description:
              'Enjoy the convenience of free shipping for all orders. We believe in transparent pricing, and the price you see is the price you pay—no surprise fees',
            icon: <RiTruckLine />,
          },
          {
            title: '2-Year Quality Promise',
            description:
              "Shop with confidence knowing that we stand behind our products. Should any issue arise within the first two years, rest assured we're here to help with a hassle-free replacement.",
            icon: <RiShieldCheckLine />,
          },
          {
            title: 'Easy Exchanges',
            description:
              "If your purchase isn't quite right, pass it on to a friend who might love it, and let us know. We're happy to facilitate an exchange to ensure you have the perfect item to complement your lifestyle.",
            icon: <RiExchangeLine />,
          },
        ]}
      />

    </>
  )
}

