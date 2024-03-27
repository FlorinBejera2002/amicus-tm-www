import React from "react";
import Image from "next/image";
import Link from "next/link";
import horizontalLogo from "../../../../../public/logo_horizontal_black.png";

export default function Presentation() {
  return (
    <div className="px-3 px-lg-0">
      <div className="container py-1">
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
                  Cras a elit sit amet leo acun volutpat. Suspendisse hendrerit.{" "}
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
                  Cras a elit sit amet leo acun volutpehicula leo, vel efficitur
                  fel.{" "}
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
  );
}
