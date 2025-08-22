'use client'

import { cn } from '#dep/lib/utils'
import { RiEyeCloseLine, RiEyeLine, RiQuestionLine } from '@remixicon/react';
import clsx, { ClassValue } from 'clsx';
import React from 'react'
import { Button } from '../ui/button';

type TextInputProps = Omit<React.ComponentProps<'input'>, 'type'>
  & {
    label?: string;
    hintText?: string | React.ReactNode;
    leadingIcon?: React.ReactNode;
    helpIcon?: boolean;
    error?: string | React.ReactNode;
    type?: 'text' | 'email' | 'password';
    containerClassname?: ClassValue;
  }

function TextInput({
  name,
  placeholder,
  label,
  type = 'text',
  hintText,
  leadingIcon,
  helpIcon,
  className,
  error,
  disabled,
  containerClassname,
  ...props
}: TextInputProps) {
  const [localType, setLocalType] = React.useState(type);

  return (
    <div className={cn('ui:w-full ui:flex ui:flex-col ui:gap-1.5', containerClassname)}>
      {label ? <label className='ui:w-full ui:text-sm ui:font-medium ui:text-gray-700' htmlFor={name}>{label}</label> : null}
      <div className={clsx('ui:w-full ui:flex ui:relative ui:items-center', {
        '[&_svg]:text-red-600': error
      })}>
        <div className={`ui:absolute ui:left-3.5 ui:flex ui:text-gray-400 [&_svg:not([class*=size-])]:ui:size-5 ui:pointer-events-none`}>
          {leadingIcon}
        </div>
        <input
          type={localType}
          aria-describedby={`${name}-hint`}
          id={name}
          name={name}
          disabled={disabled}
          className={cn(
            `ui:h-10 ui:border ui:text-sm ui:leading-5  ui:font-normal ui:bg-neutral-50
            ui:border-neutral-200 ui:rounded-[0.25rem] 
            ui:w-full ui:px-3.5 ui:text-neutral-900 ui:placeholder:text-neutral-500 ui:focus:ring-offset-0 
            ui:focus:ring-4 ui:focus:ring-indigo-700/12 
            ui:focus:border-indigo-700 ui:focus:outline-none`,
            clsx({
              'ui:pl-10.5': leadingIcon,
              'ui:pr-9.5': helpIcon || type === 'password',
              'ui:focus:ring-red-600/12  ui:focus:border-red-600': error,
              'ui:text-neutral-400 ui:placeholder:text-neutral-400 ui:border-neutral-100': disabled
            })
            , className
          )}
          placeholder={placeholder}
          {...props}
        />
        {(type === 'password') ?
          <Button onClick={() => setLocalType(localType === 'password' ? 'text' : 'password')} variant={'link-gray'} className='z-1 absolute right-3.5 flex items-center text-gray-400 [&_svg]:size-4!'>
            {localType === 'password' ? <RiEyeCloseLine /> : <RiEyeLine />}
          </Button>
          : (helpIcon ? <div className={`ui:absolute ui:text-gray-400 ui:right-3.5 ui:[&_svg:not([class*=size-])]:size-4`}>
            <RiQuestionLine />
          </div> : null)}
      </div>
      {
        (hintText || error) ? <div id={`${name}-hint`} className={clsx('ui:text-sm ui:text-gray-500', {
          'ui:text-red-600': error
        })}>
          {!!error ? error : hintText}
        </div> : null
      }
    </div >
  )
}

export { TextInput, type TextInputProps }