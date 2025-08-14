import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import React from 'react'

const toastVariants = cva(
  'flex items-center p-1 pr-2.5 gap-3 text-sm font-medium rounded-full [&_div]:px-2.5 [&_div]:py-0.5 [&_div]:rounded-full [&_div]:bg-white [&_div]:shadow-sm',
  {
    variants: {
      variant: {
        success: 'bg-green-50 text-green-700',
        error: 'bg-red-50 text-red-600 [&_div]:text-red-800',
        warning: 'bg-amber-50 text-amber-700',
        info: 'bg-gray-50 text-neutral-600',
      },
    },
    defaultVariants: {
      variant: 'info'
    }
  }
)
const LabelMap = {
  success: 'Success',
  error: 'Error',
  warning: 'Warning',
  info: 'Info',
}
function Toast({
  variant = 'info', message, presentation
}: React.ComponentProps<'div'>
  & VariantProps<typeof toastVariants>
  & {
    message: string;
    presentation?: boolean;
  }) {
  return (
    <div role='alert' className={cn(toastVariants({ variant }),
      clsx({
        'animate-[slide-in-right_0.2s_ease-out]': !presentation
      }))}>
      <div>{LabelMap[variant!]}</div>
      {message}
    </div>
  )
}

export default Toast