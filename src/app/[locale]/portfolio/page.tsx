import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Portfolio() {
  const pathname = usePathname()
  const language = pathname.split('/')[1]

  return (
    <li className="dropdown">
      <Link
        className="dropdown-item dropdown-toggle"
        href={`/${language}/services`}
      >
        Portfolio
      </Link>
      <ul className="dropdown-menu">
        <li className="dropdown-submenu">
          <Link
            className="dropdown-item"
            href="https://www.youtube.com/@Ariseforchrist"
          >
            Single Project
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Wide Slider
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Small Slider
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Full Width Slider
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Carousel
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Medias
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Full Width Video
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Masonry Images
              </Link>
            </li>
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
            <li>
              <Link
                className="dropdown-item"
                href="https://www.youtube.com/@Ariseforchrist"
              >
                Extended
              </Link>
            </li>
          </ul>
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
