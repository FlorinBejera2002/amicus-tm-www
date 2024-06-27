import TrailerSection from './components/trailer-section'
import Subtitle from './components/subtitle'
import HeroSection from './components/hero-section'
import EpisodeSection from './components/episode-section'
import CustomHeroBg from '../../common/custom-hero-bg'
import Animation from '../../common/animation'

import { Metadata } from 'next'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Arise for Christ | Time is now'
}

export default function TimeIsNow() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0c0e19] pb-12">
      <CustomHeroBg customClassname="!h-[5300px] md:!h-[3000px] lg:!h-[3500px] " />
      <div className="z-2 max-w-6xl !px-8 md:my-10 md:!px-12">
        <HeroSection />
        <TrailerSection />
        <EpisodeSection />
        <Subtitle />
        <Animation />
      </div>
    </div>
  )
}
