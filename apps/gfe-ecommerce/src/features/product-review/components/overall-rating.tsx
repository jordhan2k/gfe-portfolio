'use client'

import { useProductReviews, useSelectedRating } from '@/hooks/use-product-reviews';
import { useEffect, useState } from 'react';

import { RatingStars } from '@/components/ui/rating-stars';
import { RATING_RANKS } from '@/config';
import { IRatingOverview } from '@/types';
import { Button } from '@repo/ui/src/components/ui/button';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import isEqual from 'lodash/isEqual';
import { useParams } from 'next/navigation';


function OverallRating() {
  const { id } = useParams();
  const [aggregate, setAggregate] = useState<IRatingOverview | null>(null);
  const { data: selectedRating } = useSelectedRating(id as string);
  const queryClient = useQueryClient();

  const { data } = useProductReviews(id as string, selectedRating);
  const dataAggregate = data?.pages?.[0]?.aggregate;



  useEffect(() => {
    if (dataAggregate && !isEqual(aggregate, dataAggregate)) {
      setAggregate(dataAggregate);
    }
  }, [dataAggregate, aggregate]);

  const ratingData = RATING_RANKS.map((rank) => ({
    ...rank,
    value: aggregate?.counts?.find((item) => item.rating === rank.rating)?.count
  }))



  const handleSelectRating = (rating: number | null) => {
    queryClient.setQueryData(["product-reviews", "selected-rating", id], rating);
    queryClient.removeQueries({ queryKey: ['product-reviews', id] })
  }
  return (
    <div className='col-span-4 lg:col-span-4 px-4 pb-6 md:px-8 flex flex-col items-center gap-6'>
      <div className='w-full'>
        <h2 className='text-xl text-neutral-900 font-semibold mb-2'>Overall rating</h2>
        <div className='flex gap-2 items-center'>
          <span>4.1</span>
          <RatingStars rating={4.1} />
          <span>Based on 62 reviews</span>
        </div>
      </div>
      <ul className='flex flex-col gap-4 w-full'>
        {ratingData.map(({ color, name, rating, value = 0 }) => {
          const ratingPercentage =
            !aggregate?.total
              ? 0
              : Math.floor((value / aggregate?.total) * 100);
          return (
            <li key={name}>
              <button
                onClick={() => handleSelectRating(rating)}
                // onClick={() => {
                //   // setselectedRating(String(rating ?? ''))
                //   queryClient.setQueryData(["product-reviews", "selected-rating", id], rating);
                //   queryClient.removeQueries({ queryKey: ['product-reviews', id] }) // 
                // }}
                disabled={!aggregate?.total} className='w-full flex gap-2 items-center not-disabled:cursor-pointer disabled:pointer-events-none'>
                <div className={clsx('w-[120px] text-base font-medium text-left text-neutral-600', {
                  'text-indigo-700!': Number(selectedRating) === rating
                })}>
                  {name}
                </div>
                <div
                  //TODO: aria 
                  role='progressbar'
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={ratingPercentage}
                  className='flex-1 h-2 bg-neutral-200 rounded-full transition-all duration-500 ease-in-out'>
                  <div
                    className='h-2 rounded-full'
                    style={{
                      width: `${ratingPercentage}%`,
                      backgroundColor: color
                    }} />
                </div>
                <div className='w-[44px] text-right text-base font-normal text-neutral-600'>{ratingPercentage}%</div>

              </button>
            </li>
          )
        })}
      </ul>
      <div className={clsx('w-full flex justify-center', { 'justify-between! gap-4': !!selectedRating })}>
        {selectedRating ? <Button onClick={() => queryClient.setQueryData(["product-reviews", "selected-rating", id], null)} size={'xl'} variant={'tertiary'} className='flex-1 min-w-[148px]'>Clear filter</Button> : null}
        <Button size={'xl'} variant={'secondary'} className={selectedRating ? 'flex-1 min-w-[148px] whitespace-nowrap' : ''}>Write a review</Button>
      </div>
    </div >
  )
}

export { OverallRating };
