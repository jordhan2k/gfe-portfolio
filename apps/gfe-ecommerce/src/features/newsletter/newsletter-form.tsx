'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from '@repo/ui/src/components/form/text-input';
import { Button } from '@repo/ui/src/components/ui/button';
import { useToast } from '@repo/ui/src/hooks/use-toast';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';

const subscribeFormSchema = z.object({
  email: z.string().trim().min(1, 'Email address is required').email('Please enter valid email address'),
})

type SubscribeFormValues = z.infer<typeof subscribeFormSchema>;



function NewslettersForm
  () {

  const { toast } = useToast();

  const { control, handleSubmit, reset } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: ''
    },
    mode: 'onBlur'
  });


  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/newsletter',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: data.email })
        }
      )
      if (response.ok) {
        const result = await response.json();
        result?.message && toast({
          variant: 'success',
          message: result?.message
        });
        reset();
      } else {
        toast({
          variant: 'error',
          message: 'Failed to subscribe!'
        });
      }

    } catch (error) {
      toast({
        variant: 'error',
        message: 'Something went wrong!'
      });
    }
  })
  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col md:flex-row gap-4 md:items-start'>
      <Controller
        control={control}
        name='email'
        render={({ field, fieldState: { error } }) => (
          <TextInput {...field} placeholder='Enter your email' type='email' value={field.value} onChange={field.onChange} error={error?.message} />
        )}
      />
      <Button type='submit' variant={'primary'} children={'Subscribe'} />
    </form>
  )
}

export default NewslettersForm;

