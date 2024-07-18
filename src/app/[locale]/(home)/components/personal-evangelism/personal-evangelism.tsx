import AccordionSection from './accordion-section'
import Images from '../../../common/images'

import { useTranslations } from 'next-intl'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

export default function PersonalEvangelism() {
  const t = useTranslations('vision')

  return (
    <section className="bg-color-light p-relative z-index-2 mx-auto max-w-6xl rounded-md px-2">
      <div className="row p-8">
        <InViewTransition>
          <h1 className="xl:4xl pb-4 text-2xl font-bold md:pb-10 md:text-3xl">
            {t('title')}
          </h1>
        </InViewTransition>

        <Images />

        <div className="col-lg-6 flex flex-col justify-center ">
          <div className="flex max-h-[600px] flex-1 flex-col justify-between !gap-4 md:gap-0 xl:max-h-[400px]">
            <AccordionSection />
          </div>
        </div>
      </div>
    </section>
  )
}
