import Hero from './components/hero'
import BottomSection from './components/bottom-section'
import CustomHeroBg from '../../common/custom-hero-bg'

export default function Podcast() {
  return (
    <div className="bg-[#0c0e19] flex flex-col justify-center items-center pb-16 px-3">
      <CustomHeroBg customClassname="!h-[3000px] sm:!h-[3500px] lg:!h-[4000px] " />
      <Hero />
      <BottomSection />
    </div>
  )
}
