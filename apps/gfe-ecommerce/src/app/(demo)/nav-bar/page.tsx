import { NavBar } from '@/components/navigation/nav-bar'
import React from 'react'

export default function Page() {
  return (
    <div>
      <NavBar
        navLinks={[
          {
            href: '#',
            label: 'Shop all'
          },
          {
            href: '#',
            label: 'Latest arrivals'
          }
        ]}

      />
    </div>
  )
}
