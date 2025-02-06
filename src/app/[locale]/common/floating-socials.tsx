'use client'
import { cn } from '@/utils'
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import InViewTransition from './in-view-transition'

const FloatingSocials = () => {
  const socialMediaLinks = [
    {
      hoverBgColor: 'bg-green-500',
      href: 'https://wa.me/qr/ID4EZCB73HFTP1',
      icon: <IoLogoWhatsapp className="h-5 w-5" />
    },
    {
      hoverBgColor: 'bg-blue-900',
      href: 'https://www.facebook.com/AriseForChristRomania/',
      icon: <FaFacebookF className="h-5 w-5" />
    },
    {
      hoverBgColor: 'bg-[#7B0166]',
      href: 'https://www.instagram.com/p/CfL2FveIMpn/',
      icon: <FaInstagram className="h-5 w-5" />
    },
    {
      hoverBgColor: 'bg-red-500',
      href: 'https://www.youtube.com/c/Ariseforchrist/',
      icon: <FaYoutube className="h-5 w-5" />
    },
    {
      hoverBgColor: 'bg-[#2AC4CA]',
      href: 'https://www.tiktok.com/@ariseforchrist/',
      icon: <FaTiktok className="h-5 w-5" />
    },
    {
      hoverBgColor: 'bg-green-500',
      href: 'https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav',
      icon: <FaSpotify className="h-5 w-5" />
    }
  ]

  return (
    <InViewTransition
      customClassname="fixed md:right-[20px] md:bottom-[90px] flex md:flex-col gap-1 text-base lg:justify-start z-[999] p-2 rounded-lg bg-accent/[.75] h-fit"
      delay={2}
    >
      {socialMediaLinks.map((link, idx) => (
        <Link
          className={cn(
            'pointer flex items-center gap-2 no-underline transition-all duration-300 hover:!no-underline p-2 rounded-lg text-white',
            `hover:${link.hoverBgColor} hover:text-gray-100`
          )}
          href={link.href}
          key={idx}
          target="blank"
        >
          {link.icon}
        </Link>
      ))}
    </InViewTransition>
  )
}

export default FloatingSocials
