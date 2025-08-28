'use client'

import { RiAddCircleLine, RiIndeterminateCircleLine } from '@remixicon/react';
import React, { useId, useState } from 'react'

function Accordion({
  content,
  title,
}: {
  title: string;
  content: string | React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const id = useId();
  return (
    <div className='ui:w-full ui:flex ui:flex-col ui:gap-2'>
      <button
        role='button'
        aria-expanded={open}
        aria-controls={`accordion-panel-${id}`}
        onClick={() => setOpen(prev => !prev)}
        className='ui:flex ui:gap-4 ui:w-full ui:justify-between ui:cursor-pointer ui:[&_svg]:text-neutral-400 ui:focus:outline-none ui:focus:ring-4 ui:focus:ring-indigo-800/20 ui:focus:rounded-md ui:focus:ring-offset-2'>
        <div className='ui:text-neutral-900 ui:text-lg ui:font-medium ui:flex-1 ui:text-left'>{title}</div>
        {open
          ? <RiIndeterminateCircleLine />
          : <RiAddCircleLine />}
      </button>
      <div hidden={!open} id={`accordion-panel-${id}`}>
        <div className='ui:pr-10 ui:text-base ui:font-normal ui:text-neutral-600'>
          {content}
        </div>
      </div>
    </div>
  )
}

export { Accordion }