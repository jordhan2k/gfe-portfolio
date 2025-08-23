'use client'
import { Toggle } from '@repo/ui/components/form/toggle'
import { Button } from '@repo/ui/components/ui/button'
import { AppLink } from '@repo/ui/components/ui/link'
import clsx from 'clsx'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

const consentSchema = z.object({
  analytics: z.boolean().default(true),
  marketing: z.boolean().default(true),
})

type consentSchemaType = z.infer<typeof consentSchema>

const setCookieConsent = (analytics: boolean, marketing: boolean) => {
  Cookies.set('essentials_cookie', 'true', { expires: 365, path: '/' })
  Cookies.set('analytics_cookie', `${analytics}`, { expires: 365, path: '/' })
  Cookies.set('marketing_cookie', `${marketing}`, { expires: 365, path: '/' })
}

function CookieConsent() {
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleClose = () => {
    setModalVisible(false)
  }

  const { reset, control, getValues } = useForm<consentSchemaType>({
    defaultValues: {
      analytics: true,
      marketing: true,
    }
  })

  useEffect(() => {
    const storedCookieConsent = localStorage.getItem('cookie_consent');

    const analyticsCookie = Cookies.get('analytics_cookie');
    const marketingCookie = Cookies.get('marketing_cookie');

    reset({
      analytics: !storedCookieConsent ? true : analyticsCookie === 'true',
      marketing: !storedCookieConsent ? true : marketingCookie === 'true',
    })

    if (!storedCookieConsent || storedCookieConsent === 'declined') {
      setShow(true);
    }
  }, [setShow])


  const handleCloseConsent = () => {
    console.log('ad du')
    setModalVisible(false);
    setShow(false);
  }

  console.log({ modalVisible })

  const handleManageCookies = () => {
    console.log('len')

    setModalVisible(true);
  }


  const handleDeclineAll = () => {
    setCookieConsent(false, false)
    localStorage.setItem('cookie_consent', 'declined');
    handleCloseConsent();
  }
  const handleAcceptAll = () => {
    setCookieConsent(true, true)
    localStorage.setItem('cookie_consent', 'accepted');
    handleCloseConsent();
  }

  const handleSave = () => {
    const { analytics, marketing } = getValues();
    setCookieConsent(!!analytics, !!marketing)
    localStorage.setItem('cookie_consent', analytics && marketing ? 'accepted' : 'partial');
    handleCloseConsent();
  }

  if (!show) return null;
  return (
    <>
      <div className='border-t border-neutral-200  fixed bottom-0 left-0 right-0 bg-white w-screen'>
        <div className='max-w-[90rem] w-auto mx-auto p-4 md:px-8 md:py-6 xl:px-28'>
          <h4 className='text-base text-neutral-900 font-semibold mb-1'>We use cookies</h4>
          <p className='text-sm font-normal text-neutral-600 mb-6'>
            We use cookies to enhance your browsing experience and improve our website's performance. By continuing to use this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please read our <AppLink variant={'color'} href='/cookie-policy'>cookie policy</AppLink>.
          </p>
          <div className='flex flex-col-reverse md:flex-row gap-2 md:gap-4'>
            <Button onClick={handleDeclineAll} variant={'destructive'} className='w-full md:w-fit'>Decline All</Button>
            <div className='flex md:flex-1 flex-col md:flex-row justify-end gap-2 md:gap-4'>
              <Button onClick={handleAcceptAll} className='md:w-[11.5rem]'>Allow cookies</Button>
              <Button onClick={handleManageCookies} className='md:w-[11.5rem]' variant={'secondary'} >Manage cookies</Button>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx('fixed top-0 w-dvw h-dvh flex justify-center items-center z-1002',
        {
          'pointer-events-none opacity-0': !modalVisible,
        }
      )}>
        <div onClick={handleClose} className='absolute w-full h-full bg-black/70 backdrop-blur-sm z-1000' />
        <dialog open={modalVisible} className='max-w-[460px] w-full mx-auto p-6 bg-white z-1001 flex flex-col gap-6'>

          <div>
            <div className='flex justify-between mb-1'>
              <h5 className='text-neutral-900 text-base font-semibold'>Essentials</h5>

              <Toggle
                name='essentials'
                defaultChecked
                size="sm"
                disabled />


            </div>
            <p className='text-sm text-neutral-600 font-normal'>These cookies are essential for the proper functioning of our services and cannot be disabled.</p>
          </div>
          <div>
            <div className='flex justify-between mb-1'>
              <h5 className='text-neutral-900 text-base font-semibold'>Analytics</h5>
              <Controller
                name='analytics'
                control={control}
                render={({ field: { value, onChange, ...props } }) => (
                  <Toggle
                    {...props}
                    checked={value}
                    onChange={(event) => onChange(event.target.checked)}
                    size="sm"
                  />
                )}
              />
            </div>
            <p className='text-sm text-neutral-600 font-normal'>These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues.</p>
          </div>
          <div>
            <div className='flex justify-between mb-1'>
              <h5 className='text-neutral-900 text-base font-semibold'>Marketing</h5>
              <Controller
                name='marketing'
                control={control}
                render={({ field: { value, onChange, ...props } }) => (
                  <Toggle
                    {...props}
                    checked={value}
                    onChange={(event) => onChange(event.target.checked)}
                    size="sm"
                  />
                )}
              />
            </div>
            <p className='text-sm text-neutral-600 font-normal'>These cookies allow us to show you advertisements relevant to you through our advertising partners.</p>
          </div>


          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <Button onClick={handleAcceptAll} size='lg' className='flex-1'>Accept All</Button>
              <Button onClick={handleSave} size='lg' className='flex-1' variant='secondary'>Save</Button>
            </div>

            <Button onClick={handleDeclineAll} variant={'destructive'} >Decline All</Button>
          </div>

        </dialog>
      </div>
    </>
  )
}

export default CookieConsent

