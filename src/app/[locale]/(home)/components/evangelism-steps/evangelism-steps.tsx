import { ReactNode } from 'react'

import { Step } from './step'

import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

import step from '../../../../../../public/step.png'

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
      icon: <PiNumberCircleOneFill className="min-h-24 min-w-24" />
    },
    {
      customClassname: 'xl:justify-center',
      description: t('step2_description'),
      headerLabel: t('step2'),
      icon: <PiNumberCircleTwoFill className="min-h-24 min-w-24" />
    },
    {
      customClassname: 'xl:justify-start',
      description: t('step3_description'),
      headerLabel: t('step3'),
      icon: <PiNumberCircleThreeFill className="min-h-24 min-w-24" />
    }
  ]

  return (
    <div className="!relative !z-10 mx-auto grid max-w-6xl rounded-md bg-white px-8 pb-10 shadow-lg md:-mt-52 md:pt-52 xl:grid-cols-2">
      <div className="mb-10 flex items-center justify-center xl:flex">
        <InViewTransition
          customClassname="flex justify-center items-center w-full"
          damping={25}
          xOut={-100}
          yOut={0}
        >
          <Image
            alt="Bible picture"
            className="ml-10 size-full rounded-md rounded-tr-[7rem] object-cover pr-16"
            src={step}
          />
        </InViewTransition>
      </div>

      <div className="flex flex-col gap-4 md:gap-12 xl:gap-16">
        <InViewTransition damping={25} delay={0.5}>
          <h1 className="text-3xl font-semibold md:text-4xl xl:text-5xl">
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
    </div>
  )
}
