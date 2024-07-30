import Images from '../../../common/images'
import AccordionSection from './accordion-section'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'

export default function PersonalEvangelism() {
  const t = useTranslations('vision')

  return (
    <section className="bg-color-light z-index-10 p-8 relative mx-auto max-w-6xl rounded-md bg-white shadow-lg md:-my-16">
      <div className="row  ">
        <InViewTransition>
          <h1 className="xl:text-4xl pb-3 text-start text-2xl font-bold md:pb-6 md:text-3xl">
            {t('title')}
          </h1>
        </InViewTransition>
        <div className="flex md:ml-10">
          <Images />
          <div className=" flex flex-col justify-center">
            <div className="flex max-h-[600px] w-full flex-1 flex-col justify-between !gap-4 md:gap-0 xl:max-h-[400px]">
              <AccordionSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
