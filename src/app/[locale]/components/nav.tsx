

import Image from "next/image";
import Link from "next/link";
import horizontalLogo from "../../../../public/logo_horizontal_white.png";

import Elements from "../elements/page";
import Portfolio from "../portfolio/page";

export default function Nav() {
  return (
    <header className="header-transparent" id="header">
      <div className="header-body border-top-0 bg-quaternary box-shadow-none h-auto">
        <div className="header-container container p-static">
          <div className="header-row py-3">
            <div className="header-column">
              <div className="header-row">
                <div className="header-logo">
                  <Link href="/">
                    <Image
                      alt="arise for christ logo"
                      className="object-contain"
                      height={40}
                      src={horizontalLogo}
                      width={140}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="header-column justify-content-end">
              <div className="header-row">
                <div className="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">
                  <div
                    className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-text-capitalize 
                       header-nav-main-arrows header-nav-main-full-width-mega-menu header-nav-main-mega-menu-bg-hover 
                       header-nav-main-mega-menu-bg-hover-dark header-nav-main-effect-5"
                      >
                    <nav className="collapse">
                      <ul className="nav nav-pills" id="mainNav">
                        <li>
                          <a className="nav-link " href="/">
                            Home
                          </a>
                        </li>

                        <li>
                          <a className="nav-link" href="">
                            About Us
                          </a>
                        </li>

                        <li>
                          <a className="nav-link" href="">
                            Services
                          </a>
                        </li>

                        <li>
                          <a className="nav-link" href="">
                            Blog
                          </a>
                        </li>
                        <Portfolio />
                        <Elements />
                      </ul>
                    </nav>
                  </div>

                  <a
                    className="btn btn-primary font-weight-semibold text-3 py-lg-3 btn-gradient text-quaternary
                       anim-hover-translate-top-5px transition-2ms ms-4"
                    href="demo-creative-agency-2-contact-us.html"
                    target="_blank"
                  >
                    <span className="px-lg-4 d-block ws-nowrap">
                      Contact Us
                    </span>
                  </a>

                  <button className="btn header-btn-collapse-nav text-dark">
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
