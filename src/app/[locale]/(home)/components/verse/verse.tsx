'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../../../../public/img/logo/logo_horizontal_white.webp'
import InViewTransition from '../../../common/in-view-transition'

interface IProps {
  devotionalKey: string
  locale: string
}

export default function Verse(props: IProps) {
  const t = useTranslations()

  return (
    <Link href={`/${props.locale}/devotional`} className="text-decoration-none">
      <div className="flex items-center justify-center md:-mt-16 bg-[#121212] text-white">
        <div className="flex flex-col items-center  p-8 md:p-28  xl:gap-4 max-w-6xl">
          <InViewTransition
            delay={0.25}
            customClassname="flex justify-center items-center"
          >
            <div className="text-left">
              <p className="text-lg pb-0 font-semibold italic md:pb-1 md:text-xl">
                "{t(`${props.devotionalKey}.verse.text`)}"
              </p>
              <span className="text-gray-300 ml-2">
                "{t(`${props.devotionalKey}.verse.reference`)}"
              </span>
            </div>
          </InViewTransition>

          <InViewTransition
            damping={25}
            xOut={-100}
            yOut={0}
            customClassname="flex flex-col items-end w-full"
          >
            <Image alt="Logo Resurse Creștine" src={Logo} className="w-40" />
          </InViewTransition>
        </div>
      </div>
    </Link>
  )
}
