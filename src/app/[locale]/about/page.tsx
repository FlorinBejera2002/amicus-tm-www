'use client'
// import Numbers from "../components/sections/numbers";

import React from 'react'

import CustomHeroBg from '../components/sections/custom-hero-bg'
import Animation from '../components/sections/animation'
// import arrowUpLight from "../../../../public/img/demos/creative-agency-2/svg/arrow-up-light.svg";

import { ImArrowUpRight2 } from 'react-icons/im'
import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import step5 from '../../../../public/img/step5.jpeg'

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
                  <li>
                    <a
                      className="text-color-primary text-decoration-none"
                      href="/"
                    >
                      {t('home')}
                    </a>
                  </li>
                  <FaAngleRight />
                  <li className="text-color-primary active">{t('about_us')}</li>
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
            <div className="col-lg-6 mb-lg-0 mb-5">
              <Image
                alt="Arise photo"
                className="img-fluid custom-border-radius-1"
                src={step5}
              />
            </div>
            <div className="col-lg-6 ps-lg-4">
              <p className="text-4 line-height-7">
                {ta('description_p2_1')}
                {ta('description_p2_2')}
                {ta('description_p2_3')}
              </p>

              <p className="text-4 line-height-7">{ta('description_p3_1')}</p>

              {/* <div className="d-block pt-4">
                <Acordion
                  content={`${ta('description_p4_1')} ${ta('description_p4_2')} ${ta('description_p4_3')} 
                  ${ta('description_p5_1')} ${ta('description_p5_2')} ${ta('description_p5_3')} 
                  ${ta('description_p6_1')} ${ta('description_p6_2')} ${ta('description_p6_3')} ${ta('description_p6_4')} 
                  ${ta('description_p7_1')} ${ta('description_p7_2')} 
                  ${ta('description_p8_1')} ${ta('description_p8_2')}`}
                  title={ta('description_p4_0')}
                />
                <Acordion
                  content={`${ta('principals_p1_1')} ${ta('principals_p1_2')} ${ta('principals_p1_3')} 
                  ${ta('principals_p1_4')} ${ta('principals_p1_5')} ${ta('principals_p1_6')} 
                  ${ta('principals_p1_7')} ${ta('principals_p1_8')} ${ta('principals_p1_9')} 
                  ${ta('principals_p2_1')} ${ta('principals_p2_2')} 
                  ${ta('principals_p3_1')} ${ta('principals_p3_2')} 
                  ${ta('principals_p4_1')} ${ta('principals_p4_2')} 
                  ${ta('principals_p5_1')} ${ta('principals_p5_2')}`}
                  title={ta('principals_p1_0')}
                />
                <Acordion
                  content={`${ta('principals_p6_2')} ${ta('principals_p6_3')} ${ta('principals_p6_4')} 
                  ${ta('principals_p6_5')} ${ta('principals_p6_6')} ${ta('principals_p6_7')} 
                  ${ta('principals_p6_8')} ${ta('principals_p6_9')} ${ta('principals_p6_10')} 
                  ${ta('principals_p6_11')} ${ta('principals_p6_12')}`}
                  title={ta('principals_p6_1')}
                />
              </div> */}
              <div className="d-block pt-4">
                <div
                  className="d-block appear-animation"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="100"
                >
                  <div
                    className="toggle toggle-minimal toggle-dark"
                    data-plugin-toggle={true}
                  >
                    <section className="toggle">
                      <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="leading-3 text-slate-900 dark:text-black font-semibold select-none">
                          {ta('description_p4_0')}
                        </summary>
                        <div className="mt-3 text-sm leading-6 text-slate-600">
                          <p>
                            {`${ta('description_p4_1')} ${ta('description_p4_2')} ${ta('description_p4_3')} 
                            ${ta('description_p5_1')} ${ta('description_p5_2')} ${ta('description_p5_3')} 
                            ${ta('description_p6_1')} ${ta('description_p6_2')} ${ta('description_p6_3')} ${ta('description_p6_4')} 
                            ${ta('description_p7_1')} ${ta('description_p7_2')} 
                            ${ta('description_p8_1')} ${ta('description_p8_2')}`}
                          </p>
                        </div>
                      </details>
                    </section>
                    <section className="toggle">
                      <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="leading-6 text-slate-900 dark:text-black font-semibold select-none">
                          {ta('principals_p1_0')}
                        </summary>
                        <div className="mt-3 text-sm leading-6 text-slate-600">
                          <p>
                            {`${ta('principals_p1_1')} ${ta('principals_p1_2')} ${ta('principals_p1_3')} 
                            ${ta('principals_p1_4')} ${ta('principals_p1_5')} ${ta('principals_p1_6')} 
                            ${ta('principals_p1_7')} ${ta('principals_p1_8')} ${ta('principals_p1_9')} 
                            ${ta('principals_p2_1')} ${ta('principals_p2_2')} 
                            ${ta('principals_p3_1')} ${ta('principals_p3_2')} 
                            ${ta('principals_p4_1')} ${ta('principals_p4_2')} 
                            ${ta('principals_p5_1')} ${ta('principals_p5_2')}`}
                          </p>
                        </div>
                      </details>
                    </section>
                    <section className="toggle">
                      <details className=" border-b  p-3 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
                        <summary className="leading-6 text-slate-900 dark:text-black font-semibold select-none">
                          {ta('principals_p6_1')}
                        </summary>
                        <div className="mt-3 text-sm leading-6 text-slate-600">
                          <p>
                            {`${ta('principals_p6_2')} ${ta('principals_p6_3')} ${ta('principals_p6_4')} 
                            ${ta('principals_p6_5')} ${ta('principals_p6_6')} ${ta('principals_p6_7')} 
                            ${ta('principals_p6_8')} ${ta('principals_p6_9')} ${ta('principals_p6_10')} 
                            ${ta('principals_p6_11')} ${ta('principals_p6_12')}`}
                          </p>
                        </div>
                      </details>
                    </section>
                  </div>
                </div>
              </div>

              <div
                className="d-block appear-animation pt-4"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="300"
              >
                <a
                  className="btn btn-modern btn-primary text-capitalize text-dark text-3 anim-hover-translate-top-5px transition-3ms px-2 py-1"
                  href="#"
                  style={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <span style={{ marginRight: '7px' }}>Lets Talk</span>
                  <ImArrowUpRight2 />
                </a>
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
