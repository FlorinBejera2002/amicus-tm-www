import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import about_us from '../../public/about_us.jpg'

export const About = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <SectionTag>{t('section.about_us')}</SectionTag>

      <Content>
        <Left>
          <Fade bottom>
            <Heading>
              <div>{t('about_us.statement1')}</div>
              <div>{t('about_us.statement2')}</div>
              <div>{t('about_us.statement3')}</div>
              <div>{t('about_us.statement4')}</div>
              <div>{t('about_us.statement5')}</div>
              <div>{t('about_us.statement6')}</div>
            </Heading>

            <Header>{t('about_us.title')}</Header>
            <Description gutterBottom>{t('about_us.description')}</Description>
          </Fade>
        </Left>

        <Fade right>
          <Right>
            <Image alt="about_us" src={about_us} style={{ filter: 'opacity(50%)' }} />
          </Right>
        </Fade>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 12rem;
  background: #e0e0e0;

  @media (max-width: 760px) {
    padding: 4rem 2rem;
    font-size: 1.5rem;
  }
`

const SectionTag = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
  letter-spacing: 0.4rem;
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 6rem;

  @media (max-width: 1900px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1500px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }

  @media (max-width: 760px) {
    font-size: 1rem;
    padding-bottom: 4rem;
  }
`

const Content = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  padding-left: 7rem;

  @media (max-width: 760px) {
    display: none;
  }
`

const Header = styled.div`
  font-size: 2rem;
  padding-bottom: 1rem;
  font-weight: 900;
  color: #ec4e4d;

  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`
const Description = styled(Typography)`
  @media (max-width: 760px) {
    font-size: 0.8rem;
  }
`
