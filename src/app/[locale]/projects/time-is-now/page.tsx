import TrailerSection from './trailer-section'
import HeroSection from './hero-section'
import EpisodesSection from './episodes-section'

export default function TimeIsNow() {
  return (
    <div className="bg-[#0c0e19]">
      <HeroSection />
      <TrailerSection />
      <EpisodesSection />
    </div>
  )
}
