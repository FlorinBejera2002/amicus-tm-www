import React from "react";
import horizontalLogo from "../../../../public/logo_horizontal_white.png";
import arrowUpLight from "../../../../public/img/demos/creative-agency-2/svg/arrow-up-light.svg";
import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";
import Animation from "./sections/animation";

export default function Footer() {
  return (
    <footer id="footer" className="p-relative  border-top-0">
      <div className="container pt-5 pb-3 border-bottom">
        <div className="row py-5">
          <div className="col-lg-6 mt-5 pt-3 gap-4">
            <Link href="/">
              <Image
                alt="arise for christ logo"
                className="object-contain"
                height={40}
                src={horizontalLogo}
                width={140}
              />
            </Link>
            <ul className="list list-unstyled pt-4">
              <li className="d-flex align-items-center mb-4">
                <a
                  href="mailto:info@ariseforchrist.com"
                  className="d-inline-flex align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5"
                >
                  info@ariseforchrist.com
                </a>
              </li>
              <li className="d-blok align-items-center mb-4">
                <div className="pb-3">
                  <a
                    href="tel:+0721 804 560"
                    className=" align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5 "
                  >
                    +0721 804 560
                  </a>
                </div>
                <div>
                  <a
                    href="tel:0356 175 148"
                    className=" align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5"
                  >
                    0356 175 148
                  </a>
                </div>
              </li>
            </ul>
            <Socials />
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
                © Copyright AriseForChrist
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
     <Animation/>
    </footer>
  );
}
