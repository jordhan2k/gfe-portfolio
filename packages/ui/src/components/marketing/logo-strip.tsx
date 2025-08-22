

import Image from 'next/image';
import React, { useId } from 'react'

type BrandItem = {

  brand: string;
  logo: string;

}

type LogoStripProps = {
  brands: BrandItem[];
  id: string;
}

function LogoStrip({
  brands,
  id
}: LogoStripProps) {
  return (
    <div className={`ui:flex ui:items-center ui:gap-[78.5px] ui:md:gap-2 ui:xl:gap-8
   ui:xl:animate-[scroll-x_30s_linear_infinite]
     ui:animate-[scroll-x-sm_30s_linear_infinite]
    `}>
      {
        brands.map(({ brand, logo }) => (
          <Image
            key={`${id}-${brand}`}
            src={logo}
            alt={`${brand}'s logo`}
            height={48}
            width={120}
            className='ui:w-[218px] ui:h-auto'
          />
        ))
      }
    </div>
  )
}

export { LogoStrip, type LogoStripProps, type BrandItem }