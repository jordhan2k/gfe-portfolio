import { HEADER_NAV_LINKS } from '@/config'
import { NavBar } from '@repo/ui/src/components/navigation/nav-bar'
import React from 'react'

function Header() {
  return (
    <NavBar navLinks={HEADER_NAV_LINKS} />
  )
}

export { Header }