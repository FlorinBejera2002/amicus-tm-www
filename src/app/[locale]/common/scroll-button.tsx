'use client'

import { cn } from '@/utils'
import { useWindowScroll } from '@uidotdev/usehooks'
import { FaChevronUp } from 'react-icons/fa'

export default function ScrollButton() {
  const [{ y }] = useWindowScroll()

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  return (
    <button
      className={cn(
        'fixed bottom-[20px] right-[20px] z-40 min-w-12 items-center justify-center rounded-md bg-accent/[.75] p-3 text-center text-lg transition-all duration-300',
        y! > 300 ? 'scale-100' : 'scale-0'
      )}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </button>
  )
}
