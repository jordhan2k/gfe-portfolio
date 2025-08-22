import React from 'react';
import { AppLink } from '../ui/link';

type NavLinkType = {
  label: string;
  href: string;
}

type SocialLinkType = {
  icon: React.ReactNode;
  href: string;
  label: string;
}

type FooterSectionProps = {
  navLinks: NavLinkType[];
  socialLinks: SocialLinkType[];
}

function FooterSection({
  navLinks,
  socialLinks
}: FooterSectionProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='ui:flex ui:flex-col ui:items-center ui:py-12 ui:px-8 ui:md:py-16 ui:xl:py-24'>
      <nav className='ui:flex ui:gap-4 ui:md:gap-6 ui:mb-8'>
        {
          navLinks?.map((link) => (
            <AppLink key={link.label} href={link.href} variant={"gray"}>
              {link.label}
            </AppLink>
          ))
        }
      </nav>
      <ul className='ui:flex ui:gap-6 ui:mb-4'>
        {
          socialLinks?.map(({ icon, href, label }) => (
            <li key={href} >
              <AppLink aria-label={label} size='2xl' href={href} variant={"gray"}>
                {icon}
              </AppLink>
            </li>
          ))
        }
      </ul>
      <p className='ui:text-neutral-900 ui:text-sm ui:font-normal'>© {currentYear} Abstractly, Inc. All rights reserved.</p>
    </footer>
  )
}

export {
  FooterSection,
  type NavLinkType,
  type SocialLinkType
};
