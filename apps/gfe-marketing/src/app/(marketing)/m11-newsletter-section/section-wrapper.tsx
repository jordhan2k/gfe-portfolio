'use client'

import { NewsletterSection } from '@repo/ui/components/marketing/newsletter-section'
import { useToast } from '@repo/ui/hooks/use-toast'
import React, { useState } from 'react'

const props = {
  imgUrl: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/newsletter-section/starter/img/abstract.jpg",
  title: "Get the finest curated abstracts delivered weekly to your inbox",
  features: [
    'Exclusive access to new abstract images and collections',
    'Unlock special promotions only for subscribers',
    'Regular doses of artistic inspiration'
  ]

}
export function SectionWrapper() {
  const { toast } = useToast()

  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) {
      setError('')
    } else if (e.target.validity.typeMismatch) {
      setError('Please enter valid email address.')
    } else if (e.target.validity.valueMissing) {
      setError('Email address is required.')
    }
    setValue(e.target.value)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/newsletter',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: value })
          // body: { email: value }
        }
      )
      if (response.ok) {
        const result = await response.json();
        result?.message && toast({
          variant: 'success',
          message: result?.message
        });
        setValue('');
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
  }
  return (
    <NewsletterSection
      {...props}
      textInputProps={{
        value: value,
        onChange: handleInputChange,
        required: true,
        error
      }}
      formProps={{
        onSubmit: handleFormSubmit
      }}
    />
  )
}
