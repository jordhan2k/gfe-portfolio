import { BrandItem, LogoStrip, LogoStripProps } from './logo-strip';

type MarqueeSectionProps = {
  brands: BrandItem[];
}
function MarqueeSection({
  brands
}: MarqueeSectionProps) {
  return (
    <section className='ui:w-full ui:flex ui:flex-col ui:gap-8 ui:items-center ui:py-8 ui:md:py-16 ui:xl:py-24'>
      <p className='ui:text-neutral-600 ui:text-base ui:font-medium'>Used by teams that you love</p>

      <div className='ui:overflow-hidden ui:w-full'>
        <div className='ui:w-max ui:flex ui:gap-[78.5px] ui:md:gap-2 ui:xl:gap-8 ui:overflow-scroll'>
          <LogoStrip id='strip-1' brands={brands} />
          <LogoStrip id='strip-2' brands={brands} />
        </div>
      </div>
    </section>
  )
}

export { MarqueeSection }