'use client'

import { ColorOption } from '@/components/ui/color-option';
import { useColorContext, useProductActions } from '../context';

function AvailableColors() {
  const { onSelectColor } = useProductActions();
  const { availableColors, selectedColor } = useColorContext();

  return (
    <div className='flex flex-col gap-4'>
      <div className='text-sm font-normal text-neutral-500'>Available Colors</div>
      <ul className='flex flex-wrap gap-4'>
        {
          availableColors.map((c) => (
            <li key={c.color} aria-label={`Color ${c.color}`}>
              <ColorOption
                size='lg'
                color={c.color}
                disabled={!!c.disabled}
                onClick={() => onSelectColor(c.color)}
                selected={selectedColor === c.color}
              />
            </li>
          )
          )
        }

      </ul>

    </div>
  )
}

export { AvailableColors };
