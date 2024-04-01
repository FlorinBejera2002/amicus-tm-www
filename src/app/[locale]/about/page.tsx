import Image from "next/image";
import Numbers from "../components/sections/numbers";
import arrowUpLight from "../../../public/img/demos/creative-agency-2/svg/arrow-up-light.svg";

const About = () => {
  return (
    <div role="main" className="main">
      <section
        id="home"
        className="p-relative border-0 bg-quaternary overflow-hidden m-0 p-0"
      >
        <div className="custom-hero-heading">
          <strong>The Hope</strong>
        </div>
        <div className="custom-hero-bg">
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient
                id="Gradient1"
                cx="50%"
                cy="50%"
                fx="0.441602%"
                fy="50%"
                r=".5"
              >
                <animate
                  attributeName="fx"
                  dur="34s"
                  values="0%;3%;0%"
                  repeatCount="indefinite"
                ></animate>
                <stop offset="0%" stop-color="rgba(251, 193, 5, 1)"></stop>
                <stop offset="100%" stop-color="rgba(251, 193, 5, 0)"></stop>
              </radialGradient>
            </defs>
            <rect
              x="13.744%"
              y="1.18473%"
              width="100%"
              height="100%"
              fill="url(#Gradient1)"
              transform="rotate(334.41 50 50)"
            >
              <animate
                attributeName="x"
                dur="20s"
                values="25%;0%;25%"
                repeatCount="indefinite"
              ></animate>
              <animate
                attributeName="y"
                dur="21s"
                values="0%;25%;0%"
                repeatCount="indefinite"
              ></animate>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="7s"
                repeatCount="indefinite"
              ></animateTransform>
            </rect>
          </svg>
        </div>
        <div className="container p-relative z-index-3">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <div className="overflow-hidden mb-1">
                <h2
                  className="font-weight-semi-bold text-color-grey text-uppercase positive-ls-3 text-4-5 line-height-2 line-height-sm-7 mb-0 appear-animation"
                  data-appear-animation="maskUp"
                  data-appear-animation-delay="100"
                >
                  A creative solutions company
                </h2>
              </div>
              <h1
                className="text-color-light font-weight-bold custom-hero-font-1 pb-2 mb-4 appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="200"
              >
                Helping you to meet the goals of the digital age
              </h1>
              <div
                className="d-block appear-animation"
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
        <div className="p-absolute custom-el-1 custom-el-pos-1">
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="0"
          >
            <Image
              alt="arrowUpLight"
              className="object-contain"
              src={arrowUpLight}
              width={140}
            />
          </div>
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="100"
          >
            <Image
              alt="arrowUpLight"
              className="object-contain"
              src={arrowUpLight}
              width={140}
            />
          </div>
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="200"
          >
            <Image
              alt="arrowUpLight"
              className="object-contain"
              src={arrowUpLight}
              width={140}
            />
          </div>
        </div>
        <div className="p-absolute custom-el-2 custom-el-pos-2">
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="0"
          >
            <Image
              alt="arrowUpLight"
              className="object-contain"
              src={arrowUpLight}
              width={70}
            />
          </div>
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="100"
          >
            <Image
              alt="arrowUpLight"
              className="object-contain"
              src={arrowUpLight}
              width={70}
            />
          </div>
          <div
            className="appear-animation"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="200"
          >
            <Image
              alt="arrowUpLight"
              className="object-contain"
              src={arrowUpLight}
              width={70}
            />
          </div>
        </div>
      </section>
      <Numbers />
    </div>
  );
};

export default About;
