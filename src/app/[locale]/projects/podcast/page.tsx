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
    <div className="bg-[#0c0e19] flex flex-col justify-center items-center pb-16 px-3 z-30">
      <CustomHeroBg customClassname="!h-[2500px] sm:!h-[3000px] lg:!h-[3000px] " />
      <Hero />
      <BottomSection />
    </div>
  )
}
