import { FaFacebookF, FaSpotify, FaTiktok } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { cn } from '@/utils'

export default function Socials() {
  const links = [
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
    <div className="flex gap-2 flex-wrap w-screen mb-5">
      {links.map((link, idx) => (
        <div
          className={cn(
            'flex justify-center items-center w-8 h-8 rounded-full hover:bg-blue-900 cursor-pointer transition-all duration-300',
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
