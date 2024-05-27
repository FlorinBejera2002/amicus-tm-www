import InViewTransition from '../common/in-view-transition'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import Project5 from '../../../../public/vision-projects5.webp'
import Project4 from '../../../../public/vision-projects4.webp'
import Project2 from '../../../../public/vision-projects3.webp'
import Project3 from '../../../../public/vision-projects2.webp'
import Project1 from '../../../../public/vision-projects1.webp'

const Divider = () => (
  <div className="hidden md:flex h-auto w-[1px] bg-gray-400" />
)

export default function Vision() {
  const t = useTranslations('')

  return (
    <div className="main bg-black pb-24 flex flex-col items-center" role="main">
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
        <div className="w-screen">
          <div className="row align-items-center my-5 pb-4 pt-5">
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
                    <FaAngleRight className="text-color-primary mt-0.5 z-1" />
                    <li className="text-color-primary active z-[1]">
                      {t('header.vision')}
                    </li>
                  </ul>
                  <h1 className="text-color-light font-weight-bold text-10">
                    {t('header.vision')}
                  </h1>
                </div>
              </InViewTransition>
            </div>
          </div>
        </div>

        <Animation />
      </section>
      <section className="max-w-6xl flex justify-center flex-col md:gap-10 !p-8 md:mt-5">
        <InViewTransition delay={0.35}>
          <h1 className="text-white text-3xl md:text-6xl !font-semibold pb-3 md:pb-10 text-start">
            {t('vision.presentation_title')}
          </h1>
        </InViewTransition>
        <InViewTransition delay={0.45}>
          <div className="flex flex-col md:flex-row !gap-0 md:!gap-10">
            <p className="!font-semibold text-md md:text-lg text-gray-400 text-start mb-0">
              {t('vision.presentation_p1_1')}
            </p>

            <Divider />

            <p className="!font-semibold text-md md:text-lg text-gray-400 text-start mb-0">
              {t('vision.presentation_p2')}
            </p>
          </div>
        </InViewTransition>

        <InViewTransition delay={0.55}>
          <h1 className="text-white text-3xl md:text-6xl !font-semibold pt-5 md:pt-0 pb-3">
            {t('vision.projects_title')}
          </h1>
        </InViewTransition>

        <div className="flex flex-col md:flex-row !gap-0 md:!gap-16">
          <InViewTransition delay={0.65}>
            <Image
              alt="Christian images"
              className="object-cover hidden md:flex aspect-video flex-1 rounded-md shadow-2xl shadow-gray-400"
              src={Project1}
            />
          </InViewTransition>

          <div className="flex flex-col flex-1">
            <InViewTransition delay={0.7}>
              <h3 className="!font-semibold text-2xl md:text-4xl text-start text-white">
                {t('vision.projects_p1_2')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.75}>
              <p className="md:px-0 text-md md:text-lg font-semibold text-gray-400 text-start">
                {t('vision.projects_p1_3')}
              </p>
            </InViewTransition>
          </div>
        </div>
        <div className="flex flex-col md:flex-row !gap-0 md:!gap-16 mt-3">
          <div className="flex flex-col flex-1">
            <InViewTransition delay={0.25}>
              <h3 className="!font-semibold text-2xl md:text-4xl text-start text-white">
                {t('vision.projects_p2_1')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.25}>
              <p className="text-md md:text-lg font-semibold text-gray-400 text-start ">
                {t('vision.projects_p2_2')}
              </p>
            </InViewTransition>
          </div>
          <InViewTransition delay={0.25}>
            <Image
              alt="Christian images"
              className="rounded-md flex-1 hidden md:flex shadow-2xl shadow-gray-400 object-cover w-1/2"
              src={Project2}
            />
          </InViewTransition>
        </div>
        <div className="flex flex-col md:flex-row !gap-0 md:!gap-16 mt-3">
          <InViewTransition delay={0.25}>
            <Image
              alt="Christian images"
              className="object-cover rounded-md hidden md:flex flex-1 shadow-2xl shadow-gray-400"
              src={Project3}
            />
          </InViewTransition>
          <div className="flex flex-col flex-1">
            <InViewTransition delay={0.25}>
              <h3 className="!font-semibold text-2xl md:text-4xl text-start text-white">
                {t('vision.projects_p3_1')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.25}>
              <p className="text-md md:text-lg font-semibold text-gray-400">
                {t('vision.projects_p3_2')}
              </p>
            </InViewTransition>
          </div>
        </div>
        <div className="flex flex-col md:flex-row !gap-0 md:!gap-16 mt-3">
          <div className="flex flex-col flex-1">
            <InViewTransition delay={0.25}>
              <h3 className="!font-semibold text-2xl md:text-4xl text-start text-white">
                {t('vision.projects_p3_7')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.25}>
              <p className="text-md md:text-lg font-semibold text-gray-400">
                {t('vision.projects_p3_6')}
              </p>
            </InViewTransition>
          </div>
          <InViewTransition delay={0.25}>
            <Image
              alt="Christian images"
              className="object-cover rounded-md hidden md:flex shadow-2xl shadow-gray-400 flex-1 w-1/2"
              src={Project4}
            />
          </InViewTransition>
        </div>
        <div className="flex flex-col md:flex-row !gap-0 md:!gap-16 mt-3">
          <InViewTransition delay={0.25}>
            <Image
              alt="Christian images"
              className="object-cover rounded-md hidden md:flex shadow-2xl shadow-gray-400 flex-1"
              src={Project5}
            />
          </InViewTransition>
          <div className="flex flex-col flex-1">
            <InViewTransition delay={0.25}>
              <h3 className="!font-semibold text-2xl md:text-4xl text-start text-white">
                {t('vision.projects_p4_1')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.25}>
              <p className="text-md md:text-lg font-semibold text-gray-400">
                {t('vision.projects_p4_2')}
              </p>
            </InViewTransition>
          </div>
        </div>
      </section>
    </div>
  )
}
