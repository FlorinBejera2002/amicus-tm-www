'use client'

import CookieConsent from 'react-cookie-consent'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function CookieConsents() {
  const t = useTranslations('gdpr')

  return (
    <CookieConsent
      buttonStyle={{
        alignItems: 'center',
        backgroundColor: '#e3ae04',
        borderRadius: '6px',
        color: 'black',
        display: 'flex',
        fontSize: '13px',
        fontWeight: '700',
        justifyContent: 'center',
        padding: '15px 30px'
      }}
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
