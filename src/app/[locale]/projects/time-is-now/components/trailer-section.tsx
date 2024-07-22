import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

import trailerImage from '../../../../../../public/trailer.jpeg'

export default function TrailerSection() {
  const t = useTranslations('serial')

  return (
    <div className="flex flex-col pb-14">
      <InViewTransition delay={0.55}>
        <h1 className="text-start text-2xl font-bold text-accent md:pb-6 md:text-4xl">
          {t('trailer')}
        </h1>
      </InViewTransition>

      <InViewTransition delay={1.25}>
        <Link
          className="pointer "
          href="https://www.youtube.com/watch?v=k1VGbMGFpro"
        >
          <Image
            alt="arise for christ logo"
            className="w-screen rounded-md object-contain"
            src={trailerImage}
          />
        </Link>
      </InViewTransition>
    </div>
  )
}
