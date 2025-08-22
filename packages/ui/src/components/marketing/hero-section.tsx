import React from "react"
import { Button, ButtonProps } from "../ui/button";
import { RiCheckFill } from "@remixicon/react";
import Image from "next/image";


type HeroSectionProps = React.ComponentProps<'section'> & {
  imgUrl: string;
  title: string;
  description?: string;
  buttons: ButtonProps[];
  bulletPoints?: string[];
}

function HeroSection({
  imgUrl,
  title,
  description,
  buttons,
  bulletPoints
}: HeroSectionProps) {
  return (
    <section
      className="ui:bg-white ui:w-full ui:rounded-md ui:grid ui:py-[6.5rem] ui:px-3 ui:xl:px-24 ui:grid-cols-4 ui:md:grid-cols-6 ui:xl:grid-cols-12 ui:gap-4 ui:md:gap-8 ui:gap-y-12 ui:md:gap-y-8"
    >
      <div
        className="ui:flex ui:flex-col ui:gap-8 ui:md:gap-16 ui:col-span-4 ui:md:col-span-6 ui:xl:col-span-5 ui:xl:my-auto"
      >
        <div className="ui:flex ui:flex-col ui:gap-4 ui:md:gap-6">
          <h1
            className="ui:text-neutral-900 ui:text-4xl ui:md:text-5xl ui:xl:text-6xl ui:font-semibold"
          >
            {title}
          </h1>
          <p className="ui:text-neutral-600 ui:text-lg ui:md:text-xl">
            {description}
          </p>
          <div className="ui:flex ui:flex-col ui:gap-5 ui:md:gap-3">
            {
              bulletPoints?.map((content) => (
                <div key={content} className="ui:flex ui:flex-row ui:items-center ui:gap-3">
                  <div className="ui:flex ui:items-center ui:justify-center ui:size-6 ui:rounded-full ui:bg-indigo-50 ui:[&_svg]:text-indigo-500">
                    <RiCheckFill size={24} />
                  </div>
                  <div className="ui:text-neutral-500 ui:text-lg">
                    {content}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="ui:flex ui:flex-row ui:flex-wrap ui:gap-4 ui:md:gap-8">
          {
            buttons.map((button, index) => <Button key={`button-${index}`} size={"2xl"} className="ui:md:w-[213px] ui:xl:w-[175.5px]" {...button}>See pricing</Button>)
          }
        </div>
      </div>
      <Image
        width={700}
        height={450}
        // loading="lazy"
        src={imgUrl}
        alt="Hero section banner"
        className="ui:col-span-4 ui:md:col-span-6 ui:xl:col-span-7"
      />
    </section>
  )
}

export { HeroSection }
