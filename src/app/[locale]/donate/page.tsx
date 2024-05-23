import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import CECLogo from '../../../../public/CEC Bank.svg'

const About = () => {
  const t = useTranslations()

  return (
    <div className="main" role="main">
      <section className="page-header p-relative bg-quaternary m-0 overflow-hidden border-0 p-0">
        <CustomHeroBg />
        <div className="">
          <div className="row align-items-center my-5 pb-4 pt-5">
            <div className="col my-5 pb-5 text-center">
              <div className="py-4">
                <ul className="breadcrumb d-flex justify-content-center text-4-5 font-weight-medium mb-2">
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
            </div>
          </div>
        </div>
        <Animation />
      </section>

      <div className="custom-page-content p-relative z-index-2">
        <div className="grid md:grid-cols-2 px-2 custom-padding-top-1 custom-padding-bottom-1 px-lg-5 bg-light md:mx-48 rounded-md">
          <div>
            <h1 className="text-3xl font-bold mb-6">{t('donate.title')}</h1>

            <p className="text-base text-gray-800 mb-4">
              {t('donate.paragraf_1')}
            </p>

            <p className="text-base text-gray-800 mb-4">
              {t('donate.paragraf_2')}
            </p>

            <p className="text-base text-gray-800 mb-4">
              {t('donate.paragraf_3')}
            </p>

            <p className="text-base text-gray-800 mb-4">
              {t('donate.paragraf_4')}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-3 rounded-md bg-gray-300 flex flex-col gap-3 items-center">
              <div className="flex justify-center">
                <Image alt="Logo for the bank" className="w-44" src={CECLogo} />
              </div>
              <p className="">{t('donate.name')} </p>
              <div className="flex flex-col gap-1">
                <p className="m-0 font-semibold">{t('donate.ron')} </p>
                <p>IBAN: RO36CECETM0130RON0998570</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="m-0 font-semibold">{t('donate.dollars')}</p>
                <p>IBAN: RO37CECETM01B8USD0998572</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
