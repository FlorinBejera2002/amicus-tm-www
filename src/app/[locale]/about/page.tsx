import ContactUsBtn from './components/contact-us-button'
import AccordionSection from './components/accordion-section'
import InViewTransition from '../common/in-view-transition'
import Images from '../common/images'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arise for Christ | About'
}

const About = () => {
  const t = useTranslations()

  return (
    <div className="main flex flex-col items-center" role="main">
      <section className="page-header p-relative bg-quaternary m-0 overflow-hidden border-0 p-0 w-screen">
        <InViewTransition
          damping={100}
          delay={0.75}
          duration={1}
          yIn={0}
          yOut={0}
        >
          <CustomHeroBg />
        </InViewTransition>
        <div className="row align-items-center my-5 pb-4 pt-5">
          <div className="col my-5 pb-5 text-center">
            <InViewTransition delay={0.25}>
              <div className="py-4">
                <ul className="breadcrumb flex gap-2 justify-content-center font-weight-medium mb-2 text-4-5">
                  <li className="z-[1]">
                    <Link
                      className="text-color-primary text-decoration-none"
                      href="/"
                    >
                      {t('header.home')}
                    </Link>
                  </li>

                  <FaAngleRight className="text-color-primary mt-0.5 z-[1]" />

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

      <div className="custom-page-content max-w-6xl z-index-2">
        <div className="rounded-md bg-white !p-8 md:!p-12">
          <div className="row">
            <div className="col">
              <InViewTransition delay={0}>
                <p className="text-md md:text-lg line-height-7">
                  {t('about_us.description_p1_1')}
                </p>
              </InViewTransition>
            </div>
          </div>
          <div className="row">
            <Images />

            <div className="col-lg-6 ps-lg-4">
              <InViewTransition delay={0.5}>
                <p className="text-md md:text-lg line-height-7">
                  {t('about_us.description_p1_6')}
                </p>
              </InViewTransition>

              <AccordionSection />

              <div className="appear-animation py-4 flex items-center">
                <ContactUsBtn />
              </div>
            </div>
          </div>

          <InViewTransition delay={0.75}>
            <p className="text-md md:text-lg pb-0 mb-0">
              {t('about_us.description_p3_1')}
            </p>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}

export default About
