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
    <div className='ui:w-full ui:flex ui:flex-col ui:gap-1.5'>
      {label ? (
        <label
          className='ui:w-full ui:text-sm ui:font-medium ui:text-gray-700'
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        name={name}
        rows={4}
        disabled={disabled}
        aria-describedby={`${name}-hint`}
        placeholder={placeholder}
        className={cn(
          `ui:resize-none ui:border ui:text-sm ui:leading-5 ui:font-normal ui:bg-neutral-50
      ui:border-neutral-200 ui:rounded-[0.25rem] 
      ui:w-full ui:px-3.5 ui:py-2.5 ui:text-neutral-900 ui:placeholder:text-neutral-500 ui:focus:ring-offset-0 
      ui:focus:ring-4 ui:focus:ring-indigo-700/12 
      ui:focus:border-indigo-700 ui:focus:outline-none`,
          clsx({
            'ui:border-red-600 ui:focus:ring-red-600/12 ui:focus:border-red-600': error || (length > maxLength),
            'ui:text-neutral-400 ui:placeholder:text-neutral-400 ui:border-neutral-100': disabled,
          }),
          className
        )}
        {...props}
      />
      <div
        id={`${name}-hint`}
        className={clsx('ui:text-sm ui:text-gray-500', {
          'ui:text-red-600': error || (length > maxLength),
          'ui:text-right': !error,
        })}
      >
        {!!error ? error : `${length}/${maxLength}`}
      </div>
    </div>

  )
}

export { TextArea };
