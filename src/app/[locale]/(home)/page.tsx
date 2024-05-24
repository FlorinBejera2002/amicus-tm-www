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
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Home() {
  const t = useTranslations('hero')

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
          <CustomHeroBg />
          <Animation />
        </InViewTransition>

        <InViewTransition>
          <div className="container p-relative z-index-3">
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
                  <Link
                    className="text-decoration-none pointer"
                    href="https://www.facebook.com/AriseForChristRomania/"
                    target="blank"
                  >
                    <div className="flex justify-center items-center gap-2 hover:text-blue-900 text-gray-400">
                      <FaFacebookF className="w-5 h-5" />
                      <div>facebook</div>
                    </div>
                  </Link>

                  <Link
                    className="text-decoration-none pointer"
                    href="https://www.instagram.com/p/CfL2FveIMpn/"
                    target="blank"
                  >
                    <div className="flex justify-center items-center gap-2 hover:text-[#7B0166] text-gray-400">
                      <FaInstagram className="w-5 h-5  " />
                      <div>instagram</div>
                    </div>
                  </Link>

                  <Link
                    className="text-decoration-none pointer"
                    href="https://www.youtube.com/c/Ariseforchrist/"
                    target="blank"
                  >
                    <div className="flex justify-center items-center gap-2 hover:text-red-500 text-gray-400">
                      <FaYoutube className="w-5 h-5" />
                      <div>youtube</div>
                    </div>
                  </Link>

                  <Link
                    className="text-decoration-none pointer"
                    href="https://www.tiktok.com/@ariseforchrist/"
                    target="blank"
                  >
                    <div className="flex justify-center items-center gap-2 hover:text-[#2AC4CA] text-gray-400">
                      <FaTiktok className="w-5 h-5" />
                      <div>tiktok</div>
                    </div>
                  </Link>

                  <Link
                    className="text-decoration-none pointer"
                    href="https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav"
                    target="blank"
                  >
                    <div className="flex justify-center items-center gap-2 hover:text-green-500 text-gray-400">
                      <FaSpotify className="w-5 h-5" />
                      <div>spotify</div>
                    </div>
                  </Link>
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
