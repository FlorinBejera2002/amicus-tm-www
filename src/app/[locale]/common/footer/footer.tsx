'use client'

import { Newsletter } from '../../(home)/components/newsletter'
import FooterOverview from './components/footer-overview'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import horizontalLogo from '../../../../../public/logo_horizontal_white.webp'
import newarklogo from '../../../../../public/new-ark_logo.webp'

export default function Footer() {
  const pathname = usePathname()
  const language = pathname.split('/')[1]

  const companyLinks = [
    { href: '/', titleKey: 'header.home' },
    { href: `/${language}/about`, titleKey: 'header.about_us' },
    { href: `/${language}/vision`, titleKey: 'header.vision' },
    { href: `/${language}/collaborator`, titleKey: 'header.collaborator' }
  ]

  const projectLinks = [
    { href: `/${language}/donate`, titleKey: 'header.donate' },
    {
      href: `/${language}/projects/time-is-now`,
      titleKey: 'header.project_subProject'
    },
    {
      href: `/${language}/projects/podcast`,
      titleKey: 'header.project_subPodcast'
    },
    { href: `/${language}/book`, titleKey: 'book.book' }
  ]
  const contactLinks = [
    {
      href: `mailto:info@ariseforchrist.com`,
      titleKey: 'info@ariseforchrist.com'
    },
    {
      href: `phone:+40 (773) 307 292`,
      titleKey: ' +40 (773) 307 292'
    },
    {
      href: `phone:+40 (721) 804 560`,
      titleKey: '+40 (721) 804 560'
    },
    { href: `phone+40 (356) 175 148`, titleKey: '+40 (356) 175 148' }
  ]

  return (
    <footer className="border-top-0 font-poppins !px-8" id="footer">
      <div className="md:border-b border-[#313632] mx-auto max-w-[1480px] flex w-full flex-col md:flex-row pb-10 pt-24">
        <Link className="flex w-full" href="/">
          <Image
            alt="arise for christ logo"
            className="w-24 object-contain pb-6 md:w-40"
            height={40}
            src={horizontalLogo}
          />
        </Link>
        <div className="md:flex-row w-full justify-end flex flex-col md:gap-52 pr-20">
          <FooterOverview links={contactLinks} titleKey="header.contact" />
          <FooterOverview links={projectLinks} titleKey="header.project" />
          <FooterOverview links={companyLinks} titleKey="header.company" />
        </div>
      </div>
      <Newsletter />
      <div className="footer-copyright mx-auto max-w-[1480px] bg-transparent py-4 flex flex-col md:flex-row w-full gap-4">
        <p className="w-full flex items-center text-white text-3-5 font-bold">
          handcrafted by
          <Link
            className="ml-2 !text-accent no-underline"
            href="https://new-ark.cloud/"
            target="_blank"
          >
            <Image
              alt="new ark logo"
              className="object-contain"
              height={30}
              src={newarklogo}
            />
          </Link>
        </p>
        <p className="text-3-5 font-bold  mb-0 flex w-full items-center md:justify-end">
          © Copyright AriseForChrist
        </p>
      </div>
    </footer>
  )
}
