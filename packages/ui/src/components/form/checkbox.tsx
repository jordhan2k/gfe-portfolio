'use client'

import { IconCheck } from '../../assets/icons';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react'

function Checkbox({
  name,
  label,
  indeterminate = false,
  disabled = false,
  ...props
}: React.ComponentProps<'input'>
  & {
    label?: string;
    indeterminate?: boolean;
  }) {

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);
  return (
    <div>
      <input ref={inputRef} name={name} id={name} type='checkbox' className='ui:sr-only ui:peer' disabled={disabled} {...props} />
      <label htmlFor={name} className={clsx(`ui:flex ui:items-center ui:justify-center ui:gap-3 ui:cursor-pointer ui:w-fit
      ui:peer-focus:[&_>div]:outline-none ui:peer-focus:[&_>div]:ring-3 ui:text-neutral-600
      ui:peer-focus:[&_>div]:ring-indigo-800/12 ui:peer-focus:[&_>div]:border-indigo-600
      ui:peer-checked:[&_>div]:bg-indigo-600 ui:peer-checked:[&_>div]:border-indigo-600
      ui:peer-checked:[&_>div_>_svg]:block

      ui:peer-indeterminate:[&_>div]:bg-indigo-600 ui:peer-indeterminate:[&_>div]:border-indigo-600
      ui:peer-indeterminate:[&_>div_>div]:block ui:peer-checked:[&_>div_>div]:hidden

      ui:peer-disabled:cursor-not-allowed ui:peer-disabled:text-neutral-400!
      ui:peer-disabled:[&_>div]:bg-neutral-200 ui:peer-disabled:peer-checked:[&_>div]:border-neutral-200
      ui:peer-disabled:peer-indeterminate:[&_>div]:border-neutral-200
        `,
      )}>
        <div className='ui:size-4 ui:rounded-[0.25rem] ui:border ui:border-neutral-300 ui:m-1 ui:flex ui:items-center ui:justify-center'>
          <IconCheck className='ui:hidden' />
          <div className='ui:w-2.5 ui:h-0.5 ui:bg-white ui:rounded-full ui:hidden' />
        </div>
        <span className='ui:text-base ui:font-normal'>{label}</span>
      </label>
    </div>
  )
}

export { Checkbox }