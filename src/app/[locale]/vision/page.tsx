import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import Project5 from '../../../../public/vision-projects5.jpg'
import Project4 from '../../../../public/vision-projects4.jpeg'
import Project2 from '../../../../public/vision-projects3.jpeg'
import Project3 from '../../../../public/vision-projects2.jpeg'
import Project1 from '../../../../public/vision-projects1.jpg'

export default function Vision() {
  const t = useTranslations('')

  return (
    <div className="main bg-black pb-24" role="main">
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
                  <FaAngleRight className="text-color-primary mt-0.5 z-1" />
                  <li className="text-color-primary active z-[1]">
                    {t('header.vision')}
                  </li>
                </ul>
                <h1 className="text-color-light font-weight-bold text-10">
                  {t('header.vision')}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Animation />
      </section>
      <section className="md:mx-64 px-2 flex justify-center items-center flex-col mt-5 md:gap-20">
        <h1 className="text-white text-2xl md:text-6xl font-bold pb-3 md:pb-10">
          {t('vision.presentation_title')}
        </h1>
        <div className="grid md:grid-cols-2 items-center text-center text-gray-50 md:gap-20 px-3">
          <div className="md:pl-16 flex flex-col items-center justify-center pb-2">
            <h3 className="font-bold text-lg md:text-2xl text-gray-400">
              {t('vision.presentation_p1_1')}
            </h3>
          </div>
          <div className="md:border-l border-t md:border-t-0 border-gray-400 md:h-[17em] md:pl-16 pt-3 flex flex-col items-center justify-center">
            <h3 className="font-bold text-lg md:text-2xl text-gray-400">
              {t('vision.presentation_p2')}
            </h3>
          </div>
        </div>

        <h1 className="text-white text-3xl md:text-6xl font-bold pb-10 pt-5 md:pt-0">
          {t('vision.projects_title')}
        </h1>
        <div className="grid md:grid-cols-2 items-center text-center text-gray-50 md:gap-20 pb-3">
          <Image
            alt="Christian images"
            className="image-cover w-[30em] h-[20em] rounded-md ml-16 hidden md:flex"
            src={Project1}
          />
          <div className="md:border-l border-gray-400 md:h-[17em] md:pl-16 flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl md:text-4xl">
              {t('vision.projects_p1_2')}
            </h3>
            <p className="px-3 md:px-0 text-base md:text-xl font-semibold text-gray-400">
              {t('vision.projects_p1_3')}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 items-center text-center text-gray-50 md:gap-20 pb-3">
          <div className="md:border-r border-gray-400 md:h-[17em] md:px-16 md:-mr-[5em] flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl md:text-4xl">
              {t('vision.projects_p2_1')}
            </h3>
            <p className="px-3 md:px-0 text-base md:text-xl font-semibold text-gray-400">
              {t('vision.projects_p2_2')}
            </p>
          </div>
          <Image
            alt="Christian images"
            className="image-cover w-[30em] h-[20em] rounded-md ml-16 hidden md:flex"
            src={Project2}
          />
        </div>
        <div className="grid md:grid-cols-2 items-center text-center text-gray-50 md:gap-20 pb-3">
          <Image
            alt="Christian images"
            className="image-cover w-[30em] h-[20em] rounded-md ml-16 hidden md:flex"
            src={Project3}
          />
          <div className="md:border-l border-gray-400 md:h-[17em] md:pl-16 flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl md:text-4xl">
              {t('vision.projects_p3_1')}
            </h3>
            <p className="px-3 md:px-0 text-base md:text-xl font-semibold text-gray-400">
              {t('vision.projects_p3_2')}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 items-center text-center text-gray-50 md:gap-20 pb-3">
          <div className="md:border-r border-gray-400 md:h-[17em] md:px-16 md:-mr-[5em] flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl md:text-4xl">
              {t('vision.projects_p3_7')}
            </h3>
            <p className="px-3 md:px-0 text-base md:text-xl font-semibold text-gray-400">
              {t('vision.projects_p3_6')}
            </p>
          </div>
          <Image
            alt="Christian images"
            className="image-cover w-[30em] h-[20em] rounded-md ml-16 hidden md:flex"
            src={Project4}
          />
        </div>
        <div className="grid md:grid-cols-2 items-center text-center text-gray-50 md:gap-20">
          <Image
            alt="Christian images"
            className="image-cover w-[30em] h-[20em] rounded-md ml-16 hidden md:flex"
            src={Project5}
          />
          <div className="md:border-l border-gray-400 md:h-[17em] md:pl-10 flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl md:text-4xl">
              {t('vision.projects_p4_1')}
            </h3>
            <p className="px-3 md:px-0 text-base md:text-xl font-semibold text-gray-400">
              {t('vision.projects_p4_2')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
