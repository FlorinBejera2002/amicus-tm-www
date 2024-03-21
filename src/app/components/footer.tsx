import React from "react";
import horizontalLogo from "../../../public/logo_horizontal_black.png";
import arrowUpLight from "../../../public/img/demos/creative-agency-2/svg/arrow-up-light.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="p-relative bg-dark border-top-0">
      <div className="container pt-5 pb-3">
        <div className="row py-5">
          <div className="col-lg-6 mt-5 pt-3">
            <a
              href="demo-creative-agency-2.html"
              className="text-decoration-none"
            >
              <img
                src="img/demos/creative-agency-2/logo-light.png"
                width="123"
                height="32"
                className="img-fluid mb-5"
                alt="Porto"
              />
            </a>
            <ul className="list list-unstyled">
              <li className="d-flex align-items-center mb-4">
                <a
                  href="mailto:porto@creative-agency-2.com"
                  className="d-inline-flex align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5"
                >
                  porto@domain.com
                </a>
              </li>
              <li className="d-flex align-items-center mb-4">
                <a
                  href="tel:8001234567"
                  className="d-inline-flex align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5"
                >
                  800-123-4567
                </a>
              </li>
            </ul>
            <ul className="social-icons social-icons-clean social-icons-medium mb-5">
              <li className="social-icons-facebook">
                <a
                  href="http://www.facebook.com/"
                  target="_blank"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f text-color-light"></i>
                </a>
              </li>
              <li className="social-icons-twitter">
                <a
                  href="http://www.twitter.com/"
                  target="_blank"
                  title="Twitter"
                >
                  <i className="fab fa-twitter text-color-light"></i>
                </a>
              </li>
              <li className="social-icons-instagram">
                <a
                  href="http://www.instagram.com/"
                  target="_blank"
                  title="Instagram"
                >
                  <i className="fab fa-instagram text-color-light"></i>
                </a>
              </li>
              <li className="social-icons-linkedin">
                <a
                  href="http://www.linkedin.com/"
                  target="_blank"
                  title="Linkedin"
                >
                  <i className="fab fa-linkedin text-color-light"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-lg-5 pt-lg-3">
            <div className="row mb-5-5">
              <div className="col-md-4 mb-4 mb-lg-0">
                <h4 className="text-color-light font-weight-bold mb-3">
                  Company
                </h4>
                <ul className="list list-unstyled text-3-5">
                  <li>
                    <a
                      href="#"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-color-grey text-color-hover-primary"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-4 mb-lg-0">
                <h4 className="text-color-light font-weight-bold mb-3">
                  Solutions
                </h4>
                <ul className="list list-unstyled text-3-5">
                  <li>
                    <a
                      href="#"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Brand Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-color-grey text-color-hover-primary"
                    >
                      UX Design
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-4 mb-lg-0">
                <h4 className="text-color-light font-weight-bold mb-3">
                  Resources
                </h4>
                <ul className="list list-unstyled text-3-5">
                  <li>
                    <a
                      href="#"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-color-grey text-color-hover-primary"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4 className="text-color-light font-weight-bold mb-3">Blog</h4>
                <a href="#">
                  <span className="badge bg-dark--100 font-weight-normal text-2 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                    Web Design
                  </span>
                </a>
                <a href="#">
                  <span className="badge bg-dark--100 font-weight-normal text-2 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                    CMS
                  </span>
                </a>
                <a href="#">
                  <span className="badge bg-dark--100 font-weight-normal text-2 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                    SEO
                  </span>
                </a>
                <a href="#">
                  <span className="badge bg-dark--100 font-weight-normal text-2 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                    User Experience (UX) Design
                  </span>
                </a>
                <a href="#">
                  <span className="badge bg-dark--100 font-weight-normal text-2 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                    Social Media Marketing
                  </span>
                </a>
                <a href="#">
                  <span className="badge bg-dark--100 font-weight-normal text-2 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                    Website Development
                  </span>
                </a>
                <a href="#">
                  <span className="badge bg-dark--100 font-weight-normal text-2 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                    E-commerce Strategies
                  </span>
                </a>
                <a href="#">
                  <span className="badge bg-dark--100 font-weight-normal text-2 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                    Mobile Applications
                  </span>
                </a>
                <a href="#">
                  <span className="badge bg-dark--100 font-weight-normal text-2 badge-md anim-hover-translate-top-5px transition-2ms me-2 mb-2">
                    Website Maintenance
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright bg-transparent">
        <div className="container pb-5">
          <hr className="bg-color-light opacity-1" />
          <div className="row">
            <div className="col-lg-6 mt-4">
              <p className="text-start text-3-5 font-weight-semi-bold text-light mb-0">
                Porto © 2024. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-lg-end mt-4">
              <a href="#" className="text-color-grey text-color-hover-primary">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-color-grey text-color-hover-primary ms-3"
              >
                Terms of Use
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
            className="img-fluid"
            alt="arise for christ logo"
            height={50}
            src={arrowUpLight}
            width={150}
          />
        </div>
        <div
          className="appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay="100"
        >
          <Image
            alt="arise for christ logo"
            className="img-fluid"
            height={50}
            src={arrowUpLight}
            width={150}
          />
        </div>
        <div
          className="appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay="200"
        >
          <Image
            alt="arise for christ logo"
            className="img-fluid"
            height={50}
            src={arrowUpLight}
            width={150}
          />
        </div>
      </div>
    </footer>
  );
}
