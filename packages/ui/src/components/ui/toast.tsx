import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import React from 'react'

const toastVariants = cva(
  'ui:flex ui:items-center ui:p-1 ui:pr-2.5 ui:gap-3 ui:text-sm ui:font-medium ui:rounded-full ui:[&_div]:px-2.5 ui:[&_div]:py-0.5 ui:[&_div]:rounded-full ui:[&_div]:bg-white ui:[&_div]:shadow-sm',
  {
    variants: {
      variant: {
        success: 'ui:bg-green-50 ui:text-green-700',
        error: 'ui:bg-red-50 ui:text-red-600 ui:[&_div]:text-red-800',
        warning: 'ui:bg-amber-50 ui:text-amber-700',
        info: 'ui:bg-gray-50 ui:text-neutral-600',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
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
        'ui:animate-[slide-in-right_0.2s_ease-out]': !presentation
      }))}>
      <div>{LabelMap[variant!]}</div>
      {message}
    </div>
  )
}

export default Toast