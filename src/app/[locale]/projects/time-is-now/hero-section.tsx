import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('serial')

  return (
    <>
      <div className="container mt-32 pb-4 bg-auto bg-no-repeat flex flex-col items-center justify-center">
        <h1 className="flex items-center justify-center text-6xl shadow-xl shadow-gray-800 text-white font-bold">
          {t('title')}
        </h1>
        <div className="mt-44 px-4 flex flex-col gap-4 items-center justify-center text-white ">
          <h2 className="text-[#f3a61d] font-bold pb-10">
            {t('title_description_hero')}
          </h2>
          <div className="grid grid-cols-2 pb-10">
            <p className="border-r pr-16 border-white text-lg">
              {t('hero_paragraf1')}
            </p>
            <p className="text-lg pl-16">{t('hero_paragraf2')}</p>
          </div>
        </div>
      </div>
    </>
  )
}
