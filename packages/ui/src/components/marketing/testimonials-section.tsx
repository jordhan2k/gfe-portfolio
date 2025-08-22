import React from 'react'
import { TestimonialCard, TestimonialCardProps } from './testimonial-card';

type TestimonialsSectionProps = {
  supportingText?: string;
  title: string;
  description: string;
  testimonials: TestimonialCardProps[];
}

function TestimonialsSection({
  description,
  title,
  supportingText,
  testimonials
}: TestimonialsSectionProps) {
  return (
    <section
      className={`
      ui:flex ui:flex-col ui:gap-12 ui:md:gap-16 ui:px-4 ui:py-12 ui:md:py-16 lg:p-24
      `}
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

      <ul className='ui:w-full ui:columns-1 ui:md:columns-2 ui:xl:columns-3 ui:gap-4 ui:xl:gap-8'>
        {testimonials.map((item) => (
          <li key={item.username}>
            <TestimonialCard
              {...item}
              className='ui:w-full ui:mb-4 ui:xl:mb-8 ui:break-inside-avoid'
            />
          </li>
        ))}
      </ul>



    </section>
  )
}

export { TestimonialsSection }