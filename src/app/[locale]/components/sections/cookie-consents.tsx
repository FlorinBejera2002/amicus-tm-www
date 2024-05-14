'use client'
import CookieConsent from 'react-cookie-consent'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { cn } from '@/utils'

export default function CookieConsents() {
  const t = useTranslations('gdpr')
  const combinedStyles = cn(
    '!items-center',
    '!bg-[#e3ae04] ',
    '!rounded-md',
    '!text-black ',
    '!flex',
    '!size-9',
    '!font-bold',
    '!justify-center',
    'py-4',
    '!px-8',
    '!w-fit'
  )

  return (
    <CookieConsent
      buttonClasses={combinedStyles}
      buttonText={t('agree')}
      containerClasses="!bg-[#101119] !p-4"
      expires={150}
      location="bottom"
    >
      {t('explanation')}
      <Link
        className="text-decoration-none font-weight-semibold font-poppins"
        href="mailto:info@ariseforchrist.com"
      >
        info@ariseforchrist.com.
      </Link>
    </CookieConsent>
  )
}
