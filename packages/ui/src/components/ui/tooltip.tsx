import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'


const tooltipVariants = cva(
  'ui:absolute ui:whitespace-nowrap ui:shadow-sm ui:z-1 ui:block ui:px-3 ui:py-2 ui:rounded-lg ui:bg-neutral-950 ui:text-white ui:text-xs ui:font-medium ui:hidden ui:peer-hover:block ui:transition-all ui:duration-100',
  {
    variants: {
      arrow: {
        true: "ui:after:absolute ui:after:shadow-sm ui:after:content-[''] ui:after:size-3 ui:after:bg-neutral-950 ui:after:rotate-45 ui:after:rounded-[1px]",
        false: null
      },
      align: {
        start: "ui:after:left-1/5",
        center: null,
        end: "ui:after:right-1/5 ui:right-0",
      },
      side: {
        top: "ui:after:bottom-[-5px] ui:mb-[5px] ui:bottom-[100%]",
        left: "ui:right-[100%] ui:top-[50%] ui:-translate-y-[50%] ui:mr-[7px] ui:after:top-[50%] ui:after:-translate-y-[50%] ui:after:right-[-5px] ui:after:left-[unset]",
        right: "ui:left-[100%] ui:top-[50%] ui:-translate-y-[50%] ui:ml-[7px] ui:after:top-[50%] ui:after:-translate-y-[50%] ui:after:left-[-5px] ui:after:right-[unset] ui:right-[unset]",
        bottom: "ui:after:top-[-5px] ui:mt-[5px] ui:top-[100%]",
      },
      forceVisible: {
        true: "ui:block!"
      }
    },
    compoundVariants: [
      {
        side: 'top',
        align: 'center',
        class: "ui:after:left-1/2 ui:after:-translate-x-1/2 ui:left-1/2 ui:-translate-x-1/2",
      },
      {
        side: 'bottom',
        align: 'center',
        class: "ui:after:left-1/2 ui:after:-translate-x-1/2 ui:left-1/2 ui:-translate-x-1/2",
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
    <div className='ui:relative' {...props}>
      <div className={cn('ui:peer', className)}>
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