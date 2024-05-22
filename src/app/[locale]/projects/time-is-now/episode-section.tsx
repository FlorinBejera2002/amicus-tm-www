import episode from './episode-data'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

const EpisodeSection = () => {
  const t = useTranslations('serial')

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-screen lg:px-96 flex flex-col justify-center items-center ">
        <h4 className="text-base md:text-2xl font-semibold text-center md:my-7 text-[#f3a61d] pb-3 md:pb-10 md:w-full">
          {t('title_serial')}
        </h4>
        <div className="grid md:grid-cols-3 gap-3 ">
          {episode.map((item) => {
            return (
              <div className="flex flex-wrap flex-col gap-3" key={item.id}>
                <Link href={item.url}>
                  <Image
                    alt="arise for christ logo"
                    className="object-contain hover:-translate-1 hover:scale-105 duration-300 "
                    src={item.episodImage}
                  />
                </Link>
                <h4 className="pl-3 text-center md:text-start text-sm text-white font-poppins">
                  {item.title}
                </h4>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-5 mt-5 md:mb-24 py-5 md:py-7 border-t border-b border-white w-80 md:w-full">
        <p className="text-sm md:text-2xl font-semibold text-white text-center">
          {t('verset')}
        </p>
        <p className="text-sm md:text-2xl font-semibold text-white">
          {t('reference')}
        </p>
      </div>
    </div>
  )
}

export default EpisodeSection
