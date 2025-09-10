'use client'

import { Separator } from '@/components/ui/separator'
import { ICountry, IGetCountryList } from '@/types'
import { TextInput } from '@repo/ui/src/components/form/text-input'
import { DropdownMenu } from '@repo/ui/src/components/ui/dropdown-menu'
import React, { useEffect, useState } from 'react'
import { DeliveryMethod } from './delivery-method'

function CustomerDetails() {

  const [countries, setCountries] = useState<any[]>([]);
  const [selectedDelivery, setSelectedDelivery] = useState<'standard' | 'express'>('standard');

  const getCountries = async () => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/states');
    const result: IGetCountryList = await response.json();


    if (!result?.error) {
      setCountries(result.data?.map((country: ICountry) => ({
        label: country.name,
        value: country.name,
        iso2: country.iso2,
        iso3: country.iso3
      })));
    }
  }

  useEffect(() => {
    getCountries();
  }, [])
  return (
    <div className='w-full flex flex-col gap-10'>

      <SubForm>
        <h2 className='text-lg font-medium text-neutral-600'>Contact Information</h2>
        <TextInput label='Email' name='email' required placeholder='user@example.com' />
      </SubForm>
      <Separator />

      <SubForm>
        <h2 className='text-lg font-medium text-neutral-600'>Shipping Information</h2>
        <DropdownMenu
          buttonProps={{
            className: 'shadow-none px-3.5 bg-neutral-50'
          }}
          placeholder={<span className='text-neutral-500'>Country / Region</span>}
          options={countries}
          getItemLabel={(item) => item.label}
          getItemValue={(item) => `${item.value}-${item.iso3}`}



        />
        <TextInput label='Country / Region' name='country' required placeholder='John' />

        <div className='w-full flex flex-col md:flex-row gap-6 md:gap-8'>
          <TextInput className='flex-1' label='First name' name='firstName' required placeholder='John' />
          <TextInput className='flex-1' label='Last name' name='lastName' required placeholder='Applesseed' />
        </div>

        <div className='flex flex-col gap-4'>
          <TextInput label='Address' name='addressLine1' required placeholder='Street address' />
          <TextInput name='addressLine2' placeholder='Apartment, suite, etc (optional)' />
        </div>

        <div className='w-full flex flex-col md:flex-row gap-6 md:gap-8'>
          <TextInput className='flex-1' label='City' name='city' required placeholder='City' />
          <TextInput className='flex-1' label='State' name='state' required placeholder='State' />
          <TextInput className='flex-1' label='Zip' name='zip' required placeholder='12345' />
        </div>
      </SubForm>

      <Separator />
      <SubForm>
        <h2 className='text-lg font-medium text-neutral-600'>Delivery method</h2>

        <div className='flex flex-col md:flex-row gap-4 '>
          <DeliveryMethod
            isSelected={selectedDelivery === 'standard'}
            name='standard'
            subtitle='4-10 business days'
            value={0} />
          <DeliveryMethod
            isSelected={selectedDelivery === 'express'}
            name='express'
            subtitle='2-5 business days'
            value={15} />

        </div>

      </SubForm>
      <Separator />
      <SubForm>
        <h2 className='text-lg font-medium text-neutral-600'>Payment method</h2>
        <TextInput label='Card number' name='cardNumber' required placeholder='1234 1234 1234 1234' />
        <TextInput label='Name on card' name='nameOnCard' required placeholder='Full name on card' />
        <div className='w-full flex flex-col md:flex-row gap-6 md:gap-8'>
          <TextInput className='flex-1' label='Expiry' name='expiry' required placeholder='MM/YY' />
          <TextInput className='flex-1' label='CVV' name='cvv' required placeholder='123' />
        </div>

      </SubForm>

    </div>
  )
}

export { CustomerDetails }

const SubForm = ({ children }: { children: React.ReactNode }) => <div className='w-full flex flex-col gap-6'>{children}</div>
