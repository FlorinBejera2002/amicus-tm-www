import { useTranslations } from 'next-intl'
import Image from 'next/image'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

import book from '../../../../../public/book-image.png'

export default function Book() {
  const t = useTranslations('book')

  return (
    <div className="relative z-10 mx-auto max-w-6xl rounded-lg bg-white shadow-lg md:-mt-16 xl:grid xl:grid-cols-2 xl:gap-8">
      <div className="flex items-center justify-center">
        <InViewTransition
          customClassname="flex justify-center items-center w-full"
          damping={25}
          xOut={-100}
          yOut={0}
        >
          <Image
            alt="Book Arise for Christ"
            className="rounded-md object-cover"
            src={book}
          />
        </InViewTransition>
      </div>
      <div className="flex flex-col justify-center p-3 md:pr-10 lg:pr-16">
        <InViewTransition delay={0.7}>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            {t('title')}
          </h3>
        </InViewTransition>
        <InViewTransition delay={0.25}>
          <p className="mb-4 text-lg font-semibold italic text-gray-500 md:text-lg">
            {t('description')}
          </p>
        </InViewTransition>
        <InViewTransition delay={0.25}>
          <p className="text-lg font-bold text-gray-600 md:text-base">
            {t('author')}
          </p>
        </InViewTransition>
      </div>
    </div>
  )
}
