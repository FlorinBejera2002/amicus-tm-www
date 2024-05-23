import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import spotifi from '../../../../../../public/spotify.png'
import mobileScreen from '../../../../../../public/mobile-screen.png'
import googlePodcast from '../../../../../../public/google-podcasts.png'
import applePodcast from '../../../../../../public/apple-podcast.png'

export default function BottomSection() {
  const t = useTranslations('podcast')

  return (
    <div className="md:mx-48 flex flex-col justify-center items-center">
      <h1 className="py-5 text-white font-bold text-2xl md:text-3xl">
        {t('bottom-title')}
      </h1>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        className="pb-5 md:w-[900px] md:h-[500px]"
        src="https://www.youtube.com/embed?listType=playlist&list=UUQy-aDJ2zjmVD7Yn2XusrsA&controls=0&modestbranding=1&index=1"
        title="YouTube Playlist"
      />
      <div className="grid md:grid-cols-2 justify-center items-center pt-10  border-t border-white">
        <Image alt="arise for christ logo" src={mobileScreen} />
        <div className="flex flex-col justify-center items-center text-white">
          <h2 className="pb-4">{t('bottom-subtitle')}</h2>
          <p className=" text-sm">{t('bottom-paragraf')}</p>
          <p className="pb-5 text-sm">{t('bottom-socials')}</p>
          <Link
            className="cursor-pointer"
            href="https://podcasts.apple.com/ro/podcast/arise-for-christ/id1573830106"
          >
            <Image
              alt="arise for christ logo"
              className="w-72"
              src={applePodcast}
            />
          </Link>
          <Link
            className="cursor-pointer"
            href="https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav"
          >
            <Image
              alt="arise for christ logo"
              className="w-72 py-3"
              src={spotifi}
            />
          </Link>

          <Link
            className="cursor-pointer"
            href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81ZjRmYWU1Yy9wb2RjYXN0L3Jzcw=="
          >
            <Image
              alt="arise for christ logo"
              className="w-72"
              src={googlePodcast}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
