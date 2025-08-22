import { RiCheckFill } from '@remixicon/react';
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
      className="ui:flex ui:flex-col ui:gap-y-16 ui:w-full ui:bg-white ui:shadow-sm ui:rounded-[0.25rem] ui:md:rounded-md ui:px-3 ui:py-12 ui:md:px-4 ui:md:py-16 ui:lg:px-24 ui:lg:py-24"
    >
      <div className="ui:text-center">
        <div className="ui:text-indigo-700 ui:text-base ui:font-semibold ui:mb-3">
          {supportingText}
        </div>
        <h2 className="ui:text-neutral-900 ui:text-3xl ui:md:text-5xl ui:font-semibold ui:mb-5">
          {title}
        </h2>
        <p className="ui:text-neutral-600 ui:text-lg ui:md:text-xl ui:font-normal">
          {description}
        </p>
      </div>

      <div
        className="ui:grid ui:grid-cols-4 ui:md:grid-cols-6 ui:lg:grid-cols-12 ui:gap-x-4 ui:gap-y-8 ui:md:gap-x-8 ui:md:gap-y-12"
      >
        <div className="ui:col-span-4 ui:md:col-span-6 ui:lg:col-span-7 ui:flex ui:items-center">
          <div className="ui:flex ui:flex-col ui:gap-8 ui:md:gap-16">
            <div className="ui:text-neutral-900 ui:text-2xl ui:md:text-4xl ui:font-semibold">
              {featureHeadline}
            </div>
            <div className="ui:lg:px-4 ui:flex ui:flex-col ui:gap-5">
              {
                features.map((feature) => (
                  <div className="ui:flex ui:flex-row ui:items-center ui:gap-x-2">
                    <div className="ui:flex ui:items-center ui:justify-center ui:size-6 ui:rounded-full ui:bg-indigo-50 ui:[&_svg]:text-indigo-500">
                      <RiCheckFill size={24} />
                    </div>
                    <div className="ui:text-neutral-600 ui:text-lg ui:font-normal">
                      {feature}
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
        <div className="ui:col-span-4 ui:md:col-span-6 ui:lg:col-span-5">
          <div
            className="ui:flex ui:flex-col ui:p-8 ui:gap-8 ui:items-center ui:rounded-lg ui:border ui:border-neutral-200 ui:bg-white ui:shadow-sm"
          >
            <div className="ui:flex ui:flex-col ui:items-center ui:gap-2">
              <Badge  {...cardProps.badgeProps} />
              <div
                className="ui:text-neutral-900 ui:text-5xl ui:md:text-6xl ui:font-semibold ui:md:font-bold"
              >
                {cardProps.title}
              </div>
              <div className="ui:text-neutral-600 ui:text-sm ui:font-normal">
                {cardProps.subtitle}
              </div>
            </div>

            <div className="ui:text-neutral-900 ui:text-xl ui:font-normal ui:text-center">
              {cardProps.description}
            </div>

            <Button {...cardProps.buttonProps} />

          </div>
        </div>
      </div>
    </section>
  )
}

export { PricingSection };
