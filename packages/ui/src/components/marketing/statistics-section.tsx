import React from 'react'
import { StatisticsCard } from './statistics-card';
import Image from 'next/image';

type StatItem = {
  value: number;
  metric: string;
}

type StatisticsSectionProps = {
  supportingText?: string;
  title: string;
  description: string;
  metrics: StatItem[];
  imgUrl: string;
}

function StatisticsSection({
  description,
  title,
  supportingText,
  metrics,
  imgUrl
}: StatisticsSectionProps) {
  return (
    <section
      className="flex flex-col gap-y-16 w-full bg-white shadow-sm rounded-[0.25rem] md:rounded-md px-3 py-12 md:px-4 md:py-16 lg:px-24 lg:py-24"
    >
      <div className="text-center">
        <div className="text-indigo-700 text-base font-semibold mb-3">
          {supportingText}
        </div>
        <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold mb-5">
          {title}
        </h2>
        <p className="text-neutral-600 text-lg md:text-xl font-normal">
          {description}
        </p>
      </div>

      <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-x-8 gap-y-8'>
        <div className='col-span-4 md:col-span-6'>
          <Image
            alt='Statistics section illustration image'
            src={imgUrl}
            width={592}
            height={544}
            className='object-cover w-full xl:h-full'
          />
        </div>
        <div className='col-span-4 md:col-span-6 flex flex-col gap-6 md:gap-8'>
          <span className='text-lg font-normal text-neutral-600'>Our mission, in numbers</span>
          {
            metrics?.map((m) => (
              <StatisticsCard
                key={m.metric}
                title={m.metric}
                value={m.value}
                animate
              />
            ))

          }
        </div>
      </div>



    </section>
  )
}

export { StatisticsSection }