'use client'

import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import applePodcast from '../../../../../public/apple-podcast.webp'
import googlePodcast from '../../../../../public/google-podcasts.webp'
import spotifi from '../../../../../public/spotify.webp'

export default function Spotify() {
  const t = useTranslations('podcast')

  return (
    <div className="bg-color-dark relative bg-cover bg-center p-8 md:p-28">
      <div className="flex w-full flex-wrap">
        <div className="flex flex-1 flex-col items-center justify-center text-white">
          <InViewTransition delay={0.25}>
            <h2 className="text-bold pb-3 md:pb-6 text-center">
              {t('bottom-subtitle')}
            </h2>
            <p className="text-md text-center md:text-lg">
              {t('bottom-paragraf')}
            </p>
            <p className="text-center text-sm">{t('bottom-socials')}</p>
            <div className="flex flex-col items-center md:w-[50em] md:flex-row">
              <Link
                className="cursor-pointer !self-start md:!self-center "
                href="https://podcasts.apple.com/ro/podcast/arise-for-christ/id1573830106"
              >
                <Image alt="arise for christ logo" src={applePodcast} />
              </Link>
              <Link
                className="scale-[0.85] cursor-pointer !self-start  md:!self-center"
                href="https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav"
              >
                <Image alt="arise for christ logo" src={spotifi} />
              </Link>

              <Link
                className="cursor-pointer !self-start md:!self-center"
                href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81ZjRmYWU1Yy9wb2RjYXN0L3Jzcw=="
              >
                <Image alt="arise for christ logo" src={googlePodcast} />
              </Link>
            </div>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}
