import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'

import { Header } from '../components/Header'
import { Socials } from '../components/Socials'
import { Topbar } from '../components/Topbar'

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

      <Home>
        <Fade>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        </Fade>

        <Fade bottom>
          <Content>
            <Line />
            <Heading>
              Dorești mântuirea cuiva drag?<Red> Ai nevoie de sprijin în rugăciune? </Red>Vrei să încurajezi pe cineva?
            </Heading>

            <Socials />
          </Content>
        </Fade>
      </Home>

      <Element name="Vision">
        <Vision>
          <h1>Vision</h1>
        </Vision>
      </Element>

      <Element name="About">
        <About>
          <h1 style={{ color: 'white' }}>About</h1>
        </About>
      </Element>

      <Element name="Contact">
        <Contact>
          <h1 style={{ color: 'white' }}>Contact</h1>
        </Contact>
      </Element>
    </Container>
  )
}

const Container = styled.div`
  background-color: #000;
`

const Home = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: transparent;
  position: relative;
`

const Content = styled.div`
  margin: 0rem 4rem;
  padding-top: 15rem;
  padding-left: 5rem;
  max-width: 45%;

  @media (max-width: 1500px) {
    max-width: 55%;
  }

  @media (max-width: 1000px) {
    max-width: 65%;
  }
`

const Line = styled.div`
  height: 0.1rem;
  width: 4rem;
  background-color: #e9302e;
  margin-bottom: 1rem;
`

const Heading = styled.div`
  color: #edf2f4;
  font-size: 3.8rem;
  font-weight: 400;
  line-height: 1.257;
  padding-right: 3.2rem;
  margin-top: 0;

  @media (max-width: 1900px) {
    font-size: 3.8rem;
  }

  @media (max-width: 1500px) {
    font-size: 3.2rem;
  }

  @media (max-width: 1000px) {
    font-size: 2.6rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`

const HeaderWrapper = styled.div`
  padding-top: 2.5rem;
`

const Red = styled.span`
  color: #ec4e4d;
`

const Vision = styled.div`
  padding-bottom: 16rem;
  background-color: #edf2f4;
  position: relative;
  height: 50rem;
  padding-top: 10rem;
`

const About = styled.div`
  padding-bottom: 16rem;
  position: relative;
  height: 50rem;
  padding-top: 10rem;
`

const Contact = styled.div`
  padding-bottom: 16rem;
  position: relative;
  height: 50rem;
  padding-top: 10rem;
`

export default HomePage
