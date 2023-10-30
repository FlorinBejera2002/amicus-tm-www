import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'

import heroBackground from '../../public/hero_background.jpeg'
import { Header } from '../Header'
import { Socials } from '../Socials'

export const Home = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <Container>
      <Image
        alt="hero_background"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={heroBackground}
        style={{ zIndex: 0 }}
      />

      <Header />

      <Content>
        <div>
          <Hero>
            <div>{t('hero.question1')}</div>
            <div> {t('hero.question2')}</div>
            <div>{t('hero.question3')}</div>
          </Hero>

          <Socials />
        </div>

        {isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
            <StyledButton onClick={() => router.push('evangelism_form')} variant="outlined">
              {t('button.er_request')}
            </StyledButton>
          </div>
        )}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-image: url();

  @media (max-width: 760px) {
    overflow-wrap: break-word;
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0rem 8rem;
  background-color: transparent;

  @media (max-width: 760px) {
    display: block;
    margin-top: 10rem;
    max-width: 350px;
    padding: 0rem 0.5rem;
  }
`

const Hero = styled.div`
  color: #000000;
  font-size: 3.4rem;
  font-weight: 800;
  line-height: 1.257;
  min-width: 500px;
  margin-top: 0;

  @media (max-width: 1900px) {
    font-size: 3.4rem;
  }

  @media (max-width: 1500px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 2rem;
  }

  @media (max-width: 760px) {
    display: inline;
    font-size: 1.5rem;
  }
`

const StyledButton = styled(Button)`
  border-radius: 0px;
  padding: 0.5rem 1.5rem;
  border: 2px solid #000;
  color: #000;

  :hover {
    color: #fff;
    background-color: #e9302e;
    border: 2px solid #e9302e;
  }
`
