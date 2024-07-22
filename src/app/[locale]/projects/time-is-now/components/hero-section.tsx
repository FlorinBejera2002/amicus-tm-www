import { useTranslations } from 'next-intl'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

export default function HeroSection() {
  const t = useTranslations('serial')

  return (
    <>
      <div className="relative flex flex-col bg-auto bg-no-repeat pb-4">
        <div className="flex flex-col text-gray-800">
          <InViewTransition delay={0.25}>
            <h1 className="text-start text-2xl font-bold text-accent md:pb-6 md:text-4xl">
              {t('title_description_hero')}
            </h1>
          </InViewTransition>

          <div className="grid md:grid-cols-2">
            <InViewTransition delay={0.55}>
              <p className="text-md border-b border-white pb-3 md:border-b-0 md:border-r md:pr-16 md:text-lg">
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
