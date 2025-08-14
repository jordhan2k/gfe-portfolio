'use client'
import { cn } from '#dep/lib/utils'
import clsx from 'clsx';
import React from 'react';

const MAX_LENGTH = 500;

function TextArea({
  label,
  name,
  placeholder,
  error,
  className,
  disabled,
  maxLength = MAX_LENGTH,
  ...props
}: React.ComponentProps<'textarea'>
  & {
    label?: string;
    error?: string | React.ReactNode;
  }) {

  const length = (typeof props.value === 'string' ? props.value : "").length ?? 0;
  return (
    <div className='w-full flex flex-col gap-1.5'>
      {label ? <label className='w-full text-sm font-medium text-gray-700' htmlFor={name}>{label}</label> : null}
      <textarea
        id={name}
        name={name}
        rows={4}
        disabled={disabled}
        aria-describedby={`${name}-hint`}
        placeholder={placeholder}
        className={cn(
          `resize-none border text-sm leading-5  font-normal bg-neutral-50
          border-neutral-200 rounded-[0.25rem] 
          w-full px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-500 focus:ring-offset-0 
          focus:ring-4 focus:ring-indigo-700/12 
          focus:border-indigo-700 focus:outline-none `,
          clsx({
            'border-red-600 focus:ring-red-600/12  focus:border-red-600': error || (length > maxLength),
            'text-neutral-400 placeholder:text-neutral-400 border-neutral-100': disabled
          })
          , className
        )}
        {...props}
      />
      <div id={`${name}-hint`} className={clsx('text-sm text-gray-500', {
        'text-red-600': error || (length > maxLength),
        'text-right': !error
      })}>{!!error ? error : `${length}/${maxLength}`}</div>
    </div>
  )
}

export { TextArea };
