import { RiCheckboxCircleFill } from '@remixicon/react';
import clsx from 'clsx';
import capitalize from 'lodash/capitalize';
import React from 'react'

type DeliveryMethodProps = React.ComponentProps<'input'> & {
  name: string;
  subtitle: string;
  value: number;
  isSelected?: boolean;
}

function DeliveryMethod({
  subtitle, name, value,
  isSelected
}: DeliveryMethodProps) {
  console.log(isSelected)
  return (
    <button
      className={clsx('relative flex-1 cursor-pointer flex flex-col items-start group',
        'p-4',
        'focus:outline-none',
        'hover:bg-neutral-50'
      )}>
      <div className='w-full flex gap-2'>
        <div className='text-left flex-1'>
          <div className='text-base font-medium text-neutral-900'>{capitalize(name)}</div>
          <div className='text-sm font-normal text-neutral-600'>{subtitle}</div>
        </div>
        {isSelected ? <RiCheckboxCircleFill className='text-indigo-500' /> : null}
      </div>


      <div className='text-base font-medium text-neutral-900'>{value ? `$${value}` : 'FREE'}</div>
      <div className={clsx('absolute top-0 left-0 w-full h-full border rounded-lg border-neutral-200',
        'group-focus:outline-none group-focus:border-4 group-focus:border-indigo-50',
        {
          'border-2! border-indigo-600!': isSelected
        }
      )} />
    </button>
  )
}

export { DeliveryMethod }