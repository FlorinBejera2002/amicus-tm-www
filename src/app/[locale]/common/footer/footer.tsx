'use client'

import Socials from './components/socials'
import FooterOverview from './components/footer-overview'
import InViewTransition from '../in-view-transition'
import Animation from '../animation'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import horizontalLogo from '../../../../../public/logo_horizontal_white.webp'

export default function Footer() {
  const pathname = usePathname()

  const language = pathname.split('/')[1]

  const companyLinks = [
    { href: '/', titleKey: 'header.home' },
    { href: `/${language}/about`, titleKey: 'header.about_us' },
    { href: `/${language}/vision`, titleKey: 'header.vision' }
  ]
  const projectLinks = [
    { href: `/${language}/donate`, titleKey: 'header.donate' },
    { href: `/${language}/projects/time-is-now`, titleKey: 'header.project_' },
    { href: `/${language}/projects/podcast`, titleKey: 'header.podcast' }
  ]
  const resourcesLinks = [
    { href: `/${language}/donate`, titleKey: 'header.terms' },
    { href: `/${language}/projects/time-is-now`, titleKey: 'header.blog' },
    { href: '?ev-req-form=open', titleKey: 'header.contact' }
  ]

  return (
    <footer className="p-relative  border-top-0 font-poppins px-2" id="footer">
      <InViewTransition damping={50} delay={0.5}>
        <div className="container pt-5 pb-3 border-bottom px-3">
          <div className="row py-5">
            <div className="col-lg-6 mt-5 pt-3 gap-4">
              <Link className="flex w-fit" href="/">
                <Image
                  alt="arise for christ logo"
                  className="object-contain pb-6"
                  height={40}
                  src={horizontalLogo}
                />
              </Link>

              <ul className="list list-unstyled pt-4">
                <li className="d-flex align-items-center mb-4 ">
                  <Link
                    className="d-inline-flex align-items-center text-decoration-none font-weight-semibold text-white text-4-5 hover:!text-[#f3a61d] transition-all duration-300"
                    href="mailto:info@ariseforchrist.com"
                  >
                    info@ariseforchrist.com
                  </Link>
                </li>

                <li className="d-blok align-items-center mb-4">
                  <div className="pb-3 align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5 transition-all duration-300">
                    +40-721-804-560
                  </div>

                  <div className=" align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5 transition-all duration-300">
                    0356-175-148
                  </div>
                </li>
              </ul>

              <Socials />
            </div>
            <div className="col-lg-6 mt-lg-5 pt-lg-3">
              <div className="row mb-5-5">
                <FooterOverview
                  links={companyLinks}
                  titleKey="header.company"
                />
                <FooterOverview
                  links={projectLinks}
                  titleKey="header.project"
                />
                <FooterOverview
                  links={resourcesLinks}
                  titleKey="header.resources"
                />
              </div>

              <h4 className="text-color-light font-extrabold mb-3 text-lg">
                Blog
              </h4>
              <div className="flex flex-wrap text-white text-xs gap-2.5">
                <div className="bg-dark--100 py-1.5 px-3 transform hover:-translate-y-1 transition-transform duration-200">
                  Web Design
                </div>
                <div className="bg-dark--100 py-1.5 px-3 transform hover:-translate-y-1 transition-transform duration-200">
                  CMS
                </div>
                <div className="bg-dark--100 py-1.5 px-3 transform hover:-translate-y-1 transition-transform duration-200">
                  SEO
                </div>
                <div className="bg-dark--100 py-1.5 px-3 transform hover:-translate-y-1 transition-transform duration-200">
                  User Experience (UX) Design
                </div>
                <div className="bg-dark--100 py-1.5 px-3 transform hover:-translate-y-1 transition-transform duration-200">
                  Social Media Marketing
                </div>
                <div className="bg-dark--100 py-1.5 px-3 transform hover:-translate-y-1 transition-transform duration-200">
                  Website Development
                </div>
                <div className="bg-dark--100 py-1.5 px-3 transform hover:-translate-y-1 transition-transform duration-200">
                  E-commerce Strategies
                </div>
                <div className="bg-dark--100 py-1.5 px-3 transform hover:-translate-y-1 transition-transform duration-200">
                  Mobile Applications
                </div>
                <div className="bg-dark--100 py-1.5 px-3 transform hover:-translate-y-1 transition-transform duration-200">
                  Website Maintenance
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
                <span className="text-color-grey text-color-hover-primary cursor-pointer">
                  Privacy Policy
                </span>
                <span className="text-color-grey text-color-hover-primary ms-3 cursor-pointer">
                  Terms of Use
                </span>
              </div>
            </div>
          </div>
        </div>
        <Animation />
      </InViewTransition>
    </footer>
  )
}
