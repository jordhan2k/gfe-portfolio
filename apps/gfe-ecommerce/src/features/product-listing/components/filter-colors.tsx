import { ColorOption } from '@/components/ui/color-option';
import { COLORS_OPTIONS } from '@/config';
import useFilter from '../use-filter';
import { FilterAccordion } from './filter-accordion';

function FilterColor() {

  const { onSelect, options } = useFilter(COLORS_OPTIONS.key)

  return (
    <FilterAccordion
      title={COLORS_OPTIONS.title}
      content={<div className='flex gap-2 flex-wrap'>
        {
          COLORS_OPTIONS.items.map((item) => <ColorOption
            size='md'
            selected={options.includes(item.value)}
            onClick={() => onSelect(item.value)}
            key={item.value}
            color={item.value}
          />)
        }
      </div>}
    />
  )
}

export { FilterColor };
