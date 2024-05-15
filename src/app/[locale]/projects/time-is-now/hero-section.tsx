import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('serial')

  return (
    <>
      <div className="container mt-20 md:mt-32 pb-4 bg-auto bg-no-repeat flex flex-col items-center justify-center">
        <h1 className="flex items-center justify-center text-2xl md:text-4xl lg:text-6xl shadow-xl shadow-gray-700 text-white font-bold">
          {t('title')}
        </h1>
        <div className="mt-16 lg:mt-44 px-4 flex flex-col items-center justify-center text-white">
          <h2 className="text-[#f3a61d] font-bold pb-2 lg:mb-10 text-base md:text-3xl">
            {t('title_description_hero')}
          </h2>
          <div className="grid md:grid-cols-2 pb-10">
            <p className="md:border-r md:pr-16 border-b md:border-b-0 pb-3 border-white text-sm md:text-lg">
              {t('hero_paragraf1')}
            </p>
            <p className="text-sm md:text-lg md:pl-16">{t('hero_paragraf2')}</p>
          </div>
        </div>
      </div>
    </>
  )
}
