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
      className="drop-shadow-md w-full rounded-md py-16 xl:py-24 px-4 xl:px-24 bg-white flex flex-col gap-12 md:gap-16"
    >
      <div className="text-center">
        <div className="mb-3 text-indigo-700 text-base font-semibold">
          {supportingText}
        </div>
        <h2 className="mb-5 text-neutral-900 text-3xl md:text-5xl font-semibold">
          {title}
        </h2>
        <p className="text-neutral-600 text-lg md:text-xl">
          {description}
        </p>
      </div>
      <div
        className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8 gap-y-12 md:gap-y-8"
      >
        <div
          className={clsx("col-span-4 md:col-span-6 xl:col-span-6 flex flex-col gap-10", {
            "order-2": side === 'left'
          })}
        >
          {
            features.map(({ description, icon, title }, index) => (
              <div key={title} className="flex flex-row gap-5">
                <div
                  className="size-12 rounded-full shadow-lg drop-shadow-md flex items-center justify-center text-indigo-700"
                >
                  {icon}
                </div>
                <div className="py-2.5 flex-1">
                  <h6 className="text-neutral-900 text-lg font-semibold mb-2">
                    {title}
                  </h6>
                  <p className="text-neutral-600 text-base">
                    {description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>

        <div className={clsx("col-span-4 md:col-span-6 xl:col-span-6",
          {
            "order-1": side === 'left'
          }
        )}>
          <Image
            src={imgUrl}
            height={180}
            width={100}
            alt='Side image'
            className="h-[11.25rem] md:h-[24.625rem] w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export { FeatureSectionSideImage };
