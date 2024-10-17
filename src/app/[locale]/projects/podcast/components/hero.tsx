import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'

import StudioA4C from '../../../../../../public/SediuA4C.jpeg'
import youtubePodcast1 from '../../../../../../public/youtubePodcast1.webp'
import youtubePodcast2 from '../../../../../../public/youtubePodcast2.webp'
import youtubePodcast3 from '../../../../../../public/youtubePodcast3.webp'
import youtubePodcast4 from '../../../../../../public/youtubePodcast4.webp'
import youtubePodcast5 from '../../../../../../public/youtubePodcast5.webp'
import youtubePodcast6 from '../../../../../../public/youtubePodcast6.webp'
import youtubePodcast7 from '../../../../../../public/youtubePodcast7.webp'
import youtubePodcast8 from '../../../../../../public/youtubePodcast8.webp'
import Link from 'next/link'

type IPodcast = {
  podcastImage: StaticImageData
  id: number
  title: string
  url: string
}

export default function Hero() {
  const t = useTranslations('podcast')
  const youtubePodcast: IPodcast[] = [
    {
      podcastImage: youtubePodcast1,
      id: 0,
      title: '#95 CUM SĂ MĂ ODIHNESC ÎNTR-O LUME GĂLĂGIOASĂ? - Isaac Hubing',
      url: 'https://www.youtube.com/watch?v=XtwpJzDdQ0k'
    },
    {
      podcastImage: youtubePodcast2,
      id: 1,
      title: '#94 AI VALOARE ÎN OCHII LUI DUMNEZEU - Dan Damian',
      url: 'https://www.youtube.com/watch?v=Hx4kslbCjBo'
    },
    {
      podcastImage: youtubePodcast3,
      id: 2,
      title: '#93 CHEMAȚI PRIN CÂNTĂRI BUCURIA - Petrișor Bodea',
      url: 'https://www.youtube.com/watch?v=Qvbw4Nhwq-Y'
    },
    {
      podcastImage: youtubePodcast4,
      id: 3,
      title:
        '#92 MASCULINITATE ȘI FEMINITATE BIBLICĂ - Agnia și Mădălin Potoroacă',
      url: 'https://www.youtube.com/watch?v=LmkSM0pJSBI'
    },
    {
      podcastImage: youtubePodcast5,
      id: 4,
      title: '#91 ÎMPREUNĂ SLUJITORI ȘI PRIETENI - Luigi Mițoi și Dan Muncaciu',
      url: 'https://www.youtube.com/watch?v=KtX8mxqE37A&t=3s'
    },
    {
      podcastImage: youtubePodcast6,
      id: 5,
      title: '#90 INIMA DEPENDENȚEI ȘI IDOLATRIA PLĂCERII - Mădălin Potoroacă',
      url: 'https://www.youtube.com/watch?v=tejdBAMSWw0'
    },
    {
      podcastImage: youtubePodcast7,
      id: 6,
      title: '#89 ESTE CRISTOS ÎNTÂIUL ÎN BISERICA TA? - David Lavric',
      url: 'https://www.youtube.com/watch?v=RtxFlCgmYGI'
    },
    {
      podcastImage: youtubePodcast8,
      id: 7,
      title: '#88 RELEVANȚA CUVÂNTULUI ÎN CULTURA DE AZI - Cristian Barbosu',
      url: 'https://www.youtube.com/watch?v=m9GH9E6lpic'
    }
  ]
  return (
    <div className="z-2 flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-center">
        <InViewTransition delay={0.25}>
          <Image
            alt="arise for christ logo"
            className=" w-full max-w-[800px] flex-1 object-cover mb-8  rounded-md"
            src={StudioA4C}
          />
        </InViewTransition>
        <InViewTransition delay={0.35}>
          <p className="text-md min-w-fit m-0 flex-1 self-center text-wrap text-gray-800 md:text-xl">
            {t('hero-paragraf')}
          </p>
        </InViewTransition>
      </div>
      <InViewTransition delay={0.75}>
        <div className="flex justify-center flex-col gap-8 border-y border-gray-800 py-8">
          <p className="text-md mb-0 flex-1 text-wrap leading-normal text-gray-800 md:text-xl">
            {t('text-episode')}
          </p>

          <div className="grid grid-cols-4 gap-4">
            {youtubePodcast.map((item) => {
              return (
                <InViewTransition delay={0.95} key={item.id}>
                  <Link
                    href={item.url}
                    target="_blank"
                    className="!no-underline flex flex-col gap-2"
                  >
                    <Image
                      alt="arise for christ logo"
                      className="hidden rounded-md object-cover md:flex"
                      src={item.podcastImage}
                    />

                    <h2 className="m-0 text-xs font-semibold text-black">
                      {item.title}
                    </h2>
                  </Link>
                </InViewTransition>
              )
            })}
          </div>
        </div>
      </InViewTransition>
    </div>
  )
}
