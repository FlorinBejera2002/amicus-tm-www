'use client'
import InViewTransition from '../common/in-view-transition'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaAngleRight } from 'react-icons/fa'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// eslint-disable-next-line react-refresh/only-export-components

const About = () => {
  const pathname = usePathname()
  const language = pathname.split('/')[1]

  const t = useTranslations()

  const leftSectionText = [
    <h1 className="text-3xl font-bold mb-6" key={1}>
      {t('donate.title')}
    </h1>,

    <p className=" text-gray-800 mb-4" key={2}>
      {t('donate.paragraf_1')}
    </p>,

    <p className=" text-gray-800 mb-4" key={3}>
      {t('donate.paragraf_2')}
    </p>,

    <p className=" text-gray-800 mb-4" key={4}>
      {t('donate.paragraf_3')}
    </p>,

    <p className=" text-gray-800 mb-4" key={5}>
      {t('donate.paragraf_4')}
    </p>
  ]

  return (
    <div className="main" role="main">
      <section className="page-header p-relative bg-quaternary m-0 overflow-hidden border-0 p-0">
        <InViewTransition
          damping={100}
          delay={0.75}
          duration={1}
          yIn={0}
          yOut={0}
        >
          <CustomHeroBg />
        </InViewTransition>
        <div className="row align-items-center !my-[31px] pb-4 pt-5">
          <div className="col my-5 pb-5 text-center">
            <InViewTransition delay={0.25}>
              <div className="py-4">
                <ul className="breadcrumb flex gap-2 justify-content-center text-4-5 font-weight-medium mb-2">
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
                    {t('header.donate')}
                  </li>
                </ul>
                <h1 className="text-color-light font-weight-bold text-10">
                  {t('header.donate')}
                </h1>
              </div>
            </InViewTransition>
          </div>
        </div>

        <Animation />
      </section>

      <div className="custom-page-content pb-4 p-relative z-index-2 text-md md:text-lg flex w-full justify-center">
        <div className="max-w-6xl flex-col justify-around gap-24 bg-white rounded-md !p-8 md:!p-12 mt-4  md:items-center">
          <div className="flex-[1.75]">
            {leftSectionText.map((item, idx) => (
              <InViewTransition delay={0.25 * idx} key={idx}>
                {item}
              </InViewTransition>
            ))}
          </div>

          <InViewTransition delay={0.25}>
            <Link
              className="!no-underline"
              href={`/${language}/donate/stripe`}
              target="_blank"
            >
              <span className="text-black bg-[#e3ae04]  rounded-md py-2 px-4 font-semibold flex gap-2 items-center w-40">
                {t('donate.donate')}
                <BiSolidDonateHeart />
              </span>
            </Link>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}

export default About
