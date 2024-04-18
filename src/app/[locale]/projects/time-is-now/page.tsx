import TrailerSection from './trailer-section'
import HeroSection from './hero-section'
import EpisodesSection from './episodes-section'
import Subtitle from './ subtitle'

export default function TimeIsNow() {
  return (
    <div className="bg-[#0c0e19]">
      <HeroSection />
      <TrailerSection />
      <EpisodesSection />
      <Subtitle />
    </div>
  )
}
