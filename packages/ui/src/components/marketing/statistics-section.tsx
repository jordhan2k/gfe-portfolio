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
      className="ui:flex ui:flex-col ui:gap-y-16 ui:w-full ui:bg-white ui:rounded-[0.25rem] ui:md:rounded-md ui:px-3 ui:py-12 ui:md:px-4 ui:md:py-16 ui:lg:px-24 ui:lg:py-24"
    >
      <div className="ui:text-center">
        <div className="ui:text-indigo-700 ui:text-base ui:font-semibold ui:mb-3">
          {supportingText}
        </div>
        <h2 className="ui:text-neutral-900 ui:text-3xl ui:md:text-5xl ui:font-semibold ui:mb-5">
          {title}
        </h2>
        <p className="ui:text-neutral-600 ui:text-lg ui:md:text-xl ui:font-normal">
          {description}
        </p>
      </div>

      <div className='ui:grid ui:grid-cols-4 ui:md:grid-cols-6 ui:xl:grid-cols-12 ui:gap-x-8 ui:gap-y-8'>
        <div className='ui:col-span-4 ui:md:col-span-6'>
          <Image
            alt='Statistics section illustration image'
            src={imgUrl}
            width={592}
            height={544}
            className='ui:object-cover ui:w-full ui:xl:h-full'
          />
        </div>
        <div className='ui:col-span-4 ui:md:col-span-6 ui:flex ui:flex-col ui:gap-6 ui:md:gap-8'>
          <span className='ui:text-lg ui:font-normal ui:text-neutral-600'>Our mission, in numbers</span>
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