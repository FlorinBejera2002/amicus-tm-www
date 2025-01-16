'use client'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useEffect, useState } from 'react'
import roJson from '../../../../../messages/ro.json'

type DailyDevotionalData = {
  title: string
  date: string
  verset: string
  reference: string
  paragraf_1: string
  paragraf_2: string
  guidelines: {
    step_1: { title: string; description: string }
    step_2: { title: string; description: string }
    step_3: { title: string; description: string }
  }
  reflection_questions: string[]
  conclusion: string
}

type RoJsonType = {
  'text-book': {
    [key: string]: DailyDevotionalData
  }
}

export const DailyDevotional = () => {
  const [data, setData] = useState<DailyDevotionalData | null>(null)
  const [bgImage, setBgImage] = useState<string>('')

  const landscapeImages = [
    'https://picsum.photos/id/1015/1920/1080?grayscale', // Munți
    'https://picsum.photos/id/1020/1920/1080?grayscale', // Râu
    'https://picsum.photos/id/1035/1920/1080?grayscale', // Pădure
    'https://picsum.photos/id/1040/1920/1080?grayscale', // Mare
    'https://picsum.photos/id/1050/1920/1080?grayscale' // Apus
  ]

  const getCurrentDayOfYear = (): number => {
    const now = new Date()
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const diff = now.getTime() - startOfYear.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }

  const fetchBackgroundImage = () => {
    const dayOfYear = new Date().getDay()
    const index = dayOfYear % landscapeImages.length // Rotire zilnică pe baza zilei săptămânii
    setBgImage(landscapeImages[index])
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const dayOfYear = getCurrentDayOfYear()
    const key = `day_${dayOfYear}`

    const jsonData = roJson as RoJsonType
    if (jsonData['text-book'] && jsonData['text-book'][key]) {
      setData(jsonData['text-book'][key])
    } else {
      setData({
        title: 'Devotional indisponibil',
        date: '',
        verset: 'Verset indisponibil',
        reference: 'Referință indisponibilă',
        paragraf_1: 'Paragraf indisponibil',
        paragraf_2: 'Paragraf indisponibil',
        guidelines: {
          step_1: { title: '', description: '' },
          step_2: { title: '', description: '' },
          step_3: { title: '', description: '' }
        },
        reflection_questions: [],
        conclusion: 'Concluzie indisponibilă'
      })
    }

    fetchBackgroundImage()
  }, [])

  if (!data) {
    return <p>Încărcare...</p>
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-16 rounded-md"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`
      }}
    >
      <div className="flex flex-col items-center p-8 max-w-4xl gap-6 text-white">
        <InViewTransition
          delay={0.25}
          customClassname="flex justify-center items-center"
        >
          <div className="text-left flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{data.title}</h1>
            {/* <p className="text-sm italic text-gray-400 mb-4">{data.date}</p> */}
            <p className="text-lg italic mb-2">"{data.verset}"</p>
            <span className="text-accent ml-2">{data.reference}</span>
          </div>
        </InViewTransition>

        <InViewTransition
          damping={25}
          xOut={-100}
          yOut={0}
          customClassname="w-full"
        >
          <p className="text-md mb-4">{data.paragraf_1}</p>
          <p className="text-md mb-4">{data.paragraf_2}</p>
        </InViewTransition>

        <InViewTransition
          damping={25}
          xOut={100}
          yOut={0}
          customClassname="w-full"
        >
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-2">Ghiduri:</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>{data.guidelines.step_1.title}:</strong>{' '}
                {data.guidelines.step_1.description}
              </li>
              <li>
                <strong>{data.guidelines.step_2.title}:</strong>{' '}
                {data.guidelines.step_2.description}
              </li>
              <li>
                <strong>{data.guidelines.step_3.title}:</strong>{' '}
                {data.guidelines.step_3.description}
              </li>
            </ul>
          </div>
        </InViewTransition>

        <InViewTransition
          damping={25}
          xOut={-100}
          yOut={0}
          customClassname="w-full"
        >
          <div className="text-left">
            <h2 className="text-lg font-semibold mb-2 text-white">
              Întrebări de reflecție:
            </h2>
            <ul className="list-disc ml-5 space-y-2">
              {data.reflection_questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        </InViewTransition>

        <InViewTransition
          damping={25}
          xOut={-100}
          yOut={0}
          customClassname="w-full"
        >
          <p className="font-semibold">Concluzie: {data.conclusion}</p>
        </InViewTransition>
      </div>
    </div>
  )
}

export default DailyDevotional
