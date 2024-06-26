import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('serial')

  return (
    <>
      <div className="mt-[200px] pb-4 bg-auto bg-no-repeat flex flex-col relative">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold w-fit">
          {t('title')}
        </h1>
        <div className="mt-16 lg:mt-44 flex flex-col  text-white">
          <h2 className="text-accent font-bold pb-2 lg:mb-10 text-xl md:text-3xl">
            {t('title_description_hero')}
          </h2>
          <div className="grid md:grid-cols-2 pb-10">
            <p className="md:border-r md:pr-16 border-b md:border-b-0 pb-3 border-white text-md md:text-lg">
              {t('hero_paragraf1')}
            </p>
            <p className="text-md md:text-lg md:pl-16">{t('hero_paragraf2')}</p>
          </div>
        </div>
      </div>
    </>
  )
}
