import { IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebookF, FaSpotify, FaTiktok } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { cn } from '@/utils'

export default function Socials() {
  const links = [
    {
      hoverClasses: 'hover:bg-green-500',
      href: 'https://wa.me/qr/ID4EZCB73HFTP1',
      icon: <IoLogoWhatsapp className="size-4 text-white" />
    },
    {
      hoverClasses: 'hover:bg-blue-900',
      href: 'https://www.facebook.com/AriseForChristRomania/',
      icon: <FaFacebookF className="size-4 text-white" />
    },
    {
      hoverClasses: 'hover:bg-[#7B0166]',
      href: 'https://www.instagram.com/p/CfL2FveIMpn/',
      icon: <FaInstagram className="size-4 text-white" />
    },
    {
      hoverClasses: 'hover:bg-red-500',
      href: 'https://www.youtube.com/c/Ariseforchrist/',
      icon: <FaYoutube className="size-4 text-white" />
    },
    {
      hoverClasses: 'hover:bg-[#2AC4CA]',
      href: 'https://www.tiktok.com/@ariseforchrist/',
      icon: <FaTiktok className="size-4 text-white" />
    },
    {
      hoverClasses: 'hover:bg-green-500',
      href: 'https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav',
      icon: <FaSpotify className="size-4 text-white" />
    }
  ]

  return (
    <div className="relative !z-10 mb-3 flex w-screen flex-wrap gap-2">
      {links.map((link, idx) => (
        <div
          className={cn(
            'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-blue-900',
            link.hoverClasses
          )}
          key={idx}
        >
          <Link href={link.href}>{link.icon}</Link>
        </div>
      ))}
    </div>
  )
}
