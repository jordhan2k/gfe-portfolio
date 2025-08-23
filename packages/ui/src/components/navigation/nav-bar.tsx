'use client'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import clsx from 'clsx'
import { NavLinkType } from '../marketing/footer-section'
import { AppLink } from '../ui/link'

const LOGO_URL = "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/navbar-component/starter/img/abstractly.svg"

type NavBarProps = {
  logo?: string;
  navLinks: NavLinkType[];
}
function NavBar({
  logo = LOGO_URL,
  navLinks
}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = (state?: boolean) => {
    setIsOpen(prev => state !== undefined ? state : !prev);
  }

  const handleScrollEvent = (e: Event) => {
    setScrolled(document.documentElement.scrollTop > 16);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)
    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])
  return (
    <>
      <header className={clsx('ui:w-full ui:pt-4 ui:fixed ui:z-1000', {
        'ui:bg-white ui:transition-colors ui:shadow-sm': scrolled
      })}>
        <div className='ui:max-w-[90rem] ui:mx-auto px-4 ui:md:px-8 ui:xl:px-28 ui:flex ui:py-3 ui:min-h-[4.25rem] ui:items-center ui:gap-24 ui:justify-between'>
          <Image
            width={112}
            height={32}
            alt="Abstractly Logo"
            src={logo}
          />
          <nav className='ui:hidden ui:xl:flex ui:flex-1'>
            <ul className='ui:flex ui:flex-row ui:gap-8 ui:text-base ui:font-medium ui:text-neutral-600 ui:[&>li]:hover:text-neutral-800 '>
              {
                navLinks?.map(({ href, label }) => (
                  <li key={label}><AppLink variant={'gray'} size={'lg'} href={href}>{label}</AppLink></li>
                ))
              }
            </ul>
          </nav>
          <div className='ui:hidden ui:xl:flex ui:gap-4'>
            <Button variant={'secondary'} size={'lg'}>Learn more</Button>
            <Button variant={'primary'} size={'lg'}>See pricing</Button>
          </div>
          <div className='ui:flex ui:xl:hidden'>
            <Button onClick={() => toggleMenu()} aria-label='Open mobile menu' variant={'link-gray'} size={'sm'}><RiMenuLine /></Button>
          </div>
        </div>
      </header >


      {/* slide-out menu */}
      <div
        aria-hidden={true}
        className={clsx('ui:z-1000 ui:backdrop-blur-xs ui:xl:hidden ui:fixed ui:h-dvh /data-[visible=false]:bg-transparent ui:data-[visible=true]:bg-neutral-500/50 ui:transition-colors ui:top-0 ui:left-0 ui:duration-100',
          {
            "ui:w-0! ui:bg-transparent": !isOpen,
            "ui:w-dvw ui:bg-neutral-500/50": isOpen
          }
        )}
        onClick={(event) => { event.stopPropagation(); toggleMenu(false) }}
      />
      <aside
        data-visible={isOpen}
        // role="navigation"
        aria-label="Main menu"
        // aria-expanded={isOpen}
        aria-hidden={!isOpen}
        className='ui:z-1001 ui:fixed ui:flex ui:flex-col ui:xl:hidden ui:w-[18.75rem] ui:h-dvh ui:bg-white ui:top-0 ui:left-0 ui:p-4 ui:pt-8 ui:gap-6 ui:justify-between ui:transition-transform ui:-translate-x-[100%] ui:data-[visible=true]:translate-x-0' >
        <div className='ui:flex ui:items-center ui:justify-between'>
          <Image
            width={112}
            height={32}
            alt="Abstractly Logo"
            src={LOGO_URL}
          />
          <Button onClick={() => toggleMenu(false)} aria-label='Open mobile menu' variant={'link-gray'} size={'sm'}><RiCloseLine /></Button>
        </div>
        <nav className='ui:flex ui:flex-1'>
          <ul className='ui:flex ui:flex-col ui:gap-2 ui:text-base ui:font-medium ui:text-neutral-600 ui:[&>li]:hover:text-neutral-800 ui:[&>li]:px-3 ui:[&>li]:py-2'>
            {
              navLinks?.map(({ href, label }) => (
                <li key={label}><AppLink variant={'gray'} size={'lg'} href={href}>{label}</AppLink></li>
              ))
            }
          </ul>
        </nav>
        <div className='ui:flex ui:flex-col ui:gap-4'>
          <Button variant={'secondary'} size={'lg'}>Learn more</Button>
          <Button variant={'primary'} size={'lg'}>See pricing</Button>
        </div>

      </aside >

    </>
  )
}

export { NavBar }
