import Images from './images'
import AccordionSection from './accordion-section'

import { useTranslations } from 'next-intl'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

export default function PersonalEvangelism() {
  const t = useTranslations('vision')

  return (
    <section id="concept">
      <div className="container px-2 bg-color-light p-relative z-index-2 py-1 mt-3 rounded-md">
        <div className="row py-3 my-3 px-8">
          <InViewTransition>
            <h1 className="font-bold pb-4 md:pb-10 text-2xl md:text-3xl xl:4xl">
              {t('title')}
            </h1>
          </InViewTransition>

          <Images />

          <div className="col-lg-6 flex flex-col justify-center ">
            <div className="flex-1 flex flex-col justify-between !gap-4 md:gap-0 max-h-[600px] xl:max-h-[400px]">
              <AccordionSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
