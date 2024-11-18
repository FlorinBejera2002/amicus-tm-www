import type { ReactNode } from 'react'

import { Step } from './step'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'

import step from '../../../../../../public/3_steps_image.png'

type EvStep = {
  customClassname: string
  description: string
  headerLabel: string
  icon: ReactNode
}

export default function EvangelismSteps() {
  const t = useTranslations('steps_evangelization')

  const steps: EvStep[] = [
    {
      customClassname: 'xl:justify-start',
      description: t('step1_description'),
      headerLabel: t('step1'),
      icon: (
        <PiNumberCircleOneFill className="min-h-12 min-w-12 md:min-h-12 md:min-w-12 " />
      )
    },
    {
      customClassname: 'xl:justify-center',
      description: t('step2_description'),
      headerLabel: t('step2'),
      icon: (
        <PiNumberCircleTwoFill className="min-h-12 min-w-12 md:min-h-12 md:min-w-12 " />
      )
    },
    {
      customClassname: 'xl:justify-start',
      description: t('step3_description'),
      headerLabel: t('step3'),
      icon: (
        <PiNumberCircleThreeFill className="min-h-12 min-w-12 md:min-h-12 md:min-w-12 " />
      )
    }
  ]

  return (
    <div className="!relative !z-10 mx-auto p-8 md:-mb-16 -mt-20 grid max-w-6xl rounded-md bg-white md:shadow-lg md:-mt-52 md:pt-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
        <div className="flex flex-col gap-4 md:gap-12 xl:gap-16 md:justify-center">
          <InViewTransition damping={25} delay={0.5}>
            <h1 className="text-2xl font-bold md:text-4xl xl:text-4xl">
              {t('title')}
            </h1>
          </InViewTransition>
          {steps.map((step, index) => (
            <InViewTransition damping={25} delay={index * 0.25} key={index}>
              <Step
                customClassname={step.customClassname}
                description={step.description}
                headerLabel={step.headerLabel}
                icon={step.icon}
                key={index}
              />
            </InViewTransition>
          ))}
        </div>
        <InViewTransition
          customClassname="flex justify-center items-end w-full h-full hidden md:flex"
          damping={25}
          xOut={-100}
          yOut={0}
        >
          <Image
            alt="Bible picture"
            className="w-4xl object-cover mr-12"
            src={step}
          />
        </InViewTransition>
      </div>
    </div>
  )
}
