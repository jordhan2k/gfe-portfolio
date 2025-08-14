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
      <input ref={inputRef} name={name} id={name} type='checkbox' className='sr-only peer' disabled={disabled} {...props} />
      <label htmlFor={name} className={clsx(`flex items-center justify-center gap-3 cursor-pointer w-fit
        peer-focus:[&_>div]:outline-none peer-focus:[&_>div]:ring-3 text-neutral-600
        peer-focus:[&_>div]:ring-indigo-800/12 peer-focus:[&_>div]:border-indigo-600
        peer-checked:[&_>div]:bg-indigo-600 peer-checked:[&_>div]:border-indigo-600
        peer-checked:[&_>div_>_svg]:block

        peer-indeterminate:[&_>div]:bg-indigo-600 peer-indeterminate:[&_>div]:border-indigo-600
        peer-indeterminate:[&_>div_>div]:block peer-checked:[&_>div_>div]:hidden

        peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400!
        peer-disabled:[&_>div]:bg-neutral-200 peer-disabled:peer-checked:[&_>div]:border-neutral-200
        peer-disabled:peer-indeterminate:[&_>div]:border-neutral-200
        `,
      )}>
        <div className='size-4 rounded-[0.25rem] border border-neutral-300 m-1 flex items-center justify-center'>
          <IconCheck className='hidden' />
          <div className='w-2.5 h-0.5 bg-white rounded-full hidden' />
        </div>
        <span className='text-base font-normal'>{label}</span>
      </label>
    </div>
  )
}

export { Checkbox }