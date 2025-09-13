import { RiCloseFill } from '@remixicon/react';

type TagProps = {
  label: string;
  onRemove: () => void;
}
function Tag({
  label, onRemove
}: TagProps) {
  return (
    <div className='rounded-[0.25rem] w-fit flex items-center flex-nowrap px-2 py-1 text-sm font-medium text-neutral-900 bg-neutral-200 gap-2'>
      {label}
      <button className='cursor-pointer' onClick={onRemove} role='button'><RiCloseFill size={20} /></button>
    </div>
  )
}

export { Tag };
