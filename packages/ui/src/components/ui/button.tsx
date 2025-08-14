

import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva(
  `justify-center inline-flex items-center font-medium rounded-[0.25rem] shadow-sm not-disabled:cursor-pointer disabled:cursor-not-allowed focus:outline-none focus:ring-4  [&_svg:not([class*='size-'])]:size-5`,
  {
    variants: {
      variant: {
        primary: "bg-indigo-700 text-white hover:bg-indigo-800 focus:bg-indigo-800 focus:ring-indigo-800/20 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none!",
        secondary: "bg-white border border-neutral-200 text-neutral-900 hover:text-neutral-950 hover:bg-neutral-50 focus:bg-neutral-50 focus:shadow-none! focus:ring-indigo-800/20 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none! disabled:border-none",
        tertiary: "shadow-none! text-indigo-700 hover:bg-neutral-50 focus:bg-neutral-50  focus:ring-indigo-800/20 disabled:text-neutral-400 disabled:bg-transparent!",
        "link-color": "shadow-none! p-0! text-indigo-700 hover:text-indigo-800 focus:text-indigo-800 focus:bg-neutral-50 focus:ring-indigo-800/20 disabled:text-neutral-400",
        "link-gray": "shadow-none p-0! text-neutral-600 hover:text-neutral-900 focus:text-neutral-900 focus:bg-neutral-50 focus:ring-indigo-800/20 disabled:text-neutral-400",
        "destructive": "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700  focus:ring-red-800/20 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none!",
      },
      size: {
        sm: "px-3 py-2 text-sm gap-1.5 has-[>svg:nth-of-type(1):last-of-type]:px-2",
        md: "px-3.5 py-2.5 text-sm gap-1.5 has-[>svg:nth-of-type(1):last-of-type]:px-2.5 ",
        lg: "px-4 py-2.5 text-base gap-2 has-[>svg:nth-of-type(1):last-of-type]:px-2.5",
        xl: "px-5 py-3 text-base gap-2 has-[>svg:nth-of-type(1):last-of-type]:px-3",
        "2xl": "px-6 py-4 text-lg gap-3 has-[>svg:nth-of-type(1):last-of-type]:px-4  [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  })

function Button({
  variant,
  size,
  className,
  ...props
}: React.ComponentProps<"button">
  & VariantProps<typeof buttonVariants>) {
  return (
    <button role='button' className={cn(buttonVariants({ variant, size, className }))} {...props}></button>
  )
}



export { Button }