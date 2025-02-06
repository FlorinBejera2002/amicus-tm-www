'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LinkPages() {
  const pathname = usePathname()
  const language = pathname.split('/')[1]

  return (
    <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
      <Link href={`/${language}`} className="hover:text-white transition">
        Home
      </Link>
      <Link href={`/${language}/about`} className="hover:text-white transition">
        About
      </Link>
      <Link
        href={`/${language}/vision`}
        className="hover:text-white transition"
      >
        Vision
      </Link>

      <Link
        href={`/${language}/devotional`}
        className="hover:text-white transition"
      >
        Devotional
      </Link>
      <Link
        href={`/${language}/donate`}
        className="hover:text-white transition"
      >
        Donate
      </Link>
    </nav>
  )
}
