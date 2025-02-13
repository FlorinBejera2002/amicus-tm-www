import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface CompanyProps {
  links: { href: string; titleKey: string }[]
  titleKey: string
}

export default function FooterOverview({ links, titleKey }: CompanyProps) {
  const t = useTranslations()

  return (
    <div className="w-full">
      <h4 className="text-color-light font-bold mb-3 ">{t(titleKey)}</h4>

      <ul className=" list-unstyled text-3-5 flex flex-col gap-[13px] text-nowrap">
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
