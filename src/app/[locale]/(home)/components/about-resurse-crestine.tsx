import InViewTransition from '@/app/[locale]/common/in-view-transition'
import Image from 'next/image'
import resurseCrestineLogo from '../../../../../public/img/home/resurse-crestine-image.png'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function AboutResurseCrestine() {
  const t = useTranslations('')

  return (
    <div className="relative z-10 mx-auto  max-w-6xl grid md:grid-cols-2 justify-center rounded-lg bg-white p-8 md:p-12 shadow-lg md:-mt-16 xl:gap-20">
      <InViewTransition
        damping={25}
        xOut={-100}
        yOut={0}
        customClassname=" rounded-md flex justify-center items-center"
      >
        <Link
          href="https://www.resursecrestine.ro"
          className="no-underline hover:no-underline !p-0"
        >
          <Image
            alt="Logo Resurse Creștine"
            className="object-cover hidden md:flex"
            src={resurseCrestineLogo}
          />
        </Link>
      </InViewTransition>
      <div className="flex flex-col justify-center md:pr-10 lg:pr-16">
        <InViewTransition delay={0.25}>
          <h3 className="text-xl font-bold text-gray-900 md:pb-6 pb-3 md:text-3xl">
            {t('resurse-crestine.asociatia_resurse_crestine')}
          </h3>
        </InViewTransition>

        <InViewTransition delay={0.25}>
          <p className="text-sm font-normal font-poppins text-gray-700 md:pb-4 md:text-base">
            {t('resurse-crestine.descriere_asociatie')}
            <Link href="https://www.resursecrestine.ro/" className="px-1">
              www.resursecrestine.ro
            </Link>
            {t('resurse-crestine.materiale_gratuite')}
          </p>
        </InViewTransition>

        <InViewTransition delay={0.25}>
          <Link
            href="https://www.resursecrestine.ro/"
            className="bg-accent p-2.5 rounded-md no-underline hover:!no-underline text-black font-medium text-xs"
          >
            {t('resurse-crestine.vezi_mai_multe')}
          </Link>
        </InViewTransition>
      </div>
    </div>
  )
}
