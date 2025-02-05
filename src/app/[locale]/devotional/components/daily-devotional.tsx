'use client'

import { useEffect, useRef, useState } from 'react'
import { FaDownload } from 'react-icons/fa6'
import { toPng } from 'html-to-image'
import { useTranslations } from 'next-intl'
import InViewTransition from '../../common/in-view-transition'

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

export default function DailyDevotional({
  devotional
}: { devotional: Devotional | null }) {
  const [bgImage, setBgImage] = useState<string>('')
  const ref = useRef(null)
  const t = useTranslations()

  const landscapeImages = [
    'https://picsum.photos/id/1015/1920/1080?grayscale',
    'https://picsum.photos/id/1020/1920/1080?grayscale',
    'https://picsum.photos/id/1035/1920/1080?grayscale',
    'https://picsum.photos/id/1040/1920/1080?grayscale',
    'https://picsum.photos/id/1050/1920/1080?grayscale'
  ]

  useEffect(() => {
    const dayOfWeek = new Date().getDay()
    const index = dayOfWeek % landscapeImages.length
    setBgImage(landscapeImages[index])
  }, [])

  if (!devotional) {
    return (
      <p className="text-center text-gray-500">
        Nu există devotional pentru ziua de azi.
      </p>
    )
  }

  const handleDownloadImage = () => {
    if (ref.current === null) {
      return
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'devotional.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.error('oops, something went wrong!', err)
      })
  }

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto p-8 md:p-20 shadow-md bg-cover bg-center rounded-md"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${bgImage})`
      }}
    >
      <InViewTransition delay={0.25}>
        <h3 className="text-xl md:text-4xl font-bold text-white">
          {devotional.title}
        </h3>
        <p className="text-md text-gray-100">
          {devotional.week} - {devotional.day}
        </p>
      </InViewTransition>

      <InViewTransition delay={0.5}>
        <div className="mt-8 border-1 border-gray-500 p-4 rounded-md italic w-fit">
          <p className="font-semibold text-white">"{devotional.verse.text}"</p>
          <p className="text-right text-gray-100">
            {devotional.verse.reference}
          </p>
        </div>
      </InViewTransition>

      <InViewTransition delay={0.75}>
        <div className="mt-8 space-y-6">
          {devotional.content.map((item, index) => (
            <div key={index}>
              {item.section_title && (
                <h4 className="text-xl font-semibold text-white">
                  {item.section_title}
                </h4>
              )}
              {item.paragraph && (
                <p className="text-white text-lg">{item.paragraph}</p>
              )}
              {item.list && (
                <ul className="list-disc space-y-2 text-gray-100 text-md">
                  {item.list.map((listItem, i) => (
                    <li key={i}>
                      <strong className="text-lg text-white">
                        {listItem.title}:
                      </strong>{' '}
                      {listItem.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </InViewTransition>

      <InViewTransition delay={1}>
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-white">
            {t('devotional.question')}
          </h4>
          <ul className="list-disc pl-6 mt-2 text-gray-100 space-y-2 text-md">
            {devotional.reflection_questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      </InViewTransition>

      <InViewTransition delay={0.75}>
        <p className="text-white text-lg font-semibold mt-10 mb-0">
          {devotional.conclusion}
        </p>
      </InViewTransition>

      <InViewTransition delay={0.75}>
        <button
          onClick={handleDownloadImage}
          className="absolute right-0 md:-right-20 mt-10 md:mt-24 text-black rounded-md bg-accent px-4 py-2 text-sm font-semibold flex items-center gap-2"
        >
          {t('button.download')}
          <FaDownload />
        </button>
      </InViewTransition>
    </div>
  )
}
