'use client'
import React, { useState } from 'react'

import { FaChevronUp } from 'react-icons/fa'
import { useWindowScroll } from '@uidotdev/usehooks'

export default function ScrollButton() {
  const [visible, setVisible] = useState(false)
  const [{ y }] = useWindowScroll()

  React.useEffect(() => {
    if (y !== null) {
      setVisible(y > 300)
    }
  }, [y])

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  return (
    visible && (
      <button
        className={`fixed bottom-20 right-2.5 flex justify-center items-center text-center bg-[#e3ae04] rounded-md p-3 min-w-12 text-lg opacity-75 transition-opacity duration-300 z-40 ${window.innerWidth > 768 ? 'block' : 'hidden'}`}
        onClick={scrollToTop}
      >
        <FaChevronUp />
      </button>
    )
  )
}
