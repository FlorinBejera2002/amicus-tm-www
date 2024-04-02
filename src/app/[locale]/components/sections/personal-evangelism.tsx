import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

import step1 from "../../../../../public/img/step1.jpeg";

export default function PersonalEvangelism() {
  const t = useTranslations("vision");
  return (
    <section id="concept">
      <div className="container bg-color-light p-relative z-index-2 py-1 mt-3">
        <div className="row py-5 my-5">
          <div className="col-lg-6 text-center">
            <div className="d-flex mb-3">
              <div className="p-2 flex-fill">
                <div
                  className="custom-el-3 bg-color-tertiary custom-border-radius-1 mx-auto appear-animation"
                  data-appear-animation="zoomIn"
                  data-appear-animation-delay="100"
                >
                  <div className="custom-el-3-img">
                    <Image
                      alt="Arise photo"
                      className="p-relative"
                      height={500}
                      loading="lazy"
                      src={step1}
                      width={500}
                    />
                  </div>
                </div>
              </div>

              <div className="p-2 flex-fill">
                <div
                  className="custom-el-3 bg-color-primary custom-border-radius-2 mx-auto appear-animation"
                  data-appear-animation="zoomIn"
                  data-appear-animation-delay="200"
                ></div>
              </div>
              <div className="p-2 flex-fill">
                <div
                  className="custom-el-3 custom-el-3-pos-1 bg-color-dark custom-border-radius-3 mx-auto appear-animation"
                  data-appear-animation="zoomIn"
                  data-appear-animation-delay="300"
                >
                  <div className="custom-el-3-img">
                    <Image
                      alt="Arise photo"
                      className="p-relative"
                      height={50}
                      loading="lazy"
                      src={step1}
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3 custom-el-4-pos">
              <div className="p-2 flex-fill">
                <div
                  className="custom-el-3 custom-el-3-pos-2 bg-color-dark custom-border-radius-4 ms-auto appear-animation"
                  data-appear-animation="zoomIn"
                  data-appear-animation-delay="400"
                ></div>
              </div>
              <div className="p-2 flex-fill">
                <div
                  className="custom-el-3 bg-color-tertiary custom-border-radius-5 me-auto appear-animation"
                  data-appear-animation="zoomIn"
                  data-appear-animation-delay="500"
                >
                  <div className="custom-el-3-img">
                    <Image
                      alt="Arise photo"
                      className="p-relative"
                      height={50}
                      loading="lazy"
                      src={step1}
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="d-block appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="100"
            >
              <div
                className="toggle toggle-minimal toggle-dark"
                data-plugin-toggle
              >
                <section className="toggle">
                  <details className="open:bg-white border-b  open:ring-1 open:ring-black/5 open:shadow-lg p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
                      {t("step1_title")}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <p>
                        Arise for Christ mission will contact the local pastor
                        in order to plan the personal evangelism process
                        presentation in the local church.
                      </p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className="open:bg-white border-b  open:ring-1 open:ring-black/5 open:shadow-lg p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
                      {t("step2_title")}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <p></p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className="open:bg-white border-b  open:ring-1 open:ring-black/5 open:shadow-lg p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
                      {t("step3_title")}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <p>
                        Arise for Christ mission will contact the local pastor
                        in order to plan the personal evangelism process
                        presentation in the local church.
                      </p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className="open:bg-white border-b  open:ring-1 open:ring-black/5 open:shadow-lg p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
                      {t("step4_title")}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <p>
                        Arise for Christ mission will contact the local pastor
                        in order to plan the personal evangelism process
                        presentation in the local church.
                      </p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className="open:bg-white border-b  open:ring-1 open:ring-black/5 open:shadow-lg p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
                      {t("step5_title")}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <p>
                        Arise for Christ mission will contact the local pastor
                        in order to plan the personal evangelism process
                        presentation in the local church.
                      </p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className="open:bg-white border-b  open:ring-1 open:ring-black/5 open:shadow-lg p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
                      {t("step6_title")}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <p>
                        Arise for Christ mission will contact the local pastor
                        in order to plan the personal evangelism process
                        presentation in the local church.
                      </p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className="open:bg-white border-b  open:ring-1 open:ring-black/5 open:shadow-lg p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
                      {t("step7_title")}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <p>
                        Arise for Christ mission will contact the local pastor
                        in order to plan the personal evangelism process
                        presentation in the local church.
                      </p>
                    </div>
                  </details>
                </section>
                <section className="toggle">
                  <details className="open:bg-white border-b  open:ring-1 open:ring-black/5 open:shadow-lg p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                    <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
                      {t("step8_title")}
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <p>
                        Arise for Christ mission will contact the local pastor
                        in order to plan the personal evangelism process
                        presentation in the local church.
                      </p>
                    </div>
                  </details>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
