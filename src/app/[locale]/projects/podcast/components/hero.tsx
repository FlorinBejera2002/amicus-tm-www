import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Adi from '../../../../../../public/adi-text.webp'
import youtubeChanelImage from '../../../../../../public/youtube-chanel-image.webp'

export default function Hero() {
  const t = useTranslations('podcast')

  return (
    <div className="z-2 flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-center">
        <InViewTransition delay={0.25}>
          <Image
            alt="arise for christ logo"
            className="-mt-16 w-full max-w-[600px] flex-1 object-cover md:-mt-32"
            src={Adi}
          />
        </InViewTransition>
        <InViewTransition delay={0.35}>
          <p className="text-md min-w-fit m-0 flex-1 self-center text-wrap text-gray-800 md:text-xl">
            {t('hero-paragraf')}
          </p>
        </InViewTransition>
      </div>
      <InViewTransition delay={0.75}>
        <div className="flex justify-center gap-8 border-y border-gray-800 py-8">
          <p className="text-md mb-0 flex-1 text-wrap leading-normal text-gray-800 md:text-xl">
            {t('text-episode')}
          </p>
          <InViewTransition delay={0.95}>
            <Image
              alt="arise for christ logo"
              className="hidden max-h-[150px] rounded-md object-cover md:flex"
              src={youtubeChanelImage}
            />
          </InViewTransition>
        </div>
      </InViewTransition>
    </div>
  )
}
