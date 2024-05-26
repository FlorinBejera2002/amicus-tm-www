import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import spotifi from '../../../../../../public/spotify.webp'
import googlePodcast from '../../../../../../public/google-podcasts.webp'
import applePodcast from '../../../../../../public/apple-podcast.webp'

export default function BottomSection() {
  const t = useTranslations('podcast')

  return (
    <div className="max-w-6xl flex flex-col justify-center items-center !px-8 md:!px-12 pb-10 z-2 w-screen">
      <div className="flex flex-col py-12 gap-4 w-full">
        <div className="flex items-center gap-4 flex-wrap">
          <h1 className="text-white font-bold text-2xl md:text-3xl mb-0">
            {t('bottom-title')}
          </h1>
          <Link
            className="text-white bg-red-600 py-2.5 px-4 rounded-md text-decoration-none cursor-pointer w-full lg:w-fit text-center"
            href="https://www.youtube.com/@Ariseforchrist"
          >
            {t('subscribe')}
          </Link>
        </div>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="rounded-md  aspect-video"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=1"
          title="YouTube Playlist"
        />
      </div>
      <div className="flex flex-wrap pt-10 border-t border-white w-full">
        <div className="flex flex-col justify-center text-white flex-1">
          <h2 className="pb-4 !text-start md:!text-center">
            {t('bottom-subtitle')}
          </h2>
          <p className="text-md md:text-lg !text-start md:!text-center">
            {t('bottom-paragraf')}
          </p>
          <p className="text-sm !text-start md:!text-center">
            {t('bottom-socials')}
          </p>
          <div className="flex flex-col md:flex-row">
            <Link
              className="cursor-pointer !self-start md:!self-center "
              href="https://podcasts.apple.com/ro/podcast/arise-for-christ/id1573830106"
            >
              <Image alt="arise for christ logo" src={applePodcast} />
            </Link>
            <Link
              className="cursor-pointer !self-start md:!self-center  scale-[0.85]"
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
        </div>
      </div>
    </div>
  )
}
