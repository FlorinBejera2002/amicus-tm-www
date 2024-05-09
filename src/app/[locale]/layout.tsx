import type { Metadata } from 'next'

import './globals.css'
import './css/theme-shop.css'
import './css/theme-blog.css'
// css
import './css/theme.css'
import './css/skin-creative-agency-2.css'
import './css/simple-line-icons.min.css'
import './css/owl.theme.default.min.css'
import './css/owl.carousel.min.css'
import './css/magnific-popup.min.css'
import './css/demo-creative-agency-2.css'
import './css/custom.css'
import './css/bootstrap.min.css'
import './css/animate.compat.css'
import Modal from './components/sections/evangelism-form'
import Nav from './components/nav'
import Footer from './components/footer'

import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  description: 'Generated by create next app',
  icons: [
    { rel: 'icon', url: '/logo.ico' },
    { rel: 'apple-touch-icon', url: '/logo.ico' }
  ],
  title: 'Arise for Christ'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children, params: { locale } }: any) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          {children}
          <Modal />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
