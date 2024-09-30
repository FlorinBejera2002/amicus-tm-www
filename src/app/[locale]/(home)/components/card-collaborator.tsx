'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LuHeartHandshake } from 'react-icons/lu'
import { RiArrowRightUpFill } from 'react-icons/ri'

export const CardCollaborator = () => {
  const pathname = usePathname()

  const language = pathname.split('/')[1]

  return (
    <Link
      href={`${language}/collaborator`}
      className="flex flex-col motion-safe:animate-bounce w-fit items-center gap-4 rounded-md bg-[#1D231E] opacity-80 px-3 py-2 text-xs font-semibold text-black no-underline hover:!no-underline"
    >
      <div className="flex justify-between w-full">
        <LuHeartHandshake className="w-5 h-5 text-red-500" />
        <RiArrowRightUpFill className="w-5 h-5 text-accent" />
      </div>

      <p className="text-white text-bold">Vrei să ajuți? Implică-te acum!</p>
    </Link>
  )
}
