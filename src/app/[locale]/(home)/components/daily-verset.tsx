'use client'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import roJson from '../../../../../messages/ro.json'
import Logo from '../../../../../public/logo_horizontal_white.webp'

type DailyData = {
  verset: string
  reference: string
}

type RoJsonType = {
  'text-book': {
    [key: string]: DailyData
  }
}

export const DailyVerset = () => {
  const [data, setData] = useState<DailyData | null>(null)
  const t = useTranslations()

  useEffect(() => {
    const getCurrentDayOfYear = (): number => {
      const now = new Date()
      const startOfYear = new Date(now.getFullYear(), 0, 1)
      const diff = now.getTime() - startOfYear.getTime()
      return Math.ceil(diff / (1000 * 60 * 60 * 24))
    }

    const dayOfYear = getCurrentDayOfYear()
    const key = `day_${dayOfYear}`

    const jsonData = roJson as RoJsonType
    if (jsonData['text-book'] && jsonData['text-book'][key]) {
      const { verset, reference } = jsonData['text-book'][key]
      setData({ verset, reference })
    } else {
      setData({
        verset: t('daily_verset.versetUnavailable'),
        reference: t('daily_verset.referenceUnavailable')
      })
    }
  }, [t])

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center md:-mt-16 bg-[#121212] text-white">
      <div className="flex flex-col items-center  p-8 md:p-28  xl:gap-4 max-w-6xl">
        <InViewTransition
          delay={0.25}
          customClassname="flex justify-center items-center"
        >
          <div className="text-left">
            <p className="text-lg pb-0 font-semibold italic md:pb-1 md:text-xl">
              "{data.verset}"
            </p>
            <span className="text-gray-300 ml-2">{data.reference}</span>
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
  )
}

export default DailyVerset
