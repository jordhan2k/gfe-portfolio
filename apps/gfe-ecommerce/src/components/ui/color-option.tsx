import { COLORS } from '@/config';
import { cn } from '@/lib/utils';
import { RiCheckFill } from '@remixicon/react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx'
import React from 'react'

const containerVariants = cva(
  'relative flex items-center justify-center',
  {
    variants: {
      size: {
        md: 'size-6',
        lg: 'size-14'
      }
    },
  }
)

const optionVariant = cva(
  'rounded-full',
  {
    variants: {
      size: {
        md: 'size-4',
        lg: 'size-9'
      },
      selected: {
        true: 'border-2 border-white outline-1 outline-indigo-600',
        false: null
      },
      disabled: {
        true: 'pointer-events-none',
        false: 'cursor-pointer focus:ring-4 focus:ring-indigo-800/20 focus:outline-none'
      },
      isWhite: {
        true: 'border border-neutral-300',
        false: ''
      }
    }
  }


)

type ColorOptionProps = {
  disabled?: boolean;
  color: string;
  selected?: boolean;
  onClick?: () => void;
  size?: 'md' | 'lg';
}

function ColorOption({
  color,
  disabled = false,
  selected = false,
  onClick,
  size = 'lg'
}: ColorOptionProps) {
  const isWhite = color === 'white';
  return (
    <button
      aria-label={`${color}`}
      disabled={disabled}
      onClick={onClick}
      className={containerVariants({ size })}  >
      <div
        className={cn(optionVariant({ size, selected, disabled, isWhite }),
          clsx({
          }))} style={{
            backgroundColor: COLORS?.[color as keyof typeof COLORS]?.value
          }} />
      {selected && !disabled
        ? <RiCheckFill className={clsx('absolute pointer-events-none', {
          'text-neutral-900': isWhite,
          'text-white': !isWhite,
          'size-3': size === 'md'
        })} size={28} />
        : null}
      <div hidden={!disabled} className='absolute w-0.5 h-12 bg-neutral-600 rotate-45' />
    </button>
  )
}

export { ColorOption }