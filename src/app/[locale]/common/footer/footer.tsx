'use client'

import Socials from './components/socials'
import FooterOverview from './components/footer-overview'
import InViewTransition from '../in-view-transition'
import Animation from '../animation'
import { Newsletter } from '../../(home)/components/newsletter'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/utils'

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
      <InViewTransition damping={50} delay={0.5}>
        <div className="max-w-[1480px] mx-auto border-bottom px-3">
          <div
            className={cn(
              'row px-8',
              !['vision', 'projects'].some((item) => pathname.includes(item))
                ? 'py-5'
                : ''
            )}
          >
            <div className="col-lg-6 mt-5 !px-0 pt-3 gap-4">
              <Link className="flex w-fit" href="/">
                <Image
                  alt="arise for christ logo"
                  className="object-contain pb-6 w-24 md:w-40"
                  height={40}
                  src={horizontalLogo}
                />
              </Link>

              <ul className="list list-unstyled pt-4">
                <li className="d-flex align-items-center mb-4 ">
                  <Link
                    className="d-inline-flex align-items-center text-decoration-none font-weight-semibold text-white text-4-5 hover:!text-[#e3ae04] transition-all duration-300"
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
            <div className="col-lg-6 mt-lg-5 pt-lg-3 !px-0">
              <div className="w-full flex md:gap-20 justify-between md:justify-normal mb-5">
                <FooterOverview
                  links={companyLinks}
                  titleKey="header.company"
                />
                <FooterOverview
                  links={projectLinks}
                  titleKey="header.project"
                />
              </div>
              <div className="w-full md:flex flex-wrap justify-between mb-5">
                <p className="flex items-center text-white mb-4">
                  handcrafted by
                  <Link
                    className="!text-[#e3ae04] no-underline ml-2 "
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

        <div className="footer-copyright bg-transparent max-w-[1480px] mx-auto">
          <div className="p-10">
            <p className="text-start text-3-5 font-weight-semi-bold text-light mb-0">
              © Copyright AriseForChrist
            </p>
          </div>
        </div>
        <Animation />
      </InViewTransition>
    </footer>
  )
}
