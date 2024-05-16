import { StepEvangelization } from './step-evangelization'

import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import logoArise from '../../../../../public/logo_horizontal_black.png'

export default function StepsEvangelization() {
  const t = useTranslations('steps_evanghelization')

  return (
    <section id="concept">
      <div className="md:mx-48 d-flex justify-center gap-16  bg-color-light p-relative z-index-2 pb-10">
        <div className="hidden md:flex items-center justify-center">
          <Image
            alt="Stps for Evangelisation"
            height={400}
            src={logoArise}
            width={400}
          />
        </div>
        <div className="flex flex-col gap-8 md:gap-12 xl:gap px-2 md:px-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-poppins text-center ">
            {t('title')}
          </h1>
          <StepEvangelization
            description={t('step1_description')}
            header={t('step1')}
            numberImage={<PiNumberCircleOneFill className="w-24 h-24" />}
          />
          <StepEvangelization
            description={t('step2_description')}
            header={t('step2')}
            numberImage={<PiNumberCircleTwoFill className="w-24 h-24" />}
            styles="xl:justify-center"
          />
          <StepEvangelization
            description={t('step3_description')}
            header={t('step2')}
            numberImage={<PiNumberCircleThreeFill className="w-24 h-24" />}
            styles="xl:justify-center"
          />
        </div>
      </div>
    </section>
  )
}
