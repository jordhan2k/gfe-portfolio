
import { StatisticsSection } from '@repo/ui/components/marketing/statistics-section';
import React from 'react'

export default async function StatisticsSectionPage() {

  const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/statistics-metrics?latest=true');
  const result = await response.json();
  return (
    <div className='min-h-dvh bg-[linear-gradient(147.52deg,#f9fafb_8.89%,#d2d6db_100.48%)]'>
      <div className='max-w-[90rem] w-auto mx-auto p-4 '>
        <StatisticsSection
          imgUrl='https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/statistics-section/starter/img/white-blocks.jpg'
          title='More than premium abstract imagery'
          supportingText='Statistics'
          description='Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery.'
          metrics={result?.data} />
      </div>
    </div>

  )
}
