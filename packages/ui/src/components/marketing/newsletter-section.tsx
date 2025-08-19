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
      className={`grid w-full
        bg-white shadow-sm rounded-[0.25rem]
        md:rounded-md px-3 py-12 md:px-4
        md:py-16 lg:px-24 lg:py-24
        grid-cols-4 md:grid-cols-6
        xl:grid-cols-12 gap-4
        md:gap-8 gap-y-12 md:gap-y-8
        items-center
        `}
    >
      <div
        className="flex flex-col gap-8 md:gap-16 col-span-4 md:col-span-6 xl:col-span-6"
      >
        <div className="flex flex-col">
          <h1
            className="text-neutral-900 text-3xl md:text-5xl font-semibold mb-8 md:mb-16"
          >
            {title}
          </h1>

          <div className="flex flex-col gap-5 mb-12">
            {
              features?.map((content) => (
                <div key={content} className="flex flex-row items-center gap-3">
                  <div className="flex items-center justify-center size-6 rounded-full bg-indigo-50 [&_svg]:text-indigo-500">
                    <RiCheckFill size={24} />
                  </div>
                  <div className="text-neutral-600 text-lg">
                    {content}
                  </div>
                </div>
              ))
            }
          </div>

          <form {...formProps} className='flex flex-col md:flex-row gap-4 md:items-start'>
            <div className='md:max-w-[330px] w-full flex flex-col gap-4' >
              <TextInput placeholder='Enter your email' type='email' {...textInputProps} />
              <div className='text-base font-normal text-neutral-600'>We only send you the best! No spam.</div>
            </div>
            <Button type='submit' variant={'primary'} children={'Subscribe'} />
          </form>
        </div>
      </div>
      <div className="col-span-4 md:col-span-6 xl:col-span-6">
        <Image
          src={imgUrl}
          width={1000}
          height={1000}
          alt="Newsletter section illustration image"
          className="w-full object-cover xl:h-full rounded-3xl"
        />
      </div>
    </section>
  )
}

export { NewsletterSection }