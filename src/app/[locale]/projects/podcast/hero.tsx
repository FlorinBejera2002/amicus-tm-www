import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import youtubeChanelImage from '../../../../../public/youtube-chanel-image.png'
import heroPodcast from '../../../../../public/podcast-hero.png'
import Adi from '../../../../../public/adi-text.png'

export default function Hero() {
  const t = useTranslations('podcast')

  return (
    <div className="container flex flex-col gap-3 justify-center items-center">
      <Image alt="arise for christ logo" className="pt-28" src={heroPodcast} />
      <h3 className="text-white">{t('subscribe')}</h3>
      <Link
        className="text-white bg-red-600 py-2.5 px-4 rounded-md text-decoration-none cursor-pointer "
        href="https://www.youtube.com/@Ariseforchrist"
      >
        YouTube
      </Link>
      <div className="grid grid-cols-2 items-center gap-10">
        <Image alt="arise for christ logo" src={Adi} />
        <p className="text-white text-wrap text-3xl font-bold leading-normal">
          {t('hero-paragraf')}
        </p>
      </div>
      <div className="py-5 border-y border-white grid grid-cols-2 justify-center items-center gap-10">
        <p className="text-white text-wrap text-4xl font-bold leading-normal">
          {t('text-episode')}
        </p>
        <Image
          alt="arise for christ logo"
          height={900}
          src={youtubeChanelImage}
          width={600}
        />
      </div>
    </div>
  )
}
