import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import about_us from '../../public/about_us.jpg'

export const About = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <SectionTag>{t('section.about_us')}</SectionTag>

      <Content>
        <Left>
          <Heading>
            <div>{t('about_us.statement1')}</div>
            <div>{t('about_us.statement2')}</div>
            <div>{t('about_us.statement3')}</div>
            <div>{t('about_us.statement4')}</div>
            <div>{t('about_us.statement5')}</div>
            <div>{t('about_us.statement6')}</div>
          </Heading>

          <Header>{t('about_us.title')}</Header>
          <Typography component="div" gutterBottom>
            {t('about_us.description')}
          </Typography>
        </Left>
        <Right>
          <Image alt="about_us" src={about_us} style={{ filter: 'opacity(50%)' }} />
        </Right>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  padding-bottom: 10rem;
  padding-left: 15rem;
  padding-right: 15rem;
  background: #e0e0e0;
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

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }

  @media (max-width: 360px) {
    font-size: 0.5rem;
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
`

const Header = styled.div`
  font-size: 2rem;
  padding-bottom: 1rem;
  font-weight: 900;
  color: #ec4e4d;
`
