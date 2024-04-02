import React from 'react'

export default function Numbers() {
  return (
    <section id="numbers">
      <div className="container bg-color-light p-relative z-index-2 py-1">
        <div className="row pt-5 pb-3">
          <div className="col-lg-9">
            <h3
              className="text-9 text-xl-11 line-height-3 text-transform-none font-weight-semibold mb-4 mb-lg-3 mb-xl-4 appear-animation"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="250"
            >
              Excellent results for over more than 10 years in the creative
              market.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col pb-5">
            <div
              className="carousel-half-full-width-wrapper carousel-half-full-width-right custom-carousel-1 pb-5 appear-animation"
              data-appear-animation="fadeIn"
              data-appear-animation-delay="450"
            >
              <div
                className="owl-carousel owl-theme carousel-half-full-width-right mb-5"
                data-plugin-options="{'responsive': {'0': {'items': 1}, '768': {'items': 3}, '992': {'items': 4}, '1200': {'items': 4}}, 'nav': false, 'dots': false, 'margin': 20, 'autoplay': true, 'autoplayTimeout': 4000, 'loop': true}"
              >
                <div>
                  <div className="card border-0 border-radius-0 bg-color-dark">
                    <div className="card-body">
                      <h4 className="card-title mb-1 custom-font-size-1 font-weight-semi-bold text-light">
                        345+
                      </h4>
                      <p className="text-4-5 line-height-7 text-light pb-0 mt-5 mb-0">
                        Cras a elit sit amet leo accumsan volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0 border-radius-0 bg-color-dark">
                    <div className="card-body">
                      <h4 className="card-title mb-1 custom-font-size-1 font-weight-semi-bold text-light">
                        1000+
                      </h4>
                      <p className="text-4-5 line-height-7 text-light pb-0 mt-5 mb-0">
                        A crasa elit sit amet leo accumsan volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0 border-radius-0 bg-color-dark">
                    <div className="card-body">
                      <h4 className="card-title mb-1 custom-font-size-1 font-weight-semi-bold text-light">
                        123+
                      </h4>
                      <p className="text-4-5 line-height-7 text-light pb-0 mt-5 mb-0">
                        Elit cras a elit sit amet leo accumsan volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0 border-radius-0 bg-color-dark">
                    <div className="card-body">
                      <h4 className="card-title mb-1 custom-font-size-1 font-weight-semi-bold text-light">
                        15+
                      </h4>
                      <p className="text-4-5 line-height-7 text-light pb-0 mt-5 mb-0">
                        Sit cras a elit sit amet leo accumsan volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0 border-radius-0 bg-color-dark">
                    <div className="card-body">
                      <h4 className="card-title mb-1 custom-font-size-1 font-weight-semi-bold text-light">
                        45+
                      </h4>
                      <p className="text-4-5 line-height-7 text-light pb-0 mt-5 mb-0">
                        Lorem a elit sit amet leo accumsan volutpat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
