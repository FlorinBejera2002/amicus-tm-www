import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface CompanyProps {
  links: { href: string; titleKey: string }[]
  titleKey: string
}

export default function FooterOverview({ links, titleKey }: CompanyProps) {
  const t = useTranslations()

  return (
    <div className="col-md-4 mb-4 mb-lg-0">
      <h4 className="text-color-light font-weight-bold mb-3 ">{t(titleKey)}</h4>

      <ul className="flex flex-col list list-unstyled text-3-5 gap-[13px]">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className="text-color-grey text-color-hover-primary text-decoration-none"
              href={link.href}
            >
              {t(link.titleKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
