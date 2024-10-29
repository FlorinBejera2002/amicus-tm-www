import Animation from '../common/animation'
import CustomHeroBg from '../common/custom-hero-bg'
import InViewTransition from '../common/in-view-transition'
import Book from './components/book'
import { CardCollaborator } from './components/card-collaborator'
import EvangelismSteps from './components/evangelism-steps/evangelism-steps'
import PersonalEvangelism from './components/personal-evangelism/personal-evangelism'
import { QuestionCarousel } from './components/question-carousel'
import ResurseCrestine from './components/resurse-crestine'
import Spotify from './components/spotify'
import Team from './components/team'
import YoutubeMiniFeed from './components/youtube-mini-feed'

import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

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
  const t = useTranslations('hero')

  return (
    <div className="main" role="main">
      <section
        className="p-relative bg-quaternary m-0 overflow-hidden border-0"
        id="home"
      >
        <div className="custom-hero-heading font-bold text-white">
          <InViewTransition delay={0.25} duration={0.5}>
            {t('title-hero')}
          </InViewTransition>
        </div>
        <InViewTransition
          damping={100}
          delay={0.25}
          duration={0.5}
          yIn={0}
          yOut={0}
        >
          <Animation />
          <CustomHeroBg />
        </InViewTransition>

        <InViewTransition>
          <div className="z-index-3 container !px-8">
            <div className="row min-vh-100 align-items-center">
              <div className="flex flex-col items-center justify-center lg:items-start">
                <div className=" md:ml-0">
                  <QuestionCarousel />

                  <CardCollaborator />
                </div>
              </div>
            </div>
          </div>
        </InViewTransition>
      </section>

      <YoutubeMiniFeed />
      <EvangelismSteps />

      <Team />
      <PersonalEvangelism />
      <Spotify />
      <Book />
      <ResurseCrestine />
    </div>
  )
}
