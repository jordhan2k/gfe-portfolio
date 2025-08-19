import { RiCheckFill } from '@remixicon/react';
import React from 'react'
import { Badge, BadgeProps } from '../ui/badge';
import { Button, ButtonProps } from '../ui/button';

type CardProps = {
  badgeProps: BadgeProps;
  buttonProps: ButtonProps;
  title: string;
  subtitle: string;
  description: string;

}

type PricingSectionProps = {
  supportingText?: string;
  title: string;
  description: string;
  featureHeadline: string;
  features: string[];
  cardProps: CardProps;
}
function PricingSection({
  description,
  title,
  supportingText,
  features,
  featureHeadline,
  cardProps
}: PricingSectionProps) {
  return (
    <section
      className="flex flex-col gap-y-16 w-full bg-white shadow-sm rounded-[0.25rem] md:rounded-md px-3 py-12 md:px-4 md:py-16 lg:px-24 lg:py-24"
    >
      <div className="text-center">
        <div className="text-indigo-700 text-base font-semibold mb-3">
          {supportingText}
        </div>
        <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold mb-5">
          {title}
        </h2>
        <p className="text-neutral-600 text-lg md:text-xl font-normal">
          {description}
        </p>
      </div>

      <div
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12"
      >
        <div className="col-span-4 md:col-span-6 lg:col-span-7 flex items-center">
          <div className="flex flex-col gap-8 md:gap-16">
            <div className="text-neutral-900 text-2xl md:text-4xl font-semibold">
              {featureHeadline}
            </div>
            <div className="lg:px-4 flex flex-col gap-5">
              {
                features.map((feature) => (
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="flex items-center justify-center size-6 rounded-full bg-indigo-50 [&_svg]:text-indigo-500">
                      <RiCheckFill size={24} />
                    </div>
                    <div className="text-neutral-600 text-lg font-normal">
                      {feature}
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-6 lg:col-span-5">
          <div
            className="flex flex-col p-8 gap-8 items-center rounded-lg border border-neutral-200 bg-white shadow-sm"
          >
            <div className="flex flex-col items-center gap-2">
              <Badge  {...cardProps.badgeProps} />
              <div
                className="text-neutral-900 text-5xl md:text-6xl font-semibold md:font-bold"
              >
                {cardProps.title}
              </div>
              <div className="text-neutral-600 text-sm font-normal">
                {cardProps.subtitle}
              </div>
            </div>

            <div className="text-neutral-900 text-xl font-normal text-center">
              {cardProps.description}
            </div>

            <Button {...cardProps.buttonProps} />
            {/* <button
              className="bg-indigo-700 hover:bg-indigo-800 text-white text-base font-medium py-2.5 px-4 w-full rounded-[0.25rem] transition-colors duration-300"
            >
              Buy now
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export { PricingSection }