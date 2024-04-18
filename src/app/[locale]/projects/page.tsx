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
            Mision Project
          </Link>
        </li>

        <li className="dropdown-submenu">
          <Link
            className="dropdown-item"
            href="https://www.youtube.com/@Ariseforchrist"
          >
            Grid Layouts
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                1 Column
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                2 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                3 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                4 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                5 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                6 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                No Margins
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Full Width
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Full Width No Margins
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Title and Description
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown-submenu">
          <Link
            className="dropdown-item"
            href="https://www.youtube.com/@Ariseforchrist"
          >
            Masonry Layouts
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                2 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                3 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                4 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                5 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                6 Columns
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                No Margins
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Full Width
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown-submenu">
          <Link
            className="dropdown-item"
            href="https://www.youtube.com/@Ariseforchrist"
          >
            Sidebar Layouts
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Left Sidebar
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Right Sidebar
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Left and Right Sidebars
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Sticky Sidebar
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown-submenu">
          <Link
            className="dropdown-item"
            href="https://www.youtube.com/@Ariseforchrist"
          >
            Ajax
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Ajax on Page
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Ajax on Modal
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown-submenu">
          <Link
            className="dropdown-item"
            href="https://www.youtube.com/@Ariseforchrist"
          >
            Extra
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Lightbox
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Load More
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Infinite Scroll
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Lazy Load Masonry
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Pagination
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Combination Filters
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  )
}
