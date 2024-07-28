import Animation from '../common/animation'
import CustomHeroBg from '../common/custom-hero-bg'
import Images from '../common/images'
import InViewTransition from '../common/in-view-transition'
import AccordionSection from './components/accordion-section'
import ContactUsBtn from './components/contact-us-button'

import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Arise for Christ | About'
}

const About = () => {
  const t = useTranslations()

  return (
    <div className="main flex flex-col items-center" role="main">
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
                    {t('header.about_us')}
                  </li>
                </ul>

                <h1 className="text-color-light font-weight-bold text-10">
                  {t('header.about_us')}
                </h1>
              </div>
            </InViewTransition>
          </div>
        </div>

        <Animation />
      </section>

      <div className="custom-page-content z-index-2 max-w-6xl">
        <div className="rounded-md bg-white !p-8 shadow-lg md:!p-12">
          <div className="row">
            <div className="col">
              <InViewTransition delay={0}>
                <p className="text-md line-height-7 md:text-lg">
                  {t('about_us.description_p1_1')}
                </p>
              </InViewTransition>
            </div>
          </div>
          <div className="row">
            <Images />

            <div className="col-lg-6 ps-lg-4">
              <InViewTransition delay={0.5}>
                <p className="text-md line-height-7 md:text-lg">
                  {t('about_us.description_p1_6')}
                </p>
              </InViewTransition>

              <AccordionSection />

              <div className="appear-animation flex items-center py-4">
                <ContactUsBtn />
              </div>
            </div>
          </div>

          <InViewTransition delay={0.25}>
            <p className="text-md mb-0 pb-0 md:text-lg">
              {t('about_us.description_p3_1')}
            </p>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}

export default About
