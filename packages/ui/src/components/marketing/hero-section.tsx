import React from "react"
import { Button, ButtonProps } from "../ui/button";
import { RiCheckFill } from "@remixicon/react";


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
      className="bg-white drop-shadow-md w-full rounded-md grid py-[6.5rem] px-3 xl:px-24 grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8 gap-y-12 md:gap-y-8 bg-[linear-gradient(176.17deg,_#f9fafb_0.94%,_#edf0f3_316.54%)]"
    >
      <div
        className="flex flex-col gap-8 md:gap-16 col-span-4 md:col-span-6 xl:col-span-5 xl:my-auto"
      >
        <div className="flex flex-col gap-4 md:gap-6">
          <h1
            className="text-neutral-900 text-4xl md:text-5xl xl:text-6xl font-semibold"
          >
            {title}
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl">
            {description}
          </p>
          <div className="flex flex-col gap-5 md:gap-3">
            {
              bulletPoints?.map((content) => (
                <div key={content} className="flex flex-row items-center gap-3">
                  <div className="flex items-center justify-center size-6 rounded-full bg-indigo-50 [&_svg]:text-indigo-500">
                    <RiCheckFill size={24} />
                  </div>
                  <div className="text-neutral-500 text-lg">
                    {content}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4 md:gap-8">
          {
            buttons.map((button, index) => <Button key={`button-${index}`} size={"2xl"} className="md:w-[213px] xl:w-[175.5px]" {...button}>See pricing</Button>)
          }
        </div>
      </div>
      <img
        src={imgUrl}
        alt="Hero section banner"
        className="col-span-4 md:col-span-6 xl:col-span-7"
      />
    </section>
  )
}

export { HeroSection }
