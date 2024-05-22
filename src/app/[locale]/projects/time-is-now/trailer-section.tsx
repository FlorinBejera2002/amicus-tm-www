import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import trailerImage from '../../../../../public/trailer.jpeg'

export default function TrailerSection() {
  const t = useTranslations('serial')

  return (
    <div className="flex flex-col gap-4 pb-4 px-8">
      <h3 className="text-[#f3a61d] font-bold">{t('trailer')}</h3>
      <Link
        className="pointer "
        href="https://www.youtube.com/watch?v=k1VGbMGFpro"
      >
        <Image
          alt="arise for christ logo"
          className="object-contain w-screen"
          src={trailerImage}
        />
      </Link>
    </div>
  )
}
