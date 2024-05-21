'use client'

import AccordionSection from './accordion-section'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import step5 from '../../../../../../public/img/step5.jpeg'
import step4 from '../../../../../../public/img/step4.jpeg'
import step3 from '../../../../../../public/img/step3.jpeg'
import step2 from '../../../../../../public/img/step2.jpeg'
import step1 from '../../../../../../public/img/step1.jpg'

export default function PersonalEvangelism() {
  const t = useTranslations('vision')

  return (
    <section id="concept">
      <div className="md:mx-48 px-2 bg-color-light p-relative z-index-2 py-1 mt-3 rounded-md ">
        <div className="row py-3 my-3 px-8 ">
          <h1 className="font-bold pb-4 md:pb-10 text-2xl md:text-3xl xl:4xl ">
            {t('title')}
          </h1>
          <div className="hidden md:flex flex-col col-lg-6 text-center">
            <div className="d-flex mb-3">
              <div className="p-2 flex-fill">
                <div className="custom-el-3 bg-color-tertiary custom-border-radius-1 mx-auto appear-animation">
                  <Image
                    alt="Arise photo"
                    className="object-cover custom-el-3-img p-relative size-full"
                    loading="lazy"
                    src={step5}
                  />
                </div>
              </div>

              <div className="p-2 flex-fill">
                <Image
                  alt="Arise photo"
                  className="object-left object-cover custom-el-3 bg-color-primary custom-border-radius-2 mx-auto appear-animation"
                  loading="lazy"
                  src={step2}
                />
              </div>

              <div className="p-2 flex-fill">
                <div className="custom-el-3 custom-el-3-pos-1 bg-color-dark custom-border-radius-3 mx-auto appear-animation">
                  <Image
                    alt="Arise photo"
                    className="object-cover custom-el-3-img p-relative size-full"
                    loading="lazy"
                    src={step1}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex mb-3 custom-el-4-pos">
              <div className="p-2 flex-fill">
                <div
                  className="custom-el-3 custom-el-3-pos-2 bg-color-dark custom-border-radius-4 ms-auto appear-animation"
                  data-appear-animation="zoomIn"
                  data-appear-animation-delay="400"
                >
                  <Image
                    alt="Arise photo"
                    className="object-cover custom-el-3-img p-relative size-full"
                    loading="lazy"
                    src={step3}
                  />
                </div>
              </div>

              <div className="p-2 flex-fill">
                <div
                  className="custom-el-3 bg-color-tertiary custom-border-radius-5 me-auto appear-animation"
                  data-appear-animation="zoomIn"
                  data-appear-animation-delay="500"
                >
                  <Image
                    alt="Arise photo"
                    className="object-cover custom-el-3-img p-relative size-full"
                    loading="lazy"
                    src={step4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 flex flex-col justify-center ">
            <div className="flex-1 flex flex-col justify-between !gap-4 md:gap-0 max-h-[400px]">
              <AccordionSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
