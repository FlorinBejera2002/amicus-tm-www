'use client'

import Socials from './components/socials'
import FooterOverview from './components/footer-overview'
import { Newsletter } from '../../(home)/components/newsletter'

import { IoLogoWhatsapp } from 'react-icons/io'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import newarklogo from '../../../../../public/new-ark_logo.webp'
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
    {
      href: `/${language}/projects/time-is-now`,
      titleKey: 'header.project_subProject'
    },
    {
      href: `/${language}/projects/podcast`,
      titleKey: 'header.project_subPodcast'
    }
  ]

  return (
    <footer className="border-top-0 font-poppins" id="footer">
      <div className="border-bottom mx-auto max-w-[1480px] px-3">
        <div className="row px-8 py-5">
          <div className="col-lg-6 mt-5 gap-4 !px-0 pt-3">
            <Link className="flex w-fit" href="/">
              <Image
                alt="arise for christ logo"
                className="w-24 object-contain pb-6 md:w-40"
                height={40}
                src={horizontalLogo}
              />
            </Link>
            <ul className="list list-unstyled pt-4">
              <li className="d-flex align-items-center mb-4">
                <Link
                  className="d-inline-flex align-items-center text-decoration-none font-weight-semibold text-4-5 text-white transition-all duration-300 hover:!text-accent"
                  href="mailto:info@ariseforchrist.com"
                >
                  info@ariseforchrist.com
                </Link>
              </li>
              <li className="d-blok align-items-center mb-4">
                <div className="align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5 pb-3 transition-all duration-300">
                  +40-721-804-560
                </div>
                <div className="align-items-center text-decoration-none text-color-light text-color-hover-primary font-weight-semibold text-4-5 transition-all duration-300">
                  0356-175-148
                </div>
              </li>
            </ul>
            <Socials />
            <li className="d-blok align-items-center mb-10">
              <h3 className="text-base font-bold md:text-xl">
                Contactează-ne pe WhatsApp
              </h3>
              <div className="align-items-center text-decoration-none font-weight-semibold  text-4-5 transition-all duration-300">
                <Link
                  className="flex items-center gap-2 text-base text-white no-underline hover:!text-accent md:text-xl"
                  href="https://wa.me/qr/ID4EZCB73HFTP1"
                  target="_blank"
                >
                  <IoLogoWhatsapp />
                  +40-773-307-292
                </Link>
              </div>
            </li>
          </div>
          <div className="col-lg-6 mt-lg-5 pt-lg-3 !px-0">
            <div className="mb-5 flex w-full justify-between md:justify-normal md:gap-20">
              <FooterOverview links={companyLinks} titleKey="header.company" />
              <FooterOverview links={projectLinks} titleKey="header.project" />
            </div>
            <div className="mb-5 w-full flex-wrap justify-between md:flex">
              <p className="mb-4 flex items-center text-white">
                handcrafted by
                <Link
                  className="ml-2 !text-accent no-underline"
                  href="https://new-ark.cloud/"
                  target="_blank"
                >
                  <Image
                    alt="new ark logo"
                    className="object-contain"
                    height={30}
                    src={newarklogo}
                  />
                </Link>
              </p>
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright mx-auto max-w-[1480px] bg-transparent">
        <div className="p-10">
          <p className="text-3-5 font-weight-semi-bold text-light mb-0 text-start">
            © Copyright AriseForChrist
          </p>
        </div>
      </div>
    </footer>
  )
}
