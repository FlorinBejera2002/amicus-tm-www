import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Simona from '../../../../../public/img/team/simo.webp'
import Dana from '../../../../../public/img/team/dana potra.webp'
import Chris from '../../../../../public/img/team/chris potra.webp'
import Andrei from '../../../../../public/img/team/andrei bir.webp'
import AdrianCovaci from '../../../../../public/img/team/adi.webp'
import AvramSabou from '../../../../../public/img/team/Avram.webp'

export default function Team() {
  const t = useTranslations('team')

  return (
    <div className="bg-color-dark p-relative custom-section-1 bg-position-center bg-size-cover lazyload px-8">
      <div className="container px-2 py-4">
        <div className="row align-items-center ">
          <InViewTransition>
            <h2 className="mb-0 !w-fit py-6 text-2xl font-semibold text-gray-50 lg:text-4xl">
              {t('title-a4c')}
            </h2>
          </InViewTransition>

          <div className="md:gas grid grid-cols-2 gap-3 py-5 md:grid-cols-3 xl:grid-cols-6">
            <InViewTransition>
              <div className="mt-3 flex flex-col items-center gap-1 rounded-xl bg-gradient-to-t from-gray-800  to-transparent   duration-300 hover:scale-110 hover:bg-accent/[.6]  ">
                <Image
                  alt="Christian Potra"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={Chris}
                  width={150}
                />
                <div className="flex h-16 flex-col gap-1 p-2 text-center md:h-20 lg:h-24">
                  <b className="text-sm text-gray-50 md:text-base">
                    Christian Potra
                  </b>
                  <p className="text-xs text-gray-500 md:text-sm">
                    {t('christian-potra')}
                  </p>
                </div>
              </div>
            </InViewTransition>

            <InViewTransition damping={50} delay={0.25}>
              <div className="mt-3 flex flex-col items-center gap-1 rounded-xl bg-gradient-to-t from-gray-800  to-transparent  duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-accent/[.6] ">
                <Image
                  alt="Dana Potra"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={Dana}
                  width={150}
                />
                <div className="flex h-16 flex-col gap-1 p-2 text-center md:h-20 lg:h-24">
                  <b className="text-sm text-gray-50 md:text-base">
                    Dana Potra
                  </b>
                  <p className="text-xs text-gray-500 md:text-sm">
                    {t('dana-potra')}
                  </p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1}>
              <div className="mt-3 flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-gray-800  to-transparent  duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-accent/[.6] ">
                <Image
                  alt="Avram Sabou"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={AvramSabou}
                  width={150}
                />
                <div className="flex h-16 flex-col gap-1 p-2 text-center md:h-20 lg:h-24">
                  <b className="text-sm text-gray-50 md:text-base">
                    Avram Sabou
                  </b>
                  <p className="text-center text-xs text-gray-500 md:text-sm">
                    {t('avram-sabou')}
                  </p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1.25}>
              <div className="mt-3 flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-gray-800  to-transparent  duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-accent/[.6] ">
                <Image
                  alt="Adi Kovaci"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={AdrianCovaci}
                  width={150}
                />
                <div className="flex h-16 flex-col gap-1 p-2 text-center md:h-20 lg:h-24">
                  <b className="text-sm text-gray-50 md:text-base">
                    Adi Kovaci
                  </b>
                  <p className="text-xs text-gray-500 md:text-sm">
                    {t('adi-kovaci')}
                  </p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1.5}>
              <div className="mt-3 flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-gray-800  to-transparent  duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-accent/[.6] ">
                <Image
                  alt="Andrei Birtea"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={Andrei}
                  width={150}
                />
                <div className="flex h-16 flex-col gap-1 p-2 text-center md:h-20 lg:h-24">
                  <b className="text-sm text-gray-50 md:text-base">
                    Andrei Birtea
                  </b>
                  <p className="text-xs text-gray-500 md:text-sm ">
                    {t('andrei-birtea')}
                  </p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1.75}>
              <div className="mt-3 flex flex-col items-center gap-1 rounded-xl bg-gradient-to-t from-gray-800  to-transparent  duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-accent/[.6] ">
                <Image
                  alt="Simona Birtea"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={Simona}
                  width={150}
                />
                <div className="flex h-16 flex-col gap-1 p-2 text-center md:h-20 lg:h-24">
                  <b className="text-sm text-gray-50 md:text-base">
                    Simona Birtea
                  </b>
                  <p className="text-xs text-gray-500 md:text-sm">
                    {t('simona-birtea')}
                  </p>
                </div>
              </div>
            </InViewTransition>
          </div>
        </div>
      </div>
    </div>
  )
}
