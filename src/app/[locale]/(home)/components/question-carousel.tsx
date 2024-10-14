'use client'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

export const QuestionCarousel = () => {
  const t = useTranslations('hero')

  const questions = [t('question1'), t('question2'), t('question3')]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length)
        setIsAnimating(true)
      }, 800)
    }, 5000)

    return () => clearInterval(interval)
  }, [questions.length])

  return (
    <div className="text-wrap flex flex-col justify-center mb-8">
      <h5 className="font-bold text-gray-500 text-sm md:text-xl">
        Ți-ai pus vreodată întrebarea:
      </h5>
      <div className={`overflow-hidden h-20`}>
        <div
          className={`transform transition-transform duration-1000 ease-out ${
            isAnimating ? 'translate-y-0' : 'translate-y-24 '
          }`}
        >
          <h3 className="text-4xl font-bold text-white md:text-4xl lg:text-5xl">
            {questions[currentIndex]}
          </h3>
        </div>
      </div>
    </div>
  )
}
