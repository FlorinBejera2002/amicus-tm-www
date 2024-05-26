import TrailerSection from './components/trailer-section'
import Subtitle from './components/subtitle'
import HeroSection from './components/hero-section'
import EpisodeSection from './components/episode-section'
import CustomHeroBg from '../../common/custom-hero-bg'
import Animation from '../../common/animation'

export default function TimeIsNow() {
  return (
    <div className="bg-[#0c0e19] flex flex-col justify-center items-center pb-12">
      <CustomHeroBg customClassname="!h-[5300px] md:!h-[3000px] lg:!h-[3500px] " />
      <div className="max-w-6xl md:my-10 !px-8 md:!px-12 z-2">
        <HeroSection />
        <TrailerSection />
        <EpisodeSection />
        <Subtitle />
        <Animation />
      </div>
    </div>
  )
}
