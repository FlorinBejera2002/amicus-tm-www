import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import applePodcast from '../../../../../../public/img/common/apple-podcast.webp'
import googlePodcast from '../../../../../../public/img/common/google-podcasts.webp'
import spotifi from '../../../../../../public/img/common/spotify.webp'

export default function BottomSection() {
  const t = useTranslations('podcast')

  return (
    <div className="z-2 flex flex-col gap-8 md:p-12 p-8">
      <InViewTransition delay={0.95}>
        <div className="flex w-full flex-col gap-3 md:gap-6 items-center">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <h1 className="mb-0 text-2xl font-bold text-gray-800 md:text-3xl">
              {t('bottom-title')}
            </h1>
            <Link
              className="text-decoration-none w-full cursor-pointer rounded-full bg-black px-4 py-2.5 text-center text-white font-semibold lg:w-fit"
              href="https://www.youtube.com/@Ariseforchrist"
            >
              {t('subscribe')}
            </Link>
          </div>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            className="aspect-video rounded-md max-w-[800px] w-full"
            src="https://www.youtube.com/embed/XtwpJzDdQ0k"
            title="YouTube Video"
          />
        </div>
      </InViewTransition>
      <InViewTransition delay={0.95}>
        <div className="flex flex-1 flex-col gap-3 md:gap-6 justify-center w-full flex-wrap border-t pt-8 border-gray-800 text-gray-800">
          <InViewTransition delay={1.25}>
            <div className="flex w-full flex-wrap">
              <div className="flex flex-1 flex-col gap-6 items-center justify-center text-black">
                <h3 className="text-lg text-center md:text-2xl m-0">
                  {t('bottom-paragraf')}
                </h3>
                <p className="text-center text-xs md:text-base m-0 hidden md:flex">
                  {t('bottom-socials')}
                </p>
                <div className="flex flex-col items-center justify-center gap-2 md:w-[50em] md:flex-row">
                  <Link
                    className="cursor-pointer !self-start md:!self-center "
                    href="https://podcasts.apple.com/ro/podcast/arise-for-christ/id1573830106"
                  >
                    <Image
                      alt="arise for christ logo"
                      className="!w-56 !md:80"
                      src={applePodcast}
                    />
                  </Link>
                  <Link
                    className=" cursor-pointer !self-start  md:!self-center"
                    href="https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav"
                  >
                    <Image
                      className="!w-56 !md:80"
                      alt="arise for christ logo"
                      src={spotifi}
                    />
                  </Link>

                  <Link
                    className="cursor-pointer !self-start md:!self-center"
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
      </InViewTransition>
    </div>
  )
}
