'use client'

import InViewTransition from '../../../common/in-view-transition'
import Logo from '../../../../../../public/logo_horizontal_white.webp'
import Image from 'next/image'

interface Verse {
  text: string
  reference: string
}

interface ContentItem {
  paragraph?: string
  section_title?: string
  list?: { title: string; description: string }[]
}

interface Devotional {
  title: string
  week: string
  day: string
  verse: Verse
  content: ContentItem[]
  reflection_questions: string[]
  conclusion: string
}

export default function DailyVerse({
  devotional
}: { devotional: Devotional | null }) {
  if (!devotional) {
    return (
      <p className="text-center text-gray-500">
        Nu există verset pentru ziua de azi.
      </p>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-center md:-mt-16 bg-[#121212] text-white">
        <div className="flex flex-col items-center  p-8 md:p-28  xl:gap-4 max-w-6xl">
          <InViewTransition
            delay={0.25}
            customClassname="flex justify-center items-center"
          >
            <div className="text-left">
              <p className="text-lg pb-0 font-semibold italic md:pb-1 md:text-xl">
                "{devotional.verse.text}"
              </p>
              <span className="text-gray-300 ml-2">
                "{devotional.verse.reference}"
              </span>
            </div>
          </InViewTransition>

          <InViewTransition
            damping={25}
            xOut={-100}
            yOut={0}
            customClassname="flex flex-col items-end w-full"
          >
            <Image alt="Logo Resurse Creștine" src={Logo} className="w-40" />
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}
