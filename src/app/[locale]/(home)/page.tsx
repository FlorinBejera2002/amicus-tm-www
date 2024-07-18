import YoutubeMiniFeed from './components/youtube-mini-feed'
import Team from './components/team'
import Spotify from './components/spotify'
import PersonalEvangelism from './components/personal-evangelism/personal-evangelism'
import { Newsletter } from './components/newsletter'
import EvangelismSteps from './components/evangelism-steps/evangelism-steps'
import Book from './components/book'
import InViewTransition from '../common/in-view-transition'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaSpotify } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Metadata } from 'next'
import { cn } from '@/utils'

// eslint-disable-next-line react-refresh/only-export-components
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

  const socialMediaLinks = [
    {
      hoverColor: 'text-blue-900',
      href: 'https://www.facebook.com/AriseForChristRomania/',
      icon: <FaFacebookF className="h-5 w-5" />,
      label: 'facebook'
    },
    {
      hoverColor: 'text-[#7B0166]',
      href: 'https://www.instagram.com/p/CfL2FveIMpn/',
      icon: <FaInstagram className="h-5 w-5" />,
      label: 'instagram'
    },
    {
      hoverColor: 'text-red-500',
      href: 'https://www.youtube.com/c/Ariseforchrist/',
      icon: <FaYoutube className="h-5 w-5" />,
      label: 'youtube'
    },
    {
      hoverColor: 'text-[#2AC4CA]',
      href: 'https://www.tiktok.com/@ariseforchrist/',
      icon: <FaTiktok className="h-5 w-5" />,
      label: 'tiktok'
    },
    {
      hoverColor: 'text-green-500',
      href: 'https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav',
      icon: <FaSpotify className="h-5 w-5" />,
      label: 'spotify'
    }
  ]

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
                <div className="flex flex-wrap items-center justify-center gap-4 text-base lg:justify-start">
                  {socialMediaLinks.map((link, idx) => (
                    <Link
                      className={cn(
                        'pointer flex items-center gap-2 text-gray-400 no-underline transition-all duration-300 hover:!no-underline',
                        `hover:${link.hoverColor}`
                      )}
                      href={link.href}
                      key={idx}
                      target="blank"
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-wrap">
                  <h3 className=" text-2xl font-bold text-white md:text-4xl lg:text-5xl">
                    {t('question1')}
                  </h3>
                  <h3 className=" text-2xl font-bold text-white md:text-4xl lg:text-5xl">
                    {t('question2')}
                  </h3>
                  <h3 className=" text-2xl font-bold text-white md:text-4xl lg:text-5xl">
                    {t('question3')}
                  </h3>
                </div>
                <div className="ml-16 md:ml-0">
                  <Newsletter />
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
    </div>
  )
}
