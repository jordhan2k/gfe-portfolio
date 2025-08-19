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
    <div className='bg-white border border-neutral-200 rounded-lg py-6 shadow-sm flex flex-col items-center gap-4 w-full'>
      <div className='text-5xl font-bold text-indigo-700'>{formatNumberToGroup(value)}</div>
      <div className='text-xl font-normal text-neutral-600'>{capitalize(title).replaceAll(/_/g, ' ')}</div>
    </div>
  )
}

export { StatisticsCard };
