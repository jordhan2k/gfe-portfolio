'use client'

import { CATEGORY_OPTIONS } from '@/config';
import { Checkbox } from '@repo/ui/src/components/form/checkbox';
import useFilter from '../use-filter';
import { FilterAccordion } from './filter-accordion';

function FilterCategory() {
  const { onSelect, options } = useFilter(CATEGORY_OPTIONS.key)

  return (
    <FilterAccordion
      title={CATEGORY_OPTIONS.title}
      content={<div className='flex flex-col gap-4'>
        {
          CATEGORY_OPTIONS.items.map((option) => (
            <Checkbox key={option.value}
              checked={options.includes(option.value)}
              onChange={() => onSelect(option.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSelect(option.value)
                }
              }}
              name={option.value} label={option.name} />
          ))
        }
      </div>}
    />
  )
}

export { FilterCategory };
