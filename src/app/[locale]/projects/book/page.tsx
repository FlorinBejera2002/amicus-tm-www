import Animation from '../../common/animation'
import CustomHeroBg from '../../common/custom-hero-bg'
import InViewTransition from '../../common/in-view-transition'

import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'

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
                    {t('book.book')}
                  </li>
                </ul>
                <h1 className="text-color-light font-weight-bold text-10">
                  {t('book.title_1')}
                </h1>
              </div>
            </InViewTransition>
          </div>
        </div>
        <Animation />
      </section>

      <div className="custom-page-content z-2 max-w-4xl xl:max-w-5xl">
        <div className="rounded-md bg-white shadow-lg p-8 gap-6  md:p-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <InViewTransition delay={0.25}>
            <div className=" flex justify-center">
              <Image
                src="/book-image.png"
                alt="Inteligența Divină"
                className="w-full"
                width={800}
                height={800}
              />
            </div>
          </InViewTransition>

          <InViewTransition delay={0.75}>
            <div className="flex flex-col gap-4">
              <InViewTransition delay={0.5}>
                <div className=" text-center flex flex-col gap-4">
                  <h2 className="text-3xl font-bold text-gray-900 m-0">
                    {t('book.title_1')}
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-700 m-0">
                    {t('book.subtitle')}
                  </h3>
                </div>
              </InViewTransition>
              <div className=" flex flex-col gap-4">
                <p className="text-gray-600 m-0">{t('book.paragraf_1')}</p>
                <p className="text-gray-600 m-0">{t('book.paragraf_2')}</p>
                <p className="text-gray-600 m-0">{t('book.paragraf_3')}</p>
                <p className="text-gray-600 m-0">{t('book.paragraf_4')}</p>
                {/* <div className="flex justify-center">
                  <Link
                    href="https://www.kingdom-design.org/produs/inteligenta-divina-scott-hogle/"
                    className="flex min-w-fit rounded-md bg-accent px-3 py-2.5 text-xs font-semibold text-black !no-underline"
                  >
                    {t('book.button')}
                  </Link>
                </div> */}
              </div>
            </div>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}
