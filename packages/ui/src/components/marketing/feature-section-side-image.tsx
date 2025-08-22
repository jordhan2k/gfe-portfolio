import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';


type FeatureItemType = {
  title: string;
  description: string;
  icon: ReactNode;
}
type FeatureSectionSideImageProps = {
  imgUrl: string;
  side?: 'right' | 'left';
  supportingText?: string;
  title: string;
  description: string;
  features: FeatureItemType[]
}
function FeatureSectionSideImage({
  imgUrl,
  side = 'right',
  features,
  description,
  title,
  supportingText
}: FeatureSectionSideImageProps) {
  return (
    <section
      className="ui:w-full ui:rounded-md ui:py-16 ui:xl:py-24 ui:px-4 ui:xl:px-24 ui:bg-white ui:flex ui:flex-col ui:gap-12 ui:md:gap-16"
    >
      <div className="ui:text-center">
        <div className="ui:mb-3 ui:text-indigo-700 ui:text-base ui:font-semibold">
          {supportingText}
        </div>
        <h2 className="ui:mb-5 ui:text-neutral-900 ui:text-3xl ui:md:text-5xl ui:font-semibold">
          {title}
        </h2>
        <p className="ui:text-neutral-600 ui:text-lg ui:md:text-xl">
          {description}
        </p>
      </div>
      <div
        className="ui:grid ui:grid-cols-4 ui:md:grid-cols-6 ui:xl:grid-cols-12 ui:gap-4 ui:md:gap-8 ui:gap-y-12 ui:md:gap-y-8"
      >
        <div
          className={clsx("ui:col-span-4 ui:md:col-span-6 ui:xl:col-span-6 ui:flex ui:flex-col ui:gap-10", {
            "ui:order-2": side === 'left'
          })}
        >
          {
            features.map(({ description, icon, title }, index) => (
              <div key={title} className="ui:flex ui:flex-row ui:gap-5">
                <div
                  className="ui:size-12 ui:rounded-full ui:shadow-lg ui:drop-shadow-md ui:flex ui:items-center ui:justify-center ui:text-indigo-700"
                >
                  {icon}
                </div>
                <div className="ui:py-2.5 ui:flex-1">
                  <h3 className="ui:text-neutral-900 ui:text-lg ui:font-semibold ui:mb-2">
                    {title}
                  </h3>
                  <p className="ui:text-neutral-600 ui:text-base">
                    {description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>

        <div className={clsx("ui:col-span-4 ui:md:col-span-6 ui:xl:col-span-6",
          {
            "ui:order-1": side === 'left'
          }
        )}>
          <Image
            loading='lazy'
            src={imgUrl}
            height={1000}
            width={300}
            alt='Side image'
            className="ui:h-[11.25rem] ui:md:h-[24.625rem] ui:w-full ui:object-cover ui:rounded-lg"
          />
        </div>
      </div>
    </section>

  )
}

export { FeatureSectionSideImage };
