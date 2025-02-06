import InViewTransition from '../common/in-view-transition'
import AccordionSection from './components/accordion-section'
import ContactUsBtn from './components/contact-us-button'

import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Arise for Christ | About'
}

const About = () => {
  const t = useTranslations()

  return (
    <div className="main flex flex-col items-center" role="main">
      <div className="custom-page-content z-index-2 max-w-6xl">
        <div className="rounded-md bg-white !p-8 shadow-lg md:!p-12">
          <div className="row">
            <div className="col">
              <InViewTransition delay={0}>
                <p className="text-md line-height-7 md:text-lg">
                  {t('about_us.description_p1_1')}
                </p>
              </InViewTransition>
            </div>
          </div>
          <div className="flex flex-col">
            <InViewTransition delay={0.5}>
              <p className="text-md line-height-7 md:text-lg max-w-[700px]">
                {t('about_us.description_p1_6')}
              </p>
            </InViewTransition>

            <AccordionSection />

            <div className="appear-animation flex items-center py-4">
              <ContactUsBtn />
            </div>
          </div>

          <InViewTransition delay={0.25}>
            <p className="text-md mb-0 pb-0 md:text-lg">
              {t('about_us.description_p3_1')}
            </p>
          </InViewTransition>
        </div>
      </div>
    </div>
  )
}

export default About
