'use client'

import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react'

const toggleContainerVariants = cva(
  'ui:relative ui:inline-block',
  {
    variants: {
      size: {
        sm: 'ui:w-9 ui:h-5',
        md: 'ui:w-11 ui:h-6',
      },
      disabled: {
        true: 'ui:pointer-events-none',
        false: ''
      },
    },
    defaultVariants: {
      size: 'md'
    }
  },

)

const toggleVariants = cva(
  `ui:box-border ui:absolute ui:top-0 ui:right-0 ui:left-0 ui:bottom-0
  ui:bg-gray-200 ui:border ui:border-gray-200 ui:rounded-full
  ui:not-disabled:cursor-pointer ui:disabled:cursor-not-allowed
  ui:before:bg-white ui:before:block ui:before:rounded-full
  ui:before:transition-all ui:before:absolute ui:before:shadow-sm
  ui:inline-flex ui:items-center ui:transition-all ui:duration-400 ui:before:duration-400`,
  {
    variants: {
      size: {
        sm: 'ui:before:size-4 ui:px-0.25 ui:peer-checked:before:translate-x-4',
        md: 'ui:before:size-5 ui:px-0.25 ui:peer-checked:before:translate-x-5',
      },
      disabled: {
        true: 'ui:bg-gray-100 ui:border-gray-100 ui:before:bg-gray-300 ui:before:shadow-none',
        false: `ui:peer-checked:bg-indigo-600 ui:peer-checked:border-indigo-600
                ui:hover:bg-gray-300 ui:hover:border-gray-400 ui:hover:ring-4 ui:hover:ring-gray-400/12
                ui:hover:peer-checked:bg-indigo-800 ui:hover:peer-checked:border-indigo-600
                ui:hover:peer-checked:ring-4 ui:hover:peer-checked:ring-indigo-600/12
                ui:peer-focus:ring-4 ui:peer-focus:ring-gray-400/12 ui:peer-focus:bg-gray-300 ui:peer-focus:border-gray-400
                ui:peer-checked:peer-focus:bg-indigo-800 ui:peer-checked:peer-focus:border-indigo-600
                ui:peer-checked:peer-focus:ring-4 ui:peer-checked:peer-focus:peer-checked:ring-indigo-600/12
                `
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

function Toggle({
  name,
  size,
  disabled = false,
  checked,
  ...props
}: Omit<React.ComponentProps<'input'>, 'size'>
  & VariantProps<typeof toggleVariants>) {
  return (
    <label htmlFor={name} className={cn(toggleContainerVariants({ size, disabled }))} >
      <input
        id={name}
        checked={checked}
        type='checkbox'
        className='ui:sr-only ui:peer'
        {...props}
      />
      <span className={cn(toggleVariants({ size, disabled }))} />
    </label>

  )
}

export { Toggle }