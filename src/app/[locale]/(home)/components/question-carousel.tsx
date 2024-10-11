'use client'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

export const QuestionCarousel = () => {
  const t = useTranslations('hero')

  const questions = [t('question1'), t('question2'), t('question3')]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [questions.length])

  return (
    <div className="text-wrap flex flex-col justify-center mb-8">
      <h5 className="font-bold text-gray-500 text-sm md:text-xl">
        Ți-ai pus vreodată întrebarea:
      </h5>
      <h3 className="text-2xl font-bold text-white md:text-5xl lg:text-5xl transition-opacity duration-1000 ease-in-out">
        {questions[currentIndex]}
      </h3>
    </div>
  )
}
