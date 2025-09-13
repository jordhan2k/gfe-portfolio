import NewslettersForm from '@/features/newsletter/newsletter-form';
import {
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from '@remixicon/react';
import { AppLink } from '@repo/ui/src/components/ui/link';
import Image from 'next/image';
import Link from 'next/link';

const shopCategories = [
  {
    title: 'Unisex',
    href: '/products?category=unisex',
  },
  {
    title: 'Women',
    href: '/products?category=women',
  },
  {
    title: 'Men',
    href: '/products?category=men',
  },
];

const shopCollections = [
  {
    title: 'Latest arrivals',
    href: '/products?collection=latest',
  },
  {
    title: 'Urban Oasis',
    href: '/products?collection=urban',
  },
  {
    title: 'Cozy Comfort',
    href: '/products?collection=cozy',
  },
  {
    title: 'Fresh Fusion',
    href: '/products?collection=fresh',
  },
];

const footerSocials = [
  {
    icon: RiYoutubeLine,
    url: 'https://youtube.com',
    name: "Link to Stylenest's youtube profile",
  },
  {
    icon: RiInstagramLine,
    url: 'https://instagram.com',
    name: "Link to Stylenest's instagram profile",
  },
  {
    icon: RiFacebookBoxLine,
    url: 'https://facebook.com',
    name: "Link to Stylenest's facebook profile",
  },
  {
    icon: RiGithubLine,
    url: 'https://github.com',
    name: "Link to Stylenest's github profile",
  },
  {
    icon: RiTwitterXLine,
    url: 'https://twitter.com',
    name: "Link to Stylenest's twitter profile",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-12 px-4 md:py-16 xl:p-24 flex flex-col gap-12 md:gap-16'>
      <div className='grid grid-cols-4 xl:grid-cols-12 gap-x-4 xl:gap-x-8 gap-y-8'>
        <div className='col-span-4 xl:col-span-8'>
          <h3 className='text-xl font-semibold text-neutral-900 mb-2'>Join our newsletter</h3>
          <div className='text-base font-normal text-neutral-600'>We’ll send you a nice letter once per week. No spam.</div>
        </div>
        <div className='col-span-4'>
          <NewslettersForm />
        </div>

      </div>
      {/*  */}
      <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12'>
        <div className='col-span-4 md:col-span-6'>
          <Link href={"/"}>
            <Image
              width={105}
              height={32}
              loading='lazy'
              src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/logo.svg"
              alt="Stylenest's Logo"
            />
          </Link>
          <p className='text-base font-normal text-neutral-600 mt-6 md:mt-8'>
            Craft stunning style journeys that weave more joy into every thread.
          </p>
        </div>

        <div className='col-span-4 md:col-span-3'>
          <div className='text-xs font-normal text-neutral-500 mb-4'>
            SHOP CATEGORIES
          </div>
          <div className='flex flex-col gap-3 items-start'>
            {
              shopCategories.map((c) => (
                <AppLink key={c.title} variant='gray' href={c.href}>{c.title}</AppLink>
              ))
            }
          </div>


        </div>
        <div className='col-span-4 md:col-span-3'>
          <div className='text-xs font-normal text-neutral-500 mb-4'>
            SHOP COLLECTIONS
          </div>
          <div className='flex flex-col items-start gap-3'>
            {
              shopCollections.map((c) => (
                <AppLink key={c.title} variant='gray' href={c.href}>{c.title}</AppLink>
              ))
            }
          </div>

        </div>

      </div>

      <div className='border-t border-neutral-200 w-full flex flex-wrap gap-8 xl:justify-between pt-8'>
        <div className='text-base font-normal text-neutral-500'>© {currentYear} StyleNest, Inc. All rights reserved.</div>
        <div className='flex gap-6'>
          {
            footerSocials.map(({ icon: Icon, name, url }) => (
              <AppLink key={name} size='2xl' href={url} variant={"gray"} className='text-neutral-400' aria-label={`link to ${name}`}>
                <Icon />
              </AppLink>

            ))
          }
        </div>
      </div>

    </footer>
  )
}

export default Footer