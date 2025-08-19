import { cn } from '#dep/lib/utils';
import { RiCheckFill } from '@remixicon/react'
import { ClassValue } from 'clsx';
import React from 'react'


type BulletPointProps = {
  content: string;

  textClassName?: ClassValue;
}
function BulletPoint({
  content,
  textClassName
}: BulletPointProps) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="flex items-center justify-center size-6 rounded-full bg-indigo-50 [&_svg]:text-indigo-500">
        <RiCheckFill size={24} />
      </div>
      <div className={cn("text-neutral-500 text-lg", textClassName)}>
        {content}
      </div>
    </div>
  )
}

export { BulletPoint }