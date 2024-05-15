import episode from './episode-data'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

const EpisodeSection = () => {
  const t = useTranslations('serial')

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-screen px-96 flex flex-col justify-center items-center ">
        <h4 className="text-lg text-white pb-3">{t('title-serial')}</h4>
        <div className="grid grid-cols-3 gap-3 ">
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
                <h4 className="pl-3 text-sm text-[#5b5f66] font-poppins">
                  {item.title}
                </h4>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-[57rem] flex flex-col justify-center items-center mb-24 py-7 border-t border-b border-white">
        <p className="text-lg text-white">
          `Câmpurile sunt bogate pentru seceriş, dar secerătorii sunt puţini.
        </p>
        <p className="text-lg text-white">
          Rugaţi deci pe Domnul secerişului să trimită lucrători în secerişul
          Lui.`
        </p>
        <p className="text-lg text-white">Luca 10:2</p>
      </div>
    </div>
  )
}

export default EpisodeSection
