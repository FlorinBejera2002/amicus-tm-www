import { StepEvangelization } from './step-evangelization'

import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import { useTranslations } from 'next-intl'

export default function StepsEvangelization() {
  const t = useTranslations('steps_evanghelization')

  return (
    <section id="concept">
      <div className="grid bg-color-light p-relative z-index-2 pb-12 md:mx-20 xl:mx-48 xl:grid-cols-2 rounded-md">
        <div className="flex mb-20 xl:flex items-center justify-center">
          <div className="flex flex-col w-1/2 bg-black p-5 rounded-tr-[7rem]">
            <h4 className="text-5xl font-weight-semi-bold text-light mb-4">
              585+
            </h4>

            <div className="text-md text-white">
              {t('evangelism_requests_count')}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-2 md:px-4 md:gap-12 xl:gap-16">
          <h1 className="text-3xl font-poppins font-bold text-center md:text-4xl xl:text-5xl">
            {t('title')}
          </h1>
          <StepEvangelization
            description={t('step1_description')}
            header={t('step1')}
            numberImage={<PiNumberCircleOneFill className="w-24 h-24" />}
            styles="m xl:justify-start"
          />
          <StepEvangelization
            description={t('step2_description')}
            header={t('step2')}
            numberImage={<PiNumberCircleTwoFill className="w-24 h-24" />}
            styles="xl:justify-center"
          />
          <StepEvangelization
            description={t('step3_description')}
            header={t('step3')}
            numberImage={<PiNumberCircleThreeFill className="w-24 h-24" />}
            styles="xl:justify-start"
          />
        </div>
      </div>
    </section>
  )
}
