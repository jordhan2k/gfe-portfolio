import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'

const linkVariants = cva(
  `ui:justify-center ui:inline-flex ui:items-center ui:font-medium ui:rounded-[0.25rem] ui:shadow-sm ui:not-disabled:cursor-pointer ui:disabled:cursor-not-allowed ui:focus:outline-none ui:focus:ring-4 ui:[&_svg:not([class*='size-'])]:size-5 ui:focus:bg-neutral-50 ui:focus:ring-indigo-800/20`,
  {
    variants: {
      variant: {
        "color": "ui:shadow-none! ui:p-0! ui:text-indigo-700 ui:hover:text-indigo-800 ui:focus:text-indigo-800",
        "gray": "ui:shadow-none ui:p-0! ui:text-neutral-600 ui:hover:text-neutral-900 ui:focus:text-neutral-900",
      },
      disabled: {
        true: "ui:text-neutral-400! ui:pointer-events-none ui:cursor-not-allowed",
        false: null,
      },
      size: {
        sm: "ui:text-sm ui:gap-1.5 ui:has-[>svg:nth-of-type(1):last-of-type]:px-2",
        md: "ui:text-sm ui:gap-1.5 ui:has-[>svg:nth-of-type(1):last-of-type]:px-2.5",
        lg: "ui:text-base ui:gap-2 ui:has-[>svg:nth-of-type(1):last-of-type]:px-2.5",
        xl: "ui:text-base ui:gap-2 ui:has-[>svg:nth-of-type(1):last-of-type]:px-3",
        "2xl": "ui:px-6 ui:py-4 ui:text-lg ui:gap-3 ui:has-[>svg:nth-of-type(1):last-of-type]:px-4 ui:[&_svg:not([class*='size-'])]:size-6"
      },
    },
    defaultVariants: {
      variant: 'color',
      size: 'md'
    }
  })

function AppLink({
  className,
  disabled = false,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof Link>
  & VariantProps<typeof linkVariants>
) {
  return (
    <Link
      className={cn(
        linkVariants({ variant, size, disabled, className }))}
      {...props} />
  )
}

export { AppLink }