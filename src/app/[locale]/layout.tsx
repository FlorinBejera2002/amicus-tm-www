import type { Metadata } from 'next'

import './globals.css'
import CookieConsents from './common/cookie-consents'
import { Footer } from './common/footer/footer'
import Nav from './common/navbar/nav'
import ScrollButton from './common/scroll-button'

import { cn } from '@/utils'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import FloatingSocials from './common/floating-socials'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  icons: [
    { rel: 'icon', url: '/logo.ico' },
    { rel: 'apple-touch-icon', url: '/logo.ico' }
  ]
}

export default function RootLayout({
  children,
  params: { locale }
}: { children: ReactNode; params: { locale: string } }) {
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
        <FloatingSocials />
        {/* analytics */}
        <Analytics />
      </body>
    </html>
  )
}
