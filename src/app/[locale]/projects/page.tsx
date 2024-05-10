import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Projects() {
  const pathname = usePathname()
  const language = pathname.split('/')[1]

  return (
    <li className="dropdown">
      <Link
        className="dropdown-item dropdown-toggle"
        href={`/${language}/projects`}
      >
        Projects
      </Link>
      <ul className="dropdown-menu">
        <li className="dropdown-submenu">
          <Link
            className="dropdown-item"
            href={`/${language}/projects/time-is-now`}
          >
            The time is now
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
