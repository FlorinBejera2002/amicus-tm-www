import YoutubeMiniFeed from './components/youtube-mini-feed'
import Team from './components/team'
import PersonalEvangelism from './components/personal-evangelism/personal-evangelism'
import EvangelismSteps from './components/evangelism-steps/evangelism-steps'
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
      icon: <FaFacebookF className="w-5 h-5" />,
      label: 'facebook'
    },
    {
      hoverColor: 'text-[#7B0166]',
      href: 'https://www.instagram.com/p/CfL2FveIMpn/',
      icon: <FaInstagram className="w-5 h-5" />,
      label: 'instagram'
    },
    {
      hoverColor: 'text-red-500',
      href: 'https://www.youtube.com/c/Ariseforchrist/',
      icon: <FaYoutube className="w-5 h-5" />,
      label: 'youtube'
    },
    {
      hoverColor: 'text-[#2AC4CA]',
      href: 'https://www.tiktok.com/@ariseforchrist/',
      icon: <FaTiktok className="w-5 h-5" />,
      label: 'tiktok'
    },
    {
      hoverColor: 'text-green-500',
      href: 'https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav',
      icon: <FaSpotify className="w-5 h-5" />,
      label: 'spotify'
    }
  ]

  return (
    <div className="main" role="main">
      <section
        className="p-relative border-0 bg-quaternary overflow-hidden m-0"
        id="home"
      >
        <div className="font-bold custom-hero-heading text-white">
          <InViewTransition delay={0.75} duration={1}>
            {t('title-hero')}
          </InViewTransition>
        </div>
        <InViewTransition
          damping={100}
          delay={0.75}
          duration={1}
          yIn={0}
          yOut={0}
        >
          <Animation />
          <CustomHeroBg />
        </InViewTransition>

        <InViewTransition>
          <div className="!px-8 z-index-3 container">
            <div className="row min-vh-100 align-items-center">
              <div className="col-lg-10 text-center text-lg-start">
                <h3 className="text-color-light font-weight-bold text-3xl leading-tight pb-2 mb-4 appear-animation text-wrap md:text-4xl lg:text-5xl">
                  {t('question1')}
                  <br />
                  {t('question2')}
                  <br />
                  {t('question3')}
                </h3>

                <div className="flex justify-center items-center lg:justify-start gap-4 flex-wrap text-xl">
                  {socialMediaLinks.map((link, idx) => (
                    <Link
                      className={cn(
                        'flex items-center gap-2 no-underline hover:!no-underline pointer transition-all duration-300 text-gray-400',
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
              </div>
            </div>
          </div>
        </InViewTransition>
      </section>

      <YoutubeMiniFeed />

      <EvangelismSteps />

      <Team />
      <PersonalEvangelism />
    </div>
  )
}
