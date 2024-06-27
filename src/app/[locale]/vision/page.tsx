import InViewTransition from '../common/in-view-transition'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaAngleRight } from 'react-icons/fa'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

import Project5 from '../../../../public/vision-projects5.webp'
import Project4 from '../../../../public/vision-projects4.webp'
import Project2 from '../../../../public/vision-projects3.webp'
import Project3 from '../../../../public/vision-projects2.webp'
import Project1 from '../../../../public/vision-projects1.webp'

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'metadata.vision' })

  return {
    description: t('description'),
    icons: [
      { rel: 'icon', url: '/logo.ico' },
      { rel: 'apple-touch-icon', url: '/logo.ico' }
    ],
    keywords: t('keywords'),
    og: {
      description: t('description'),
      title: t('title')
    },
    title: t('title')
  } as Metadata
}

export default function Vision() {
  const t = useTranslations()

  return (
    <div className="main flex flex-col items-center bg-black pb-24" role="main">
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
        <div className="w-screen">
          <div className="row align-items-center my-5 pb-4 pt-5">
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
                    <FaAngleRight className="text-color-primary z-1 mt-0.5" />
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
      <section className="flex max-w-6xl flex-col justify-center !p-8 md:mt-5 md:gap-10">
        <InViewTransition delay={0.35}>
          <h1 className="pb-3 text-start text-3xl !font-semibold text-white md:pb-10 md:text-6xl">
            {t('vision.presentation_title')}
          </h1>
        </InViewTransition>
        <InViewTransition delay={0.45}>
          <div className="flex flex-col !gap-0 md:flex-row md:!gap-10">
            <p className="text-md mb-0 text-start !font-semibold text-gray-400 md:text-lg">
              {t('vision.presentation_p1_1')}
            </p>

            <div className="hidden h-auto w-[1px] bg-gray-400 md:flex" />

            <p className="text-md mb-0 text-start !font-semibold text-gray-400 md:text-lg">
              {t('vision.presentation_p2')}
            </p>
          </div>
        </InViewTransition>

        <InViewTransition delay={0.55}>
          <h1 className="pb-3 pt-5 text-3xl !font-semibold text-white md:pt-0 md:text-6xl">
            {t('vision.projects_title')}
          </h1>
        </InViewTransition>

        <div className="flex flex-col !gap-0 md:flex-row md:!gap-16">
          <InViewTransition delay={0.65}>
            <Image
              alt="Christian images"
              className="hidden aspect-video flex-1 rounded-md object-cover shadow-2xl shadow-gray-400 md:flex"
              src={Project1}
            />
          </InViewTransition>

          <div className="flex flex-1 flex-col">
            <InViewTransition delay={0.7}>
              <h3 className="text-start text-2xl !font-semibold text-white md:text-4xl">
                {t('vision.projects_p1_2')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.25}>
              <p className="text-md text-start font-semibold text-gray-400 md:px-0 md:text-lg">
                {t('vision.projects_p1_3')}
              </p>
            </InViewTransition>
          </div>
        </div>
        <div className="mt-3 flex flex-col !gap-0 md:flex-row md:!gap-16">
          <div className="flex flex-1 flex-col">
            <InViewTransition delay={0.25}>
              <h3 className="text-start text-2xl !font-semibold text-white md:text-4xl">
                {t('vision.projects_p2_1')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.25}>
              <p className="text-md text-start font-semibold text-gray-400 md:text-lg ">
                {t('vision.projects_p2_2')}
              </p>
            </InViewTransition>
          </div>
          <InViewTransition customClassname="flex flex-1" delay={0.25}>
            <Image
              alt="Christian images"
              className="hidden w-1/2 flex-1 rounded-md object-cover shadow-2xl shadow-gray-400 md:flex"
              src={Project2}
            />
          </InViewTransition>
        </div>
        <div className="mt-3 flex flex-col !gap-0 md:flex-row md:!gap-16">
          <InViewTransition delay={0.25}>
            <Image
              alt="Christian images"
              className="hidden flex-1 rounded-md object-cover shadow-2xl shadow-gray-400 md:flex"
              src={Project3}
            />
          </InViewTransition>
          <div className="flex flex-1 flex-col">
            <InViewTransition delay={0.25}>
              <h3 className="text-start text-2xl !font-semibold text-white md:text-4xl">
                {t('vision.projects_p3_1')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.25}>
              <p className="text-md font-semibold text-gray-400 md:text-lg">
                {t('vision.projects_p3_2')}
              </p>
            </InViewTransition>
          </div>
        </div>
        <div className="mt-3 flex flex-col !gap-0 md:flex-row md:!gap-16">
          <div className="flex flex-1 flex-col">
            <InViewTransition delay={0.25}>
              <h3 className="text-start text-2xl !font-semibold text-white md:text-4xl">
                {t('vision.projects_p3_7')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.25}>
              <p className="text-md font-semibold text-gray-400 md:text-lg">
                {t('vision.projects_p3_6')}
              </p>
            </InViewTransition>
          </div>
          <InViewTransition customClassname="flex flex-1" delay={0.25}>
            <Image
              alt="Christian images"
              className="hidden w-1/2 flex-1 rounded-md object-cover shadow-2xl shadow-gray-400 md:flex"
              src={Project4}
            />
          </InViewTransition>
        </div>
        <div className="mt-3 flex flex-col !gap-0 md:flex-row md:!gap-16">
          <InViewTransition delay={0.25}>
            <Image
              alt="Christian images"
              className="hidden flex-1 rounded-md object-cover shadow-2xl shadow-gray-400 md:flex"
              src={Project5}
            />
          </InViewTransition>
          <div className="flex flex-1 flex-col">
            <InViewTransition delay={0.25}>
              <h3 className="text-start text-2xl !font-semibold text-white md:text-4xl">
                {t('vision.projects_p4_1')}
              </h3>
            </InViewTransition>
            <InViewTransition delay={0.25}>
              <p className="text-md font-semibold text-gray-400 md:text-lg">
                {t('vision.projects_p4_2')}
              </p>
            </InViewTransition>
          </div>
        </div>
      </section>
    </div>
  )
}
