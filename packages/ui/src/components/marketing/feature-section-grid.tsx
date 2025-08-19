import React, { ReactNode } from 'react'

type FeatureItemType = {
  title: string;
  description: string;
  icon: ReactNode;
}
type FeatureSectionGridProps = {
  imgUrl: string;
  side?: 'right' | 'left';
  supportingText?: string;
  title: string;
  description: string;
  features: FeatureItemType[]
}
function FeatureSectionGrid({
  imgUrl,
  side = 'right',
  features,
  description,
  title,
  supportingText
}: FeatureSectionGridProps) {
  return (
    <section
      className="flex flex-col gap-12 md:gap-16 w-full bg-white shadow-sm drop-shadow-sm rounded-[0.25rem] md:rounded-md px-3 py-12 md:px-4 md:py-16 xl:p-24"
    >
      <div className="text-center">
        <div className="text-base font-semibold text-indigo-700 mb-3">
          {supportingText}
        </div>
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-5xl">
          {title}
        </h2>
        <p className="text-lg font-normal text-neutral-600 md:text-xl mt-5">
          {description}
        </p>
      </div>
      <div
        className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8 gap-y-8"
      >
        {
          features.map(({ description, icon, title }) => (
            <div
              key={title}
              className="col-span-4 md:col-span-3 xl:col-span-4 flex flex-col items-center"
            >
              <div
                className="size-12 rounded-full shadow-md drop-shadow-md flex items-center justify-center mb-5 text-indigo-700"
              >
                {icon}
              </div>
              <h5 className="text-xl font-semibold text-neutral-900 mb-2">
                {title}
              </h5>
              <p className="text-base font-normal text-neutral-600 text-center">
                {description}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export { FeatureSectionGrid }