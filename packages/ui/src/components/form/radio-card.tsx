import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '#dep/lib/utils'


const radioCardVariants = cva(
  'inline-flex items-center rounded-[0.25rem] gap-1 border border-neutral-200 font-medium text-neutral-900 hover:bg-neutral-50 hover:text-neutral-950 peer-checked:border-indigo-600 focus:ring-4 focus:ring-indigo-800/20 focus:outline-none  [&_svg:not([class*="size-"])]:size-5', {
  variants: {
    size: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-3.5 py-2.5',
      lg: 'px-4 py-2.5 text-base gap-1.5',
      xl: 'px-5 py-3 text-base gap-1.5',
      '2xl': 'px-6 py-4 text-lg gap-2.5 [&_svg:not([class*="size-"])]:size-6',
    },
    disabled: {
      true: 'cursor-not-allowed border-none! bg-neutral-100! text-neutral-400! focus:ring-0!',
      false: 'cursor-pointer'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

function RadioCard({
  name,
  id,
  value,
  label,
  size,
  className,
  disabled = false,
  leadingIcon,
  trailingIcon,
  ...props
}: Omit<React.ComponentProps<'input'>, 'size'>
  & VariantProps<typeof radioCardVariants>
  & {
    label?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
  }) {
  return (
    <div>
      <input disabled={disabled} className='hidden peer' type='radio' name={name} id={id} value={value} {...props} />
      <label
        htmlFor={id}
        className={cn(radioCardVariants({ size, disabled, className }))}
        tabIndex={0}
      >{leadingIcon}{label ? <span className='px-0.5'>{label}</span> : null}{trailingIcon}</label>
    </div>
  )
}

export { RadioCard };
