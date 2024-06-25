'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'

import SubMenu from './components/sub-menu'
import MobileNavbar from './components/mobile-navbar'
import { MenuButton } from './components/hamburger'
import ChangeLanguage from './components/change-language'
import InViewTransition from '../in-view-transition'

import { FaChevronDown } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { useWindowScroll } from '@uidotdev/usehooks'
import { cn } from '@/utils'

import horizontalLogo from '../../../../../public/logo_horizontal_white.webp'

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
      'text-md no-underline hover:!no-underline transition-all duration-300',
      pathname === link?.href || (pathname?.includes('projects') && !link)
        ? '!text-[#e3ae04] md:scale-125'
        : 'text-white mb-0',
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

  const t = useTranslations()
  const [{ y }] = useWindowScroll()

  const dropdownRef = useRef(null)

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
      customClassname="fixed top-0 left-0 z-[1000] flex justify-center w-full"
      delay={0}
      yIn={0}
      yOut={0}
    >
      <nav
        className={cn(
          'transition-all duration-500 !top-0 !left-0 w-screen bg-transparent flex items-center justify-center py-6 md:py-8 lg:py-10 !pl-0 md:!pl-4',
          y !== null && y >= 25
            ? 'bg-gray-950/[.4] shadow-sm backdrop-blur-md'
            : ''
        )}
      >
        <div className="flex items-center justify-between w-screen lg:w-full lg:container px-4 pl-0">
          <div className="flex items-center mr-8">
            <Link href="/">
              <Image
                alt="arise for christ logo"
                className="object-contain hidden lg:flex mr-8"
                height={40}
                src={horizontalLogo}
                width={150}
              />
            </Link>
            <div className="hidden lg:flex">
              <ChangeLanguage />
            </div>
          </div>

          <div className={cn('items-center gap-8 hidden lg:flex')}>
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
                    ? 'text-[#e3ae04] md:scale-125'
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
              className=" bg-[#e3ae04] text-black font-weight-semibold p-3 text-md rounded-md min-w-fit no-underline hover:!no-underline"
              href={`/${language}/evangelism-request`}
              type="button"
            >
              {t('form.title')}
            </Link>
          </div>

          <Link
            className=" bg-[#e3ae04] text-black font-semibold md:p-3 py-1 px-2 text-md rounded-md min-w-fit flex lg:hidden mr-auto no-underline hover:!no-underline"
            href={`/${language}/evangelism-request`}
            type="button"
          >
            {t('form.title')}
          </Link>

          <MenuButton
            className={cn(
              'cursor-pointer text-white scale-50 -mr-2 flex lg:hidden'
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
