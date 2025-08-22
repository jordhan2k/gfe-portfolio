import { ABOUT_DESCRIPTION, ABOUT_TITLE, HERO_BUTTONS, HOME_IMG_URL } from '@/config/hero'
import { HeroSection } from '@repo/ui/src/components/marketing/hero-section'

function HeroSectionWrapper() {
  return (
    <HeroSection
      buttons={HERO_BUTTONS}
      title={ABOUT_TITLE}
      description={ABOUT_DESCRIPTION}
      imgUrl={HOME_IMG_URL}
    />
  )
}

export default HeroSectionWrapper
