import HeroSectionWrapper from '@/features/about/hero-section'
import { ContactSection } from '@/features/contact/contact-section';
import { CONTACT_DESC, CONTACT_ITEMS, CONTACT_TITLE, TEAM_DESCRIPTION, TEAM_MEMBERS, TEAM_SUPPORTING_TEXT, TEAM_TITLE } from '@/config';
import { StatisticsSection } from '@repo/ui/src/components/marketing/statistics-section'
import { TeamSection } from '@repo/ui/src/components/marketing/team-section';
import React from 'react'

export default async function AboutUsPage() {

  const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/statistics-metrics?latest=true');
  const result = await response.json();
  return (
    <div>
      <HeroSectionWrapper />

      <StatisticsSection
        imgUrl='https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/statistics-section/starter/img/white-blocks.jpg'
        title='More than premium abstract imagery'
        supportingText='Statistics'
        description='Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery.'
        metrics={result?.data} />

      <TeamSection
        description={TEAM_DESCRIPTION}
        members={TEAM_MEMBERS}
        title={TEAM_TITLE}
        supportingText={TEAM_SUPPORTING_TEXT}
      />

      <ContactSection
        title={CONTACT_TITLE}
        description={CONTACT_DESC}
        contactItems={CONTACT_ITEMS}
      />

    </div>
  )
}
