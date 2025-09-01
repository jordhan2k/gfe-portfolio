import { SPEC_DETAILS, SPEC_TABS } from '@/config'
import { TabButton, TabList, TabPanel, Tabs } from '@repo/ui/src/components/ui/tab-menu'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

function ProductSpecification() {
  return (
    <section className='px-4 py-12 xl:p-24 flex flex-col gap-16'>
      <div>
        <h2 className='text-neutral-900 font-semibold text-3xl md:text-5xl mb-6'>Discover timeless elegance</h2>
        <p className='text-neutral-600 text-lg font-normal'>Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here's the essence of what makes our apparel the hallmark for those with an eye for excellence and a heart for the environment.</p>
      </div>

      <Tabs defaultValue={'sustainability'} >
        <TabList className='h-max border-b border-neutral-300 gap-6 overflow-y-visible overflow-x-auto'>
          {
            SPEC_TABS.map((tab) => (
              <TabButton
                variant={'tab'}
                value={tab.value}
                key={`tab-${tab.value}`}
              >{tab.label}</TabButton>
            ))
          }
        </TabList>
        {
          SPEC_DETAILS.map((panel) => (
            <TabPanel
              key={`panel-${panel.value}`}
              value={panel.value}
              className='flex flex-col xl:flex-row gap-8'
            >
              <Image
                width={704}
                height={384}
                src={panel.img.desktop}
                alt={panel.value}
                className='w-[367px] h-64 object-cover bg-neutral-200 hidden xl:block rounded-lg'
              />
              <Image
                width={704}
                height={384}
                src={panel.img.tablet}
                priority
                alt={panel.value}
                className='h-[384px] w-full object-cover bg-neutral-200 hidden md:block xl:hidden rounded-lg'
              />
              <Image
                width={367}
                height={256}
                src={panel.img.mobile}
                alt={panel.value}
                className={clsx(
                  'h-[180px] bg-neutral-200',
                  'w-full block md:hidden',
                  'rounded-lg object-cover ',
                )}
              />
              <div className='flex flex-col gap-8'>
                <div>
                  <h3 className='text-2xl font-medium text-neutral-900 mb-2'>{panel.title}</h3>
                  <p className='text-base font-normal text-neutral-600'>{panel.description}</p>
                </div>
                <div className='flex flex-wrap gap-8'>
                  {
                    panel.items.map(({ icon: Icon, label }) => (
                      <div key={label} className=' w-full md:w-80 xl:w-[282px] flex items-center gap-2 md:gap-4'>
                        <div className='shadow size-12 rounded-full text-indigo-700 flex items-center justify-center '>
                          <Icon />
                        </div>
                        <div className='text-base font-normal text-neutral-600'>
                          {label}
                        </div>
                      </div>
                    ))
                  }


                </div>

              </div>

            </TabPanel>
          ))
        }

      </Tabs>

    </section>
  )
}

export default ProductSpecification