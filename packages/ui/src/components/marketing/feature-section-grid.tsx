import { ReactNode } from 'react';

type FeatureItemType = {
  title: string;
  description: string;
  icon: ReactNode;
}
type FeatureSectionGridProps = {
  supportingText?: string;
  title: string;
  description: string;
  features: FeatureItemType[]
}
function FeatureSectionGrid({
  features,
  description,
  title,
  supportingText
}: FeatureSectionGridProps) {
  return (
    <section
      className="ui:flex ui:flex-col ui:gap-12 ui:md:gap-16 ui:w-full ui:bg-white ui:rounded-[0.25rem] ui:md:rounded-md ui:px-3 ui:py-12 ui:md:px-4 ui:md:py-16 ui:xl:p-24"
    >
      <div className="ui:text-center">
        <div className="ui:text-base ui:font-semibold ui:text-indigo-700 ui:mb-3">
          {supportingText}
        </div>
        <h2 className="ui:text-3xl ui:font-semibold ui:text-neutral-900 ui:md:text-5xl">
          {title}
        </h2>
        <p className="ui:text-lg ui:font-normal ui:text-neutral-600 ui:md:text-xl ui:mt-5">
          {description}
        </p>
      </div>
      <div
        className="ui:grid ui:grid-cols-4 ui:md:grid-cols-6 ui:xl:grid-cols-12 ui:gap-4 ui:md:gap-8 ui:gap-y-8"
      >
        {features.map(({ description, icon, title }) => (
          <div
            key={title}
            className="ui:col-span-4 ui:md:col-span-3 ui:xl:col-span-4 ui:flex ui:flex-col ui:items-center"
          >
            <div
              className="ui:size-12 ui:rounded-full ui:shadow-md ui:drop-shadow-md ui:flex ui:items-center ui:justify-center ui:mb-5 ui:text-indigo-700"
            >
              {icon}
            </div>
            <h3 className="ui:text-xl ui:font-semibold ui:text-neutral-900 ui:mb-2">
              {title}
            </h3>
            <p className="ui:text-base ui:font-normal ui:text-neutral-600 ui:text-center">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>

  )
}

export { FeatureSectionGrid };
