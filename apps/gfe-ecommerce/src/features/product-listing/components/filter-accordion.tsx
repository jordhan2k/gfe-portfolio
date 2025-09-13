'use client'

import { cn } from '@/lib/utils';
import { RiAddFill, RiSubtractFill } from '@remixicon/react';
import React, { useId, useState } from 'react';

function FilterAccordion({
  content,
  title,
}: {
  title: string;
  content: string | React.ReactNode;



}) {
  const [open, setOpen] = useState(true);
  const id = useId();
  return (
    <div className={cn('w-full flex flex-col gap-6',)}>
      <button
        role='button'
        aria-expanded={open}
        aria-controls={`accordion-panel-${id}`}
        onClick={() => setOpen(prev => !prev)}
        className='flex gap-4 w-full justify-between cursor-pointer [&_svg]:text-neutral-600 focus:outline-none focus:ring-4 focus:ring-indigo-800/20 focus:rounded-md focus:ring-offset-2'>
        <div className='text-neutral-900 text-base font-medium flex-1 text-left'>{title}</div>
        {open
          ? <RiSubtractFill />
          : <RiAddFill />}
      </button>
      <div hidden={!open} id={`accordion-panel-${id}`}>
        <div className='pr-10 text-base font-normal text-neutral-600'>
          {content}
        </div>
      </div>
    </div>
  )
}

export { FilterAccordion };
