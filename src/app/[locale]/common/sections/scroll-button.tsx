'use client'

import { FaChevronUp } from 'react-icons/fa'
import { useWindowScroll } from '@uidotdev/usehooks'
import { cn } from '@/utils'

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
        'fixed bottom-[20px] right-[20px] justify-center items-center text-center bg-accent/[.75] rounded-md p-3 min-w-12 text-lg transition-all duration-300 z-40',
        y! > 300 ? 'scale-100' : 'scale-0'
      )}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </button>
  )
}
