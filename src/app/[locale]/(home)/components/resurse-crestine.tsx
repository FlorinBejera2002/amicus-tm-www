'use client'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import resurseCrestineLogo from '../../../../../public/resurse-crestine-logo.svg'

export default function ResurseCrestine() {
  const t = useTranslations('resurse-crestine')
  const [verse, setVerse] = useState({ text: '', link: '', referenceText: '' })

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await fetch(
          'https://www.resursecrestine.ro/web-api-versetul-zilei'
        )
        const scriptText = await response.text()

        // Extract the content from the script
        const textMatch = scriptText.match(/document\.writeln\('([^']+)'\)/)
        const referenceMatch = scriptText.match(/document\.write\('([^']+)'\)/)

        const text = textMatch ? textMatch[1] : ''
        const reference = referenceMatch ? referenceMatch[1] : ''

        // Parse the reference to extract the link and text
        const parser = new DOMParser()
        const doc = parser.parseFromString(reference, 'text/html')
        const linkElement = doc.querySelector('a')
        const link = linkElement?.href ?? ''
        const referenceText = linkElement?.textContent ?? ''

        setVerse({ text, link, referenceText })
      } catch (error) {
        console.error('Error fetching verse:', error)
      }
    }

    fetchVerse()
  }, [])

  return (
    <div className="flex items-center justify-center md:-mt-16 bg-[#121212] text-white">
      <div className="flex flex-col items-center justify-center p-8 md:p-28 md:pt-32 xl:gap-8 max-w-6xl">
        <Link
          href="https://www.resursecrestine.ro"
          className="no-underline hover:no-underline w-full !p-0 mb-14"
        >
          <InViewTransition
            damping={25}
            xOut={-100}
            yOut={0}
            customClassname="flex flex-col items-end no-underline hover:no-underline"
          >
            <Image
              alt="Logo Resurse Creștine"
              src={resurseCrestineLogo}
              className="w-52"
            />
            <span className="text-gray-500 no-underline hover:no-underline">
              {t('colaborator')}
            </span>
          </InViewTransition>
        </Link>

        <a
          href={verse.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white no-underline hover:no-underline"
        >
          <InViewTransition
            delay={0.25}
            customClassname="flex justify-center items-center"
          >
            <div className="text-left">
              <p className="text-lg pb-0 font-semibold italic md:pb-1 md:text-lg">
                "{verse.text}"
              </p>
              <span>{verse.referenceText}</span>
            </div>
          </InViewTransition>
        </a>
      </div>
    </div>
  )
}
