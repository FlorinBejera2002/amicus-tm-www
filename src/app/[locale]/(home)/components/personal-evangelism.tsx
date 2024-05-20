import { useTranslations } from 'next-intl'
import Image from 'next/image'

import step5 from '../../../../../public/img/step5.webp'
import step4 from '../../../../../public/img/step4.webp'
import step3 from '../../../../../public/img/step3.webp'
import step2 from '../../../../../public/img/step2.webp'
import step1 from '../../../../../public/img/step1.webp'

export default function PersonalEvangelism() {
  const t = useTranslations('vision')

  return (
    <section id="concept">
      <div className="md:mx-48 px-2 bg-color-light p-relative z-index-2 py-1 mt-3">
        <div className="row py-3 my-3">
          <h1 className="font-bold pb-4 md:pb-10 text-2xl md:text-3xl xl:4xl text-center">
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
          <div className="col-lg-6">
            <div className="d-block appear-animation">
              <div className="toggle toggle-minimal toggle-dark">
                <section className="toggle">
                  <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 font-semibold select-none">
                      {t('step1_title')}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 ">
                      <p>{t('step1_description')}</p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 font-semibold select-none">
                      {t('step2_title')}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 ">
                      <p>{t('step2_description')}</p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 font-semibold select-none">
                      {t('step3_title')}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 ">
                      <p>{t('step3_description')}</p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 font-semibold select-none">
                      {t('step4_title')}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 ">
                      <p>{t('step4_description')}</p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 font-semibold select-none">
                      {t('step5_title')}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 ">
                      <p>{t('step5_description')}</p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 font-semibold select-none">
                      {t('step6_title')}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 ">
                      <p>{t('step6_description')}</p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 font-semibold select-none">
                      {t('step7_title')}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 ">
                      <p>{t('step7_description')}</p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 font-semibold select-none">
                      {t('step8_title')}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 ">
                      <p>{t('step8_description')}</p>
                    </div>
                  </details>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
