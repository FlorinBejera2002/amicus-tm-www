import { useTranslations } from 'next-intl'
import Image from 'next/image'

import youtubeChanelImage from '../../../../../../public/youtube-chanel-image.webp'
import Adi from '../../../../../../public/adi-text.webp'

export default function Hero() {
  const t = useTranslations('podcast')

  return (
    <div className="max-w-6xl flex flex-col justify-center mt-[240px] !px-8 md:!px-12 z-2 w-screen">
      <h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold w-fit">
        {t('title')}
      </h1>
      <div className="flex mt-8 flex-wrap">
        <Image
          alt="arise for christ logo"
          className="flex-1 object-cover max-w-[800px] w-full"
          src={Adi}
        />
        <p className="text-white text-wrap text-md md:text-xl font-semibold flex-1 self-center mb-6 min-w-fit">
          {t('hero-paragraf')}
        </p>
      </div>
      <div className="py-8 border-y border-white flex justify-center gap-10">
        <p className="text-white text-wrap text-md md:text-xl font-semibold leading-normal mb-0 flex-1">
          {t('text-episode')}
        </p>
        <Image
          alt="arise for christ logo"
          className="hidden md:flex object-cover rounded-md max-h-[150px]"
          src={youtubeChanelImage}
        />
      </div>
    </div>
  )
}
