'use client'

import { capitalize, formatNumberToGroup } from '#dep/lib/utils';
import React, { useEffect, useState } from 'react';

type StatisticsCardProps = React.ComponentProps<'div'> & {
  title: string;
  value: number;
  animate?: boolean;
  duration?: number
}

function StatisticsCard({
  title,
  value: initialValue,
  animate,
  duration = 2000
}: StatisticsCardProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!animate) {
      setValue(initialValue);
      return;
    }
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * initialValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [initialValue, animate, duration]);
  return (
    <div className='ui:bg-white ui:border ui:border-neutral-200 ui:rounded-lg ui:py-6 ui:shadow-sm ui:flex ui:flex-col ui:items-center ui:gap-4 ui:w-full'>
      <div className='ui:text-5xl ui:font-bold ui:text-indigo-700'>{formatNumberToGroup(value)}</div>
      <div className='ui:text-xl ui:font-normal ui:text-neutral-600'>{capitalize(title).replaceAll(/_/g, ' ')}</div>
    </div>)
}

export { StatisticsCard };
