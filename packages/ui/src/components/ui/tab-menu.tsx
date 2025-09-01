'use client'

import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'



type TabsContextType = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabMenuContext = React.createContext<TabsContextType | null>(null);

function TabsProvider({ children, defaultActiveTab }: {
  children: React.ReactNode;
  defaultActiveTab: string;
}) {
  const [activeTab, setActiveTab] = React.useState<string>(defaultActiveTab);
  return (
    <TabMenuContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabMenuContext.Provider>
  )
}

function Tabs({
  defaultValue,
  className,
  ...props
}: React.ComponentProps<'div'>
  & {
    defaultValue: string;
  }) {
  return (
    <TabsProvider defaultActiveTab={defaultValue}>
      <div className={cn('ui:flex ui:flex-col ui:gap-6', className)} {...props} />
    </TabsProvider>
  )
}

function TabList({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div role='tablist' aria-label='Tabs' className={cn('ui:flex ui:gap-2', className)} {...props}>
      {children}
    </div>
  )
}

const tabButtonVariants = cva(
  'ui:border-box ui:text-base ui:font-medium ui:text-neutral-600 ui:disabled:bg-transparent! ui:disabled:text-neutral-400 ui:not-disabled:cursor-pointer',
  {
    variants: {
      variant: {
        button:
          'ui:border ui:border-transparent ui:px-4 ui:py-2.5 ui:rounded-[0.25rem] ui:focus-visible:bg-neutral-50 ui:hover:bg-neutral-50 ui:focus-visible:ring-4 ui:focus-visible:ring-indigo-800/20 ui:focus-visible:outline-none',
        tab: 'ui:relative ui:px-2 ui:pb-3 ui:hover:text-neutral-900 ui:focus-visible:text-neutral-900 ui:after:w-full ui:after:z-1 ui:after:scale-x-0 ui:after:h-[2px] ui:after:absolute ui:after:-bottom-[1px] ui:after:left-0 ui:after:transition-transform',
      },
      active: {
        true: null,
        false: null,
      },
    },
    compoundVariants: [
      {
        variant: 'button',
        active: true,
        class: 'ui:text-neutral-900 ui:border-neutral-200 ui:shadow-sm',
      },
      {
        variant: 'tab',
        active: true,
        class: 'ui:after:scale-x-100 ui:text-indigo-700 ui:hover:text-indigo-800 ui:hover:after:bg-indigo-800 ui:after:bg-indigo-700',
      },
    ],
    defaultVariants: {
      variant: 'button',
      active: false,
    },
  }
)


function TabButton({
  className,
  value,
  variant,
  ...props
}: React.ComponentProps<'button'>
  & VariantProps<typeof tabButtonVariants>) {
  const context = React.useContext(TabMenuContext);

  if (!context) {
    throw new Error('TabButton must be used within a TabMenu');
  }

  const isActive = context.activeTab === value;
  return (
    <button
      role="tab"
      aria-controls={`${value as string}-panel`}
      onClick={(event) => {
        context.setActiveTab(value as string);
        props.onClick?.(event);
      }}
      className={cn(tabButtonVariants({ variant, active: isActive, className }))}
      {...props}
    />
  )
}

function TabPanel({
  value,
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & { value: string }) {
  const context = React.useContext(TabMenuContext);

  if (!context) {
    throw new Error('TabPanel must be used within a TabMenu');
  }
  const isActive = context.activeTab === value;
  return (
    <div
      id={`${value}-panel`}
      role="tabpanel"
      hidden={!isActive}
      className={cn('ui:text-base ui:font-medium ui:text-neutral-900', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Tabs, TabList, TabButton, TabPanel }