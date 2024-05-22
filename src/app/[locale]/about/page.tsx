import AccordionSection from './components/accordion-section'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { ImArrowUpRight2 } from 'react-icons/im'
import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import step5 from '../../../../public/img/step5.webp'
import step4 from '../../../../public/img/step4.webp'
import step3 from '../../../../public/img/step3.webp'
import step2 from '../../../../public/img/step2.webp'
import step1 from '../../../../public/img/step1.webp'

const About = () => {
  const t = useTranslations()

  return (
    <div className="main" role="main">
      <section className="page-header p-relative bg-quaternary m-0 overflow-hidden border-0 p-0">
        <CustomHeroBg />
        <div className="container">
          <div className="row align-items-center my-5 pb-4 pt-5">
            <div className="col my-5 pb-5 text-center">
              <div className="py-4">
                <ul className="breadcrumb d-flex justify-content-center font-weight-medium mb-2 text-4-5">
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
            </div>
          </div>
        </div>
        <Animation />
      </section>

      <div className="custom-page-content p-relative z-index-2 text-sm">
        <div className="px-2 custom-padding-top-1 custom-padding-bottom-1 px-lg-5 container rounded-md bg-white">
          <div className="row px-lg-3 px-3">
            <div className="col">
              <p className="text-lg md:text-2xl line-height-7 px-lg-3 pl-6">
                {t('about_us.description_p1_1')}
              </p>
            </div>
          </div>
          <div className="row px-lg-3 py-4 px-3">
            <div className="hidden md:flex flex-col col-lg-6 text-center">
              <div className="d-flex mb-3">
                <div className="p-2 flex-fill">
                  <div
                    className="custom-el-3 bg-color-tertiary custom-border-radius-1 mx-auto appear-animation"
                    data-appear-animation="zoomIn"
                    data-appear-animation-delay="100"
                  >
                    <Image
                      alt="Arise photo"
                      className="object-cover custom-el-3-img p-relative size-full"
                      src={step5}
                    />
                  </div>
                </div>

                <div className="p-2 flex-fill">
                  <Image
                    alt="Arise photo"
                    className="object-left object-cover custom-el-3 bg-color-primary custom-border-radius-2 mx-auto appear-animation"
                    data-appear-animation="zoomIn"
                    data-appear-animation-delay="200"
                    src={step2}
                  />
                </div>

                <div className="p-2 flex-fill">
                  <div
                    className="custom-el-3 custom-el-3-pos-1 bg-color-dark custom-border-radius-3 mx-auto appear-animation"
                    data-appear-animation="zoomIn"
                    data-appear-animation-delay="300"
                  >
                    <Image
                      alt="Arise photo"
                      className="object-cover custom-el-3-img p-relative size-full"
                      src={step1}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex mb-3 custom-el-4-pos">
                <div className="p-2 flex-fill">
                  <div
                    className="custom-el-3 custom-el-3-pos-2 bg-color-dark custom-border-radius-4 ms-auto appear-animation"
                    data-appear-animation="zoomIn"
                    data-appear-animation-delay="400"
                  >
                    <Image
                      alt="Arise photo"
                      className="object-cover custom-el-3-img p-relative size-full"
                      src={step3}
                    />
                  </div>
                </div>

                <div className="p-2 flex-fill">
                  <div
                    className="custom-el-3 bg-color-tertiary custom-border-radius-5 me-auto appear-animation"
                    data-appear-animation="zoomIn"
                    data-appear-animation-delay="500"
                  >
                    <Image
                      alt="Arise photo"
                      className="object-cover custom-el-3-img p-relative size-full"
                      src={step4}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 ps-lg-4 px-3">
              <p className="text-lg md:text-2xl line-height-7 px-6">
                {t('about_us.description_p1_6')}
              </p>

              <AccordionSection />

              <div className="appear-animation pt-4 flex items-center px-6">
                <Link
                  className="btn btn-modern btn-primary text-capitalize text-dark text-lg md:text-2xl anim-hover-translate-top-5px transition-3ms py-1 pr-30 flex items-center font-semibold"
                  href="#"
                >
                  {t('button.contact_us')}
                  <ImArrowUpRight2 className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row px-lg-3 py-5 px-lg-3 pl-6">
            <div className="col">
              <p className="text-lg md:text-2xl line-height-7">
                {t('about_us.description_p3_1')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
