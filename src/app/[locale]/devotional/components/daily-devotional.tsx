'use client'

import { useEffect, useState } from 'react'

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

  return (
    <div
      className="max-w-6xl mx-auto p-6 shadow-md  bg-cover bg-center md:p-16 rounded-md"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`
      }}
    >
      <h3 className="text-4xl font-bold text-accent text-center">
        {devotional.title}
      </h3>
      <p className="text-gray-400 text-center ">
        {devotional.week} - {devotional.day}
      </p>
      <div className="w-full justify-center flex">
        <div className="mt-4 border-1 border-gray-500 p-2 rounded-md italic w-fit">
          <p className="font-semibold text-white">"{devotional.verse.text}"</p>
          <p className="text-right text-gray-300">
            {devotional.verse.reference}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {devotional.content.map((item, index) => (
          <div key={index} className="text-white">
            {item.section_title && (
              <h4 className="text-lg font-semibold text-white">
                {item.section_title}
              </h4>
            )}
            {item.paragraph && <p>{item.paragraph}</p>}
            {item.list && (
              <ul className="list-disc pl-6 space-y-2">
                {item.list.map((listItem, i) => (
                  <li key={i}>
                    <strong className="text-accent">{listItem.title}: </strong>{' '}
                    {listItem.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold text-white">
          Întrebări de reflecție:
        </h4>
        <ul className="list-disc pl-6 mt-2 text-white space-y-2">
          {devotional.reflection_questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>

      <p className="text-accent text-xl font-semibold mt-10 text-center mb-0">
        {devotional.conclusion}
      </p>
    </div>
  )
}
