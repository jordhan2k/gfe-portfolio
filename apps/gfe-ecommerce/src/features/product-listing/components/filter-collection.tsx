import { COLLECTIONS_OPTIONS } from '@/config';
import { Checkbox } from '@repo/ui/src/components/form/checkbox';
import useFilter from '../use-filter';
import { FilterAccordion } from './filter-accordion';

function FilterCollection() {
  const { onSelect, options } = useFilter(COLLECTIONS_OPTIONS.key)

  return (
    <FilterAccordion
      title={COLLECTIONS_OPTIONS.title}
      content={<div className='flex flex-col gap-4'>
        {
          COLLECTIONS_OPTIONS.items.map((option) => (
            <Checkbox
              checked={options.includes(option.value)}
              onChange={() => onSelect(option.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSelect(option.value)
                }
              }}
              key={option.value}
              name={option.value}
              label={option.name} />
          ))
        }
      </div>}

    />
  )
}

export { FilterCollection };

