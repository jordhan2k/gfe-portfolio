import React from 'react'
import { TeamMemberCard, TeamMemberCardProps } from './team-member-card';




type TeamSectionProps = {
  supportingText?: string;
  title: string;
  description: string;
  members: TeamMemberCardProps[];
}

function TeamSection({
  description,
  title,
  supportingText,
  members
}: TeamSectionProps) {
  return (
    <section
      className="ui:flex ui:flex-col ui:gap-y-16 ui:w-full ui:bg-white ui:shadow-sm ui:rounded-[0.25rem] ui:md:rounded-md ui:px-3 ui:py-12 ui:md:px-4 ui:md:py-16 ui:xl:px-24 ui:xl:py-24"
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

      <ul className='ui:grid ui:grid-cols-4 ui:md:grid-cols-6  ui:xl:grid-cols-12 ui:gap-4 ui:md:gap-8'>
        {
          members?.map((member) => (
            <li key={member.name} className='ui:col-span-4 ui:md:col-span-3'>
              <TeamMemberCard {...member} />
            </li>
          ))
        }

      </ul>

    </section>
  )
}

export { TeamSection }