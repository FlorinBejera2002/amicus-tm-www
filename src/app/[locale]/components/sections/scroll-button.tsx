'use client'
import React, { useState } from 'react'

import { FaChevronUp } from 'react-icons/fa'

export default function ScrollButton() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <button className=" fixed bottom-20 right-2.5 flex justify-center items-center text-center bg-[#e3ae04] hidden-mobile visible p-3 min-w-12 text-lg opacity-75 transition-opacity duration-300 z-40">
      <FaChevronUp onClick={scrollToTop} />
    </button>
  )
}
