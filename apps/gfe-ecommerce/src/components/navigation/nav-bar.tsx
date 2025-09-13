'use client'
import { useCartContext } from '@/contexts/cart-context'
import { RiCloseLine, RiMenuLine, RiShoppingBag3Line } from '@remixicon/react'
import { NavLinkType } from '@repo/ui/src/components/marketing/footer-section'
import { Button, LinkButton } from '@repo/ui/src/components/ui/button'
import { AppLink } from '@repo/ui/src/components/ui/link'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const LOGO_URL = "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/logo.svg"

type NavBarProps = {
  logo?: string;
  navLinks: NavLinkType[];
}
function NavBar({
  logo = LOGO_URL,
  navLinks
}: NavBarProps) {
  return (
    <Header>
      <div className='max-w-[90rem] mx-auto px-4 md:px-8 xl:px-28 flex py-3 min-h-[4.25rem] items-center gap-24 justify-between'>
        <Link href={"/"}>
          <Image
            width={112}
            height={32}
            alt="Abstractly Logo"
            src={logo}
          />
        </Link>
        <nav className='hidden xl:flex flex-1'>
          <ul className='flex flex-row gap-8 text-base font-medium text-neutral-600 [&>li]:hover:text-neutral-800 '>
            {
              navLinks?.map(({ href, label }) => (
                <li key={label}><AppLink variant={'gray'} size={'lg'} href={href}>{label}</AppLink></li>
              ))
            }
          </ul>
        </nav>
        <div className='flex gap-4'>
          <CartButton />
          <MobileNavMenu navLinks={navLinks} />
        </div>
      </div>
    </Header>
  )
}

const CartButton = () => {
  const { cartItems } = useCartContext();
  return <div className='relative'>
    <LinkButton href={'/cart'} aria-label='Go to cart' size={'2xl'} variant={'link-gray'}><RiShoppingBag3Line /></LinkButton>
    <div hidden={!cartItems.length} className='-top-[50%] -right-[50%] rounded-full absolute h-4.5 min-w-4.5 flex items-center justify-center px-1 text-xs text-white font-semibold bg-indigo-700'>{cartItems.length}</div>
  </div>
}

const Header = ({ // children prop
  children,

}: {
  children: React.ReactNode;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScrollEvent = () => {
    setScrolled(document.documentElement.scrollTop > 16);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)
    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])
  return <header className={clsx('w-full pt-4 fixed z-1000', {
    'bg-white transition-colors shadow-sm': scrolled
  })}>
    {children}
  </header>
}

const MobileNavMenu = ({
  navLinks
}: {
  navLinks: NavLinkType[];
}) => { // Moving state down
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (state?: boolean) => {
    setIsOpen(prev => state !== undefined ? state : !prev);
  }
  return <>
    <div className='flex xl:hidden'>
      <Button onClick={() => toggleMenu()} aria-label='Open mobile menu' variant={'link-gray'} size={'sm'}><RiMenuLine /></Button>
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
      className='z-1001 fixed flex flex-col xl:hidden w-[18.75rem] h-dvh bg-white top-0 left-0 p-4 pt-8 gap-6 justify-between transition-transform -translate-x-[100%] data-[visible=true]:translate-x-0' >
      <div className='flex items-center justify-between'>
        <Image
          width={112}
          height={32}
          alt="Abstractly Logo"
          src={LOGO_URL}
        />
        <Button onClick={() => toggleMenu(false)} aria-label='Open mobile menu' variant={'link-gray'} size={'sm'}><RiCloseLine /></Button>
      </div>
      <nav className='flex flex-1'>
        <ul className='flex flex-col gap-2 text-base font-medium text-neutral-600 [&>li]:hover:text-neutral-800 [&>li]:px-3 [&>li]:py-2'>
          {
            navLinks?.map(({ href, label }) => (
              <li key={label}><AppLink onClick={() => toggleMenu(false)} variant={'gray'} size={'lg'} href={href}>{label}</AppLink></li>
            ))
          }
        </ul>
      </nav>
    </aside >
  </>

}

export { NavBar }
