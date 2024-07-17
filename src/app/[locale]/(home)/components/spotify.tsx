'use client'
import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import spotifyMobile from '../../../../../public/spotify-mobile.png'
import spotifi from '../../../../../public/spotify.webp'
import googlePodcast from '../../../../../public/google-podcasts.webp'
import applePodcast from '../../../../../public/apple-podcast.webp'

export default function Spotify() {
  const t = useTranslations('podcast')

  return (
    <div className="bg-color-dark p-relative custom-section-1 lazyload bg-cover bg-center px-8 md:pb-20">
      <div className="container px-2 py-4">
        <div className="flex justify-center">
          <div className="flex w-full flex-wrap">
            <div className="flex flex-1 flex-col justify-center text-white">
              <h2 className="text-bold pb-4 !text-start text-2xl  md:!text-center md:text-3xl">
                {t('bottom-subtitle')}
              </h2>
              <p className="text-md !text-start md:!text-center md:text-base">
                {t('bottom-paragraf')}
              </p>
              <p className="!text-start text-sm md:!text-center">
                {t('bottom-socials')}
              </p>
              <div className="flex flex-col items-center gap-3">
                <Link
                  className="w-72 transform cursor-pointer overflow-hidden rounded-md transition-transform md:hover:-translate-y-2"
                  href="https://podcasts.apple.com/ro/podcast/arise-for-christ/id1573830106"
                >
                  <Image alt="arise for christ logo" src={applePodcast} />
                </Link>
                <Link
                  className="w-72 transform cursor-pointer overflow-hidden rounded-md transition-transform md:hover:-translate-y-2"
                  href="https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav"
                >
                  <Image alt="arise for christ logo" src={spotifi} />
                </Link>

                <Link
                  className="w-72 transform cursor-pointer overflow-hidden rounded-md transition-transform md:hover:-translate-y-2 "
                  href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81ZjRmYWU1Yy9wb2RjYXN0L3Jzcw=="
                >
                  <Image alt="arise for christ logo" src={googlePodcast} />
                </Link>
              </div>
            </div>
          </div>
          <InViewTransition delay={0.65}>
            <Image
              alt="Christian images"
              className="flex w-3/4 items-center justify-center object-cover shadow-lg"
              src={spotifyMobile}
            />
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}
