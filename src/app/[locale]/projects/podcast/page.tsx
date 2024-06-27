import Hero from './components/hero'
import BottomSection from './components/bottom-section'
import CustomHeroBg from '../../common/custom-hero-bg'

import { Metadata } from 'next'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Arise for Christ | Podcast'
}

export default function Podcast() {
  return (
    <div className="z-30 flex flex-col items-center justify-center bg-[#0c0e19] px-3 pb-16">
      <CustomHeroBg customClassname="!h-[2500px] sm:!h-[3000px] lg:!h-[3000px] " />
      <Hero />
      <BottomSection />
    </div>
  )
}
