import styled from '@emotion/styled'
import { AppBar } from '@mui/material'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useEffect, useState } from 'react'
import { Element } from 'react-scroll'

import { Header } from '../components/Header'
import { About } from '../components/Sections/About'
import { Footer } from '../components/Sections/Footer'
import { Home } from '../components/Sections/Home'
import { Vision } from '../components/Sections/Vision'
// import heroBackground from '../public/hero_background.jpeg'

interface Props {
  locale: string
}
export const getStaticProps = async (props: Props) => ({
  props: {
    ...(await serverSideTranslations(props.locale, ['common'])),
  },
})

const HomePage: NextPage = () => {
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
    <Container>
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
    </Container>
  )
}

const Container = styled.div`
  background-color: #000;
`

// const ImageWrapper = styled.div`
//   height: 800px;
//   width: 800px;
//   position: absolute;
//   left: 600px;
//   top: 100px;
//   z-index: -1;
// `

export default HomePage
