import { RiCheckFill } from '@remixicon/react';
import Image from 'next/image';
import { TextInput, TextInputProps } from '../form/text-input';
import { Button } from '../ui/button';

type NewsletterSectionProps = {
  title: string;
  features: string[];
  imgUrl: string;
  textInputProps?: TextInputProps;
  formProps?: React.ComponentProps<'form'>
}

function NewsletterSection({
  textInputProps,
  title,
  features,
  imgUrl,
  formProps
}: NewsletterSectionProps) {
  return (
    <section
      className={`ui:grid ui:w-full
      ui:bg-white ui:shadow-sm ui:rounded-[0.25rem]
      ui:md:rounded-md ui:px-3 ui:py-12 ui:md:px-4
      ui:md:py-16 ui:xl:px-24 ui:xl:py-24
      ui:grid-cols-4 ui:md:grid-cols-6
      ui:xl:grid-cols-12 ui:gap-4
      ui:md:gap-8 ui:gap-y-12 ui:md:gap-y-8
      ui:items-center
      `}
    >
      <div
        className="ui:flex ui:flex-col ui:gap-8 ui:md:gap-16 ui:col-span-4 ui:md:col-span-6 ui:xl:col-span-6"
      >
        <div className="ui:flex ui:flex-col">
          <h1
            className="ui:text-neutral-900 ui:text-3xl ui:md:text-5xl ui:font-semibold ui:mb-8 ui:md:mb-16"
          >
            {title}
          </h1>

          <div className="ui:flex ui:flex-col ui:gap-5 ui:mb-12">
            {
              features?.map((content) => (
                <div key={content} className="ui:flex ui:flex-row ui:items-center ui:gap-3">
                  <div className="ui:flex ui:items-center ui:justify-center ui:size-6 ui:rounded-full ui:bg-indigo-50 ui:[&_svg]:text-indigo-500">
                    <RiCheckFill size={24} />
                  </div>
                  <div className="ui:text-neutral-600 ui:text-lg">
                    {content}
                  </div>
                </div>
              ))
            }
          </div>

          <form {...formProps} className='ui:flex ui:flex-col ui:md:flex-row ui:gap-4 ui:md:items-start'>
            <div className='ui:md:max-w-[330px] ui:w-full ui:flex ui:flex-col ui:gap-4' >
              <TextInput placeholder='Enter your email' type='email' {...textInputProps} />
              <div className='ui:text-base ui:font-normal ui:text-neutral-600'>We only send you the best! No spam.</div>
            </div>
            <Button type='submit' variant={'primary'} children={'Subscribe'} />
          </form>
        </div>
      </div>
      <div className="ui:col-span-4 ui:md:col-span-6 ui:xl:col-span-6">
        <Image
          src={imgUrl}
          width={1000}
          height={1000}
          alt="Newsletter section illustration image"
          className="ui:w-full ui:object-cover ui:xl:h-full ui:rounded-3xl"
        />
      </div>
    </section>
  )
}

export { NewsletterSection }