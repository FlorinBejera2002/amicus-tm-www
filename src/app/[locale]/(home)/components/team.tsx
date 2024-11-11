'use client'
import { useEffect, useState } from 'react'

import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

import AvramSabou from '../../../../../public/img/team/Avram.webp'
import Chris from '../../../../../public/img/team/chris potra.webp'
import Dana from '../../../../../public/img/team/dana potra.webp'
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
      description: t('mark_des'),
      img: Mark,
      name: 'Mark Moldovan',
      role: t('mark')
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
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(4)
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
      <div className="md:p-28 p-8 md:px-44">
        <InViewTransition>
          <h2 className="mb-0 text-center text-2xl font-semibold text-gray-50 lg:text-4xl">
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
          <div className="grid grid-cols-1 gap-3 overflow-hidden md:grid-cols-2 md:px-3 md:pb-3 xl:grid-cols-4">
            {getVisibleMembers().map((member, idx) => (
              <InViewTransition damping={50} delay={0.25 * idx} key={idx}>
                <div className="group h-96 relative z-10 mt-4 flex flex-col items-center gap-1 overflow-hidden rounded-md bg-gradient-to-b from-[#090d1a] via-blue-900 to-[#061e35] duration-300">
                  <Image className="w-full pt-3" src={member.img} alt={''} />
                  <div className="absolute bottom-2 left-2 gap-1 pl-2">
                    <b className="text-sm text-gray-50 group-hover:hidden md:text-base">
                      {member.name}
                    </b>
                    <p className="text-xs text-white group-hover:hidden md:text-sm">
                      {member.role}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 z-10 w-full translate-y-full transform rounded-md bg-[#122a80] bg-opacity-90 p-4 text-white transition-transform duration-500 ease-in-out group-hover:translate-y-0">
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
