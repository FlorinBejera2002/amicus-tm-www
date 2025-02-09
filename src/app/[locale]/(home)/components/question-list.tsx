'use client'

import { useTranslations } from 'next-intl'

export const QuestionList = () => {
  const t = useTranslations()
  const questions = [
    { id: 'q1', text: t('hero.question1') },
    { id: 'q2', text: t('hero.question2') },
    { id: 'q3', text: t('hero.question3') }
  ]

  return (
    <div className="text-wrap flex flex-col justify-center mb-1">
      <h5 className="font-bold text-accent text-xs md:text-xl">
        {t('hero.title-question')}
      </h5>
      <div className="flex flex-col gap-2 mt-2">
        {questions.map((question) => (
          <h3
            key={question.id}
            className="text-sm font-lato font-bold text-white md:text-2xl lg:text-4xl"
          >
            {question.text}
          </h3>
        ))}
      </div>
    </div>
  )
}
