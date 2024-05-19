'use client'
import { ReactNode, useState } from 'react'

import Language from './sections/language-button'
import { cn } from '../../../utils'

import { FaChevronDown } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useWindowScroll } from '@uidotdev/usehooks'

import horizontalLogo from '../../../../public/logo_horizontal_white.png'

type Link = {
  href: string
  label?: string | undefined
  route: string
}

const ActiveLink = ({
  children,
  link,
  pathname
}: {
  children?: ReactNode
  link?: Link
  pathname: string
}) => (
  <Link
    className={cn(
      'nav-link',
      pathname === link?.href || (pathname.includes('projects') && !link)
        ? '!text-[#e3ae04] md:!scale-125'
        : ''
    )}
    href={link?.href ?? '#'}
  >
    {link?.label ?? children}
  </Link>
)

export default function Nav() {
  const [navbar, setNavBar] = useState(false)
  const [subMenu, setSubMenu] = useState(false)
  const pathname = usePathname()
  const t = useTranslations()
  const [{ y }] = useWindowScroll()

  const language = pathname.split('/')[1]

  const navLinks = [
    { href: `/${language}`, label: t('header.home'), route: 'home' },
    {
      href: `/${language}/about`,
      label: t('header.about_us'),
      route: 'aboutUs'
    },
    { href: `/${language}/vision`, label: t('header.vision'), route: 'vision' },
    { href: `/${language}/donate`, label: t('header.donate'), route: 'donate' }
  ]

  return (
    <header
      className={cn(
        'header-transparent transition-all duration-500',
        y !== null && y >= 50
          ? 'bg-gray-950/[.4] shadow-sm backdrop-blur-md'
          : ''
      )}
      id="header"
    >
      <div className="header-body border-top-0 bg-quaternary box-shadow-none h-auto ">
        <div className="header-container container p-static">
          <div className="header-row py-3">
            <div className="header-column">
              <div className="header-row">
                <div className="header-logo">
                  <Link href="/">
                    <Image
                      alt="arise for christ logo"
                      className="object-contain hidden md:flex"
                      height={40}
                      src={horizontalLogo}
                      width={150}
                    />
                  </Link>
                </div>
                <Language />
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
                    <nav className="closed">
                      <ul className="nav nav-pills" id="mainNav">
                        {navLinks.map((link) => (
                          <li key={link.route}>
                            <ActiveLink link={link} pathname={pathname} />
                          </li>
                        ))}

                        <li className="dropdown">
                          <ActiveLink pathname={pathname}>
                            {t('project')}
                            <FaChevronDown className="pl-1.5" />
                          </ActiveLink>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                className="dropdown-item"
                                href={`/${language}/projects/time-is-now`}
                              >
                                {t('header.project_')}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href={`/${language}/projects/podcast`}
                              >
                                Podcast
                              </Link>
                            </li>
                          </ul>
                        </li>
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
                        {t('form.title')}
                      </span>
                    </button>
                  </Link>

                  <button
                    className="btn header-btn-collapse-nav text-dark h-[2.375rem]"
                    data-bs-target=".header-nav-main nav"
                    data-bs-toggle="collapse"
                    onClick={() => setNavBar(!navbar)}
                  >
                    <FaBars />
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
                <Link
                  className="nav-link"
                  href="/"
                  onClick={() => setNavBar(!navbar)}
                >
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  href={`/${language}/about`}
                  onClick={() => setNavBar(!navbar)}
                >
                  {t('header.about_us')}
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  href={`/${language}/vision`}
                  onClick={() => setNavBar(!navbar)}
                >
                  {t('header.vision')}
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  href={`/${language}/donate`}
                  onClick={() => setNavBar(!navbar)}
                >
                  {t('header.donate')}
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  href=""
                  onClick={() => setSubMenu(!subMenu)}
                >
                  {t('header.project')}
                  <FaChevronDown className="absolute top-0 right-10 w-30 h-10 flex items-center justify-center text-xs" />
                </Link>
                {subMenu && (
                  <ul className="top-full left-0 ">
                    <li>
                      <Link
                        className="dropdown-item"
                        href={`/${language}/projects/time-is-now`}
                        onClick={() => {
                          setNavBar(!navbar)
                          setSubMenu(!subMenu)
                        }}
                      >
                        {t('header.project_')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href={`/${language}/projects/podcast`}
                        onClick={() => {
                          setNavBar(!navbar)
                          setSubMenu(!subMenu)
                        }}
                      >
                        Podcast
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
