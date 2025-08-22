import { HERO_BUTTONS, HOME_DESCRIPTION, HOME_IMG_URL, HOME_TITLE } from '@/config/hero'
import { HeroSection } from '@repo/ui/src/components/marketing/hero-section'


function HeroSectionWrapper() {
  return (
    <HeroSection
      buttons={HERO_BUTTONS}
      imgUrl={HOME_IMG_URL}
      title={HOME_TITLE}
      description={HOME_DESCRIPTION}
    />
  )
}

export default HeroSectionWrapper
