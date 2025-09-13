import { AiHalfStar } from '@/assets/icons/half-star';
import { AiStar } from '@/assets/icons/star';
import React, { Fragment } from 'react'

type RatingStarsProps = {
  rating: number;
  onClick?: () => void;
  selected?: boolean;
}

function RatingStars({
  rating, onClick, selected, ...props
}: React.ComponentProps<'button'> & RatingStarsProps) {
  const maxRating = 5;
  const filledStars = rating >= 5 ? 5 : Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={!onClick}
      // tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      className='flex gap-1 group cursor-pointer w-fit focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:rounded-xs'
    >
      {
        Array.from({ length: maxRating }).map((_, index) => <Fragment key={`star-${index}`}>
          {(hasHalfStar && index === filledStars)
            ? <AiHalfStar />
            : <AiStar
              className='group-hover:stroke-indigo-200'
              color={index + 1 <= filledStars ? (selected ? "#EAB308" : "#FACC15") : undefined}
            />
          }
        </Fragment>)
      }
    </button>
  )
}

export { RatingStars }