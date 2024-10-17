import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight, FaHandsHelping } from 'react-icons/fa'
import Collaborator from '../../../../public/collaborator.webp'
import Animation from '../common/animation'
import CustomHeroBg from '../common/custom-hero-bg'
import InViewTransition from '../common/in-view-transition'

export const metadata: Metadata = {
  title: 'Arise for Christ | Podcast'
}

export default function Book() {
  const t = useTranslations()

  return (
    <div className="main flex flex-col items-center bg-white">
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
                    {t('collaborator.title')}
                  </li>
                </ul>
                <h1 className="text-color-light font-weight-bold text-8">
                  {t('collaborator.subtitle')}
                </h1>
              </div>
            </InViewTransition>
          </div>
        </div>
        <Animation />
      </section>

      <div className="custom-page-content z-2 max-w-4xl xl:max-w-5xl">
        <div className="rounded-md bg-white shadow-lg p-8  md:p-12 flex flex-col gap-8">
          <div className=" flex-col flex  md:flex-row items-center justify-center gap-6 w-full">
            <InViewTransition delay={0.25}>
              <div className=" flex justify-center">
                <Image
                  src={Collaborator}
                  alt="Inteligența Divină"
                  className=" rounded-md"
                  width={450}
                  height={300}
                />
              </div>
            </InViewTransition>

            <InViewTransition delay={0.75}>
              <div className="flex flex-col gap-8 max-w-[1000px]">
                <InViewTransition delay={0.5}>
                  <h2 className="text-lg font-bold text-gray-900 m-0">
                    {t('collaborator.title_1')}
                  </h2>
                </InViewTransition>
                <div className=" flex flex-col gap-4">
                  <p className="text-gray-600 m-0">
                    {t('collaborator.paragraf_1')}
                  </p>
                  <p className="text-gray-600 m-0">
                    {t('collaborator.paragraf_2')}
                  </p>
                </div>
              </div>
            </InViewTransition>
          </div>

          <InViewTransition delay={1.25}>
            <div className="flex justify-center">
              <Link
                className="w-fit text-decoration-none flex gap-2 items-center justify-center self-start rounded-md bg-accent px-12 py-2.5 font-bold text-black disabled:pointer-events-none md:!mt-0 md:self-center"
                href="mailto:info@ariseforchrist.com?subject=Vreau%20să%20mă%20implic&body=Mă%20numesc%20...%20și%20vreau%20să%20mă%20implic%20în%20lucrare"
              >
                {t('collaborator.send')}
                <FaHandsHelping />
              </Link>
            </div>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}
