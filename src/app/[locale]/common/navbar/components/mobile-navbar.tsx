'use client'

import { Dispatch, SetStateAction, useState } from 'react'

import { FaChevronDown } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const MobileNavbar = ({
  language,
  setMobileNavbarOpen
}: {
  language: string
  setMobileNavbarOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const [subMenu, setSubMenu] = useState(false)
  const t = useTranslations()

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-text-capitalize
        header-nav-main-arrows header-nav-main-full-width-mega-menu header-nav-main-mega-menu-bg-hover
        header-nav-main-mega-menu-bg-hover-dark header-nav-main-effect-5 display-none w-screen before:rounded-md"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <nav className="collapse show rounded-md w-screen">
        <ul className="nav nav-pills">
          <li>
            <Link
              className="nav-link"
              href="/"
              onClick={() => setMobileNavbarOpen((prev) => !prev)}
            >
              {t('header.home')}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${language}/about`}
              onClick={() => setMobileNavbarOpen((prev) => !prev)}
            >
              {t('header.about_us')}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${language}/vision`}
              onClick={() => setMobileNavbarOpen((prev) => !prev)}
            >
              {t('header.vision')}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${language}/donate`}
              onClick={() => setMobileNavbarOpen((prev) => !prev)}
            >
              {t('header.donate')}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link relative flex items-center justify-between w-full"
              href="#"
              onClick={() => setSubMenu(!subMenu)}
            >
              {t('header.project')}
              <FaChevronDown />
            </Link>
            <AnimatePresence initial={false} mode="popLayout">
              {subMenu && (
                <motion.ul
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ damping: 25, duration: 0.5, type: 'spring' }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      href={`/${language}/projects/time-is-now`}
                      onClick={() => {
                        setMobileNavbarOpen((prev) => !prev)
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
                        setMobileNavbarOpen((prev) => !prev)
                        setSubMenu(!subMenu)
                      }}
                    >
                      Podcast
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </nav>
    </motion.div>
  )
}

export default MobileNavbar
