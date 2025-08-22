import React from 'react'
import { Accordion } from '../ui/accordion';
import { AppLink } from '../ui/link';
import { Button } from '../ui/button';

type QuestionType = {
  question: string;
  answer: string;
}

function FaqSection({
  description,
  title,
  questions
}: {
  title: string;
  description: string;
  questions: QuestionType[]
}) {
  return (
    <section className='ui:px-4 ui:py-12  ui:md:py-16 ui:lg:p-24 ui:flex ui:flex-col ui:items-center bg-white'>
      <h2 className='ui:text-neutral-900 ui:text-3xl ui:md:text-5xl ui:font-semibold ui:mb-5 ui:text-center'>{title}</h2>
      <p className='ui:text-neutral-600 ui:text-xl ui:font-normal ui:mb-12 ui:md:mb-16'>{description}</p>

      <ul>
        {
          questions.map(({ question, answer }, index) => (
            <li key={question}>
              <Accordion
                title={question}
                content={answer}
              />
              <hr className='ui:my-7 ui:text-neutral-300' />
            </li>
          ))
        }
      </ul>

      <div className='ui:border ui:border-neutral-200 ui:rounded-lg ui:p-4 ui:md:p-8 w-full ui:flex ui:flex-col ui:md:flex-row'>
        <div className='ui:flex-1'>
          <h3 className='ui:text-xl ui:text-neutral-900 ui:font-semibold'>Can’t find the answer you’re looking for?</h3>
          <p className='ui:text-neutral-600 ui:text-base ui:font-normal'>Reach out to our <AppLink href="mailto:support@greatfrontend.com">customer support</AppLink> team.</p>
        </div>
        <Button size='xl'>Get in touch</Button>
      </div>
    </section>
  )
}

export { FaqSection }