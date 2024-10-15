import Animation from '../common/animation'
import CustomHeroBg from '../common/custom-hero-bg'
import InViewTransition from '../common/in-view-transition'

import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

import Project3 from '../../../../public/consilierea-biblică.png'
import Project5 from '../../../../public/media-arise.png'
import Project2 from '../../../../public/recuperarea-celor-căzuți.png'
import Project4 from '../../../../public/rugăciunea-de-mijlocire.png'
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
    <div className="main flex flex-col items-center bg-white " role="main">
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

        <Animation />
      </section>

      <div className="custom-page-content z-index-2 max-w-6xl">
        <div className="rounded-md bg-white p-8 shadow-lg gap-8 flex flex-col">
          <div className="row">
            <div className="col gap-3 md:gap-6 flex flex-col">
              <InViewTransition delay={0.25}>
                <h1 className="text-start text-2xl font-bold text-gray-800 mb-0 md:text-4xl">
                  {t('vision.presentation_title')}
                </h1>
              </InViewTransition>
              <div className="grid md:grid-cols-2 gap-3 md:gap-8">
                <InViewTransition delay={0.35}>
                  <p className="text-md mb-0 text-start text-gray-600 md:text-lg">
                    {t('vision.presentation_p1_1')}
                  </p>
                </InViewTransition>
                <InViewTransition delay={0.35}>
                  <p className="text-md mb-0 text-start text-gray-600 md:text-lg">
                    {t('vision.presentation_p2')}
                  </p>
                </InViewTransition>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <InViewTransition delay={0.55}>
                <h1 className="text-2xl font-bold text-gray-800 md:text-4xl">
                  {t('vision.projects_title')}
                </h1>
              </InViewTransition>
            </div>
          </div>

          <div className="row">
            <div className="md:order-2 col-md-6 flex flex-col md:gap-6 gap-3">
              <InViewTransition delay={0.7}>
                <h3 className="text-start text-xl font-bold m-0 text-gray-800 md:text-2xl">
                  {t('vision.projects_p1_2')}
                </h3>
              </InViewTransition>
              <InViewTransition delay={0.25}>
                <p className="text-gray-600 md:text-lg m-0 text-wrap">
                  {t('vision.projects_p1_3')}
                </p>
              </InViewTransition>
            </div>
            <div className="md:order-1 col-md-6">
              <InViewTransition delay={0.65}>
                <Image
                  alt="Christian images"
                  className="aspect-video w-full rounded-md object-cover shadow-lg "
                  src={Project1}
                />
              </InViewTransition>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 order-md-1 md:order-2 flex flex-col md:gap-6 gap-3">
              <InViewTransition delay={0.25}>
                <h3 className="text-start text-xl font-semibold mb-0 text-gray-800 md:text-2xl">
                  {t('vision.projects_p2_1')}
                </h3>
              </InViewTransition>
              <InViewTransition delay={0.25}>
                <p className="text-md text-start mb-0 text-gray-600 md:text-lg ">
                  {t('vision.projects_p2_2')}
                </p>
              </InViewTransition>
            </div>
            <div className="col-md-6 order-md-2 md:order-1">
              <InViewTransition delay={0.25}>
                <Image
                  alt="Christian images"
                  className="aspect-video w-full rounded-md object-cover shadow-lg "
                  src={Project2}
                />
              </InViewTransition>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 md:order-2 flex flex-col md:gap-6 gap-3">
              <InViewTransition delay={0.25}>
                <h3 className="text-start text-xl mb-0 font-semibold text-gray-800 md:text-2xl">
                  {t('vision.projects_p3_1')}
                </h3>
              </InViewTransition>
              <InViewTransition delay={0.25}>
                <p className="text-md text-gray-600 mb-0 md:text-lg">
                  {t('vision.projects_p3_2')}
                </p>
              </InViewTransition>
            </div>
            <div className="col-md-6 md:order-1">
              <InViewTransition delay={0.25}>
                <Image
                  alt="Christian images"
                  className="aspect-video w-full rounded-md object-cover shadow-lg "
                  src={Project3}
                />
              </InViewTransition>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 order-md-1 md:order-2 flex flex-col md:gap-6 gap-3">
              <InViewTransition delay={0.25}>
                <h3 className="text-start text-xl mb-0 font-semibold text-gray-800 md:text-2xl">
                  {t('vision.projects_p3_7')}
                </h3>
              </InViewTransition>
              <InViewTransition delay={0.25}>
                <p className="text-md text-gray-600 mb-0 md:text-lg">
                  {t('vision.projects_p3_6')}
                </p>
              </InViewTransition>
            </div>
            <div className="col-md-6 order-md-2 md:order-1">
              <InViewTransition delay={0.25}>
                <Image
                  alt="Christian images"
                  className="aspect-video w-full rounded-md object-cover shadow-lg "
                  src={Project4}
                />
              </InViewTransition>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 md:order-2 flex flex-col md:gap-6 gap-3">
              <InViewTransition delay={0.25}>
                <h3 className="text-start text-xl mb-0 font-semibold text-gray-800 md:text-2xl">
                  {t('vision.projects_p4_1')}
                </h3>
              </InViewTransition>
              <InViewTransition delay={0.25}>
                <p className="text-md text-gray-600 mb-0 md:text-lg">
                  {t('vision.projects_p4_2')}
                </p>
              </InViewTransition>
            </div>
            <div className="col-md-6 md:order-1">
              <InViewTransition delay={0.25}>
                <Image
                  alt="Christian images"
                  className="aspect-video w-full rounded-md object-cover shadow-lg "
                  src={Project5}
                />
              </InViewTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
