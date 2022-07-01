import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import heroBackground from '../../public/hero_background.jpeg'
import { Header } from '../Header'
import { Socials } from '../Socials'

export const Home = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Container>
        <Content>
          <Fade bottom>
            <Line />

            <Hero>
              {t('hero.question1')}
              <Red> {t('hero.question2')}</Red> {t('hero.question3')}
            </Hero>

            <Socials />
          </Fade>

          <ImageWrapper>
            <Image
              alt="hero_background"
              height={900}
              layout="fixed"
              placeholder="blur"
              src={heroBackground}
              width={500}
            />
          </ImageWrapper>
        </Content>
      </Container>
    </div>
  )
}

const ImageWrapper = styled.div`
  position: absolute;
  top: -4rem;
  right: 18rem;
  border-radius: 190px;
  z-index: -1;
`

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #000;
  z-index: -2;
`

const Content = styled.div`
  padding: 15rem 12rem 0rem;
  background-color: transparent;
  position: relative;
`

const Line = styled.div`
  height: 0.1rem;
  width: 4rem;
  background-color: #e9302e;
  margin-bottom: 1rem;
`

const Hero = styled.div`
  color: #edf2f4;
  max-width: 55%;
  font-size: 3rem;
  line-height: 1.257;
  padding-right: 3.2rem;
  margin-top: 0;
  z-index: 99;

  @media (max-width: 1900px) {
    font-size: 2.8rem;
  }

  @media (max-width: 1500px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`

const HeaderWrapper = styled.div`
  padding-top: 2.5rem;
  z-index: 0;
  background-color: #000;
`

const Red = styled.span`
  color: #ec4e4d;
`
