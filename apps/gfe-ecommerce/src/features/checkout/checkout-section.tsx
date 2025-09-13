'use client'

import { DELIVERY_METHODS } from '@/config'
import { useCartContext } from '@/contexts/cart-context'
import { isValidExpiry } from '@/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { RiArrowLeftSLine } from '@remixicon/react'
import { LinkButton } from '@repo/ui/src/components/ui/button'
import { useToast } from '@repo/ui/src/hooks/use-toast'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import z from 'zod'
import { CustomerDetails } from './components/customer-details'
import { OrderSummary } from './components/order-summary'
import { IGetOrder } from '@/types'

const checkoutSchema = z.object({
  email: z.string().trim().min(1, 'Email address is required').email('Please enter a valid email address.'),
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  line1: z.string().trim().min(1, 'Address line 1 is required'),
  line2: z.string().trim(),
  city: z.string().trim().min(1, 'City is required'),
  state: z.string().trim().min(1, 'State is required'),
  zip: z.string().trim().min(1, 'Zip is required').refine((value) => value.length >= 4, {
    message: 'Please enter a valid zip code'
  }),
  deliveryMethod: z.object({
    id: z.string(),
    name: z.string(),
    fee: z.number()
  }),
  country: z.object({
    name: z.string(),
    iso2: z.string(),
    iso3: z.string()
  }).nullable().refine((data) => Boolean(data), { message: 'Country/Region is required' }),

  cardNumber: z.string().trim().min(1, 'Card number is required'),
  nameOnCard: z.string().trim().min(1, 'Name on card is required'),
  expiry: z.string().trim().min(1, 'Expiry is required').refine((value) => isValidExpiry(value), {
    message: 'Please enter a valid expiry date'
  }),
  cvv: z.string().trim().min(1, 'CVV is required').refine((value) => {
    return /^\d{3}$/.test(value)
  }, {
    message: 'Please enter a valid CVV number'
  }),
})

type CheckoutFormValues = z.infer<typeof checkoutSchema>

function CheckoutSection() {
  const { toast } = useToast();
  const { cartItems, discount, clearCart } = useCartContext();
  const router = useRouter();
  const { isPending, mutate } = useMutation({
    mutationFn: async (payload: any) => {
      const requestOptions: RequestInit = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      }

      const response = await fetch('/api/orders', requestOptions);
      const result = await response.json();

      if (result.error) {
        throw new Error('We faced a problem processing your checkout. Please try again or contact us.')
      }
      return result;
    },
    onError: (error) => {
      toast({
        variant: 'error',
        message: error?.message
      })
    },
    onSuccess: (data) => {
      // console.log({ data })
      if (data?.data?.id) {
        localStorage.setItem(`order_${data?.data?.id}`, JSON.stringify(data?.data));
        clearCart();
        router.replace(`/order-success/${data.data.id}`);
      }
    }
  })
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    mode: 'onBlur',
    defaultValues: {
      // email: '',
      // firstName: '',
      // lastName: '',
      // line1: '',
      // line2: '',
      // cardNumber: '',
      // city: '',
      // cvv: '',
      // expiry: '',
      // nameOnCard: '',
      // state: '',
      // zip: '',
      // deliveryMethod: DELIVERY_METHODS[0]
      email: 'abc@gmail.com',
      firstName: 'Abc',
      lastName: 'Xyz',
      line1: 'No 2, Street 1, Road 3',
      line2: '',
      cardNumber: '1111 1111 1111 1111',
      city: 'Han',
      cvv: '234',
      expiry: '03/30',
      nameOnCard: 'HON TIN DUN',
      state: 'Han',
      zip: '123456',
      deliveryMethod: DELIVERY_METHODS[0],
      country: null
    },
    disabled: isPending
  });
  const { handleSubmit } = form;

  const handleFormSubmit = handleSubmit(async (data) => {

    const subtotal = cartItems.reduce((acc, curr) => {
      return acc + curr.total_sale_price
    }, 0);

    let discountValue = 0;
    if (discount?.discount_amount) {
      discountValue = discount?.discount_amount
    } else if (discount?.discount_percentage) {
      discountValue = (subtotal * discount?.discount_percentage) / 100
    }


    const total = subtotal - discountValue + (data.deliveryMethod?.fee ?? 0);

    const payload: IGetOrder = {
      items: [...cartItems],
      summary: {
        subtotal,
        discount: discountValue,
        discount_code: discount?.coupon_code ?? null,
        shipping: data.deliveryMethod?.fee ?? 0,
        total,
      },
      payment_method: {
        exp_month: Number(data.expiry.split('/')[0]),
        exp_year: Number(data.expiry.split('/')[1]),
        last_4: data.cardNumber.split(' ')[3] ?? '',
        type: 'VISA'
      },
      shipping_details: {
        address: {
          city: data.city,
          country: data.country?.iso2 ?? '',
          line1: data.line1,
          line2: data.line2,
          state: data.state,
          zip: data.zip,
          countryCode: data.country?.iso2 ?? '',
        },
        phone: '0991881111'
      }
    }
    mutate(payload);
  })


  return (
    <section className='py-12 px-3 md:px-4 md:py-16 xl:p-24'>

      <LinkButton href={'/cart'} replace variant={'link-color'} className='mb-8'>
        <RiArrowLeftSLine /> Back to shopping cart
      </LinkButton>

      <h1 className='text-2xl font-semibold text-neutral-900 md:text-3xl xl:text-4xl mb-8'>Checkout</h1>

      <FormProvider {...form}>
        <form onSubmit={handleFormSubmit} className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8 gap-y-8'>

          <div className='col-span-4 md:col-span-6'>
            <CustomerDetails />
          </div>
          <div className='col-span-4 md:col-span-6'>
            <OrderSummary />
          </div>

        </form>
      </FormProvider>
    </section>
  )
}

export default CheckoutSection