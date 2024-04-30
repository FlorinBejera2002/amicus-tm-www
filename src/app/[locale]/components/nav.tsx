'use client'
import { useState } from 'react'

import Projects from '../projects/page'

import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import horizontalLogo from '../../../../public/logo_horizontal_white.png'

export default function Nav() {
  const [navbar, setNavBar] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('header')
  const tc = useTranslations('form')

  const handleLocaleChange = () =>
    router.push(
      pathname.includes('/en')
        ? pathname.replace('/en', '/ro')
        : pathname.replace('/ro', '/en')
    )

  const language = pathname.split('/')[1]

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
                      width={150}
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
                    header-nav-main-mega-menu-bg-hover-dark header-nav-main-effect-5 hidden"
                  >
                    <nav className=" closed ">
                      <ul className="nav nav-pills" id="mainNav">
                        <li>
                          <Link className="nav-link" href="/">
                            {t('home')}
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="nav-link"
                            href={`/${language}/about`}
                          >
                            {t('about_us')}
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="nav-link"
                            href={`/${language}/vision`}
                          >
                            {t('vision')}
                          </Link>
                        </li>

                        <li>
                          <Link className="nav-link" href={`/${language}/blog`}>
                            {t('blog')}
                          </Link>
                        </li>
                        <Projects />
                      </ul>
                    </nav>
                  </div>
                  <Link href="?ev-req-form=open">
                    <button
                      className="btn btn-primary font-weight-semibold text-3 py-lg-3 btn-gradient text-quaternary
                      anim-hover-translate-top-5px transition-2ms ms-4"
                      type="button"
                    >
                      <span className="px-lg-4 d-block ws-nowrap">
                        {tc('title')}
                      </span>
                    </button>
                  </Link>

                  <button
                    className="ml-12 cursor-pointer duration-500 hover:text-[#e3ae04] text-white "
                    onClick={handleLocaleChange}
                  >
                    en/ro
                  </button>
                  <button
                    className="btn header-btn-collapse-nav text-dark"
                    data-bs-target=".header-nav-main nav"
                    data-bs-toggle="collapse"
                    onClick={() => setNavBar(!navbar)}
                  >
                    <i className="fas fa-bars">
                      <FontAwesomeIcon icon={faBars} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {navbar && (
        <div
          className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-text-capitalize 
        header-nav-main-arrows header-nav-main-full-width-mega-menu header-nav-main-mega-menu-bg-hover 
        header-nav-main-mega-menu-bg-hover-dark header-nav-main-effect-5 display-none"
        >
          <nav className="collapse show">
            <ul className="nav nav-pills">
              <li>
                <Link className="nav-link " href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  href="/about"
                  onClick={() => setNavBar(!navbar)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
