import { RatingStars } from '@/components/ui/rating-stars';
import { RATING_OPTIONS } from '@/config';
import useFilter from '../use-filter';
import { FilterAccordion } from './filter-accordion';

function FilterRating() {
  const { onSelect, options } = useFilter(RATING_OPTIONS.key)

  return (
    <FilterAccordion
      title={RATING_OPTIONS.title}
      content={<div className='flex flex-col gap-6'>
        {
          RATING_OPTIONS.items.map((item) => (
            <RatingStars
              key={item.name}
              aria-label={item.name}
              selected={options.includes(item.value.toString())}
              onClick={() => onSelect(item.value.toString())}
              rating={item.value} />
          ))
        }
      </div>}
    />
  )
}

export { FilterRating };
