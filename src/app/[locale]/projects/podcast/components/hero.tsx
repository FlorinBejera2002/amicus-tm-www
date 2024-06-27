import { useTranslations } from 'next-intl'
import Image from 'next/image'

import youtubeChanelImage from '../../../../../../public/youtube-chanel-image.webp'
import Adi from '../../../../../../public/adi-text.webp'

export default function Hero() {
  const t = useTranslations('podcast')

  return (
    <div className="z-2 mt-[240px] flex w-screen max-w-6xl flex-col justify-center !px-8 md:!px-12">
      <h1 className="w-fit text-2xl font-bold text-white md:text-4xl lg:text-6xl">
        {t('title')}
      </h1>
      <div className="mt-8 flex flex-wrap">
        <Image
          alt="arise for christ logo"
          className="w-full max-w-[800px] flex-1 object-cover"
          src={Adi}
        />
        <p className="text-md mb-6 min-w-fit flex-1 self-center text-wrap font-semibold text-white md:text-xl">
          {t('hero-paragraf')}
        </p>
      </div>
      <div className="flex justify-center gap-10 border-y border-white py-8">
        <p className="text-md mb-0 flex-1 text-wrap font-semibold leading-normal text-white md:text-xl">
          {t('text-episode')}
        </p>
        <Image
          alt="arise for christ logo"
          className="hidden max-h-[150px] rounded-md object-cover md:flex"
          src={youtubeChanelImage}
        />
      </div>
    </div>
  )
}
