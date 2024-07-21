import { useTranslations } from 'next-intl'
import Link from 'next/link'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

export default function Subtitle() {
  const t = useTranslations('serial')

  return (
    <>
      <div className="mb-24 flex flex-wrap md:mb-12">
        <div className="flex w-full flex-1 flex-col items-center gap-1">
          <InViewTransition delay={0.55}>
            <h4 className=" pl-10 font-bold text-yellow-600">
              {t('subtitle')}
            </h4>
          </InViewTransition>

          <InViewTransition delay={0.75}>
            <p className="w-80 text-center text-sm text-gray-800 md:w-full">
              {t('subtitle_text')}
            </p>
          </InViewTransition>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <InViewTransition delay={0.75}>
            <h3 className="font-bold text-gray-800">{t('title')}</h3>
          </InViewTransition>

          <InViewTransition delay={0.85}>
            <p className="text-md text-gray-800">{t('text_bottom')}</p>
          </InViewTransition>

          <InViewTransition delay={0.95}>
            <div className="flex w-64 flex-col items-center justify-center gap-1 border-y border-yellow-600 py-4">
              <h3 className="font-bold text-yellow-600">
                {t('serial_bottom')}
              </h3>
              <Link
                className="hover:transition-105 hover:translate-2 flex w-44 items-center justify-center rounded-full bg-yellow-600 px-16 py-2 text-white no-underline hover:no-underline"
                href="https://www.imdb.com/title/tt31037420/reference/"
              >
                IMDB
              </Link>
            </div>
          </InViewTransition>
        </div>
      </div>
    </>
  )
}
