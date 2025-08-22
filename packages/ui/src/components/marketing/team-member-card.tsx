import { cn } from '#dep/lib/utils';
import Image from 'next/image';
import React from 'react'

type TeamMemberCardProps = {
  avatar: string;
  name: string;
  role: string;
  description: string;
}

function TeamMemberCard({
  avatar,
  description,
  name,
  role,
  className
}: React.ComponentProps<'div'> & TeamMemberCardProps) {
  return (
    <div className={cn('', className)}>
      <Image
        src={avatar}
        alt={`${name}'s avatar`}
        width={280}
        height={298}
        className='ui:h-[298px] ui:w-full ui:object-cover ui:mb-6'
      />
      <h4 className='ui:text-neutral-900 ui:text-xl ui:font-semibold ui:mb-1'>{name}</h4>
      <p className='ui:text-lg ui:text-indigo-700 ui:font-medium ui:mb-4'>{role}</p>
      <p className='ui:text-neutral-600 ui:font-normal ui:text-base'>{description}</p>
    </div>
  )
}

export { TeamMemberCard, type TeamMemberCardProps }