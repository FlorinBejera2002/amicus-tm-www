import TrailerSection from './components/trailer-section'
import Subtitle from './components/subtitle'
import HeroSection from './components/hero-section'
import EpisodeSection from './components/episode-section'

export default function TimeIsNow() {
  return (
    <div className="bg-[#0c0e19] flex flex-col justify-center items-center ">
      <div className="xl:w-[60rem] md:my-10 p-3">
        <HeroSection />
        <TrailerSection />
        <EpisodeSection />
        <Subtitle />
      </div>
    </div>
  )
}
