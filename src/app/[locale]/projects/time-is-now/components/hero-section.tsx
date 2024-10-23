import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('serial')

  return (
    <>
      <div className="relative flex flex-col bg-auto bg-no-repeat">
        <div className="flex flex-col text-gray-800 md:gap-6 gap-3">
          <InViewTransition delay={0.25}>
            <h1 className="text-start text-2xl font-bold m-0 md:text-4xl">
              {t('title_description_hero')}
            </h1>
          </InViewTransition>

          <div className="grid md:grid-cols-2">
            <InViewTransition delay={0.55}>
              <p className="text-md border-b border-white md:border-b-0 md:border-r md:pr-16 md:text-lg">
                {t('hero_paragraf1')}
              </p>
            </InViewTransition>

            <InViewTransition delay={0.75}>
              <p className="text-md md:pl-16 md:text-lg">
                {t('hero_paragraf2')}
              </p>
            </InViewTransition>
          </div>
        </div>
      </div>
    </>
  )
}
