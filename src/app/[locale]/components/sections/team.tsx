import React from "react";

export default function Team() {
  return (
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
  );
}
