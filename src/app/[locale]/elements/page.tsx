import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Elements() {
  const pathname = usePathname()
  const language = pathname.split('/')[1]

  return (
    <li className="dropdown dropdown-mega text-white">
      <Link
        className="dropdown-item dropdown-toggle"
        href={`/${language}/elements`}
      >
        Elements
      </Link>

      <ul className="dropdown-menu mt-0">
        <li>
          <div className="dropdown-mega-content container px-2">
            <div className="row px-1">
              <div className="col-lg-3">
                <span className="dropdown-mega-sub-title">Elements 1</span>
                <ul className="dropdown-mega-sub-nav">
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-accordions.html"
                    >
                      Accordions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-alerts.html">
                      Alerts
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-animations.html"
                    >
                      Animations{' '}
                      <span className="tip tip-dark p-relative bottom-2">
                        hot
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-arrows.html">
                      Arrows
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-badges.html">
                      Badges
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-before-after.html"
                    >
                      Before / After
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-blockquotes.html"
                    >
                      Blockquotes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-buttons.html">
                      Buttons
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-call-to-action.html"
                    >
                      Call to Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-cards.html">
                      Cards
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-carousels.html">
                      Carousels
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-cascading-images.html"
                    >
                      Cascading Images
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3">
                <span className="dropdown-mega-sub-title">Elements 2</span>
                <ul className="dropdown-mega-sub-nav">
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-content-rotate.html"
                    >
                      Content Rotate
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-countdowns.html"
                    >
                      Countdowns
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-counters.html">
                      Counters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-dividers.html">
                      Dividers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-forms.html">
                      Forms
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-headings.html">
                      Headings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-icons.html">
                      Icons
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-icon-boxes.html"
                    >
                      Icon Boxes
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-image-frames.html"
                    >
                      Image Frames{' '}
                      <span className="tip tip-dark p-relative bottom-2">
                        hot
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-image-gallery.html"
                    >
                      Image Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-image-hotspots.html"
                    >
                      Image Hotspots
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-lightboxes.html"
                    >
                      Lightboxes
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3">
                <span className="dropdown-mega-sub-title">Elements 3</span>
                <ul className="dropdown-mega-sub-nav">
                  <li>
                    <a className="dropdown-item" href="elements-lists.html">
                      Lists
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-maps.html">
                      Maps
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-medias.html">
                      Medias
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-modals.html">
                      Modals
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-parallax.html">
                      Parallax
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-particles.html">
                      Particles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-posts.html">
                      Posts
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-pricing-tables.html"
                    >
                      Pricing Tables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-process.html">
                      Process
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-progressbars.html"
                    >
                      Progress Bars
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-random-images.html"
                    >
                      Random Images
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-read-more.html">
                      Read More
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3">
                <span className="dropdown-mega-sub-title">Elements 4</span>
                <ul className="dropdown-mega-sub-nav">
                  <li>
                    <a className="dropdown-item" href="elements-sections.html">
                      Sections
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-shape-dividers.html"
                    >
                      Shape Dividers
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-star-ratings.html"
                    >
                      Star Ratings
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-sticky-elements.html"
                    >
                      Sticky Elements
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-tables.html">
                      Tables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-tabs.html">
                      Tabs
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-testimonials.html"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="elements-toggles.html">
                      Toggles
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-tooltips-popovers.html"
                    >
                      Tooltips & Popovers
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-typography.html"
                    >
                      Typography
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-word-rotator.html"
                    >
                      Word Rotator
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="elements-360-image-viewer.html"
                    >
                      360º Image Viewer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  )
}
