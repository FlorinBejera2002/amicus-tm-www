'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

interface Devotional {
  title: string
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

export const DailyDevotional = () => {
  const [devotional, setDevotional] = useState<Devotional | null>(null)
  const [bgImage, setBgImage] = useState<string>('')

  const getToday = () => {
    const date = new Date()
    return {
      day: date.getDay(),
      formatted: date.toLocaleDateString('ro-RO', { weekday: 'long' })
    }
  }

  const fetchDevotional = async () => {
    try {
      const response = await axios.get('/path_to/ro.json')
      const devotions = response.data
      const { day } = getToday()
      const selectedDay = day === 0 || day === 6 ? 'day_5' : `day_${day}`
      setDevotional(devotions[selectedDay])
    } catch (error) {
      console.error('Eroare la obținerea devotionalului:', error)
    }
  }

  const fetchBackgroundImage = async () => {
    try {
      const response = await axios.get(
        'https://source.unsplash.com/1920x1080/?landscape'
      )
      setBgImage(response.request.responseURL)
    } catch (error) {
      console.error('Eroare la obținerea imaginii:', error)
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchDevotional()
    fetchBackgroundImage()
  }, [])

  if (!devotional) {
    return (
      <div className="flex justify-center items-center h-screen">
        Se încarcă...
      </div>
    )
  }

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center p-8"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-white bg-opacity-80 p-6 rounded-md shadow-lg max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-center mb-4">
            {devotional.title}
          </h1>
          <p className="italic text-center mb-6">
            {devotional.verset} - {devotional.reference}
          </p>
          <p className="mb-4">{devotional.paragraf_1}</p>
          <p className="mb-4">{devotional.paragraf_2}</p>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Ghiduri:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>{devotional.guidelines.step_1.title}:</strong>{' '}
                {devotional.guidelines.step_1.description}
              </li>
              <li>
                <strong>{devotional.guidelines.step_2.title}:</strong>{' '}
                {devotional.guidelines.step_2.description}
              </li>
              <li>
                <strong>{devotional.guidelines.step_3.title}:</strong>{' '}
                {devotional.guidelines.step_3.description}
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              Întrebări de reflecție:
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {devotional.reflection_questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
          <p className="font-semibold">Concluzie: {devotional.conclusion}</p>
        </div>
      </div>
    </>
  )
}
