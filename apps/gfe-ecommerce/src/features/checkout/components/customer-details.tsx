'use client'

import { Separator } from '@/components/ui/separator'
import { ICountry, IGetCountryList, IState } from '@/types'
import { TextInput } from '@repo/ui/src/components/form/text-input'
// import { DropdownMenu } from '@repo/ui/src/components/ui/dropdown-menu'
import React, { useEffect, useState } from 'react'
import { DeliveryMethod } from './delivery-method'
import { Controller, useFormContext } from 'react-hook-form'
import { formatCardNumber, formatCvv, formatExpiry, formatZip } from '@/lib'
import { DropdownMenu } from '@repo/ui/src/components/ui/dropdown-menu'
import { DELIVERY_METHODS } from '@/config'



function CustomerDetails() {
  const { control, formState: { disabled }, watch, setValue, getValues } = useFormContext();
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  // const [selectedDelivery, setSelectedDelivery] = useState<'standard' | 'express'>('standard');

  const getCountries = async () => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/states');
    const result: IGetCountryList = await response.json();
    if (!result?.error) {
      setCountries(result.data);
    }
  }

  useEffect(() => {
    getCountries();
  }, [])

  const selectedDelivery = watch('deliveryMethod');

  const handleSelectCountry = (option: ICountry) => {
    setStates(option.states ?? []);
    if (option.iso2 !== getValues('country')?.iso2) {
      setValue('state', null)
    }
  }

  return (
    <div className='w-full flex flex-col gap-10'>

      <SubForm>
        <h2 className='text-lg font-medium text-neutral-600'>Contact Information</h2>
        <Controller
          name='email'
          control={control}
          render={({ field, fieldState: { error } }) => <TextInput
            {...field}
            label='Email'
            name='email'

            placeholder='user@example.com'
            error={error?.message}
          />
          }

        />
      </SubForm>
      <Separator />

      <SubForm>
        <h2 className='text-lg font-medium text-neutral-600'>Shipping Information</h2>
        <Controller
          name='country'
          control={control}
          render={({ field: { value, disabled, onChange }, fieldState: { error } }) => (
            <DropdownMenu<ICountry>
              label='Country / Region'
              buttonProps={{
                className: 'shadow-none px-3.5 bg-neutral-50',
                type: 'button'
              }}
              menuProps={{
                className: 'max-h-[400px]'
              }}
              selectOption={value}
              onChange={(option) => {
                handleSelectCountry(option)
                onChange(option)
              }}
              disabled={disabled}
              error={error?.message}
              placeholder={<span className='text-neutral-500'>Country / Region</span>}
              options={countries}
              getItemLabel={(item) => item.name}
              getItemValue={(item) => `${item.name}-${item.iso3}`}
            />
          )}
        />


        <div className='w-full flex flex-col md:flex-row gap-6 md:gap-8'>
          <Controller
            name='firstName'
            control={control}
            render={({ field, fieldState: { error } }) => <TextInput
              {...field}
              label='First name'

              placeholder='John'
              error={error?.message}
            />
            }

          />
          <Controller
            name='lastName'
            control={control}
            render={({ field, fieldState: { error } }) => <TextInput
              {...field}
              label='Last name'
              placeholder='Applesseed'
              error={error?.message}
            />
            }

          />
        </div>

        <div className='flex flex-col gap-4'>
          <Controller
            name='line1'
            control={control}
            render={({ field, fieldState: { error } }) => <TextInput
              {...field}
              label='Address'
              placeholder='Street address'
              error={error?.message}
            />
            }
          />
          <Controller
            name='line2'
            control={control}
            render={({ field, fieldState: { error } }) => <TextInput
              {...field}
              placeholder='Apartment, suite, etc (optional)'
              error={error?.message}
            />
            }
          />
        </div>

        <div className='w-full grid grid-cols-6 md:flex-row gap-y-6 md:gap-8 '>
          <div className='col-span-6 md:col-span-2'>
            <Controller
              name='city'
              control={control}
              render={({ field, fieldState: { error } }) => <TextInput
                {...field}
                label='City'
                placeholder='City'
                error={error?.message}
                maxLength={19}
              />
              }
            />
          </div>
          <div className='col-span-6 md:col-span-2'>
            <Controller
              name='state'
              control={control}
              render={({ field: { value, disabled, onChange }, fieldState: { error } }) => (
                <DropdownMenu<IState>
                  label='State'
                  buttonProps={{
                    className: 'shadow-none px-3.5 bg-neutral-50',
                    type: 'button'
                  }}
                  menuProps={{
                    className: 'max-h-[400px]'
                  }}
                  selectOption={value}
                  onChange={(option) => {
                    // handleSelectCountry(option)
                    onChange(option)
                  }}
                  disabled={disabled}
                  error={error?.message}
                  placeholder={<span className='text-neutral-500'>State</span>}
                  options={states}
                  getItemLabel={(item) => item.name}
                  getItemValue={(item) => `${item.state_code}`}
                />
              )}
            />
          </div>
          {/* <Controller
            name='state'
            control={control}
            render={({ field, fieldState: { error } }) => <TextInput
              {...field}
              label='State'
              placeholder='State'
              error={error?.message}
              maxLength={19}
            />
            }
          /> */}
          <div className='col-span-6 md:col-span-2'>
            <Controller
              name='zip'
              control={control}
              render={({ field, fieldState: { error } }) => <TextInput
                {...field}
                label='Zip'
                onChange={(e) => field.onChange(formatZip(e.target.value))}
                placeholder='12345'
                error={error?.message}
                maxLength={19}
              />

              }
            />
          </div>
        </div>
      </SubForm>

      <Separator />

      <SubForm>
        <h2 className='text-lg font-medium text-neutral-600'>Delivery method</h2>

        <div className='flex flex-col md:flex-row gap-4 '>
          {
            DELIVERY_METHODS.map((item) => (
              <DeliveryMethod
                key={item.id}
                onClick={() => setValue('deliveryMethod', item)}
                isSelected={selectedDelivery.id === item.id}
                name={item.name}
                subtitle={`${item.minDay}-${item.maxDay} business days`}
                value={item.fee}
                disabled={disabled}
              />
            ))
          }


        </div>

      </SubForm>
      <Separator />
      <SubForm>
        <h2 className='text-lg font-medium text-neutral-600'>Payment method</h2>
        <Controller
          name='cardNumber'
          control={control}
          render={({ field, fieldState: { error } }) => <TextInput
            {...field}
            label='Card number'

            onChange={(e) => field.onChange(formatCardNumber(e.target.value))}
            placeholder='1234 1234 1234 1234'
            error={error?.message}
            maxLength={19}
          />
          }
        />
        <Controller
          name='nameOnCard'
          control={control}
          render={({ field, fieldState: { error } }) => <TextInput
            {...field}
            label='Name on card'

            onChange={(e) => field.onChange(e.target.value.toUpperCase())}
            placeholder='Full name on card'
            error={error?.message}
          />
          }
        />

        <div className='w-full flex flex-col md:flex-row gap-6 md:gap-8'>
          <Controller
            name='expiry'
            control={control}
            render={({ field, fieldState: { error } }) => <TextInput
              {...field}
              label='Expiry'

              onChange={(e) => field.onChange(formatExpiry(e.target.value))}
              placeholder='MM/YY'
              error={error?.message}
              maxLength={19}
            />
            }
          />
          <Controller
            name='cvv'
            control={control}
            render={({ field, fieldState: { error } }) => <TextInput
              {...field}
              label='CVV'

              onChange={(e) => field.onChange(formatCvv(e.target.value))}
              placeholder='123'
              error={error?.message}
              maxLength={19}
            />
            }
          />
        </div>

      </SubForm>

    </div>
  )
}

export { CustomerDetails }

const SubForm = ({ children }: { children: React.ReactNode }) => <div className='w-full flex flex-col gap-6'>{children}</div>
