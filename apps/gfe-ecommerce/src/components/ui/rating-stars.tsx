import { AiHalfStar } from '@/assets/icons/half-star';
import { AiStar } from '@/assets/icons/star';
import React, { Fragment } from 'react'

type RatingStarsProps = {
  rating: number;
}

function RatingStars({
  rating
}: RatingStarsProps) {
  const maxRating = 5;
  const filledStars = rating >= 5 ? 5 : Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className='flex gap-1'>
      {
        Array.from({ length: maxRating }).map((_, index) => <Fragment key={`star-${index}`}>
          {(hasHalfStar && index === filledStars)
            ? <AiHalfStar />
            : <AiStar
              color={index + 1 <= filledStars ? "#FACC15" : undefined}
            />
          }
        </Fragment>)
      }
    </div>
  )
}

export { RatingStars }