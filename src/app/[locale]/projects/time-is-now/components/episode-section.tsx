import episode from './episode-data'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

const EpisodeSection = () => {
  const t = useTranslations('serial')

  return (
    <div className="flex flex-col !z-2 relative">
      <div className="flex flex-col w-full">
        <h4 className="text-base md:text-2xl font-semibold md:my-7 text-[#e3ae04] pb-3 md:pb-10 md:w-full px-0">
          {t('title_serial')}
        </h4>
        <div className="grid md:grid-cols-3 gap-3 ">
          {episode.map((item) => {
            return (
              <div
                className="flex flex-col relative hover:scale-105 duration-300 "
                key={item.id}
              >
                <Link href={item.url}>
                  <Image
                    alt="arise for christ logo"
                    className="object-contain hover:-translate-1 w-full "
                    src={item.episodImage}
                  />
                </Link>
                <h4 className="text-white absolute bottom-0 left-8">
                  {item.title}
                </h4>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-5 mt-5 md:mb-24 py-5 md:py-7 border-t border-b border-white w-full text-md md:text-xl">
        <q className=" font-semibold text-white text-center">{t('verset')}</q>
        <p className=" font-semibold text-white">{t('reference')}</p>
      </div>
    </div>
  )
}

export default EpisodeSection
