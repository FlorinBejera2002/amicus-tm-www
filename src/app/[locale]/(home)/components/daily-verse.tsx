'use client'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import roJson from '../../../../../messages/ro.json'
import enJson from '../../../../../messages/en.json'
import Logo from '../../../../../public/logo_horizontal_white.webp'

type DailyData = {
  verset: string
  reference: string
  date: string
}

type JsonType = {
  'text-book': {
    [key: string]: DailyData
  }
}

export const DailyVerse = () => {
  const [data, setData] = useState<DailyData | null>(null)
  const t = useTranslations()
  const pathname = usePathname()
  const language = pathname?.split('/')[1]

  const roJsonData: JsonType = roJson as JsonType
  const enJsonData: JsonType = enJson as JsonType

  useEffect(() => {
    const getVersetKey = (): string => {
      const now = new Date()
      const weekNumber = Math.ceil(now.getDate() / 7)
      const daysOfWeek = [
        'Duminică',
        'Luni',
        'Marți',
        'Miercuri',
        'Joi',
        'Vineri',
        'Sâmbătă'
      ]

      let dayName = daysOfWeek[now.getDay()]
      if (dayName === 'Sâmbătă' || dayName === 'Duminică') {
        dayName = 'Vineri'
      }

      return `Săptămâna ${weekNumber} | ${dayName}`
    }

    const key = getVersetKey()

    const jsonData = language === 'ro' ? roJsonData : enJsonData
    const versetEntry = Object.values(jsonData['text-book']).find(
      (entry) => entry.date === key
    )

    if (versetEntry) {
      setData(versetEntry)
    } else {
      setData({
        verset: t('devotional.verseUnavailable'),
        reference: t('devotional.referenceUnavailable'),
        date: key
      })
    }
  }, [language, roJsonData, enJsonData, t])

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <Link href={`/${language}/devotional`} className="text-decoration-none">
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
    </Link>
  )
}

export default DailyVerse
