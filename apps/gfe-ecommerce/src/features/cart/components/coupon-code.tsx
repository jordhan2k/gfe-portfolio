'use client'

import { Tag } from '@/components/coupon'
import SummaryItem from '@/components/ui/summary-item'
import { useCartContext } from '@/contexts/cart-context'
import { useApplyCouponCode } from '@/hooks/use-apply-coupon'
import { formatPrice } from '@/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { RiCouponLine } from '@remixicon/react'
import { TextInput } from '@repo/ui/src/components/form/text-input'
import { Button } from '@repo/ui/src/components/ui/button'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

// GR8FRNTND24
// 10OFF

const couponSchema = z.object({
  coupon_code: z.string().min(1, 'Please enter a valid code.')
})

type CouponFormValues = z.infer<typeof couponSchema>

function CouponCode() {

  const [isAdding, setIsAdding] = useState(false);
  const { discount, setDiscount } = useCartContext();

  const { control, handleSubmit, setError, reset, formState } = useForm<CouponFormValues>({
    resolver: zodResolver(couponSchema),
    defaultValues: {
      coupon_code: ''
    }
  })

  const { mutate, isPending } = useApplyCouponCode({
    onSuccess: (data) => {
      setDiscount(data);
      reset();
    },
    onError: (error: any) => {
      console.log(error?.message)
      setError('coupon_code', { message: error?.message })
    },
  })
  console.log(formState.errors)

  const handleFormSubmit = handleSubmit((data) => {
    mutate({ code: data.coupon_code })
  })
  console.log(discount?.coupon_code)

  return (
    <>
      {discount ? <SummaryItem
        badgeProps={{ children: discount?.coupon_code }}
        value={discount?.discount_amount ? `-$${formatPrice(discount?.discount_amount)}` : `-${discount?.discount_percentage}%`}

      />
        : null}
      <div className='w-full flex flex-col items-end'>
        {(isAdding || !!discount)
          ? <div className=' w-full flex flex-col gap-2' >

            <form onSubmit={handleFormSubmit} className='flex gap-2 w-full items-start'>
              <Controller
                name='coupon_code'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextInput
                    {...field}
                    label='Coupon code'
                    error={error?.message}
                    placeholder='Enter coupon code' />
                )}
              />

              <Button disabled={isPending} type='submit' variant='secondary' className='mt-6.25'>Apply</Button>
            </form>
            {discount ? <Tag label={discount.coupon_code} onRemove={() => setDiscount(null)} /> : null}
          </div>
          : <Button onClick={() => setIsAdding(true)} variant={'link-color'} size={'lg'}><RiCouponLine /> Add coupon code</Button>}
      </div>
    </>
  )
}

export default CouponCode