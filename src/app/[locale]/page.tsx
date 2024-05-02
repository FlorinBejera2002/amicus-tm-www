import YoutubeMiniFeed from './components/sections/youtube-mini-feed'
import Team from './components/sections/team'
import StepsEvangelization from './components/sections/steps-evangelization'
import PersonalEvangelism from './components/sections/personal-evangelism'
import CustomHeroBg from './components/sections/custom-hero-bg'
import CookieConsents from './components/sections/cookies-consent'
import Animation from './components/sections/animation'

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
      <CookieConsents />

      <section
        className="p-relative border-0 bg-quaternary overflow-hidden px-2"
        id="home"
      >
        <div className="custom-hero-heading text-white">
          <strong>{t('title-hero')}</strong>
        </div>
        <CustomHeroBg />
        <div className="container p-relative z-index-3">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-10 text-center text-lg-start">
              <h3
                className="text-color-light font-weight-bold custom-hero-font-1 pb-2 mb-4 appear-animation text-wrap"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="200"
              >
                {t('question1')}
                <br />
                {t('question2')}
                <br />
                {t('question3')}
              </h3>
              <div
                className="d-block appear-animation text-xl"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="300"
              >
                <div className="d-flex gap-4 flex-wrap justify-center">
                  <Link
                    className="text-decoration-none pointer"
                    href="https://www.facebook.com/AriseForChristRomania/"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2 hover:text-blue-900 text-gray-400">
                      <FaFacebookF className="w-5 h-5" />
                      <div>facebook</div>
                    </div>
                  </Link>

                  <Link
                    className="text-decoration-none pointer"
                    href="https://www.instagram.com/p/CfL2FveIMpn/"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2 hover:text-[#7B0166] text-gray-400">
                      <FaInstagram className="w-5 h-5  " />
                      <div>instagram</div>
                    </div>
                  </Link>

                  <Link
                    className="text-decoration-none pointer"
                    href="https://www.youtube.com/c/Ariseforchrist/"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2 hover:text-red-500 text-gray-400 ">
                      <FaYoutube className="w-5 h-5" />
                      <div>youtube</div>
                    </div>
                  </Link>

                  <Link
                    className="text-decoration-none pointer"
                    href="https://www.tiktok.com/@ariseforchrist/"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2 hover:text-[#2AC4CA] text-gray-400 ">
                      <FaTiktok className="w-5 h-5" />
                      <div>tiktok</div>
                    </div>
                  </Link>

                  <Link
                    className="text-decoration-none pointer"
                    href="https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2 hover:text-green-500 text-gray-400 ">
                      <FaSpotify className="w-5 h-5" />
                      <div>spotify</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Animation />
      <YoutubeMiniFeed />
      <StepsEvangelization />
      {/* <EmblaCarousel /> */}
      {/* <About /> */}
      <Team />
      <PersonalEvangelism />
    </div>
  )
}
