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
            <h2 className="text-2xl lg:text-4xl text-gray-50 font-semibold py-6 mb-0 !w-fit">
              {t('title-a4c')}
            </h2>
          </InViewTransition>

          <div className="py-5 grid gap-3 md:gas grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            <InViewTransition>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col  items-center   hover:scale-110 hover:bg-[#e3ae04]/[.6] duration-300  ">
                <Image
                  alt="Christian Potra"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={Chris}
                  width={150}
                />
                <div className="flex flex-col text-center h-16 md:h-20 lg:h-24 p-2 gap-1">
                  <b className="text-gray-50 text-sm md:text-base">
                    Christian Potra
                  </b>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {t('christian-potra')}
                  </p>
                </div>
              </div>
            </InViewTransition>

            <InViewTransition damping={50} delay={0.75}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-[#e3ae04]/[.6] duration-300 ">
                <Image
                  alt="Dana Potra"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={Dana}
                  width={150}
                />
                <div className="flex flex-col text-center h-16 md:h-20 lg:h-24 p-2 gap-1">
                  <b className="text-gray-50 text-sm md:text-base">
                    Dana Potra
                  </b>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {t('dana-potra')}
                  </p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-[#e3ae04]/[.6] duration-300 ">
                <Image
                  alt="Avram Sabou"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={AvramSabou}
                  width={150}
                />
                <div className="flex flex-col text-center h-16 md:h-20 lg:h-24 p-2 gap-1">
                  <b className="text-gray-50 text-sm md:text-base">
                    Avram Sabou
                  </b>
                  <p className="text-gray-500 text-xs md:text-sm text-center">
                    {t('avram-sabou')}
                  </p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1.25}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-[#e3ae04]/[.6] duration-300 ">
                <Image
                  alt="Adi Kovaci"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={AdrianCovaci}
                  width={150}
                />
                <div className="flex flex-col text-center h-16 md:h-20 lg:h-24 p-2 gap-1">
                  <b className="text-gray-50 text-sm md:text-base">
                    Adi Kovaci
                  </b>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {t('adi-kovaci')}
                  </p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1.5}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-[#e3ae04]/[.6] duration-300 ">
                <Image
                  alt="Andrei Birtea"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={Andrei}
                  width={150}
                />
                <div className="flex flex-col text-center h-16 md:h-20 lg:h-24 p-2 gap-1">
                  <b className="text-gray-50 text-sm md:text-base">
                    Andrei Birtea
                  </b>
                  <p className="text-gray-500 text-xs md:text-sm ">
                    {t('andrei-birtea')}
                  </p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1.75}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-[#e3ae04]/[.6] duration-300 ">
                <Image
                  alt="Simona Birtea"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={Simona}
                  width={150}
                />
                <div className="flex flex-col text-center h-16 md:h-20 lg:h-24 p-2 gap-1">
                  <b className="text-gray-50 text-sm md:text-base">
                    Simona Birtea
                  </b>
                  <p className="text-gray-500 text-xs md:text-sm">
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
