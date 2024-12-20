import episode from './episode-data'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const EpisodeSection = () => {
  const t = useTranslations('serial')

  return (
    <div className="!z-2 relative flex flex-col">
      <div className="flex w-full flex-col gap-3">
        <InViewTransition delay={0.55}>
          <h1 className="text-start text-2xl font-bold md:text-3xl">
            {t('title_serial')}
          </h1>
        </InViewTransition>
        <div className="grid gap-3 md:grid-cols-3">
          {episode.map((item) => {
            return (
              <InViewTransition delay={0.75} key={item.id}>
                <div className="relative flex flex-col duration-300 hover:scale-105 ">
                  <Link href={item.url} target="_blank">
                    <Image
                      alt="arise for christ logo"
                      className="hover:-translate-1 w-full rounded-md object-contain "
                      src={item.episodeImage}
                    />
                  </Link>
                  <h4 className="absolute bottom-0 left-8 text-white">
                    {item.title}
                  </h4>
                </div>
              </InViewTransition>
            )
          })}
        </div>
      </div>

      <InViewTransition delay={0.95}>
        <div className="flex w-full flex-col items-center justify-center border-b border-gray-800 pt-8 md:text-xl">
          <q className=" text-center font-semibold text-gray-800">
            {t('verset')}
          </q>
          <p className=" font-semibold text-gray-800">{t('reference')}</p>
        </div>
      </InViewTransition>
    </div>
  )
}

export default EpisodeSection
