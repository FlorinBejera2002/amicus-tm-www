'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../../public/logo_horizontal_white.webp'
import newarklogo from '../../../../../public/new-ark_logo.webp'
import Socials from './components/socials'
import LinkPages from './components/link-pages'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image src={logo} alt="Logo" className="w-40" />
          </div>

          <LinkPages />

          <div className="flex justify-center md:justify-end">
            <Socials />
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>© 2025 Arise for Christ. All rights reserved.</p>

          <div className="flex items-center text-white text-sm font-bold">
            <p>Handcrafted by</p>
            <Link
              href="https://new-ark.cloud/"
              target="_blank"
              className="ml-2 !text-accent no-underline"
            >
              <Image
                src={newarklogo}
                alt="New Ark Logo"
                className="object-contain"
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
