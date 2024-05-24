import { ReactNode } from 'react'

import { Step } from './step'

import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import { useTranslations } from 'next-intl'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

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
      icon: <PiNumberCircleOneFill className="size-24" />
    },
    {
      customClassname: 'xl:justify-center',
      description: t('step2_description'),
      headerLabel: t('step2'),
      icon: <PiNumberCircleTwoFill className="size-24" />
    },
    {
      customClassname: 'xl:justify-start',
      description: t('step3_description'),
      headerLabel: t('step3'),
      icon: <PiNumberCircleThreeFill className="size-24" />
    }
  ]

  return (
    <div className="grid !relative !z-10 bg-white pb-20 container xl:grid-cols-2 rounded-md">
      <div className="flex mb-20 xl:flex items-center justify-center">
        <InViewTransition
          customClassname="flex justify-center items-center w-full"
          damping={25}
          xOut={-100}
          yOut={0}
        >
          <div className="flex flex-col mx-3 md:w-1/2 bg-black p-5 rounded-tr-[7rem] self-center">
            <h4 className="text-5xl font-weight-semi-bold text-light mb-4">
              585+
            </h4>

            <div className="text-md text-white">
              {t('evangelism_requests_count')}
            </div>
          </div>
        </InViewTransition>
      </div>

      <div className="flex flex-col gap-8 px-2 md:px-4 md:gap-12 xl:gap-16">
        <h1 className="text-3xl font-poppins font-bold text-center md:text-4xl xl:text-5xl">
          {t('title')}
        </h1>
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
