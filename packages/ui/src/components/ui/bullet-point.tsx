import { cn } from '#dep/lib/utils';
import { RiCheckFill } from '@remixicon/react';
import { ClassValue } from 'clsx';


type BulletPointProps = {
  content: string;

  textClassName?: ClassValue;
}
function BulletPoint({
  content,
  textClassName
}: BulletPointProps) {
  return (
    <div className="ui:flex ui:flex-row ui:items-center ui:gap-3">
      <div className="ui:flex ui:items-center ui:justify-center ui:size-6 ui:rounded-full ui:bg-indigo-50 ui:[&_svg]:text-indigo-500">
        <RiCheckFill size={24} />
      </div>
      <div className={cn("ui:text-neutral-500 ui:text-lg", textClassName)}>
        {content}
      </div>
    </div>
  )
}

export { BulletPoint };
