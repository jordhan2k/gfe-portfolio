'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { RiCouponLine } from '@remixicon/react'
import { TextInput } from '@repo/ui/src/components/form/text-input'
import { Button } from '@repo/ui/src/components/ui/button'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

// GR8FRNTND24
// 10OFF

// PUT https://www.greatfrontend.com/api/projects/challenges/e-commerce/coupons/apply


const couponSchema = z.object({
  coupon_code: z.string().min(1, 'Please enter a valid code.')
})

type CouponFormValues = z.infer<typeof couponSchema>

function CouponCode() {

  const [isAdding, setIsAdding] = useState(false);

  const { control, handleSubmit, setError, reset } = useForm<CouponFormValues>({
    resolver: zodResolver(couponSchema),
    defaultValues: {
      coupon_code: ''
    }
  })

  const handleFormSubmit = handleSubmit(async (data) => {
    const requestOptions: RequestInit = {
      method: 'PUT',
      body: JSON.stringify({
        coupon_code: data.coupon_code
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/coupons/apply', requestOptions);
    const result = await res.json();
    if (result.error) {
      setError('coupon_code', { message: "Sorry, but this coupon doesn't exist." })
    } else {
      reset()
    }
  })

  return (
    <div className='w-full flex flex-col items-end'>
      {isAdding
        ? <div className=' w-full' >

          <form onSubmit={handleFormSubmit} className='flex gap-2 w-full items-start'>
            <Controller
              name='coupon_code'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  {...field}
                  // required
                  label='Coupon code'
                  error={error?.message}
                  placeholder='Enter coupon code' />
              )}
            />

            <Button type='submit' variant='secondary' className='mt-6.25'>Apply</Button>
          </form>


        </div>


        : <Button onClick={() => setIsAdding(true)} variant={'link-color'} size={'lg'}><RiCouponLine /> Add coupon code</Button>}



    </div>
  )
}

export default CouponCode