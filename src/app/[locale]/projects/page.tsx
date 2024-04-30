import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Projects() {
  const pathname = usePathname()
  const t = useTranslations('header')
  const language = pathname.split('/')[1]

  return (
    <li className="dropdown">
      <Link
        className="dropdown-item dropdown-toggle"
        href={`/${language}/projects`}
      >
        {t('project')}
      </Link>
      <ul className="dropdown-menu">
        <li className="dropdown-submenu">
          <Link
            className="dropdown-item"
            href={`/${language}/projects/time-is-now`}
          >
            {t('project_')}
          </Link>
        </li>
        <li className="dropdown-submenu">
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
