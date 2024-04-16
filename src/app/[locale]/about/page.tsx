// import Numbers from "../components/sections/numbers";

// import Image from "next/image";

// import arrowUpLight from "../../../../public/img/demos/creative-agency-2/svg/arrow-up-light.svg";

import CustomHeroBg from '../components/sections/custom-hero-bg'

const About = () => {
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
                      href="demo-law-firm-2.html"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="text-color-primary active">ABOUT US</li>
                </ul>
                <h1 className="text-color-light font-weight-bold text-10">
                  About Us
                </h1>
              </div>
            </div>
          </div>
        </div>
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
                Cras a elit sit amet leo accumsan volutpat. Suspendisse
                hendreriast ehicula leo, vel efficitur felis ultrices non. Cras
                a elit sit amet leo acun volutpat. Suspendisse hendrerit
                vehicula leo, vel efficitur fel.
              </p>
            </div>
          </div>
          <div className="row px-lg-3 py-4">
            <div className="col-lg-6 mb-lg-0 mb-5">
              <img
                alt=""
                className="img-fluid custom-border-radius-1"
                src="img/demos/creative-agency-2/generic/generic-1.jpg"
              />
            </div>
            <div className="col-lg-6 ps-lg-4">
              <p className="text-4 line-height-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dictum eleifend eros a pharetra. Cras aliquam vestibulum
                vehicula. Sed sed lectus risus. Vestibulum maximus ac purus in
                euismod. In venenatis tellus ante, id porta risus semper quis.
                Aenean vel posuere urna, sit amet placerat massa. Quisque
                efficitur interdum libero, sed dictum lorem euismod sed.
              </p>

              <p className="text-4 line-height-7">
                Aenean vel posuere urna, sit amet placerat massa. Quisque
                efficitur interdum libero, sed dictum lorem euismod sed.
              </p>

              <div className="d-block">
                <div
                  className="toggle toggle-minimal toggle-dark"
                  data-plugin-toggle={true}
                >
                  <section className="toggle">
                    <a className="toggle-title text-dark text-4">What We Do</a>
                    <div className="toggle-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc
                        <a href="#">vehicula</a> lacinia. Proin adipiscing porta
                        tellus, ut feugiat nibh adipiscing sit amet. In eu justo
                        a felis faucibus ornare vel id metus. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; In eu libero ligula. Fusce eget metus
                        lorem, ac viverra leo. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Curabitur pellentesque
                        neque eget diam posuere porta. Quisque ut nulla at nunc
                        <a href="#">vehicula</a> lacinia.
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
                        Curabitur eget leo at velit imperdiet varius. In eu
                        ipsum vitae velit congue iaculis vitae at risus. Nullam
                        tortor nunc, bibendum vitae semper a, volutpat eget
                        massa. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer fringilla, orci sit amet
                        posuere auctor, orci eros pellentesque odio, nec
                        pellentesque erat ligula nec massa. Aenean consequat
                        lorem ut felis ullamcorper posuere gravida tellus
                        faucibus. Maecenas dolor elit, pulvinar eu vehicula eu,
                        consequat et lacus. Duis et purus ipsum. In auctor
                        mattis ipsum id molestie. Donec risus nulla, fringilla a
                        rhoncus vitae, semper a massa. Vivamus ullamcorper, enim
                        sit amet consequat laoreet, tortor tortor dictum urna,
                        ut egestas urna ipsum nec libero. Nulla justo leo,
                        molestie vel tempor nec, egestas at massa. Aenean
                        pulvinar, felis porttitor iaculis pulvinar, odio orci
                        sodales odio, ac pulvinar felis quam sit.
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
                        Curabitur eget leo at velit imperdiet varius. In eu
                        ipsum vitae velit congue iaculis vitae at risus. Nullam
                        tortor nunc, bibendum vitae semper a, volutpat eget
                        massa. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer fringilla, orci sit amet
                        posuere auctor, orci eros pellentesque odio, nec
                        pellentesque erat ligula nec massa. Aenean consequat
                        lorem ut felis ullamcorper posuere gravida tellus
                        faucibus. Maecenas dolor elit, pulvinar eu vehicula eu,
                        consequat et lacus. Duis et purus ipsum. In auctor
                        mattis ipsum id molestie. Donec risus nulla, fringilla a
                        rhoncus vitae, semper a massa. Vivamus ullamcorper, enim
                        sit amet consequat laoreet, tortor tortor dictum urna,
                        ut egestas urna ipsum nec libero. Nulla justo leo,
                        molestie vel tempor nec, egestas at massa. Aenean
                        pulvinar, felis porttitor iaculis pulvinar, odio orci
                        sodales odio, ac pulvinar felis quam sit.
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
                  className="btn btn-modern btn-primary text-capitalize text-dark text-3 anim-hover-translate-top-5px transition-2ms px-2 py-1"
                  href="#"
                >
                  Lets Talk
                  <i className="fas fa-arrow-right rotate-l-45 ms-2"></i>
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
