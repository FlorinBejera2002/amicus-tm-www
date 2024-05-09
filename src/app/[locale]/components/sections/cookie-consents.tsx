'use client'

import CookieConsent from 'react-cookie-consent'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function CookieConsents() {
  const t = useTranslations('gdpr')

  return (
    <CookieConsent
      buttonClasses="items-center bg-[#e3ae04] rounded-md text-black flex size-9 font-bold justify-center py-4 px-8"
      buttonText={t('agree')}
      expires={150}
      location="bottom"
      style={{ background: '#101119', padding: '20px' }}
    >
      {t('explanation')}
      <Link
        className="text-decoration-none font-weight-semibold font-poppins"
        href="mailto:info@ariseforchrist.com"
      >
        info@ariseforchrist.com
      </Link>
    </CookieConsent>
  )
}
