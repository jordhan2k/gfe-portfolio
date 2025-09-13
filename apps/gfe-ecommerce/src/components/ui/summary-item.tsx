import { formatPrice } from '@/lib';
import { Badge, BadgeProps } from '@repo/ui/src/components/ui/badge';
import React, { useMemo } from 'react'

type SummaryItemProps = {
  label?: string;
  value: number | string;
  badgeProps?: BadgeProps;
}

function SummaryItem({
  label, value, badgeProps
}: SummaryItemProps) {
  const renderValue = typeof value === 'number' ? (value ? `$${formatPrice(value)}` : 'FREE') : value;

  return (
    <div className='flex justify-between w-full gap-2'>
      <div className='text-base leading-7 font-normal text-neutral-600 flex gap-2 md:gap-8  flex-wrap items-center'>
        {label ? <span className='mr-2'>{label}</span> : null}
        {badgeProps ? <Badge variant={'brand'} size={'lg'} {...badgeProps} /> : null}
      </div>
      <div className='text-lg font-semibold text-neutral-900'>{renderValue}</div>
    </div>
  )
}

export default SummaryItem