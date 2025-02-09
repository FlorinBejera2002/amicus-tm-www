'use client'

import Image from 'next/image'
import VisionIlustration from '../../../../../../public/vision-ilustration.svg'
import InViewTransition from '@/app/[locale]/common/in-view-transition'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const AboutAndVision = () => {
  const pathname = usePathname()
  const language = pathname.split('/')[1]
  const t = useTranslations()

  return (
    <>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <InViewTransition delay={0.25}>
            <div className="relative flex justify-center max-w-xl w-[90%]">
              <Image
                src={VisionIlustration}
                alt={t('vision_hero.section_title')}
                width={500}
                height={400}
              />
            </div>
          </InViewTransition>

          <div className="flex flex-col gap-5">
            <InViewTransition delay={0}>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                {t('vision_hero.section_title')}
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug">
                {t('vision_hero.heading')}
                <span className="text-accent">
                  {t('vision_hero.highlight')}
                </span>
              </h2>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                {t('vision_hero.description_1')}
              </p>
            </InViewTransition>

            <InViewTransition delay={0.5}>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('vision_hero.description_2')}
              </p>
            </InViewTransition>

            <InViewTransition delay={0.5}>
              <Link
                className="w-fit px-3 py-2.5 bg-accent rounded-md text-white text-sm"
                href={`/${language}/vision_hero`}
              >
                {t('vision_hero.button')}
              </Link>
            </InViewTransition>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutAndVision
