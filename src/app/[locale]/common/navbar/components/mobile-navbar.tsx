'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import SubMenu from './sub-menu'
import { MenuButton } from './hamburger'
import ChangeLanguage from './change-language'
import InViewTransition from '../../in-view-transition'
import Animation from '../../animation'

import { FaChevronDown } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/utils'

const MobileNavbar = ({
  language,
  mobileNavbarOpen,
  setMobileNavbarOpen
}: {
  language: string
  mobileNavbarOpen: boolean
  setMobileNavbarOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const [subMenu, setSubMenu] = useState(false)

  const t = useTranslations()

  const searchParams = useSearchParams()
  const modal = searchParams.get('ev-req-form') === 'open'

  const pathname = usePathname()

  const menuLinks = [
    {
      href: `/${language}`,
      label: t('header.home')
    },
    {
      href: `/${language}/about`,
      label: t('header.about_us')
    },

    {
      href: `/${language}/vision`,
      label: t('header.vision')
    },
    {
      href: `/${language}/donate`,
      label: t('header.donate')
    },
    {
      customClassname: 'flex items-center gap-2',
      href: `#`,
      icon: (
        <FaChevronDown
          className={cn(
            'transition-all duration-300',
            subMenu ? 'rotate-180' : ''
          )}
        />
      ),
      label: t('header.project'),
      onClick: () => setSubMenu(!subMenu)
    }
  ]

  const handleSubMenuItemClick = () => {
    setMobileNavbarOpen((prev) => !prev)
  }

  useEffect(() => {
    const htmlElement = document.documentElement

    const handleOverflow = () => {
      if (mobileNavbarOpen || modal) {
        htmlElement.style.overflow = 'hidden'
      } else {
        htmlElement.style.overflow = ''
      }
    }

    handleOverflow()

    // Clean up the effect when the component unmounts
    return () => {
      if (modal) {
        htmlElement.style.overflow = 'hidden'
      } else {
        htmlElement.style.overflow = ''
      }
    }
  }, [mobileNavbarOpen, modal])

  return (
    <motion.div
      animate={{
        opacity: 1,
        transform: 'translateX(0)',
        transition: {
          duration: 0.25
        }
      }}
      className={cn(
        'absolute top-0 left-0 mx-auto bg-[#121212] w-screen h-[100dvh] z-50 flex flex-col'
      )}
      exit={{
        opacity: 0,
        transform: 'translateX(-100%)',
        transition: { duration: 0.5 }
      }}
      initial={{ opacity: 0, transform: 'translateX(-100%)' }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="flex items-center justify-between p-10 pr-8">
        <ChangeLanguage customClassname="flex" />
        <MenuButton
          className={cn(
            'cursor-pointer text-white scale-50 z-50 -mr-2 -mt-2 flex lg:hidden'
          )}
          color="white"
          height="24"
          isOpen={mobileNavbarOpen}
          onClick={() => setMobileNavbarOpen((prev) => !prev)}
          strokeWidth="4"
          transition={{ duration: 0.2, ease: 'easeOut' }}
          width="64"
        />
      </div>

      <div className="flex flex-col h-screen gap-4 relative z-[500]">
        {menuLinks.map((link, idx) => (
          <InViewTransition
            customClassname={cn(
              'flex flex-col w-screen items-center gap-2',
              idx === 0 ? 'mt-[50px]' : ''
            )}
            damping={25}
            delay={idx * 0.05}
            duration={0.5}
            key={idx}
            xIn={0}
            xOut={-400}
            yIn={0}
            yOut={0}
          >
            <Link
              className={cn(
                'w-fit p-3 no-underline active:!no-underline hover:!no-underline text-center text-white text-xl font-semibold',
                link.customClassname,
                pathname === link?.href ||
                  (pathname?.includes('projects') && idx === 4)
                  ? 'text-[#e3ae04] !scale-125'
                  : 'text-white mb-0'
              )}
              href={link.href}
              onClick={() =>
                link.href === '#'
                  ? link.onClick?.()
                  : setMobileNavbarOpen((prev) => !prev)
              }
            >
              {link.label}
              {link.icon}
            </Link>
          </InViewTransition>
        ))}

        <SubMenu
          handleSubMenuItemClick={handleSubMenuItemClick}
          isDesktop={false}
          language={language}
          subMenu={subMenu}
        />

        <Animation />
      </div>
    </motion.div>
  )
}

export default MobileNavbar
