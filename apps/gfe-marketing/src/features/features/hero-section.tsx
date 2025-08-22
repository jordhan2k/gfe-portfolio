import { FEATURE_IMG_URL, FEATURE_POINTS, FEATURE_TITLE, HERO_BUTTONS } from '@/config/hero'
import { HeroSection } from '@repo/ui/src/components/marketing/hero-section'

function HeroSectionWrapper() {
  return (
    <HeroSection
      buttons={HERO_BUTTONS}
      title={FEATURE_TITLE}
      bulletPoints={FEATURE_POINTS}
      imgUrl={FEATURE_IMG_URL}
    />
  )
}

export default HeroSectionWrapper
