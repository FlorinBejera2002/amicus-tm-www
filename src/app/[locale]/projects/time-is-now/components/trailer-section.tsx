import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import trailerImage from '../../../../../../public/img/projects/trailer.jpeg'

export default function TrailerSection() {
  const t = useTranslations('serial')

  return (
    <div className="flex flex-col gap-3 md:gap-6">
      <InViewTransition delay={0.55}>
        <h1 className="text-start text-2xl m-0 font-bold md:text-4xl">
          {t('trailer')}
        </h1>
      </InViewTransition>

      <InViewTransition delay={1.25}>
        <Link
          className="pointer"
          href="https://www.youtube.com/watch?v=k1VGbMGFpro"
          target="_blank"
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
