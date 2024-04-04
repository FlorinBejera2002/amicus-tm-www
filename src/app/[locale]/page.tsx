import Team from './components/sections/team'
import StepsEvangelization from './components/sections/steps-evangelization'
import PersonalEvangelism from './components/sections/personal-evangelism'
import Numbers from './components/sections/numbers'
import { EmblaCarousel } from './components/sections/embla-carousel'
import CustomHeroBg from './components/sections/custom-hero-bg'
import Animation from './components/sections/animation'
import About from './components/sections/about'

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
        className="p-relative border-0 bg-quaternary overflow-hidden m-0 p-0"
        id="home"
      >
        <div className="custom-hero-heading">
          <strong>{t('title-hero')}</strong>
        </div>
        <CustomHeroBg />
        <div className="container p-relative z-index-3">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-10 text-center text-lg-start">
              <h3
                className="text-color-light font-weight-bold custom-hero-font-1 pb-2 mb-4 appear-animation "
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="200"
              >
                {t('question1')} <br />
                {t('question2')} <br />
                {t('question3')}
              </h3>
              <div
                className="d-block appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="300"
              >
                <div className="d-flex gap-2  no-underline">
                  <Link
                    className="d-fex "
                    href="https://www.facebook.com/AriseForChristRomania/"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2 hover:decoration-none hover:text-blue-900  text-gray-400">
                      <FaFacebookF className="w-3 h-3" />
                      <div className="outline-none hover:outline-none ">
                        facebook
                      </div>
                    </div>
                  </Link>
                  /
                  <Link
                    className="outline-none no-underline"
                    href="https://www.instagram.com/p/CfL2FveIMpn/"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2  hover:text-[#7B0166]  text-gray-400">
                      <FaInstagram className="w-3 h-3  " />
                      <div>instagram</div>
                    </div>
                  </Link>
                  /
                  <Link
                    href="https://www.youtube.com/c/Ariseforchrist/"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2    hover:text-red-500  text-gray-400 ">
                      <FaYoutube className="w-3 h-3" />
                      <div>youtube</div>
                    </div>
                  </Link>
                  /
                  <Link
                    href="https://www.tiktok.com/@ariseforchrist/"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2    hover:text-black  text-gray-400 ">
                      <FaTiktok className="w-3 h-3" />
                      <div>tiktok</div>
                    </div>
                  </Link>
                  /
                  <Link
                    href="https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav"
                    target="blank"
                  >
                    <div className="d-flex justify-center items-center gap-2    hover:text-green-500  text-gray-400 ">
                      <FaSpotify className="w-3 h-3" />
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
      <StepsEvangelization />
      <EmblaCarousel />
      <About />
      <Team />
      <PersonalEvangelism />
      <Numbers />
    </div>
  )
}
