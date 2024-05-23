import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
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
      <div className="md:mx-48 px-2 py-4">
        <div className="row align-items-center ">
          <b className="text-3xl text-gray-50 font-bold py-6 text-center">
            {t('title-a4c')}
          </b>

          <div className="py-5 grid gap-3 md:gas grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            <InViewTransition>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center   hover:scale-110 hover:bg-indigo-900 duration-300  ">
                <Image
                  alt="Christian Potra"
                  className="border-b border-gray-600 py-3"
                  height={150}
                  src={Chris}
                  width={150}
                />
                <div className="flex flex-col justify-center items-center h-24 px-3">
                  <b className="text-gray-50">Christian Potra</b>
                  <p className="text-gray-500 text-sm">
                    {t('christian-potra')}
                  </p>
                </div>
              </div>
            </InViewTransition>

            <InViewTransition damping={50} delay={0.75}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
                <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                  <Image
                    alt="Dana Potra"
                    className="border-b border-gray-600 py-3"
                    height={150}
                    src={Dana}
                    width={150}
                  />
                </Link>
                <div className="flex flex-col justify-center items-center h-24 px-3 ">
                  <b className="text-gray-50">Dana Potra</b>
                  <p className="text-gray-500 text-sm">{t('dana-potra')}</p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
                <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                  <Image
                    alt="Avram Sabou"
                    className="border-b border-gray-600 py-3"
                    height={150}
                    src={AvramSabou}
                    width={150}
                  />
                </Link>
                <div className="flex flex-col justify-center items-center h-24 px-3 xl:pt-3">
                  <b className="text-gray-50">Avram Sabou</b>
                  <p className="text-gray-500 text-sm text-center">
                    {t('avram-sabou')}
                  </p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1.25}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
                <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                  <Image
                    alt="Adi Kovaci"
                    className="border-b border-gray-600 py-3"
                    height={150}
                    src={AdrianCovaci}
                    width={150}
                  />
                </Link>
                <div className="flex flex-col justify-center items-center h-24 px-3 ">
                  <b className="text-gray-50">Adi Kovaci</b>
                  <p className="text-gray-500 text-sm">{t('adi-kovaci')}</p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1.5}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
                <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                  <Image
                    alt="Andrei Birtea"
                    className="border-b border-gray-600 py-3"
                    height={150}
                    src={Andrei}
                    width={150}
                  />
                </Link>
                <div className="flex flex-col justify-center items-center h-24 px-3 ">
                  <b className="text-gray-50">Andrei Birtea</b>
                  <p className="text-gray-500 text-sm ">{t('andrei-birtea')}</p>
                </div>
              </div>
            </InViewTransition>
            <InViewTransition damping={50} delay={1.75}>
              <div className="mt-3 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
                <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                  <Image
                    alt="Simona Birtea"
                    className="border-b border-gray-600 py-3"
                    height={150}
                    src={Simona}
                    width={150}
                  />
                </Link>
                <div className="flex flex-col justify-center items-center h-24 px-3">
                  <b className="text-gray-50">Simona Birtea </b>
                  <p className="text-gray-500 text-sm">{t('simona-birtea')}</p>
                </div>
              </div>
            </InViewTransition>
          </div>
        </div>
      </div>
    </div>
  )
}
