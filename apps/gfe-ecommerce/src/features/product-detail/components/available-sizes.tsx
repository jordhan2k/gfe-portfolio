'use client'

import clsx from 'clsx';
import { useProductActions, useSizeContext } from '../context';

function AvailableSizes() {
  const { onSelectSize } = useProductActions();
  const { availableSizes, selectedSize } = useSizeContext();
  if (!availableSizes.length) return null;

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-sm font-normal text-neutral-500'>Available Sizes</div>
      <ul className='flex flex-wrap gap-4'>
        {
          availableSizes.map((s) => (
            <li key={`size-${s.size}`}>
              <button
                aria-label={`Size ${s.size}`}
                disabled={s.disabled}
                onClick={() => onSelectSize(s.size)}
                className={clsx(`w-16 h-12 rounded-[0.25rem] text-base font-medium text-neutral-900
                bg-white border  flex items-center justify-center`,
                  {
                    'text-neutral-400 bg-neutral-100 border-neutral-100 pointer-events-none': s.disabled,
                    'cursor-pointer border-neutral-200 hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-none focus:ring-4 focus:ring-indigo-800/20': !s.disabled,
                    'border-indigo-600!': selectedSize === s.size,
                  }
                )}
              >
                {String(s.size).toUpperCase()}
              </button>
            </li>
          ))
        }

      </ul>

    </div>
  )
}

export { AvailableSizes };
