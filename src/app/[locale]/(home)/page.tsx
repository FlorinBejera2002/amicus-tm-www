import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { QuestionList } from './components/question-list'
import Socials from '../common/footer/components/socials'
import CardHero from './components/card-hero'
import About from './components/about/page'
import Vision from './components/vision/page'
import Projects from './components/projects/page'
import background from '../../../../public/background-image.jpg'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'metadata.home' })

  return {
    description: t('description'),
    icons: [
      { rel: 'icon', url: '/logo.ico' },
      { rel: 'apple-touch-icon', url: '/logo.ico' }
    ],
    keywords: t('keywords'),
    og: {
      description: t('description'),
      title: t('title')
    },
    title: t('title')
  } as Metadata
}

export default function Home() {
  return (
    <div className="main" role="main">
      <section id="home">
        <div
          className="h-[800px] w-full bg-fixed flex items-center justify-center bg-opacity-70 "
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className=" p-6 rounded-lg flex w-full px-52 items-end">
            <div className="w-full flex flex-col gap-5">
              <QuestionList />
              <Socials />
            </div>
            <div className="flex w-96 flex-col items-center justify-center ">
              <CardHero />
            </div>
          </div>
        </div>
        {/* <DailyVerse /> */}
        <About />
        <Vision />
        <Projects />
      </section>
    </div>
  )
}
