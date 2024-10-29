'use client'

import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import applePodcast from '../../../../../public/apple-podcast.webp'
import googlePodcast from '../../../../../public/google-podcasts.webp'
import spotify from '../../../../../public/spotify.webp'

export default function Spotify() {
  const t = useTranslations('podcast')

  return (
    <div className="bg-color-dark relative bg-cover bg-center p-8 md:p-28">
      <InViewTransition delay={0.25}>
        <div className="flex w-full flex-wrap justify-center">
          <div className="flex flex-1 flex-col gap-6 items-center justify-center text-white">
            <h3 className="text-lg text-center md:text-2xl m-0">
              {t('bottom-paragraf')}
            </h3>
            <p className="text-center text-xs md:text-base m-0 hidden md:flex">
              {t('bottom-socials')}
            </p>
            <div className="flex flex-col items-center justify-center gap-2 md:w-[50em] md:flex-row">
              <Link
                className="cursor-pointer !self-center"
                href="https://podcasts.apple.com/ro/podcast/arise-for-christ/id1573830106"
              >
                <Image
                  alt="arise for christ logo"
                  className="!w-56 !md:80"
                  src={applePodcast}
                />
              </Link>
              <Link
                className="cursor-pointer !self-center"
                href="https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav"
              >
                <Image
                  className="!w-56 !md:80"
                  alt="arise for christ logo"
                  src={spotify}
                />
              </Link>
              <Link
                className="cursor-pointer !self-center"
                href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81ZjRmYWU1Yy9wb2RjYXN0L3Jzcw=="
              >
                <Image
                  className="!w-56 !md:80"
                  alt="arise for christ logo"
                  src={googlePodcast}
                />
              </Link>
            </div>
          </div>
        </div>
      </InViewTransition>
    </div>
  )
}
