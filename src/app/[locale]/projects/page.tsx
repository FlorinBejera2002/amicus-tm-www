'use client'
import { FaChevronDown } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/utils'

export default function Projects() {
  const pathname = usePathname()
  const t = useTranslations('header')
  const language = pathname.split('/')[1]

  return (
    <li className="dropdown">
      <Link
        className={cn(
          'nav-link',
          pathname.includes('projects') ? '!text-[#e3ae04] md:!scale-125' : ''
        )}
        href="#"
      >
        {t('project')}
        <FaChevronDown className="pl-1.5" />
      </Link>
      <ul className="dropdown-menu">
        <li>
          <Link
            className="dropdown-item"
            href={`/${language}/projects/time-is-now`}
          >
            {t('project_')}
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            href={`/${language}/projects/podcast`}
          >
            Podcast
          </Link>
        </li>
      </ul>
    </li>
  )
}
