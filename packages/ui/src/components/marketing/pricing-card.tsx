import { capitalize, cn } from '#dep/lib/utils';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { BulletPoint } from '../ui/bullet-point';
import { Button, ButtonProps } from '../ui/button';

type PricingCardProps = React.ComponentProps<"div"> & {
  popular?: boolean;
  price: number;
  type?: 'monthly' | 'annually';
  totalPrice?: number;
  plan: string;
  description: string;
  features: string[];
  buttonProps: ButtonProps;
}

const cardVariants = cva(
  'flex flex-col  border border-neutral-200 rounded-lg gap-8 overflow-hidden',
  {
    variants: {
      popular: {
        true: 'border-indigo-600',
        false: ''
      },
    },
    defaultVariants: {
      popular: false
    }
  }
)

function PricingCard({
  features,
  plan,
  description,
  price,
  type = 'monthly',
  popular = false,
  totalPrice,
  className,
  buttonProps,
  ...props
}: PricingCardProps) {
  const totalPriceString = useMemo(() => {
    if (type === 'monthly' || !totalPrice || isNaN(totalPrice)) return '';
    return `($${totalPrice})`
  }, [totalPrice, type])
  return (
    <div className={cn(
      cardVariants({ popular, className }))}>

      <div hidden={!popular} className='flex justify-center py-4 px-2 bg-indigo-50 text-indigo-700 text-xl font-bold'>Most popular</div>
      <div className={clsx('flex flex-col flex-1 gap-8 px-4 md:px-8', {
        'mt-0 pb-4 md:pb-8': popular,
        'py-4 md:py-8': !popular
      })}>
        <div>
          <h6 className='text-neutral-900 text-2xl font-semibold mb-2'>{capitalize(plan)} Plan</h6>
          <p className='text-neutral-600 text-base font-normal'>
            {description}
          </p>
        </div>

        <div>
          <div className='mb-2'>
            <span className={clsx('text-5xl font-semibold', {
              'text-indigo-700': popular,
              'text-neutral-900': !popular
            })}>${price}</span>
            <span className='text-neutral-900 text-base font-normal'>/ month</span>

          </div>
          <span className='text-neutral-600 text-base font-normal'>Billed {type} {totalPriceString}</span>
        </div>

        <ul className='flex flex-col gap-5 flex-1'>
          {
            features.map((feature) => (
              <li key={feature}>
                <BulletPoint content={feature} textClassName='text-neutral-600 font-normal text-base' />
              </li>
            ))
          }
        </ul>
        <Button {...buttonProps} variant={buttonProps?.variant ? buttonProps?.variant : (popular ? 'primary' : 'secondary')} className={cn('w-full', buttonProps?.className)} />

      </div>

    </div>
  )
}

export { PricingCard, type PricingCardProps };
