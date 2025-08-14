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
      <div className={cn('flex flex-col gap-6', className)} {...props} />
    </TabsProvider>
  )
}

function TabList({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div role='tablist' aria-label='Tabs' className={cn('flex gap-2', className)} {...props}>
      {children}
    </div>
  )
}

const tabButtonVariants = cva(
  'border-box text-base font-medium text-neutral-600 disabled:bg-transparent! disabled:text-neutral-400 not-disabled:cursor-pointer',
  {
    variants: {
      variant: {
        button: 'border border-transparent px-4 py-2.5 rounded-[0.25rem] focus-visible:bg-neutral-50 hover:bg-neutral-50  focus-visible:ring-4 focus-visible:ring-indigo-800/20 focus-visible:outline-none',
        tab: 'relative px-2 pb-3 hover:text-neutral-900 focus-visible:text-neutral-900 after:w-full after:scale-x-0 after:h-[2px] after:absolute after:-bottom-[1px] after:left-0 after:transition-transform'
      },
      active: {
        true: null,
        false: null
      }
    },
    compoundVariants: [
      {
        variant: 'button',
        active: true,
        class: 'text-neutral-900 border-neutral-200 shadow-sm',
      },
      {
        variant: 'tab',
        active: true,
        class: 'after:scale-x-100 text-indigo-700  hover:text-indigo-800 hover:after:bg-indigo-800  after:bg-indigo-700',
      },
    ],
    defaultVariants: {
      variant: 'button',
      active: false
    }
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
      className={cn('text-base font-medium text-neutral-900', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Tabs, TabList, TabButton, TabPanel }