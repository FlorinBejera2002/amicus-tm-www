import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Subtitle() {
  const t = useTranslations('serial')

  return (
    <>
      <div className="flex flex-wrap mb-24 md:mb-12">
        <div className="flex flex-col gap-1 items-center flex-1 w-full">
          <h4 className=" text-yellow-600 font-bold pl-10">{t('subtitle')}</h4>
          <p className="text-sm text-white text-center w-80 md:w-full">
            {t('subtitle_text')}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <h3 className="text-white">{t('title')}</h3>

          <p className="text-white text-xs">{t('text_bottom')}</p>
          <div className="border-y w-64 border-yellow-600 py-4 flex flex-col gap-1 justify-center items-center">
            <h3 className="text-yellow-600 font-poppins">
              {t('serial_bottom')}
            </h3>
            <Link
              className="w-44 flex justify-center items-center bg-yellow-600 text-white px-16 py-2 rounded-full no-underline hover:no-underline hover:transition-105 hover:translate-2"
              href="https://www.imdb.com/title/tt31037420/reference/"
            >
              IMDB
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
