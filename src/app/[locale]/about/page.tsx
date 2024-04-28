'use client'
// import Numbers from "../components/sections/numbers";

import React from 'react'

import CustomHeroBg from '../components/sections/custom-hero-bg'
import Animation from '../components/sections/animation'
// import arrowUpLight from "../../../../public/img/demos/creative-agency-2/svg/arrow-up-light.svg";

import { ImArrowUpRight2 } from 'react-icons/im'
import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

import step5 from '../../../../public/img/step5.jpeg'
import step4 from '../../../../public/img/step4.jpeg'
import step3 from '../../../../public/img/step3.jpeg'
import step2 from '../../../../public/img/step2.jpeg'
import step1 from '../../../../public/img/step1.jpg'

const About = () => {
  const t = useTranslations('header')
  const ta = useTranslations('about_us')

  return (
    <div className="main" role="main">
      <section className="page-header p-relative bg-quaternary m-0 overflow-hidden border-0 p-0">
        <CustomHeroBg />
        <div className="container">
          <div className="row align-items-center my-5 pb-4 pt-5">
            <div className="col my-5 pb-5 text-center">
              <div className="py-4">
                <ul className="breadcrumb d-flex justify-content-center text-4-5 font-weight-medium mb-2">
                  <li className="z-[1]">
                    <Link
                      className="text-color-primary text-decoration-none"
                      href="/"
                    >
                      {t('home')}
                    </Link>
                  </li>
                  <FaAngleRight className="text-color-primary mt-0.5 z-[1]" />
                  <li className="text-color-primary active z-[1]">
                    {t('about_us')}
                  </li>
                </ul>
                <h1 className="text-color-light font-weight-bold text-10">
                  {t('about_us')}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Animation />

        <div className="p-absolute custom-el-1 custom-el-pos-5">
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="0"
          >
            <img
              alt=""
              src="img/demos/creative-agency-2/svg/arrow-up-light.svg"
              width="140"
            />
          </div>
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="100"
          >
            <img
              alt=""
              src="img/demos/creative-agency-2/svg/arrow-up-light.svg"
              width="140"
            />
          </div>
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="200"
          >
            <img
              alt=""
              src="img/demos/creative-agency-2/svg/arrow-up-light.svg"
              width="140"
            />
          </div>
        </div>
      </section>

      <div className="custom-page-content p-relative z-index-2">
        <div className="custom-padding-top-1 custom-padding-bottom-1 px-lg-5 bg-light container">
          <div className="row px-lg-3">
            <div className="col">
              <p className="text-4-5 line-height-7 text-dark mb-lg-2 mb-xl-4 mb-4 pb-1">
                {ta('description_p1_1')}
                {ta('description_p1_2')}
                {ta('description_p1_3')}
                {ta('description_p1_4')}
                {ta('description_p1_5')}
              </p>
            </div>
          </div>
          <div className="row px-lg-3 py-4">
            <div className="col-lg-6 text-center">
              <div className="d-flex mb-3">
                <div className="p-2 flex-fill">
                  <div
                    className="custom-el-3 bg-color-tertiary custom-border-radius-1 mx-auto appear-animation"
                    data-appear-animation="zoomIn"
                    data-appear-animation-delay="100"
                  >
                    <Image
                      alt="Arise photo"
                      className="custom-el-3-img p-relative size-full"
                      loading="lazy"
                      src={step5}
                    />
                  </div>
                </div>

                <div className="p-2 flex-fill">
                  <Image
                    alt="Arise photo"
                    className="custom-el-3 bg-color-primary custom-border-radius-2 mx-auto appear-animation"
                    data-appear-animation="zoomIn"
                    data-appear-animation-delay="200"
                    loading="lazy"
                    src={step2}
                  />
                </div>

                <div className="p-2 flex-fill">
                  <div
                    className="custom-el-3 custom-el-3-pos-1 bg-color-dark custom-border-radius-3 mx-auto appear-animation"
                    data-appear-animation="zoomIn"
                    data-appear-animation-delay="300"
                  >
                    <Image
                      alt="Arise photo"
                      className="custom-el-3-img p-relative size-full"
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
                      className="custom-el-3-img p-relative size-full"
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
                      className=" custom-el-3-img p-relative size-full"
                      loading="lazy"
                      src={step4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4">
              <p className="text-4-5 line-height-7">
                {ta('description_p2_1')}
                {ta('description_p2_2')}
                {ta('description_p2_3')}
              </p>

              <p className="text-4-5 line-height-7">{ta('description_p3_1')}</p>

              <div className="d-block text-4-5">
                <div className="d-block appear-animation pt-4 appear-animation-visible">
                  <div
                    className="toggle toggle-minimal toggle-dark"
                    data-plugin-toggle={true}
                  >
                    <section className="toggle">
                      <details className="py-1 rounded-lg overflow-hidden">
                        <summary className=" border-b pb-4 border-gray-400 leading-3 text-slate-900 dark:text-black font-semibold select-none  ">
                          {ta('description_p4_0')}
                        </summary>
                        <div className=" mt-3 text-base leading-6 text-slate-600">
                          <p>
                            <strong>{`${ta('description_p4_1')}`}</strong>
                            {`${ta('description_p4_2')} ${ta('description_p4_3')}`}
                            <br />
                            <br />
                            <strong>{`${ta('description_p5_1')}`}</strong>
                            {`${ta('description_p5_2')} ${ta('description_p5_3')}`}
                            <br />
                            <br />
                            <strong>{`${ta('description_p6_1')}`}</strong>
                            {`${ta('description_p6_2')} ${ta('description_p6_3')} ${ta('description_p6_4')}`}
                            <br />
                            <br />
                            <strong>{`${ta('description_p7_1')}`}</strong>
                            {`${ta('description_p7_2')}`}
                            <br />
                            <br />
                            <strong>{`${ta('description_p8_1')}`}</strong>
                            {`${ta('description_p8_2')}`}
                          </p>
                        </div>
                      </details>
                    </section>
                    <section className="toggle">
                      <details className="py-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="border-b pb-4 border-gray-400 leading-6 text-slate-900 dark:text-black font-semibold select-none">
                          {ta('principals_p1_0')}
                        </summary>
                        <div className="mt-3 text-base leading-6 text-slate-600">
                          <p>
                            {`${ta('principals_p1_1')} `}
                            <strong>{`${ta('principals_p1_2')}`}</strong>
                            {` ${ta('principals_p1_3')} `}
                            <strong>{`${ta('principals_p1_4')}`}</strong>
                            {` ${ta('principals_p1_5')} ${ta('principals_p1_6')} ${ta('principals_p1_7')} ${ta('principals_p1_8')} ${ta('principals_p1_9')}`}
                            <br />
                            <br />
                            <strong>{`${ta('principals_p2_1')}`}</strong>
                            <br />
                            {` ${ta('principals_p2_2')}`}
                            <br />
                            <br />
                            <strong>{`${ta('principals_p3_1')}`}</strong>
                            <br />
                            {` ${ta('principals_p3_2')}`}
                            <br />
                            <br />
                            <strong>{`${ta('principals_p4_1')}`}</strong>
                            <br />
                            {` ${ta('principals_p4_2')}`}
                            <br />
                            <br />
                            <strong>{`${ta('principals_p5_1')}`}</strong>
                            <br />
                            {` ${ta('principals_p5_2')}`}
                          </p>
                        </div>
                      </details>
                    </section>
                    <section className="toggle">
                      <details className="py-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="border-b pb-4 border-gray-400 leading-6 text-slate-900 dark:text-black font-semibold select-none">
                          {ta('principals_p6_1')}
                        </summary>
                        <div className="mt-3 text-base leading-6 text-slate-600">
                          <p>
                            {`${ta('principals_p6_2')}`}
                            <br /> <br />
                            {`${ta('principals_p6_3')}`}
                            <br /> <br />
                            {`${ta('principals_p6_4')}`}
                            <br /> <br />
                            {`${ta('principals_p6_5')}`}
                            <br /> <br />
                            {`${ta('principals_p6_6')}`}
                            <br /> <br />
                            {`${ta('principals_p6_7')}`}
                            <br /> <br />
                            {`${ta('principals_p6_8')}`}
                            <br /> <br />
                            {`${ta('principals_p6_9')}`}
                            <br /> <br />
                            {`${ta('principals_p6_10')}`}
                            <br /> <br />
                            {`${ta('principals_p6_11')}`}
                            <br /> <br />
                            {`${ta('principals_p6_12')}`}
                          </p>
                        </div>
                      </details>
                    </section>
                  </div>
                </div>
              </div>

              <div className="appear-animation pt-4 flex items-center">
                <Link
                  className="btn btn-modern btn-primary text-capitalize text-dark text-3 anim-hover-translate-top-5px transition-3ms py-1 pr-30 flex items-center font-semibold"
                  href="#"
                >
                  Lets Talk
                  <ImArrowUpRight2 className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row px-lg-3 py-5">
            <div className="col">
              <p className="text-4 line-height-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dictum eleifend eros a pharetra. Cras aliquam vestibulum
                vehicula. Sed sed lectus risus. Vestibulum maximus ac purus in
                euismod. In venenatis tellus ante, id porta risus semper quis.
                Aenean vel posuere urna, sit amet placerat massa. Quisque
                efficitur interdum libero, sed dictum lorem euismod sed.
              </p>
            </div>
          </div>

          <div className="row px-lg-3">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card border-radius-0 bg-color-dark border-0">
                <div className="card-body">
                  <h4 className="card-title custom-font-size-1 font-weight-semi-bold text-light mb-1">
                    345+
                  </h4>
                  <p className="text-4-5 line-height-7 text-light mb-0 mt-5 pb-0">
                    Cras a elit sit amet leo accumsan volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card border-radius-0 bg-color-dark border-0">
                <div className="card-body">
                  <h4 className="card-title custom-font-size-1 font-weight-semi-bold text-light mb-1">
                    1000+
                  </h4>
                  <p className="text-4-5 line-height-7 text-light mb-0 mt-5 pb-0">
                    A crasa elit sit amet leo accumsan volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card border-radius-0 bg-color-dark border-0">
                <div className="card-body">
                  <h4 className="card-title custom-font-size-1 font-weight-semi-bold text-light mb-1">
                    123+
                  </h4>
                  <p className="text-4-5 line-height-7 text-light mb-0 mt-5 pb-0">
                    Elit cras a elit sit amet leo accumsan volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card border-radius-0 bg-color-dark border-0">
                <div className="card-body">
                  <h4 className="card-title custom-font-size-1 font-weight-semi-bold text-light mb-1">
                    15+
                  </h4>
                  <p className="text-4-5 line-height-7 text-light mb-0 mt-5 pb-0">
                    Sit cras a elit sit amet leo accumsan volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card border-radius-0 bg-color-dark border-0">
                <div className="card-body">
                  <h4 className="card-title custom-font-size-1 font-weight-semi-bold text-light mb-1">
                    45+
                  </h4>
                  <p className="text-4-5 line-height-7 text-light mb-0 mt-5 pb-0">
                    Lorem a elit sit amet leo accumsan volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card border-radius-0 bg-color-dark border-0">
                <div className="card-body">
                  <h4 className="card-title custom-font-size-1 font-weight-semi-bold text-light mb-1">
                    345+
                  </h4>
                  <p className="text-4-5 line-height-7 text-light mb-0 mt-5 pb-0">
                    Cras a elit sit amet leo accumsan volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // eslint-disable-next-line prettier/prettier
  );
  // eslint-disable-next-line prettier/prettier
};

// eslint-disable-next-line prettier/prettier
export default About;
