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
  'ui:flex ui:flex-col ui:border ui:border-neutral-200 ui:rounded-lg ui:gap-8 ui:overflow-hidden',
  {
    variants: {
      popular: {
        true: 'ui:border-indigo-600 ui:shadow-sm',
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
      <div hidden={!popular} className='ui:flex ui:justify-center ui:py-4 ui:px-2 ui:bg-indigo-50 ui:text-indigo-700 ui:text-xl ui:font-bold'>Most popular</div>
      <div className={clsx('ui:flex ui:flex-col ui:flex-1 ui:gap-8 ui:px-4 ui:md:px-8', {
        'ui:mt-0 ui:pb-4 ui:md:pb-8': popular,
        'ui:py-4 ui:md:py-8': !popular
      })}>
        <div>
          <h3 className='ui:text-neutral-900 ui:text-2xl ui:font-semibold ui:mb-2'>{capitalize(plan)} Plan</h3>
          <p className='ui:text-neutral-600 ui:text-base ui:font-normal'>
            {description}
          </p>
        </div>

        <div>
          <div className='ui:mb-2'>
            <span className={clsx('ui:text-5xl ui:font-semibold', {
              'ui:text-indigo-700': popular,
              'ui:text-neutral-900': !popular
            })}>${price}</span>
            <span className='ui:text-neutral-900 ui:text-base ui:font-normal'>/ month</span>

          </div>
          <span className='ui:text-neutral-600 ui:text-base ui:font-normal'>Billed {type} {totalPriceString}</span>
        </div>

        <ul className='ui:flex ui:flex-col ui:gap-5 ui:flex-1'>
          {
            features.map((feature) => (
              <li key={feature}>
                <BulletPoint content={feature} textClassName='ui:text-neutral-600 ui:font-normal ui:text-base' />
              </li>
            ))
          }
        </ul>
        <Button {...buttonProps} variant={buttonProps?.variant ? buttonProps?.variant : (popular ? 'primary' : 'secondary')} className={cn('ui:w-full', buttonProps?.className)} />

      </div>

    </div>
  )
}

export { PricingCard, type PricingCardProps };
