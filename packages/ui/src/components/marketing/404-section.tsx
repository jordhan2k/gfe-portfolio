import React from 'react'
import { Button } from '../ui/button'


function NotFoundSection() {
  return (
    <section className={`px-3 py-12 ui:xl:p-24
    bg-white ui:flex ui:flex-col ui:flex-1
    ui:justify-center
    ui:bg-[linear-gradient(360deg,_rgba(255,255,255,0)_0%,_#ffffff_100%),url(https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/404-section/starter/img/abstract-background.jpg)]
    ui:bg-cover ui:bg-center ui:bg-no-repeat
    `}>
      <div className="ui:text-indigo-700 ui:text-base ui:font-semibold ui:mb-3">
        Not found
      </div>
      <h2 className="ui:text-neutral-900 ui:text-4xl ui:md:text-5xl ui:font-semibold ui:mb-5">
        We can’t find the page
      </h2>
      <p className="ui:text-neutral-600 ui:text-lg ui:md:text-xl ui:font-normal ui:mb-8 ui:md:mb-16">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Button size="xl" className='ui:w-full ui:md:w-fit'>Back to Home</Button>
    </section>
  )
}

export { NotFoundSection }