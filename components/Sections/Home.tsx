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
      <Container>
        <Header />

        <Content>
          <Fade bottom>
            <div>
              <Line />

              <Hero>
                {t('hero.question1')}
                <Red> {t('hero.question2')}</Red> {t('hero.question3')}
              </Hero>

              <Socials />
            </div>
          </Fade>

          <ImageWrapper>
            <Image
              alt="hero_background"
              height={750}
              layout="fixed"
              objectFit="contain"
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
  border-radius: 190px;

  @media (max-width: 1200px) {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  background-color: #000;

  @media (max-width: 390px) {
    overflow-wrap: break-word;
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0rem 5rem;
  background-color: transparent;

  @media (max-width: 390px) {
    display: block;
    margin-top: 12rem;
    max-width: 350px;
    padding: 0rem 0.5rem;
  }
`

const Line = styled.div`
  height: 0.1rem;
  width: 4rem;
  background-color: #e9302e;
  margin-bottom: 1rem;
`

const Hero = styled.div`
  color: #edf2f4;
  font-size: 3rem;
  line-height: 1.257;
  min-width: 500px;
  max-width: 800px;
  margin-top: 0;

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

  @media (max-width: 390px) {
    display: inline;
    font-size: 1.5rem;
  }
`

const Red = styled.span`
  color: #ec4e4d;
`
