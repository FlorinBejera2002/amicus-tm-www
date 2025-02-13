'use client'

import { toPng } from 'html-to-image'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { FaDownload } from 'react-icons/fa6'
import InViewTransition from '../../common/in-view-transition'

interface IProps {
  devotionalKey: string
  locale: string
}

export default function Devotional(props: IProps) {
  const t = useTranslations()
  const content = t.raw(`${props.devotionalKey}.content`) as Array<unknown>
  const reflectionQuestions = t.raw(
    `${props.devotionalKey}.reflection_questions`
  ) as Array<string>
  const ref = useRef(null)
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
    <>
      <div
        ref={ref}
        className="max-w-6xl mx-auto p-8 md:p-16 shadow-md bg-cover bg-center md:rounded-md relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`
        }}
      >
        <InViewTransition delay={0.25}>
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            {t(`${props.devotionalKey}.title`)}
          </h3>
          <p className="text-md text-gray-300">
            {t(`${props.devotionalKey}.week`)} -{' '}
            {t(`${props.devotionalKey}.day`)}
          </p>
        </InViewTransition>

        <InViewTransition delay={0.5}>
          <div className="mt-6 border-l-4 border-accent pl-4 italic">
            <p className="font-semibold text-white text-lg">
              {t(`${props.devotionalKey}.verse.text`)}
            </p>
            <p className="text-right text-gray-300">
              {t(`${props.devotionalKey}.verse.reference`)}
            </p>
          </div>
        </InViewTransition>

        <InViewTransition delay={0.75}>
          <div className="mt-6 space-y-6">
            {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
            {content?.map((item: any, index) => (
              <div key={index}>
                {item.section_title && (
                  <h4 className="text-xl font-semibold text-white mt-4">
                    {item.section_title}
                  </h4>
                )}
                {item.paragraph && (
                  <p className="text-white text-lg">{item.paragraph}</p>
                )}
                {item.list && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                    {item.list.map((listItem: any, i: number) => (
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
              {t('util.question')}
            </h4>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
              {reflectionQuestions.map((question: string, index: number) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        </InViewTransition>

        <InViewTransition delay={1.25}>
          w
          <p className="text-white text-lg font-semibold mt-10 mb-0">
            {t(`${props.devotionalKey}.conclusion`)}
          </p>
        </InViewTransition>
      </div>

      <InViewTransition delay={1.5}>
        <button
          onClick={handleDownloadImage}
          className="absolute -right-0 -bottom-14 bg-accent text-black rounded-md px-4 py-2 text-sm font-semibold flex items-center gap-2"
        >
          {t('util.button_download')}
          <FaDownload />
        </button>
      </InViewTransition>
    </>
  )
}
