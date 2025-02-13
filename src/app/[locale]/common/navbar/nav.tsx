'use client'
import { type ReactNode, useEffect, useRef, useState } from 'react'

import InViewTransition from '../in-view-transition'
import ChangeLanguage from './components/change-language'
import { MenuButton } from './components/hamburger'
import MobileNavbar from './components/mobile-navbar'
import SubMenu from './components/sub-menu'

import { cn } from '@/utils'
import { useWindowScroll } from '@uidotdev/usehooks'
import { AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChevronDown } from 'react-icons/fa'

import horizontalLogo from '../../../../../public/img/logo/logo_horizontal_white.webp'

type Link = {
  href: string
  label?: string | undefined
  route: string
}

const ActiveLink = ({
  children,
  customClassname,
  link,
  onClick,
  pathname
}: {
  children?: ReactNode
  customClassname?: string
  link?: Link
  onClick?: () => void
  pathname?: string
}) => (
  <Link
    className={cn(
      'text-md no-underline transition-all duration-300 hover:!no-underline',
      pathname === link?.href || (pathname?.includes('projects') && !link)
        ? '!text-accent md:scale-125'
        : 'mb-0 text-white',
      customClassname
    )}
    href={link?.href || '#'}
    onClick={onClick}
  >
    {link?.label ?? children}
  </Link>
)

export default function Nav() {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)

  const pathname = usePathname()
  const language = pathname.split('/')[1]

  const t = useTranslations()
  const [{ y }] = useWindowScroll()

  const dropdownRef = useRef(null)

  const navLinks = [
    { href: `/${language}`, label: t('header.home'), route: 'home' },
    {
      href: `/${language}/about`,
      label: t('header.about_us'),
      route: 'aboutUs'
    },
    { href: `/${language}/vision`, label: t('header.vision'), route: 'vision' },
    {
      href: `/${language}/devotional`,
      label: t('header.devotional'),
      route: 'devotion'
    },
    {
      href: `/${language}/collaborator`,
      label: t('header.collaborator'),
      route: 'collaborator'
    },
    { href: `/${language}/donate`, label: t('header.donate'), route: 'donate' }
  ]

  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current! &&
        !(dropdownRef.current as HTMLElement)!.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <InViewTransition
      customClassname="fixed top-0 left-0 z-[1000] justify-center w-full"
      delay={0}
      yIn={0}
      yOut={0}
    >
      <nav
        className={cn(
          '!left-0 !top-0 flex w-full items-center justify-center bg-transparent py-6 transition-all duration-500 md:py-8 lg:py-10',
          y !== null && y >= 25
            ? 'bg-gray-950/[.4] shadow-sm backdrop-blur-md'
            : ''
        )}
      >
        <div className="flex w-screen items-center justify-between px-8 lg:container lg:w-full">
          <div className="mr-8 hidden items-center lg:flex">
            <Link href="/">
              <Image
                alt="arise for christ logo"
                className="mr-8 object-contain"
                height={40}
                src={horizontalLogo}
                width={150}
              />
            </Link>

            <div className="hidden lg:flex">
              <ChangeLanguage />
            </div>
          </div>

          <div className={cn('hidden items-center gap-8 xl:flex')}>
            {navLinks.map((link) => (
              <ActiveLink
                customClassname="text-nowrap"
                key={link.route}
                link={link}
                pathname={pathname}
              />
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                className={cn(
                  'flex items-center gap-2 text-white transition-all duration-300',
                  pathname?.includes('projects')
                    ? 'text-accent md:scale-125'
                    : ''
                )}
                onClick={toggleDropdown}
              >
                {t('header.project')}
                <FaChevronDown
                  className={cn(
                    'transition-all duration-300',
                    isOpen ? 'rotate-180' : ''
                  )}
                />
              </button>

              <SubMenu
                handleSubMenuItemClick={toggleDropdown}
                language={language}
                subMenu={isOpen}
              />
            </div>

            <Link
              className=" font-weight-semibold text-md min-w-fit rounded-md bg-accent p-3 text-black no-underline hover:!no-underline"
              href={`/${language}/evangelism-request`}
              type="button"
            >
              {t('form.title')}
            </Link>
          </div>

          <Link href="/" className="lg:hidden">
            <Image
              alt="arise for christ logo"
              className="mr-8 object-contain"
              src={horizontalLogo}
              width={100}
            />
          </Link>

          <MenuButton
            className={cn(
              '-mr-4 flex scale-50 cursor-pointer text-white xl:hidden'
            )}
            color="white"
            height="24"
            isOpen={mobileNavbarOpen}
            onClick={() => setMobileNavbarOpen((prev) => !prev)}
            strokeWidth="4"
            transition={{ duration: 0.2, ease: 'easeOut' }}
            width="64"
          />

          <AnimatePresence initial={false} mode="popLayout">
            {mobileNavbarOpen && (
              <MobileNavbar
                language={language}
                mobileNavbarOpen={mobileNavbarOpen}
                setMobileNavbarOpen={setMobileNavbarOpen}
              />
            )}
          </AnimatePresence>
        </div>
      </nav>
    </InViewTransition>
  )
}
