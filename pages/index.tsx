import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { Element } from 'react-scroll'

import { Header } from '../components/Header'
import { About } from '../components/Sections/About'
import { Footer } from '../components/Sections/Footer'
import { Home } from '../components/Sections/Home'
import { Vision } from '../components/Sections/Vision'
import { Topbar } from '../components/Topbar'
// import heroBackground from '../public/hero_background.jpeg'

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
      <Topbar
        style={{
          visibility: showTopbar ? 'visible' : 'hidden',
          opacity: showTopbar ? 1 : 0,
          transition: 'opacity 0.3s linear',
        }}
      >
        <Header />
      </Topbar>

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
