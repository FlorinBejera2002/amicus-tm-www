import { FaFacebookF, FaSpotify, FaTiktok } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="d-flex gap-2">
      <div className="d-flex justify-center items-center w-8 h-8 rounded-full hover:bg-blue-900">
        <Link
          href="https://www.facebook.com/AriseForChristRomania/"
          target="blank"
        >
          <FaFacebookF className="w-4 h-4" color="#fff" />
        </Link>
      </div>

      <div className="d-flex justify-center items-center w-8 h-8 rounded-full hover:bg-[#7B0166]">
        <Link href="https://www.instagram.com/p/CfL2FveIMpn/" target="blank">
          <FaInstagram className="w-4 h-4" color="#fff" />
        </Link>
      </div>

      <div className="d-flex justify-center items-center w-8 h-8 rounded-full hover:bg-red-500">
        <Link href="https://www.youtube.com/c/Ariseforchrist/" target="blank">
          <FaYoutube className="w-4 h-4" color="#fff" />
        </Link>
      </div>

      <div className="d-flex justify-center items-center w-8 h-8 rounded-full hover:bg-[#2AC4CA]">
        <Link href="https://www.tiktok.com/@ariseforchrist/" target="blank">
          <FaTiktok className="w-4 h-4" color="#fff" />
        </Link>
      </div>

      <div className="d-flex justify-center items-center w-8 h-8 rounded-full hover:bg-green-500">
        <Link
          href="https://open.spotify.com/show/3284C4Oox7JSflk1AOlgav"
          target="blank"
        >
          <FaSpotify className="w-4 h-4" color="#fff" />
        </Link>
      </div>
    </div>
  )
}
