import Hero from './components/hero'
import BottomSection from './components/bottom-section'

export default function Podcast() {
  return (
    <div className="bg-[#0c0e19] flex flex-col justify-center items-center pb-16 px-3">
      <Hero />
      <BottomSection />
    </div>
  )
}
