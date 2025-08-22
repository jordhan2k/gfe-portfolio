

import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva(
  `ui:justify-center ui:inline-flex ui:items-center ui:font-medium ui:rounded-[0.25rem] ui:shadow-sm ui:not-disabled:cursor-pointer ui:disabled:cursor-not-allowed ui:focus:outline-none ui:focus:ring-4 ui:[&_svg:not([class*='size-'])]:size-5`,
  {
    variants: {
      variant: {
        primary: "ui:bg-indigo-700 ui:text-white ui:hover:bg-indigo-800 ui:focus:bg-indigo-800 ui:focus:ring-indigo-800/20 ui:disabled:bg-neutral-100 ui:disabled:text-neutral-400 ui:disabled:shadow-none!",
        secondary: "ui:bg-white ui:border ui:border-neutral-200 ui:text-neutral-950 ui:hover:text-neutral-950 ui:hover:bg-neutral-50 ui:focus:bg-neutral-50 ui:focus:shadow-none! ui:focus:ring-indigo-800/20 ui:disabled:bg-neutral-100 ui:disabled:text-neutral-400 ui:disabled:shadow-none! ui:disabled:border-none",
        tertiary: "ui:shadow-none! ui:text-indigo-700 ui:hover:bg-neutral-50 ui:focus:bg-neutral-50 ui:focus:ring-indigo-800/20 ui:disabled:text-neutral-400 ui:disabled:bg-transparent!",
        "link-color": "ui:shadow-none! ui:p-0! ui:text-indigo-700 ui:hover:text-indigo-800 ui:focus:text-indigo-800 ui:focus:bg-neutral-50 ui:focus:ring-indigo-800/20 ui:disabled:text-neutral-400",
        "link-gray": "ui:shadow-none ui:p-0! ui:text-neutral-600 ui:hover:text-neutral-900 ui:focus:text-neutral-900 ui:focus:bg-neutral-50 ui:focus:ring-indigo-800/20 ui:disabled:text-neutral-400",
        "destructive": "ui:bg-red-600 ui:text-white ui:hover:bg-red-700 ui:focus:bg-red-700 ui:focus:ring-red-800/20 ui:disabled:bg-neutral-100 ui:disabled:text-neutral-400 ui:disabled:shadow-none!",
      },
      size: {
        sm: "ui:px-3 ui:py-2 ui:text-sm ui:gap-1.5 ui:has-[>svg:nth-of-type(1):last-of-type]:px-2",
        md: "ui:px-3.5 ui:py-2.5 ui:text-sm ui:gap-1.5 ui:has-[>svg:nth-of-type(1):last-of-type]:px-2.5",
        lg: "ui:px-4 ui:py-2.5 ui:text-base ui:gap-2 ui:has-[>svg:nth-of-type(1):last-of-type]:px-2.5",
        xl: "ui:px-5 ui:py-3 ui:text-base ui:gap-2 ui:has-[>svg:nth-of-type(1):last-of-type]:px-3",
        "2xl": "ui:px-6 ui:py-4 ui:text-lg ui:gap-3 ui:has-[>svg:nth-of-type(1):last-of-type]:px-4 ui:[&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  })


type ButtonProps = React.ComponentProps<"button">
  & VariantProps<typeof buttonVariants>

function Button({
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button role='button' className={cn(buttonVariants({ variant, size, className }))} {...props}></button>
  )
}

export { Button, type ButtonProps }