import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Fade from 'react-reveal/Fade'

import about_us from '../../public/about_us.jpg'
import the_team from '../../public/the_team.jpg'

export const About = () => {
  const { t } = useTranslation('common')
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <Container>
      <SectionTag>{t('section.about_us')}</SectionTag>

      <Heading>
        <div>{t('about_us.statement1')}</div>
        <Red>{t('about_us.statement2')}</Red>
        <div>{t('about_us.statement3')}</div>
        <div>{t('about_us.statement4')}</div>
        <div>{t('about_us.statement5')}</div>
        <div>{t('about_us.statement6')}</div>
      </Heading>

      <Content>
        <Left>
          <Fade bottom>
            <Header>{t('about_us.the_team_title')}</Header>
            <Description>
              <b>{t('about_us.the_team_p1_1')}</b>
              <br></br>
              {t('about_us.the_team_p1_2')}
            </Description>

            <Description>
              <b>{t('about_us.the_team_p2_1')}</b>
              <br></br>
              {t('about_us.the_team_p2_2')}
            </Description>

            <Description>
              <b>{t('about_us.the_team_p3_1')}</b>
              <br></br>
              {t('about_us.the_team_p3_2')}
            </Description>

            <Description>
              <b>{t('about_us.the_team_p4_1')}</b>
              <br></br>
              {t('about_us.the_team_p4_2')}
            </Description>
          </Fade>
        </Left>

        {!isMobile && (
          <Fade right>
            <Right>
              <Image alt="the_team" src={the_team} style={{ filter: 'opacity(50%)' }} />
            </Right>
          </Fade>
        )}
      </Content>

      <Content style={{ paddingTop: '10rem' }}>
        <Fade bottom>
          <div className="flex-1">
            <Header>{t('about_us.title')}</Header>
            <Description>
              {t('about_us.description_p1_1')}
              <i>{t('about_us.description_p1_2')}</i>
              {t('about_us.description_p1_3')}
              <b>{t('about_us.description_p1_4')}</b>
              {t('about_us.description_p1_5')}
            </Description>

            <Description>
              {t('about_us.description_p2_1')}
              <b>{t('about_us.description_p2_2')}</b>
              {t('about_us.description_p2_3')}
            </Description>

            <Description> {t('about_us.description_p3_1')}</Description>

            <Description>
              <b>{t('about_us.description_p4_1')}</b>
              {t('about_us.description_p4_2')}
              <b>{t('about_us.description_p4_3')}</b>
              {t('about_us.description_p4_4')}
            </Description>

            <Description>
              <b>{t('about_us.description_p5_1')}</b>
              {t('about_us.description_p5_2')}
              <i>{t('about_us.description_p5_3')}</i>
            </Description>

            <Description>
              <b>{t('about_us.description_p6_1')}</b>
              {t('about_us.description_p6_2')}
              <i>{t('about_us.description_p6_3')}</i>
              {t('about_us.description_p6_4')}
            </Description>

            <Description>
              <b>{t('about_us.description_p7_1')}</b>
              {t('about_us.description_p7_2')}
            </Description>

            <Description>
              <b>{t('about_us.description_p8_1')}</b>
              {t('about_us.description_p8_2')}
            </Description>
          </div>
        </Fade>
      </Content>

      <Content style={{ paddingTop: '10rem' }}>
        <Left>
          <Fade left>
            <Header>{t('about_us.principals_title')}</Header>
            <Description>
              {t('about_us.principals_p1_1')}
              <b>{t('about_us.principals_p1_2')}</b>
              {t('about_us.principals_p1_3')}
              <b>{t('about_us.principals_p1_4')}</b>
              <i>{t('about_us.principals_p1_5')}</i>
              {t('about_us.principals_p1_6')}
              <i>{t('about_us.principals_p1_7')}</i>
              {t('about_us.principals_p1_8')}
              <i>{t('about_us.principals_p1_9')}</i>
            </Description>

            <Description>
              <b>{t('about_us.principals_p2_1')}</b>
              <br></br>
              {t('about_us.principals_p2_2')}
            </Description>

            <Description>
              <b>{t('about_us.principals_p3_1')}</b>
              <br></br>
              {t('about_us.principals_p3_2')}
            </Description>

            <Description>
              <b>{t('about_us.principals_p4_1')}</b>
              <br></br>
              {t('about_us.principals_p4_2')}
            </Description>

            <Description>
              <b>{t('about_us.principals_p5_1')}</b>
              <br></br>
              {t('about_us.principals_p5_2')}
            </Description>
          </Fade>
        </Left>

        <Right>
          <Fade right>
            <Image alt="about_us" src={about_us} style={{ filter: 'opacity(50%)' }} />
          </Fade>
        </Right>
      </Content>

      <Content style={{ paddingTop: '10rem' }}>
        <Fade bottom>
          <div className="flex-1">
            <Header>{t('about_us.principals_p6_1')}</Header>
            <Description>{t('about_us.principals_p6_2')}</Description>
            <Description>{t('about_us.principals_p6_3')}</Description>
            <Description>{t('about_us.principals_p6_4')}</Description>
            <Description>{t('about_us.principals_p6_5')}</Description>
            <Description>{t('about_us.principals_p6_6')}</Description>
            <Description>{t('about_us.principals_p6_7')}</Description>
            <Description>{t('about_us.principals_p6_8')}</Description>
            <Description>{t('about_us.principals_p6_9')}</Description>
            <Description>{t('about_us.principals_p6_10')}</Description>
            <Description>{t('about_us.principals_p6_11')}</Description>
            <Description>{t('about_us.principals_p6_12')}</Description>
          </div>
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
  font-weight: bold;
  font-size: 2rem;
  padding-bottom: 6rem;

  @media (max-width: 1900px) {
    font-size: 2rem;
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
  padding-bottom: 1.25rem;

  @media (max-width: 760px) {
    font-size: 0.8rem;
  }
`

const Red = styled.span`
  color: #ec4e4d;
`
