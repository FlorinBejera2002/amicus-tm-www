import Animation from '../../common/animation'
import CustomHeroBg from '../../common/custom-hero-bg'
import InViewTransition from '../../common/in-view-transition'
import EpisodeSection from './components/episode-section'
import HeroSection from './components/hero-section'
import Subtitle from './components/subtitle'
import TrailerSection from './components/trailer-section'

import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Arise for Christ | Time is now'
}

export default function TimeIsNow() {
  const t = useTranslations()

  return (
    <div className="main flex flex-col items-center bg-white">
      <section className="page-header p-relative bg-quaternary m-0 w-screen overflow-hidden border-0 p-0">
        <InViewTransition
          damping={100}
          delay={0.25}
          duration={0.5}
          yIn={0}
          yOut={0}
        >
          <CustomHeroBg />
        </InViewTransition>
        <div className="row align-items-center my-5 pb-4 pt-5">
          <div className="col my-5 pb-5 text-center">
            <InViewTransition delay={0.25}>
              <div className="py-4">
                <ul className="breadcrumb justify-content-center font-weight-medium text-4-5 mb-2 flex gap-2">
                  <li className="z-[1]">
                    <Link
                      className="text-color-primary text-decoration-none"
                      href="/"
                    >
                      {t('header.home')}
                    </Link>
                  </li>

                  <FaAngleRight className="text-color-primary z-[1] mt-0.5" />

                  <li className="text-color-primary active z-[1]">
                    {t('header.project_subProject')}
                  </li>
                </ul>

                <h1 className="text-color-light font-weight-bold text-10">
                  {t('header.project_subProject')}
                </h1>
              </div>
            </InViewTransition>
          </div>
        </div>

        <Animation />
      </section>
      <div className="custom-page-content z-2 max-w-6xl">
        <div className="rounded-md bg-white p-8 flex flex-col gap-8 shadow-lg">
          <HeroSection />
          <TrailerSection />
          <EpisodeSection />
          <Subtitle />
        </div>
      </div>
    </div>
  )
}
