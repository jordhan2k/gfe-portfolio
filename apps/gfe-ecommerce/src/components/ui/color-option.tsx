import { COLORS } from '@/config';
import { RiCheckFill } from '@remixicon/react';
import clsx from 'clsx'
import React from 'react'

type ColorOptionProps = {
  disabled: boolean;
  color: string;
  selected: boolean;
  onClick: () => void;
}

function ColorOption({
  color,
  disabled,
  selected,
  onClick
}: ColorOptionProps) {
  const isWhite = color === 'white';
  return (
    <div className={'relative size-14 flex items-center justify-center'}  >
      <button
        // tabIndex={0}
        disabled={disabled}
        onClick={onClick}
        className={clsx('size-9 rounded-full', {
          'border-2 border-white outline-1 outline-indigo-600': selected,
          'border border-neutral-300!': color === 'white',
          'pointer-events-none': disabled,
          'cursor-pointer focus:ring-4 focus:ring-indigo-800/20 focus:outline-none': !disabled,
        })} style={{
          backgroundColor: COLORS?.[color as string]?.value
        }} />
      {selected && !disabled
        ? <RiCheckFill className={clsx('absolute', {
          'text-neutral-900': isWhite,
          'text-white': !isWhite
        })} size={28} />
        : null}
      <div hidden={!disabled} className='absolute w-0.5 h-12 bg-neutral-600 rotate-45' />
    </div>
  )
}

export { ColorOption }