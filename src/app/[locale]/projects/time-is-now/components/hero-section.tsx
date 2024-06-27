import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('serial')

  return (
    <>
      <div className="relative mt-[200px] flex flex-col bg-auto bg-no-repeat pb-4">
        <h1 className="w-fit text-2xl font-bold text-white md:text-4xl lg:text-6xl">
          {t('title')}
        </h1>
        <div className="mt-16 flex flex-col text-white  lg:mt-44">
          <h2 className="pb-2 text-xl font-bold text-accent md:text-3xl lg:mb-10">
            {t('title_description_hero')}
          </h2>
          <div className="grid pb-10 md:grid-cols-2">
            <p className="text-md border-b border-white pb-3 md:border-b-0 md:border-r md:pr-16 md:text-lg">
              {t('hero_paragraf1')}
            </p>
            <p className="text-md md:pl-16 md:text-lg">{t('hero_paragraf2')}</p>
          </div>
        </div>
      </div>
    </>
  )
}
