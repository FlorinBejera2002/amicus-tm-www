import Animation from '../common/animation'
import CustomHeroBg from '../common/custom-hero-bg'
import InViewTransition from '../common/in-view-transition'

import { useTranslations } from 'next-intl'

import { Metadata } from 'next'

import Image from 'next/image'
import Link from 'next/link'
import { FaDonate } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'

import CECLogo from '../../../../public/CEC Bank.svg'
import PayPal from '../../../../public/PayPal.png'
import QRPayPal from '../../../../public/QRPayPal.png'
import RevolutLogo from '../../../../public/Revolut-Logo.png'
import QRStripe from '../../../../public/qr-stripe.png'
import StripeLogo from '../../../../public/srtripe.png'

export const metadata: Metadata = {
  title: 'Arise for Christ | Donate'
}

const About = () => {
  const t = useTranslations()
  const leftSectionText = [
    <h1 className="mb-3 text-2xl font-bold md:mb-6 md:pt-0 md:text-3xl" key={1}>
      {t('donate.title')}
    </h1>,
    <p className="mb-2 text-gray-800 md:mb-4" key={2}>
      {t('donate.paragraf_1')}
    </p>,
    <p className="mb-2 text-gray-800 md:mb-4" key={3}>
      {t('donate.paragraf_2')}
    </p>,
    <p className="mb-2 text-gray-800 md:mb-4" key={4}>
      {t('donate.paragraf_3')}
    </p>,
    <p className="mb-0 text-gray-800" key={5}>
      {t('donate.paragraf_4')}
    </p>
  ]

  return (
    <div className="main" role="main">
      <section className="page-header p-relative bg-quaternary m-0 overflow-hidden border-0 p-0 ">
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
                <h1 className="text-color-light font-weight-bold text-4xl md:text-5xl">
                  {t('header.donate')}
                </h1>
              </div>
            </InViewTransition>
          </div>
        </div>

        <Animation />
      </section>

      <div className="custom-page-content p-relative z-index-2 text-md flex w-full justify-center ">
        <div className="max-w-6xl flex flex-col content-center rounded-md bg-white p-8 shadow-lg md:p-12 gap-10">
          <div className=" rounded-md bg-white md:flex md:items-center">
            <div className="flex-[1.75]">
              {leftSectionText.map((item, idx) => (
                <InViewTransition delay={0.25 * idx} key={idx}>
                  {item}
                </InViewTransition>
              ))}
            </div>
          </div>

          <div className="max-w-full">
            <InViewTransition delay={0.25}>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {t('donate.title_2')}
              </h1>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:flex-row xl:grid-cols-4">
                <InViewTransition delay={0.25}>
                  <div className=" flex w-full flex-col items-center justify-between gap-10 rounded-lg bg-gray-50 p-10 shadow-md md:h-96">
                    <Image
                      alt="Logo for the bank"
                      className="w-32"
                      src={RevolutLogo}
                    />
                    <div className="flex flex-col items-center justify-center text-center">
                      <div>
                        <p className="mb-1 font-semibold text-gray-700">
                          {t('donate.phone')}
                        </p>
                        <p className="text-gray-600">+40 773 307 292</p>
                      </div>

                      <p className="font-semibold text-gray-700">
                        @ariseforchrist
                      </p>
                      <Link
                        className="!no-underline"
                        href="https://business.revolut.com/overview"
                        target="_blank"
                      >
                        <Image
                          alt="QR Code for donation"
                          className="w-28"
                          src={QRStripe}
                        />
                      </Link>
                    </div>
                  </div>
                </InViewTransition>
                <InViewTransition delay={0.25}>
                  <div className="flex flex-col items-center justify-between gap-16 rounded-lg bg-purple-50 p-10 shadow-md md:h-96">
                    <Image
                      alt="Logo for the bank"
                      className="w-24"
                      src={StripeLogo}
                    />
                    <div className="flex flex-col items-center justify-center gap-10 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <Link
                          className="!no-underline"
                          href="https://buy.stripe.com/dR66oueifggya3ubII"
                          target="_blank"
                        >
                          <span className="flex cursor-pointer items-center gap-2 rounded-md bg-accent px-3 py-2 text-center font-semibold text-black">
                            <FaDonate />
                            {t('donate.donate')}
                          </span>
                        </Link>
                      </div>
                      <Link
                        className="!no-underline"
                        href="https://buy.stripe.com/dR66oueifggya3ubII"
                        target="_blank"
                      >
                        <Image
                          alt="QR Code for donation"
                          className="w-28"
                          src={QRStripe}
                        />
                      </Link>
                    </div>
                  </div>
                </InViewTransition>

                <InViewTransition delay={0.25}>
                  <div className=" flex w-full flex-col items-center justify-between gap-16 rounded-lg bg-blue-50 p-10 shadow-md md:h-96">
                    <Image
                      alt="Logo for the bank"
                      className="w-36"
                      src={PayPal}
                    />
                    <div className="flex flex-col items-center justify-center gap-10 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <Link
                          className="!no-underline"
                          href="https://www.paypal.com/donate/?hosted_button_id=D8M92EYVFPSM6"
                          target="_blank"
                        >
                          <span className="flex cursor-pointer items-center gap-2 rounded-md bg-accent px-3 py-2 text-center font-semibold text-black">
                            <FaDonate />
                            {t('donate.donate')}
                          </span>
                        </Link>
                      </div>
                      <Link
                        className="!no-underline"
                        href="https://www.paypal.com/donate/?hosted_button_id=D8M92EYVFPSM6"
                        target="_blank"
                      >
                        <Image
                          alt="QR Code for donation"
                          className="w-[104px]"
                          src={QRPayPal}
                        />
                      </Link>
                    </div>
                  </div>
                </InViewTransition>
                <InViewTransition delay={0.25}>
                  <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-green-50 p-10 shadow-md md:h-96 lg:w-full">
                    <Image
                      alt="Logo for the bank"
                      className="w-48"
                      src={CECLogo}
                    />
                    <div className="flex flex-col text-center gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-gray-700">
                          {t('donate.beneficiary')}
                        </span>
                        <span className="text-gray-600">
                          {t('donate.name')}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-gray-700">
                          {t('donate.ron')}
                        </span>
                        <span className="text-xs text-gray-600">
                          RO36CECETM0130RON0998570
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-gray-700">
                          {t('donate.dollars')}
                        </span>
                        <span className="text-xs text-gray-600">
                          RO37CECETM01B8USD0998572
                        </span>
                      </div>
                    </div>
                  </div>
                </InViewTransition>
              </div>
            </InViewTransition>
          </div>

          <InViewTransition delay={0.25}>
            <h1 className="mb-3 text-2xl md:text-3xl font-bold" key={1}>
              {t('donate.title_3')}
            </h1>
            <div className="w-full md:w-2/3 ">
              <p className="mb-0">{t('donate.paragraf_5')}</p>
            </div>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}

export default About
