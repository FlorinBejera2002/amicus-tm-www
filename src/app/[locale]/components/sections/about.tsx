import Image from 'next/image'

import horizontalLogo from '../../../../../public/logo_horizontal_black.webp'

export default function About() {
  return (
    <section id="about">
      <div className="md:px-48 py-1">
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
          data-duplicated="true"
          data-duration="40000"
          data-gap="10"
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
    </section>
  )
}
