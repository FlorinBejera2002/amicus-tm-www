import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

import spotifi from '../../../../../../public/spotify.webp'
import googlePodcast from '../../../../../../public/google-podcasts.webp'
import applePodcast from '../../../../../../public/apple-podcast.webp'

export default function BottomSection() {
  const t = useTranslations('podcast')

  return (
    <div className="z-2 flex flex-col">
      <InViewTransition delay={0.95}>
        <div className="flex w-full flex-col gap-4 py-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <h1 className="mb-0 text-2xl font-bold text-gray-800 md:text-3xl">
              {t('bottom-title')}
            </h1>

            <Link
              className="text-decoration-none w-full cursor-pointer rounded-md bg-red-600 px-4 py-2.5 text-center text-gray-800 lg:w-fit"
              href="https://www.youtube.com/@Ariseforchrist"
            >
              {t('subscribe')}
            </Link>
          </div>

          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="aspect-video  rounded-md"
            src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=1"
            title="YouTube Playlist"
          />
        </div>
      </InViewTransition>

      <div className="flex w-full flex-wrap border-t border-gray-800 pt-10">
        <InViewTransition delay={0.95}>
          <div className="flex flex-1 flex-col justify-center text-gray-800">
            <h2 className="pb-4 !text-start md:!text-center">
              {t('bottom-subtitle')}
            </h2>
            <p className="text-md !text-start md:!text-center md:text-lg">
              {t('bottom-paragraf')}
            </p>
            <p className="!text-start text-sm md:!text-center">
              {t('bottom-socials')}
            </p>

            <InViewTransition delay={1.25}>
              <div className="flex flex-col md:flex-row">
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
                  className="cursor-pointer !self-start md:!self-center "
                  href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81ZjRmYWU1Yy9wb2RjYXN0L3Jzcw=="
                >
                  <Image alt="arise for christ logo" src={googlePodcast} />
                </Link>
              </div>
            </InViewTransition>
          </div>
        </InViewTransition>
      </div>
    </div>
  )
}
