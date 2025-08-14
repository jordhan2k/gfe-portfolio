'use client'

import { RiArrowDownSLine, RiCheckboxCircleFill } from '@remixicon/react';
import clsx from 'clsx';
import { KeyboardEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { Button } from './button';

interface DropdownMenuProps<T> {
  placeholder: string;
  options: T[];
  disabled?: boolean;
  closeOnSelect?: boolean;
  defaultVisible?: boolean;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string;
  getItemIcon?: (item: T) => ReactNode;
  getItemDisabled?: (item: T) => boolean;
}

function DropdownMenu<T>({
  placeholder,
  options,
  disabled,
  closeOnSelect = true,
  defaultVisible = false,
  getItemValue,
  getItemLabel,
  getItemIcon,
  getItemDisabled
}: DropdownMenuProps<T>) {

  const [selectOption, setSelectedOption] = useState<T | null>(null);
  const [visible, setVisible] = useState(defaultVisible);
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

  const handleSelectOption = (item: T) => {
    setSelectedOption(item);
    closeOnSelect && setVisible(false);
  }

  const handleKeyDownOnOption = (e: KeyboardEvent<HTMLLIElement>, item: T) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSelectOption(item);
    }
  }
  return (
    <div ref={dropdownRef} className='w-full relative'>
      <Button
        onClick={() => setVisible(prev => !prev)}
        aria-haspopup="menu"
        aria-expanded={visible}
        disabled={disabled}
        variant={'secondary'} size={'sm'} className='w-full justify-between'>
        {selectOption ? getItemLabel(selectOption) : placeholder}
        <RiArrowDownSLine className='size-5' />
      </Button>
      <ul role='menu'
        className={clsx('absolute transition-all flex flex-col p-2 gap-2 rounded-lg shadow-sm  w-full',
          {
            'translate-y-0 opacity-0 pointer-events-none': !visible,
            'translate-y-2.5 opacity-100': visible
          }
        )}>
        {
          options.map((item) => {
            const label = getItemLabel(item);
            const value = getItemValue(item);
            const icon = getItemIcon?.(item) ?? null;
            const isActive = !!selectOption && (getItemValue(selectOption) === getItemValue(item));
            const itemDisabled = !!getItemDisabled?.(item);
            return (
              <li
                key={value}
                aria-selected={isActive}
                tabIndex={itemDisabled ? undefined : 0}
                onClick={() => !itemDisabled && handleSelectOption(item)}
                onKeyDown={(e) => !itemDisabled && handleKeyDownOnOption(e, item)}
                className={clsx(`w-full
                  flex p-2 gap-2 rounded-[0.25rem]
                  [&_svg:not([class*=size-])]:size-5
                  text-sm font-medium  border border-transparent focus:border-indigo-200 focus:outline-none`,
                  {
                    'bg-neutral-50': isActive,
                    'text-neutral-900 hover:bg-neutral-50 cursor-pointer': !itemDisabled,
                    'text-neutral-400 cursor-not-allowed': itemDisabled
                  }
                )}
              >
                {icon}
                <span className='flex-1'>{label}</span>
                {isActive ? <RiCheckboxCircleFill /> : null}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export { DropdownMenu };
