'use client'

import { Avatar } from '@/components/ui/avatar';
import { RatingStars } from '@/components/ui/rating-stars';
import { useProductReviews, useSelectedRating } from '@/hooks/use-product-reviews';
import { RiChatSmile3Line } from '@remixicon/react';
import { Button } from '@repo/ui/src/components/ui/button';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useParams } from 'next/navigation';

function ReviewList({
  className
}: React.ComponentProps<'div'>) {
  const { id } = useParams();
  const { data: selectedRating } = useSelectedRating(id as string);

  const { data, hasNextPage,
    fetchNextPage, isLoading,
    isFetching, isFetchingNextPage } = useProductReviews(id as string, selectedRating);
  const mergedData = data?.pages.flatMap((page) => page.data) ?? [];
  const remainingCount = (data?.pages?.[0]?.pagination?.total ?? 0) - mergedData.length;

  return (
    <div className={clsx('h-[calc(100vh_-_160px)] col-span-4 lg:col-span-6 lg:pr-8 gap-6 lg:overflow-auto', className)}>
      {
        isFetching && !isFetchingNextPage ? <LoadingComponent /> : null
      }
      {!mergedData.length && !isLoading
        ? <EmptyComponent />
        : null}
      {(mergedData.length && !isLoading) ?
        <>
          <ul key={`${id}-review-rating-${selectedRating}`} className='overflow-auto flex flex-col px-4 md:px-8 lg:px-0 gap-6 md:gap-8'>
            {
              mergedData?.map((review, index) => (
                // Forced to use index because no id is provided in the returned data
                <li key={`${id}-review-${review.user.user_id}-${review.created_at}`} >
                  <ReviewItem
                    avatarUrl={review.user.avatar_url}
                    createdAt={review.created_at}
                    rating={review.rating}
                    username={review.user.name}
                    content={review.content}
                  />
                </li>
              ))
            }
          </ul>
          {hasNextPage ? <div className='px-4 py-6 md:px-8 lg:px-4'>
            <Button onClick={() => fetchNextPage()} className='w-full' size={'lg'} variant={'secondary'}>Show more {remainingCount} reviews</Button>
          </div>
            : <div className='h-6' />}
        </>
        : null}
    </div>
  )
}

function LoadingComponent() {
  return <div className='p-6 flex flex-col items-center justify-center h-full'>
    ...Loading
  </div>
}

function EmptyComponent() {
  return <div className='p-6 flex flex-col items-center justify-center h-full'>

    <div className='size-12 rounded-full shadow-sm flex items-center justify-center text-indigo-700 mb-5'>
      <RiChatSmile3Line size={24} />
    </div>
    <div className='text-xl font-medium text-neutral-900 mb-2'>No review yet!</div>
    <p className='text-base font-normal text-neutral-900'>Be the first to review this product</p>

  </div>
}

type ReviewItemProps = {
  username: string;
  avatarUrl: string | null;
  createdAt: string;
  content: string | null;
  rating: number;
}

function ReviewItem({
  avatarUrl,
  createdAt,
  username,
  content,
  rating
}: ReviewItemProps) {
  return <div className='flex flex-col gap-4'>
    <div className='flex items-center gap-4'>
      <Avatar loading='lazy' username={username} alt={`${username}'s avatar`} src={avatarUrl ?? ''} />
      <div className='flex-1 flex flex-col gap-1'>
        <div className='flex justify-between gap-1 items-center'>
          <div className='text-base font-semibold text-neutral-900'>{username}</div>
          <div className='text-xs font-normal text-neutral-600'>{dayjs(createdAt).format('MMM DD, YYYY')}</div>
        </div>
        <RatingStars rating={rating} />
      </div>
    </div>
    <p
      hidden={!(content ?? '')?.trim()?.length}
      className='text-base font-normal text-neutral-600'
    >
      {content}
    </p>
  </div>
}

export { ReviewList };
