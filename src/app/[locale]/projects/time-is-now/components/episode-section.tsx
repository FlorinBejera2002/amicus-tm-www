import episode from './episode-data'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

const EpisodeSection = () => {
  const t = useTranslations('serial')

  return (
    <div className="!z-2 relative flex flex-col">
      <div className="flex w-full flex-col">
        <h4 className="px-0 pb-3 text-base font-semibold text-accent md:my-7 md:w-full md:pb-10 md:text-2xl">
          {t('title_serial')}
        </h4>
        <div className="grid gap-3 md:grid-cols-3 ">
          {episode.map((item) => {
            return (
              <div
                className="relative flex flex-col duration-300 hover:scale-105 "
                key={item.id}
              >
                <Link href={item.url} target="_blank">
                  <Image
                    alt="arise for christ logo"
                    className="hover:-translate-1 w-full object-contain "
                    src={item.episodImage}
                  />
                </Link>
                <h4 className="absolute bottom-0 left-8 text-white">
                  {item.title}
                </h4>
              </div>
            )
          })}
        </div>
      </div>
      <div className="text-md mb-5 mt-5 flex w-full flex-col items-center justify-center border-b border-t border-white py-5 md:mb-24 md:py-7 md:text-xl">
        <q className=" text-center font-semibold text-white">{t('verset')}</q>
        <p className=" font-semibold text-white">{t('reference')}</p>
      </div>
    </div>
  )
}

export default EpisodeSection
