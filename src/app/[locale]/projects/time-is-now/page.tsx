import TrailerSection from './trailer-section'
import Subtitle from './subtitle'
import HeroSection from './hero-section'
import EpisodeSection from './episode-section'

export default function TimeIsNow() {
  return (
    <div className="bg-[#0c0e19] flex flex-col justify-center items-center">
      <div className="w-[55rem] my-10">
        <HeroSection />
        <TrailerSection />
        <EpisodeSection />
        <Subtitle />
      </div>
    </div>
  )
}
