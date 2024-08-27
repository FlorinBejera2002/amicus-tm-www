'use client'
import { useEffect, useState } from 'react'

import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

import AdrianCovaci from '../../../../../public/adi.webp'
import AvramSabou from '../../../../../public/img/team/Avram.webp'
import Chris from '../../../../../public/img/team/chris potra.webp'
import Dana from '../../../../../public/img/team/dana potra.webp'
import Simona from '../../../../../public/img/team/simo.webp'
import Mark from '../../../../../public/mark.png'

export default function Team() {
  const t = useTranslations('team')

  const teamMembers = [
    {
      description: t('avram_des'),
      img: AvramSabou,
      name: 'Avram Sabou',
      role: t('avram-sabou')
    },
    {
      description: t('adi_des'),
      img: AdrianCovaci,
      name: 'Adi Kovaci',
      role: t('adi-kovaci')
    },
    {
      description: t('christian_des'),
      img: Chris,
      name: 'Christian Potra',
      role: t('christian-potra')
    },
    {
      description: t('dana_des'),
      img: Dana,
      name: 'Dana Potra',
      role: t('dana-potra')
    },

    {
      description: t('simona_des'),
      img: Simona,
      name: 'Simona Birtea',
      role: t('simona-birtea')
    },
    {
      description: t('mark_des'),
      img: Mark,
      name: 'Mark Moldovan',
      role: t('mark')
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(5)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(6)
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2)
      } else {
        setCardsToShow(1)
      }
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)

    return () => {
      window.removeEventListener('resize', updateCardsToShow)
    }
  }, [])

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    )
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    )
  }

  const getVisibleMembers = () => {
    const end = currentIndex + cardsToShow

    if (end <= teamMembers.length) {
      return teamMembers.slice(currentIndex, end)
    } else {
      return [
        ...teamMembers.slice(currentIndex, teamMembers.length),
        ...teamMembers.slice(0, end - teamMembers.length)
      ]
    }
  }

  return (
    <div className="bg-color-dark relative lazyload mx-auto bg-cover bg-center">
      <div className="md:p-28 p-8">
        <InViewTransition>
          <h2 className="mb-0 text-center text-xl font-semibold text-gray-50 lg:text-4xl">
            {t('title-a4c')}
          </h2>
        </InViewTransition>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-[#061e35] bg-[#061e35] bg-opacity-50 text-white hover:bg-opacity-75 lg:left-20 lg:ml-20 xl:hidden"
            onClick={handlePrevClick}
          >
            <FaAngleLeft className="h-6 w-6" />
          </button>
          <div className="grid grid-cols-1 gap-3 overflow-hidden md:grid-cols-2 md:px-3 md:pb-3 xl:grid-cols-6">
            {getVisibleMembers().map((member, idx) => (
              <InViewTransition damping={50} delay={0.25 * idx} key={idx}>
                <div className="group relative z-10 mt-4 flex flex-col items-center gap-1 overflow-hidden rounded-md bg-gradient-to-b from-[#090d1a] via-blue-900 to-[#061e35] duration-300">
                  <Image
                    alt={member.name}
                    className="w-full pt-3"
                    src={member.img}
                  />
                  <div className="absolute bottom-2 left-2 gap-1 pl-2">
                    <b className="text-sm text-gray-50 group-hover:hidden md:text-base">
                      {member.name}
                    </b>
                    <p className="text-xs text-white group-hover:hidden md:text-sm">
                      {member.role}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 z-10 w-full translate-y-full transform rounded-md bg-[#122a80] bg-opacity-90 p-4 text-white transition-transform duration-1000 ease-in-out group-hover:translate-y-0">
                    <div className="absolute bottom-3">
                      <h3 className="pb-2 text-sm font-bold">{member.name}</h3>
                      <p className="pr-4 text-xs font-medium text-white">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </InViewTransition>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-[#061e35] bg-[#061e35] bg-opacity-50 text-white hover:bg-opacity-75 lg:mr-20 xl:hidden"
            onClick={handleNextClick}
          >
            <FaAngleRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
