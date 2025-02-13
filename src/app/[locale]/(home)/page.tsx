import { Button } from '@headlessui/react'
import AboutResurseCrestine from './components/about-resurse-crestine'
import Book from './components/book'
import EvangelismSteps from './components/evangelism-steps/evangelism-steps'
import PersonalEvangelism from './components/personal-evangelism/personal-evangelism'
import Spotify from './components/spotify'
import Team from './components/team'
import DailyVerse from './components/verse/daily-verse'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import backgroundImage from '../../../../public/img/home/bg-image.png'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

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
      title: 'AMiCUS TM'
    },
    title: 'AMiCUS TM'
  } as Metadata
}

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  return (
    <div className="main" role="main">
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Office Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A1B]/80" />
        </div>

        <div className="relative container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Creștem împreună în credință și comunitate
            </h1>
            <p className="mt-6 text-xl text-white/60 max-w-3xl">
              AMiCUS Timișoara este locul unde studenții își dezvoltă
              potențialul spiritual și profesional, construind legături
              puternice și contribuind la binele comunității prin proiecte de
              impact.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-2.5 font-semibold">
                Devino Membru
              </Button>
              <Button className="text-white hover:bg-white/10 flex items-center gap-2">
                Descoperă Proiectele <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EvangelismSteps />

      <Team />
      <PersonalEvangelism />
      <DailyVerse locale={locale} />
      <Book />
      <Spotify />
      <AboutResurseCrestine />
    </div>
  )
}
