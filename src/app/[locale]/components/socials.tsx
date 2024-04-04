import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="d-flex gap-2">
      <div className="d-flex justify-center items-center w-7  h-7 hover:bg-white rounded-full">
        <Link
          href="https://www.facebook.com/AriseForChristRomania/"
          target="blank"
        >
          <FaFacebookF className="w-5 h-5 hover:fill-blue-900" />
        </Link>
      </div>
      <div className="d-flex justify-center items-center w-7  h-7 hover:bg-white rounded-full">
        <Link href="https://www.instagram.com/p/CfL2FveIMpn/" target="blank">
          <FaInstagram className="w-5 h-5 hover:fill-[#7B0166]" />
        </Link>
      </div>
      <div className="d-flex justify-center items-center   w-7  h-7 hover:bg-white rounded-full">
        <Link href="https://www.youtube.com/c/Ariseforchrist/" target="blank">
          <FaYoutube className="w-5 h-5 hover:fill-red-700" />
        </Link>
      </div>
    </div>
  )
}
