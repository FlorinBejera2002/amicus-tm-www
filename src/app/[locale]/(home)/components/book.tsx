import { useTranslations } from 'next-intl'
import Image from 'next/image'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

import book from '../../../../../public/book-image.png'

export default function Book() {
  const t = useTranslations('book')

  return (
    <div className="relative z-10 flex max-w-6xl flex-col justify-center rounded-lg bg-white px-8 pb-8 pt-3 shadow-lg md:-mt-16 xl:grid xl:grid-cols-2 xl:gap-8">
      <InViewTransition
        customClassname="flex justify-center items-center w-full !p-0"
        damping={25}
        xOut={-100}
        yOut={0}
      >
        <Image alt="Book Arise for Christ" src={book} />
      </InViewTransition>
      <div className="flex flex-col justify-center md:pr-10 lg:pr-16">
        <InViewTransition delay={0.25}>
          <h3 className="text-2xl font-bold text-gray-900 md:pb-4 md:text-3xl">
            {t('title')}
          </h3>
        </InViewTransition>
        <InViewTransition delay={0.25}>
          <p className="text-lg font-semibold italic text-gray-500 md:pb-4 md:text-lg">
            {t('description')}
          </p>
        </InViewTransition>
        <InViewTransition delay={0.25}>
          <p className="mb-0 text-lg font-bold text-gray-600 md:text-base">
            {t('author')}
          </p>
        </InViewTransition>
      </div>
    </div>
  )
}
