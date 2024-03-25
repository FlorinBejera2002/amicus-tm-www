

import React from "react";
import Image from "next/image";
import Link from "next/link";
import horizontalLogo from "../../../../../public/logo_horizontal_black.png";

export default function About() {
  return (
    <section id="about">
      <div className="bg-color-dark p-relative z-index-1 custom-section-1 bg-position-center bg-size-cover lazyload">
        <div className="container py-4">
          <div className="row align-items-center py-5 my-5">
            <div className="col-lg-5">
              <h3
                className="text-9 text-xl-11 line-height-3 text-light text-transform-none font-weight-semibold mb-4 mb-lg-3 mb-xl-4 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="250"
              >
                Let's take your business to the next level!
              </h3>
              <p
                className="text-4-5 line-height-7 pb-1 mb-4 mb-lg-2 mb-xl-4 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="500"
              >
                Cras a elit sit amet leo accumsan volutpat. Suspendisse
                hendreriast ehicula leo, vel efficitur felis ultrices non.{" "}
              </p>

              <div
                className="appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="450"
              >
                <span className="badge bg-dark--100 font-weight-normal text-3-5 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                  10+ years experience
                </span>
                <span className="badge bg-dark--100 font-weight-normal text-3-5 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                  Market-Focused
                </span>
                <span className="badge bg-dark--100 font-weight-normal text-3-5 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                  Top expertise
                </span>
                <span className="badge bg-dark--100 font-weight-normal text-3-5 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                  Corporate Investors
                </span>
                <span className="badge bg-dark--100 font-weight-normal text-3-5 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                  Integrity & Innovation
                </span>
              </div>
            </div>
            <div className="col-lg-7 text-center">
              <div
                className="d-block appear-animation pt-4"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="300"
              >
                <a
                  href="#"
                  className="btn btn-modern btn-primary text-dark text-4 text-capitalize custom-btn-1 py-1 anim-hover-translate-top-5px transition-2ms"
                >
                  Let's Talk{" "}
                  <i className="fas fa-arrow-right rotate-l-45 ms-2 p-relative bottom-12 right-7"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-1">
        <div className="row pt-5 mt-3">
          <div className="col text-center">
            <h3
              className="text-7 text-transform-none font-weight-semibold my-4 pt-3 appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="250"
            >
              Trusted by great companies like
            </h3>
          </div>
        </div>
      </div>
      <div
        className="appear-animation"
        data-appear-animation="fadeIn"
        data-appear-animation-delay="350"
      >
        <div
          className="marquee custom-marquee-1 pt-4 d-flex"
          data-duration="40000"
          data-gap="10"
          data-duplicated="true"
          data-startVisible="true"
        >
          <span className="d-flex align-items-center" data-clone-element="2">
            <div className="px-5 py-1">
              <Image
                alt="arise for christ logo"
                className="img-fluid"
                height={50}
                src={horizontalLogo}
                width={150}
              />
            </div>
            <div className="px-5 py-1">
              <Image
                alt="arise for christ logo"
                className="img-fluid"
                height={50}
                src={horizontalLogo}
                width={150}
              />
            </div>
            <div className="px-5 py-1">
              <Image
                alt="arise for christ logo"
                className="img-fluid"
                height={50}
                src={horizontalLogo}
                width={150}
              />
            </div>
            <div className="px-5 py-1">
              <Image
                alt="arise for christ logo"
                className="img-fluid"
                height={50}
                src={horizontalLogo}
                width={150}
              />
            </div>
            <div className="px-5 py-1">
              <Image
                alt="arise for christ logo"
                className="img-fluid"
                height={50}
                src={horizontalLogo}
                width={150}
              />
            </div>
            <div className="px-5 py-1">
              <Image
                alt="arise for christ logo"
                className="img-fluid"
                height={50}
                src={horizontalLogo}
                width={150}
              />
            </div>
          </span>
        </div>
      </div>
      <div className="px-3 px-lg-0">
        <div className="container py-1">
          <div className="row py-5 my-3">
            <div className="col text-center pt-5">
              <h3
                className="text-9 text-xl-11 line-height-3 text-transform-none font-weight-semibold mb-4 mb-lg-3 mb-xl-4 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="250"
              >
                Loved by people
                <a
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover"
                  data-bs-custom-className="custom-popover-1"
                  data-bs-placement="top"
                  data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  <span className="d-inline-block mx-2 custom-avatar-1">
                    <Image
                      alt="arise for christ logo"
                      className="rounded-circle img-fluid"
                      height={50}
                      src={horizontalLogo}
                      width={150}
                    />
                    <span
                      className="custom-avatar-1-info d-none d-lg-inline-block appear-animation"
                      data-appear-animation="fadeInUpShorter"
                      data-appear-animation-delay="300"
                    >
                      <span className="opacity-5">
                        <img
                          width="30"
                          src="img/demos/creative-agency-2/svg/arrow-thin.svg"
                          alt=""
                          data-icon
                          data-plugin-options="{'onlySVG': true, 'extraClass': ''}"
                        />{" "}
                        hover/click me{" "}
                      </span>
                    </span>
                  </span>
                </a>
                check out how we help <br />
                <a
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover"
                  data-bs-custom-className="custom-popover-1"
                  data-bs-placement="top"
                  data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  <span className="d-inline-block mx-2 custom-avatar-1">
                    <Image
                      alt="arise for christ logo"
                      className="rounded-circle img-fluid"
                      height={50}
                      src={horizontalLogo}
                      width={150}
                    />
                  </span>
                </a>
                customers across the{" "}
                <a
                  data-bs-container="body"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover"
                  data-bs-custom-className="custom-popover-1"
                  data-bs-placement="top"
                  data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  <span className="d-inline-block mx-2 custom-avatar-1">
                    <Image
                      alt="arise for christ logo"
                      className="rounded-circle img-fluid"
                      height={50}
                      src={horizontalLogo}
                      width={150}
                    />
                  </span>
                </a>
                globe.
              </h3>
            </div>
          </div>
          <div className="row py-5 my-3">
            <div className="col text-center custom-projects-1">
              <div className="row border-top">
                <div className="col-lg-2 order-3 order-lg-0 py-4 border-end ps-0 pe-0 pe-lg-4 m-0 text-start">
                  <a
                    href="#"
                    className="btn btn-modern btn-dark w-100 font-weight-semibold text-capitalize text-3 py-3 anim-hover-translate-top-5px transition-2ms mb-5 mb-lg-0"
                  >
                    <span className="px-4 d-block ws-nowrap">
                      View Online{" "}
                      <i className="fas fa-arrow-right rotate-l-45 ms-2"></i>
                    </span>
                  </a>
                </div>
                <div className="col-lg-6 py-4 border-end px-0 px-lg-4 m-0 text-start">
                  <h3
                    className="text-8 text-transform-none font-weight-semibold mb-4 mt-5 mt-lg-3 pt-0 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="250"
                  >
                    Okler Themes
                  </h3>
                  <p
                    className="text-4-5 line-height-7 text-dark pb-1 mb-4 mb-lg-2 mb-xl-4 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="500"
                  >
                    Cras a elit sit amet leo accumsan volutpat. Suspendisse
                    hendreriast ehicula leo, vel efficitur felis ultrices non.
                    Cras a elit sit amet leo acun volutpat. Suspendisse
                    hendrerit.{" "}
                  </p>
                </div>
                <div className="col-lg-4 p-0 ps-lg-4">
                  <Link href="#">
                    <Image
                      alt="arise for christ logo"
                      className="img-fluid my-lg-4"
                      height={40}
                      src={horizontalLogo}
                      width={140}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
              <div className="row border-top">
                <div className="col-lg-2 order-3 order-lg-0 py-4 border-end ps-0 pe-0 pe-lg-4 m-0 text-start">
                  <a
                    href="#"
                    className="btn btn-modern btn-dark w-100 font-weight-semibold text-capitalize text-3 py-3 anim-hover-translate-top-5px transition-2ms mb-5 mb-lg-0"
                  >
                    <span className="px-4 d-block ws-nowrap">
                      View Online{" "}
                      <i className="fas fa-arrow-right rotate-l-45 ms-2"></i>
                    </span>
                  </a>
                </div>
                <div className="col-lg-6 py-4 border-end px-0 px-lg-4 m-0 text-start">
                  <h3
                    className="text-8 text-transform-none font-weight-semibold mb-4 mt-5 mt-lg-3 pt-0 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="250"
                  >
                    Envato
                  </h3>
                  <p
                    className="text-4-5 line-height-7 text-dark pb-1 mb-4 mb-lg-2 mb-xl-4 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="500"
                  >
                    Cras a elit sit amet leo accumsan volutpat. Suspendisse
                    hendreriast ehicula leo, vel efficitur felis ultrices non.
                    Cras a elit siel efficitur fel.{" "}
                  </p>
                </div>
                <div className="col-lg-4 p-0 ps-lg-4">
                  <Link href="#">
                    <Image
                      alt="arise for christ logo"
                      className="img-fluid my-lg-4"
                      height={40}
                      src={horizontalLogo}
                      width={140}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
              <div className="row border-top border-bottom">
                <div className="col-lg-2 order-3 order-lg-0 py-4 border-end ps-0 pe-0 pe-lg-4 m-0 text-start">
                  <a
                    href="#"
                    className="btn btn-modern btn-dark w-100 font-weight-semibold text-capitalize text-3 py-3 anim-hover-translate-top-5px transition-2ms mb-5 mb-lg-0"
                  >
                    <span className="px-4 d-block ws-nowrap">
                      View Online{" "}
                      <i className="fas fa-arrow-right rotate-l-45 ms-2"></i>
                    </span>
                  </a>
                </div>
                <div className="col-lg-6 py-4 border-end px-0 px-lg-4 m-0 text-start">
                  <h3
                    className="text-8 text-transform-none font-weight-semibold mb-4 mt-5 mt-lg-3 pt-0 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="250"
                  >
                    Porto Template
                  </h3>
                  <p
                    className="text-4-5 line-height-7 text-dark pb-1 mb-4 mb-lg-2 mb-xl-4 appear-animation"
                    data-appear-animation="fadeInUpShorter"
                    data-appear-animation-delay="500"
                  >
                    Cras a elit sit amet leo accumsan volutpat. Suspendisse
                    hendreriast ehicula leo, vel efficitur felis ultrices non.
                    Cras a elit sit amet leo acun volutpehicula leo, vel
                    efficitur fel.{" "}
                  </p>
                </div>
                <div className="col-lg-4 p-0 ps-lg-4">
                  <Link href="#">
                    <Image
                      alt="arise for christ logo"
                      className="img-fluid my-lg-4"
                      height={40}
                      src={horizontalLogo}
                      width={140}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
