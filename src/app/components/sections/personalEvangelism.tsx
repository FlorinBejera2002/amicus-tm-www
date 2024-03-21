import React from "react";
import Image from "next/image";
import step1 from "../../../../public/logo_horizontal_black.png";

export default function PersonalEvangelism() {
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
                      height={50}
                      src={step1}
                      width={150}
                      loading="lazy"
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
                      src={step1}
                      width={150}
                      loading="lazy"
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
                      src={step1}
                      width={150}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3
              className="text-9 text-xl-11 line-height-3 text-transform-none font-weight-semibold mb-4 mb-lg-3 mb-xl-4 appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="250"
            >
              Innovation to transform your organization.
            </h3>
            <p
              className="text-4-5 line-height-7 text-dark pb-1 mb-4 mb-lg-2 mb-xl-4 appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="500"
            >
              Cras a elit sit amet leo accumsan volutpat. Suspendisse
              hendreriast ehicula leo, vel efficitur felis ultrices non. Cras a
              elit sit amet leo acun volutpat. Suspendisse hendrerit vehicula
              leo, vel efficitur fel.{" "}
            </p>

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
                  <a className="toggle-title text-dark text-4">What We Do</a>
                  <div className="toggle-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur pellentesque neque eget diam posuere porta.
                      Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia.
                      Proin adipiscing porta tellus, ut feugiat nibh adipiscing
                      sit amet. In eu justo a felis faucibus ornare vel id
                      metus. Vestibulum ante ipsum primis in faucibus orci
                      luctus et ultrices posuere cubilia Curae; In eu libero
                      ligula. Fusce eget metus lorem, ac viverra leo. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur pellentesque neque eget diam posuere porta.
                      Quisque ut nulla at nunc <a href="#">vehicula</a> lacinia.{" "}
                    </p>
                  </div>
                </section>
                <section className="toggle">
                  <a className="toggle-title text-dark text-4">
                    Pro Experience
                  </a>
                  <div className="toggle-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur eget leo at velit imperdiet varius. In eu ipsum
                      vitae velit congue iaculis vitae at risus. Nullam tortor
                      nunc, bibendum vitae semper a, volutpat eget massa. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Integer
                      fringilla, orci sit amet posuere auctor, orci eros
                      pellentesque odio, nec pellentesque erat ligula nec massa.
                      Aenean consequat lorem ut felis ullamcorper posuere
                      gravida tellus faucibus. Maecenas dolor elit, pulvinar eu
                      vehicula eu, consequat et lacus. Duis et purus ipsum. In
                      auctor mattis ipsum id molestie. Donec risus nulla,
                      fringilla a rhoncus vitae, semper a massa. Vivamus
                      ullamcorper, enim sit amet consequat laoreet, tortor
                      tortor dictum urna, ut egestas urna ipsum nec libero.
                      Nulla justo leo, molestie vel tempor nec, egestas at
                      massa. Aenean pulvinar, felis porttitor iaculis pulvinar,
                      odio orci sodales odio, ac pulvinar felis quam sit.
                    </p>
                  </div>
                </section>
                <section className="toggle">
                  <a className="toggle-title text-dark text-4">
                    Partners and Investors
                  </a>
                  <div className="toggle-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur eget leo at velit imperdiet varius. In eu ipsum
                      vitae velit congue iaculis vitae at risus. Nullam tortor
                      nunc, bibendum vitae semper a, volutpat eget massa. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Integer
                      fringilla, orci sit amet posuere auctor, orci eros
                      pellentesque odio, nec pellentesque erat ligula nec massa.
                      Aenean consequat lorem ut felis ullamcorper posuere
                      gravida tellus faucibus. Maecenas dolor elit, pulvinar eu
                      vehicula eu, consequat et lacus. Duis et purus ipsum. In
                      auctor mattis ipsum id molestie. Donec risus nulla,
                      fringilla a rhoncus vitae, semper a massa. Vivamus
                      ullamcorper, enim sit amet consequat laoreet, tortor
                      tortor dictum urna, ut egestas urna ipsum nec libero.
                      Nulla justo leo, molestie vel tempor nec, egestas at
                      massa. Aenean pulvinar, felis porttitor iaculis pulvinar,
                      odio orci sodales odio, ac pulvinar felis quam sit.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            <div
              className="d-block appear-animation pt-4"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="300"
            >
              <a
                href="#"
                className="btn btn-modern btn-primary text-capitalize text-dark text-3 px-2 py-1 anim-hover-translate-top-5px transition-2ms"
              >
                Learn More{" "}
                <i className="fas fa-arrow-right rotate-l-45 ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
