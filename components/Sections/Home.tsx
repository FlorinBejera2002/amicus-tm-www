import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import Fade from 'react-reveal/Fade'

import { Header } from '../Header'
import { Socials } from '../Socials'

export const Home = () => {
  const bla = useTranslation('common')
  const { t } = bla

  return (
    <Container>
      <Fade>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </Fade>

      <Fade bottom>
        <Message>
          <div>
            <Line />
            <Heading>
              {t('hero.question1')}
              <Red> {t('hero.question2')}</Red> {t('hero.question3')}
            </Heading>

            <Socials />
          </div>

          {/* <ImageWrapper> */}
          {/* <Image alt="hero_background" objectFit="cover" placeholder="blur" src={heroBackground} /> */}
          {/* </ImageWrapper> */}
        </Message>
      </Fade>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: transparent;
`

const Message = styled.div`
  display: flex;
  align-items: center;
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
