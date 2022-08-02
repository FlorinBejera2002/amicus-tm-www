import { AppBar } from '@mui/material'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useEffect, useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Element } from 'react-scroll'

import { Header } from '../components/Header'
import { About } from '../components/Sections/About'
import { Footer } from '../components/Sections/Footer'
import { Home } from '../components/Sections/Home'
import { Vision } from '../components/Sections/Vision'
import SplashScreen from '../components/SplashScreen'

interface Props {
  locale: string
}
export const getStaticProps = async (props: Props) => ({
  props: {
    ...(await serverSideTranslations(props.locale, ['common'])),
  },
})

const HomePage: NextPage = () => {
  const { t } = useTranslation()
  const [showTopbar, setShowTopbar] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      setLastScrollY(window.scrollY)
      if (window.scrollY < 800) {
        setShowTopbar(false)
      } else {
        setShowTopbar(true)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [controlNavbar, lastScrollY])

  return (
    <SplashScreen>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#000',
          visibility: showTopbar ? 'visible' : 'hidden',
          opacity: showTopbar ? 1 : 0,
          transition: 'opacity 0.3s linear',
        }}
      >
        <Header />
      </AppBar>

      <Home />

      <Element name="Vision">
        <Vision />
      </Element>

      <Element name="About">
        <About />
      </Element>

      <Element name="Contact">
        <Footer />
      </Element>

      <CookieConsent
        buttonText={t('button.agree')}
        cookieName="AriseCookieCookie"
        expires={150}
        location="bottom"
        style={{ background: '#101119' }}
      >
        {t('gdpr.explanation')}
      </CookieConsent>
    </SplashScreen>
  )
}

export default HomePage
