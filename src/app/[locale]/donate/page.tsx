import InViewTransition from '../common/in-view-transition'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaDonate } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import CECLogo from '../../../../public/CEC Bank.svg'

const About = () => {
  const t = useTranslations()
  const leftSectionText = [
    <h1 className="mb-6 text-3xl font-bold" key={1}>
      {t('donate.title')}
    </h1>,

    <p className=" mb-4 text-gray-800" key={2}>
      {t('donate.paragraf_1')}
    </p>,

    <p className=" mb-4 text-gray-800" key={3}>
      {t('donate.paragraf_2')}
    </p>,

    <p className=" mb-4 text-gray-800" key={4}>
      {t('donate.paragraf_3')}
    </p>,

    <p className=" mb-4 text-gray-800" key={5}>
      {t('donate.paragraf_4')}
    </p>
  ]

  return (
    <div className="main" role="main">
      <section className="page-header p-relative bg-quaternary m-0 overflow-hidden border-0 p-0">
        <InViewTransition
          damping={100}
          delay={0.25}
          duration={0.5}
          yIn={0}
          yOut={0}
        >
          <CustomHeroBg />
        </InViewTransition>
        <div className="row align-items-center !my-[31px] pb-4 pt-5">
          <div className="col my-5 pb-5 text-center">
            <InViewTransition delay={0.25}>
              <div className="py-4">
                <ul className="breadcrumb justify-content-center text-4-5 font-weight-medium mb-2 flex gap-2">
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

      <div className="custom-page-content p-relative z-index-2 text-md -mb20 flex w-full justify-center pb-4 md:text-lg">
        <div className="flex-col content-center">
          <div className="mt-4 max-w-6xl gap-24 rounded-md bg-white !p-8 md:flex md:items-center  md:!p-12">
            <div className="flex-[1.75]">
              {leftSectionText.map((item, idx) => (
                <InViewTransition delay={0.25 * idx} key={idx}>
                  {item}
                </InViewTransition>
              ))}
            </div>

            <InViewTransition delay={0.25}>
              {/* <Link
                className="!no-underline"
                href="https://buy.stripe.com/test_bIY9En9Qqelp0dW7ss"
                target="_blank"
              > */}
              <span className="flex w-40 cursor-pointer items-center gap-2 rounded-s-full bg-accent px-4 py-4 font-semibold text-black">
                <FaDonate />
                {t('donate.donate')}
              </span>
              <span className="text-xs text-gray-400">
                *stripe integration coming soon
              </span>
              {/* </Link> */}
            </InViewTransition>
          </div>

          <div className="md:-mt-10 ">
            <InViewTransition delay={0.25}>
              <h1 className="mb-6 mt-5 px-10 text-3xl font-bold" key={1}>
                {t('donate.title_2')}
              </h1>
              <div className="flex flex-col gap-3 rounded-md px-10">
                <div>
                  <Image
                    alt="Logo for the bank"
                    className="w-44"
                    src={CECLogo}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="m-0 font-semibold">
                    {t('donate.beneficiary')}{' '}
                  </p>
                  <p>{t('donate.name')}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="m-0 font-semibold">{t('donate.ron')} </p>
                  <p>IBAN: RO36CECETM0130RON0998570</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="m-0 font-semibold">{t('donate.dollars')}</p>
                  <p>IBAN: RO37CECETM01B8USD0998572</p>
                </div>
                <div className="mt-5">
                  <h1 className="mb-6 text-3xl font-bold " key={1}>
                    {t('donate.title_3')}
                  </h1>
                  <p className="md:w-2/3">{t('donate.paragraf_5')}</p>
                </div>
              </div>
            </InViewTransition>
          </div>
          <div className="hidden h-16 w-full rounded-md bg-white lg:flex" />
        </div>
      </div>
    </div>
  )
}

export default About
