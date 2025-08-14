'use client'

import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react'

const toggleContainerVariants = cva(
  'relative inline-block',
  {
    variants: {
      size: {
        sm: 'w-9 h-5',
        md: 'w-11 h-6',
      },
      disabled: {
        true: 'pointer-events-none ',
        false: ''
      },
    },
    defaultVariants: {
      size: 'md'
    }
  },

)

const toggleVariants = cva(
  `box-border absolute top-0 right-0 left-0 bottom-0
  bg-gray-200 border border-gray-200 rounded-full
  not-disabled:cursor-pointer disabled:cursor-not-allowed
  before:bg-white before:block before:rounded-full
  before:transition-all before::absolute before::shadow-sm
  inline-flex items-center transition-all duration-400 before:duration-400`,
  {
    variants: {
      size: {
        sm: 'before:size-4 px-0.25 peer-checked:before:translate-x-4',
        md: 'before:size-5 px-0.25 peer-checked:before:translate-x-5',
      },
      disabled: {
        true: 'bg-gray-100 border-gray-100 before:bg-gray-300 before:shadow-none',
        false: `peer-checked:bg-indigo-600 peer-checked:border-indigo-600
        hover:bg-gray-300 hover:border-gray-400 hover:ring-4 hover:ring-gray-400/12
        hover:peer-checked:bg-indigo-800 hover:peer-checked:border-indigo-600
        hover:peer-checked:ring-4 hover:peer-checked:ring-indigo-600/12
        peer-focus:ring-4 peer-focus:ring-gray-400/12 peer-focus:bg-gray-300 peer-focus:border-gray-400
        peer-checked:peer-focus:bg-indigo-800 peer-checked:peer-focus:border-indigo-600
        peer-checked:peer-focus:ring-4 peer-checked:peer-focus:peer-checked:ring-indigo-600/12
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
        className='sr-only peer'
        {...props}
      />
      <span className={cn(toggleVariants({ size, disabled }))} />
    </label>

  )
}

export { Toggle }