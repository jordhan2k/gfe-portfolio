'use client'

import React, { type ReactNode } from 'react'
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '@repo/ui/src/components/form/text-input';
import { TextArea } from '@repo/ui/src/components/form/text-area';
import { Button } from '@repo/ui/src/components/ui/button';
import { useToast } from '@repo/ui/src/hooks/use-toast';
import { RiCheckFill } from '@remixicon/react';

type ContactItem = {
  icon: ReactNode;
  title: string;
  type: 'email' | 'phone' | 'address';
}

type ContactSectionProps = {
  title: string;
  description: string;
  contactItems: ContactItem[];
}

const contactFormSchema = z.object({
  email: z.string().trim().min(1, 'Email address is required').email('Please enter valid email address'),
  name: z.string().trim().min(1, 'Message is required'),
  message: z.string().trim().min(1, 'Message is required'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>;



function ContactSection({
  contactItems,
  description,
  title
}: ContactSectionProps) {
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const { toast } = useToast();
  const { control, handleSubmit, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: '',
      name: '',
      message: ''
    },
    mode: 'onBlur'
  })

  const handleSubmitForm = handleSubmit(async (data) => {
    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          message: data.message,
        }),
      };

      const response = await fetch(
        'https://www.greatfrontend.com/api/projects/challenges/contact',
        options
      );

      if (response.ok) {
        setSubmitSuccess(true);
        reset({
          email: data.email,
          name: data.name,
          message: ''
        })
      } else {
        toast(
          {
            variant: 'error',
            message: 'Failed to submit. Please ensure your details are correct or try again later.'
          }
        )
      }
    } catch (error) {
      toast(
        {
          variant: 'error',
          message: 'Failed to submit. Please ensure your details are correct or try again later.'
        }
      )
    }
  })
  return (
    <section className={`
    grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12
    bg-white
    px-3 py-12 md:px-4 md:py-16 xl:px-24 xl:py-24
    gap-4 md:gap-8
    gap-y-12 md:gap-y-16
    `}>
      <div className='col-span-4 md:col-span-6 flex flex-col gap-10 md:gap-12'>
        <div>
          <h2 className='text-4xl md:text-5xl font-semibold text-neutral-900 mb-5'>{title}</h2>
          <p className='text-lg md:text-xl text-neutral-600 font-normal'>{description}</p>
        </div>
        <ul className='flex flex-col gap-6'>
          {
            contactItems.map(({ icon, title, type }, index) => (
              <li key={`contact-item-${index}`} className='flex items-center gap-1 xl:gap-3'>
                <div className='size-12 rounded-full shadow-sm flex justify-center items-center text-indigo-700 [&_svg]:size-6'>
                  {icon}
                </div>
                {title}
              </li>
            ))
          }


        </ul>
      </div>
      <div className='col-span-4 md:col-span-6 rounded-lg shadow-sm min-h-[398px]'>
        {submitSuccess

          ? <div className='flex flex-col items-center justify-center h-full px-4'>
            <div className='size-16 rounded-full shadow-sm flex items-center justify-center mb-6 text-green-700'>
              <RiCheckFill size={32} />
            </div>
            <div className='text-neutral-900 font-normal text-xl text-center max-w-[320px] w-full mb-16'>Submission successful! We will get back to you in 3-5 days via email.</div>
            <Button onClick={() => setSubmitSuccess(false)} size="lg" variant="secondary">Send another message</Button>
          </div>
          : <form onSubmit={handleSubmitForm} className='flex flex-col gap-6 p-4 md:p-8 '>
            <div className='flex gap-6 md:gap-8 flex-col md:flex-row'>
              <Controller
                name='name'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextInput
                    {...field}
                    placeholder='Your name'
                    label='Name'
                    error={error?.message} />
                )}
              />
              <Controller
                name='email'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextInput
                    {...field}
                    placeholder='example@example.com'
                    label='Email'
                    error={error?.message} />
                )}
              />

            </div>
            <Controller
              name='message'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextArea
                  {...field}
                  label='Message'
                  placeholder='Write your message...'
                  error={error?.message} />
              )}
            />
            <Button type='submit' variant={'primary'} size={'lg'} >Submit</Button>
          </form>}
      </div>
    </section>
  )
}

export { ContactSection, type ContactItem }