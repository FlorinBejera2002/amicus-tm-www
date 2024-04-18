import Link from 'next/link'
import Image from 'next/image'

import theTimeIsNow from '../../../../../public/the-time-is-now.jpg'
import image2 from '../../../../../public/subtitle-image2.jpg'
import image1 from '../../../../../public/subtitle-image1.jpg'

export default function Subtitle() {
  return (
    <>
      <div className="flex justify-center items-center gap-10">
        <div className="w-1/4 flex flex-col gap-1">
          <h4 className=" text-yellow-600 font-bold pl-10"> SUBTITRARE</h4>
          <p className="text-lg text-white">
            Activează butonul din colțul de jos dreapta si selectează
            subtitrarea in limba română! De asemenea pentru a urmării episoadele
            la calitate maximă, alegeți 2160p 4k.
          </p>
        </div>
        <div className="flex relative w-96">
          <Image
            alt="arise for christ logo"
            className="absolute bottom-1"
            src={image1}
          />
          <Image
            alt="arise for christ logo"
            className="ml-44 mb-3"
            src={image2}
          />
        </div>
      </div>
      <div className="mb-2 pb-32 pt-24 flex flex-col justify-center items-center">
        <h3 className="text-white">TIMPUL ESTE ACUM</h3>
        <p className="text-white text-xs">un serial de Arise for Christ</p>
        <div className="border-y w-64 border-yellow-600 py-4 flex flex-col gap-1 justify-center items-center">
          <h3 className="text-yellow-600 font-poppins ">TV Series 2023</h3>
          <Link
            className="w-44 flex justify-center items-center bg-yellow-600 text-white px-16 py-2 rounded-full no-underline hover:no-underline hover:transition-105 hover:translate-2"
            href="https://www.imdb.com/title/tt31037420/reference/"
          >
            IMDB
          </Link>
        </div>
        <Image
          alt="arise for christ logo"
          className="pt-4"
          src={theTimeIsNow}
        />
      </div>
    </>
  )
}
