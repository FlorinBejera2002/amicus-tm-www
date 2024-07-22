import AccordionSection from './accordion-section'
import Images from '../../../common/images'

import { useTranslations } from 'next-intl'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

export default function PersonalEvangelism() {
  const t = useTranslations('vision')

  return (
    <section className="bg-color-light z-index-10 relative mx-auto max-w-6xl rounded-md bg-white px-2 shadow-lg md:-mt-16">
      <div className="row container p-8">
        <InViewTransition>
          <h1 className="xl:4xl pb-4 pl-5 text-start text-2xl font-bold md:pb-10 md:text-3xl">
            {t('title')}
          </h1>
        </InViewTransition>
        <div className="flex md:ml-10">
          <Images />
          <div className="col-lg-6 flex flex-col justify-center pl-5 md:pb-10">
            <div className="flex max-h-[600px] w-full flex-1 flex-col justify-between !gap-4 md:gap-0 xl:max-h-[400px]">
              <AccordionSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
