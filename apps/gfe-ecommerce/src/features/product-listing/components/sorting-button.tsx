'use client'

import { SORT_OPTIONS } from '@/config';
import { RiArrowDownSLine } from '@remixicon/react';
import { Button } from '@repo/ui/src/components/ui/button';
import clsx from 'clsx';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useListingActionContext, useListingContext } from '../context';
import useFilter from '../use-filter';

type OptionType = typeof SORT_OPTIONS[0]

function SortingButton() {

  const { direction, sort, onSortSelect } = useFilter('sort');

  // const { sort = 'create', direction = 'desc' } = useListingContext();
  // const { onSelectSort } = useListingActionContext();

  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if ((dropdownRef.current && event.target)
      && !dropdownRef.current.contains(event.target as Node)) {
      setVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [])

  const handleSelectOption = (item: OptionType) => {
    onSortSelect(item.value, item.direction);
    setVisible(false);
  }

  const handleKeyDownOnOption = (e: KeyboardEvent<HTMLLIElement>, item: OptionType) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSelectOption(item);
    }
  }
  return (
    <div ref={dropdownRef} className='relative'>
      <Button
        onClick={() => setVisible(prev => !prev)}
        aria-haspopup="menu"
        aria-expanded={visible}
        // disabled={disabled}
        variant={'secondary'} size={'md'} className='justify-between px-3.5'>
        Sort by
        <RiArrowDownSLine className='size-5' />
      </Button>
      <ul role='menu'
        className={clsx('absolute transition-all flex flex-col p-2 gap-2 rounded-lg shadow-sm min-w-[230px] right-0 bg-white border border-neutral-100',
          {
            'translate-y-0 opacity-0 pointer-events-none': !visible,
            'translate-y-2.5 opacity-100': visible
          }
        )}
      >
        {
          SORT_OPTIONS.map((item) => {
            const isActive = sort === item.value && direction === item.direction;
            return (
              <li
                key={item.name}
                aria-selected={isActive}
                tabIndex={0}
                onClick={() => handleSelectOption(item)}
                onKeyDown={(e) => handleKeyDownOnOption(e, item)}
                className={clsx(`w-full
                flex p-2 gap-2 rounded-[0.25rem] text-neutral-500 hover:bg-neutral-50 cursor-pointer
                text-sm font-medium border border-transparent focus:border-indigo-200 focus:outline-none`,
                  {
                    'text-indigo-700!': isActive,
                  }
                )}
              >
                <span className='flex-1'>{item.name}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export { SortingButton };
