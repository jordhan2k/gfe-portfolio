'use client'

import { RiArrowDownSLine, RiCheckboxCircleFill } from '@remixicon/react';
import clsx from 'clsx';
import { KeyboardEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '#dep/lib/utils';

interface DropdownMenuProps<T> {
  placeholder: string | React.ReactNode;
  options: T[];
  disabled?: boolean;
  closeOnSelect?: boolean;
  defaultVisible?: boolean;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string;
  getItemIcon?: (item: T) => ReactNode;
  getItemDisabled?: (item: T) => boolean;
  label?: string;
  hintText?: string;
  error?: string;

  selectOption: T | null;
  onChange: (option: T) => void;



  menuProps?: React.ComponentProps<'ul'>;
  buttonProps?: ButtonProps;
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
  getItemDisabled,
  menuProps,
  label,
  error,
  hintText,
  onChange,
  selectOption,
  buttonProps
}: DropdownMenuProps<T>) {

  // const [selectOption, setSelectedOption] = useState<T | null>(null);
  const [visible, setVisible] = useState(defaultVisible);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    onChange(item);
    closeOnSelect && setVisible(false);
  }

  const handleKeyDownOnOption = (e: KeyboardEvent<HTMLLIElement>, item: T) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSelectOption(item);
    }
  }
  return (
    <div className='ui:w-full'>
      <div ref={dropdownRef} className='ui:w-full ui:relative ui:flex ui:flex-col'>
        {label ? <label onClick={() => {
          console.log('label')
          buttonRef.current?.click();
          buttonRef.current?.focus();
        }} className='ui:w-full ui:text-sm ui:font-medium ui:text-gray-700' htmlFor={buttonProps?.name}>{label}</label> : null}
        <Button
          ref={buttonRef}
          id={buttonProps?.name}
          onClick={() => setVisible(prev => !prev)}
          aria-haspopup="menu"
          aria-expanded={visible}
          disabled={disabled}
          variant={'secondary'}
          size={'sm'}
          {...buttonProps}
          className={cn('ui:w-full ui:justify-between ui:my-1.5', buttonProps?.className)}
        >
          {selectOption ? getItemLabel(selectOption) : placeholder}
          <RiArrowDownSLine className='ui:size-5' />
        </Button>
        <ul role='menu'
          className={cn(clsx('ui:z-1000 ui:absolute ui:transition-all ui:flex ui:flex-col ui:p-2 ui:gap-2 ui:rounded-lg ui:shadow ui:w-full ui:bg-white ui:max-h-[500px] ui:overflow-auto ui:border ui:border-neutral-200',
            {
              'ui:top-[100%] ui:opacity-0 ui:pointer-events-none': !visible,
              'ui:top-[calc(100%+1px)] ui:opacity-100': visible
            }
          ), menuProps?.className)}

        >
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
                  tabIndex={itemDisabled || !visible ? undefined : 0}
                  onClick={() => !itemDisabled && handleSelectOption(item)}
                  onKeyDown={(e) => !itemDisabled && handleKeyDownOnOption(e, item)}
                  className={clsx(`ui:w-full
                ui:flex ui:p-2 ui:gap-2 ui:rounded-[0.25rem]
                ui:[&_svg:not([class*=size-])]:size-5
                ui:text-sm ui:font-medium ui:border ui:border-transparent ui:focus:border-indigo-200 ui:focus:outline-none`,
                    {
                      'ui:bg-neutral-50': isActive,
                      'ui:text-neutral-900 ui:hover:bg-neutral-50 ui:cursor-pointer': !itemDisabled,
                      'ui:text-neutral-400 ui:cursor-not-allowed': itemDisabled
                    }
                  )}
                >
                  {icon}
                  <span className='ui:flex-1'>{label}</span>
                  {isActive ? <RiCheckboxCircleFill /> : null}
                </li>
              )
            })
          }
        </ul>
      </div>
      {
        (hintText || error) ? <div id={`${name}-hint`} className={clsx('ui:text-sm ui:text-gray-500', {
          'ui:text-red-600': error
        })}>
          {!!error ? error : hintText}
        </div> : null
      }
    </div>
  )
}

export { DropdownMenu };
