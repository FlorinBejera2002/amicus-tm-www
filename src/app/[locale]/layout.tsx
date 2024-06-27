import type { Metadata } from 'next'

import './globals.css'
// css
import './css/theme.css'
import './css/skin-creative-agency-2.css'
import './css/demo-creative-agency-2.css'
import './css/bootstrap.min.css'
import ScrollButton from './common/sections/scroll-button'
import Nav from './common/navbar/nav'
import Footer from './common/footer/footer'
import CookieConsents from './common/cookie-consents'

import { NextIntlClientProvider, useMessages } from 'next-intl'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { cn } from '@/utils'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  icons: [
    { rel: 'icon', url: '/logo.ico' },
    { rel: 'apple-touch-icon', url: '/logo.ico' }
  ]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children, params: { locale } }: any) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={cn('body', poppins.className, 'relative')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          {children}

          <Footer />

          <CookieConsents />
        </NextIntlClientProvider>

        <ScrollButton />

        {/* analytics */}
        <Analytics />

        {/* Splitbee */}
        <Script async={true} src="https://cdn.splitbee.io/sb.js"></Script>
      </body>
    </html>
  )
}
