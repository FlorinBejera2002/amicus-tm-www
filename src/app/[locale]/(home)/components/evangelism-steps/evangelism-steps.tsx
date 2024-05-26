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
      icon: <PiNumberCircleOneFill className="min-w-24 min-h-24" />
    },
    {
      customClassname: 'xl:justify-center',
      description: t('step2_description'),
      headerLabel: t('step2'),
      icon: <PiNumberCircleTwoFill className="min-w-24 min-h-24" />
    },
    {
      customClassname: 'xl:justify-start',
      description: t('step3_description'),
      headerLabel: t('step3'),
      icon: <PiNumberCircleThreeFill className="min-w-24 min-h-24" />
    }
  ]

  return (
    <div className="grid !relative !z-10 bg-white pb-10 max-w-6xl xl:grid-cols-2 rounded-md mx-auto px-8">
      <div className="flex mb-10 xl:flex items-center justify-center">
        <InViewTransition
          customClassname="flex justify-center items-center w-full"
          damping={25}
          xOut={-100}
          yOut={0}
        >
          <div className="flex flex-col bg-black p-5 rounded-tr-[7rem] self-center rounded-b-md">
            <h4 className="text-5xl font-weight-semi-bold text-light mb-4">
              585+
            </h4>

            <div className="text-md text-white">
              {t('evangelism_requests_count')}
            </div>
          </div>
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
