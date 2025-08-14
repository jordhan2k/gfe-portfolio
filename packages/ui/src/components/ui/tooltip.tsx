import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'


const tooltipVariants = cva(
  'absolute whitespace-nowrap shadow-sm z-1 block px-3 py-2 rounded-lg bg-neutral-950 text-white text-xs font-medium hidden peer-hover:block transition-all duration-100 ',
  {
    variants: {
      arrow: {
        true: "after:absolute after:shadow-sm after:content-[''] after:size-3 after:bg-neutral-950 after:rotate-45 after:rounded-[1px]",
        false: null
      },
      align: {
        start: "after:left-1/5",
        center: null,
        end: "after:right-1/5 right-0",
      },
      side: {
        top: "after:bottom-[-5px] mb-[5px] bottom-[100%]",
        left: "right-[100%] top-[50%] -translate-y-[50%] mr-[7px] after:top-[50%] after:-translate-y-[50%] after:right-[-5px] after:left-[unset]",
        right: "left-[100%] top-[50%] -translate-y-[50%] ml-[7px] after:top-[50%] after:-translate-y-[50%] after:left-[-5px] after:right-[unset] right-[unset]",
        bottom: "after:top-[-5px] mt-[5px] top-[100%]",
      },
      forceVisible: {
        true: "block!"
      }
    },
    compoundVariants: [
      {
        side: 'top',
        align: 'center',
        class: "after:left-1/2 after:-translate-x-1/2 left-1/2 -translate-x-1/2",
      },
      {
        side: 'bottom',
        align: 'center',
        class: "after:left-1/2 after:-translate-x-1/2 left-1/2 -translate-x-1/2",
      },
    ],
    defaultVariants: {
      arrow: true,
      side: 'top',
      align: 'center'
    }
  }
)

function Tooltip({
  arrow = true,
  side = 'top',
  align = 'center',
  className,
  children,
  title,
  forceVisible, // for display purpose
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof tooltipVariants> & {
  children?: React.ReactNode;
  forceVisible?: boolean;
}) {
  return (
    <div className='relative' {...props}>
      <div className={cn('peer', className)}>
        {children}
      </div>
      <div
        className={cn(tooltipVariants({ arrow, side, align, forceVisible }),)}
        role='tooltip'>
        {title}
      </div>
    </div>
  )
}

export { Tooltip }