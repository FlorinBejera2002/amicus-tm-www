import styled from '@emotion/styled'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Button from '@mui/material/Button'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import { Link, Element } from 'react-scroll'

import { Header } from '../components/Header'
import { Footer } from '../components/Sections/Footer'
import heroBackground from '../public/banner_actone.jpg'

interface Props {
  locale: string
}
export const getStaticProps = async (props: Props) => ({
  props: {
    ...(await serverSideTranslations(props.locale, ['common'])),
  },
})

const ActOne: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Background>
      <Header />

      <Container>
        <MaxWidth>
          <HeroSection>
            <Fade>
              <Link duration={1000} offset={-50} smooth={true} to="Registration">
                <ImageWrapper>
                  <Image
                    alt="hero_background"
                    height={500}
                    objectFit="contain"
                    placeholder="blur"
                    src={heroBackground}
                    width={889}
                  />
                </ImageWrapper>
              </Link>
            </Fade>
          </HeroSection>

          <Content>
            <Fade bottom>
              <TextBlock>
                <Heading>{t('actone.heading_be_part')}</Heading>
                <div>
                  <Yellow>
                    <b>{t('actone.arise_for_christ_romania')}</b>
                  </Yellow>{' '}
                  {t('actone.heading_be_part_p1')}
                  <Break />
                  {t('actone.heading_be_part_p2')}
                </div>
              </TextBlock>
            </Fade>
            <Fade bottom>
              <TextBlock>
                <Heading>{t('actone.heading_trip_like')}</Heading>
                <div>
                  {t('actone.heading_trip_like_p1')}
                  <Break />
                  {t('actone.heading_trip_like_p2')}
                  <Break />
                  {t('actone.heading_trip_like_p3')}
                </div>
              </TextBlock>
            </Fade>
            <Fade bottom>
              <TextBlock>
                <Heading>{t('actone.heading_activities')}</Heading>
                <ol style={{ paddingLeft: '1rem' }}>
                  <li>
                    <RightArrow />
                    {t('actone.heading_activities_item1')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_activities_item2')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_activities_item3')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_activities_item4')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_activities_item5')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_activities_item6')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_activities_item7')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_activities_item8')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_activities_item9')}
                  </li>
                </ol>
              </TextBlock>
            </Fade>
            <Fade bottom>
              <TextBlock>
                <Heading>{t('actone.heading_profile')}</Heading>
                <div>{t('actone.heading_profile_subheading')}</div>
                <ol style={{ paddingLeft: '1rem' }}>
                  <li>
                    <RightArrow />
                    {t('actone.heading_profile_item1')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_profile_item2')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_profile_item3')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_profile_item4')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_profile_item5')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_profile_item6')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_profile_item7')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_profile_item8')}
                  </li>
                  <li>
                    <RightArrow />
                    {t('actone.heading_profile_item9')}
                  </li>
                </ol>
              </TextBlock>
            </Fade>

            <Fade bottom>
              <TextBlock>
                <Heading>{t('actone.heading_costs')}</Heading>
                <div>
                  {t('actone.heading_costs_p1')}
                  <Yellow>
                    <b>{t('actone.heading_costs_total')}</b>
                  </Yellow>
                  {t('actone.heading_costs_p2')}
                  <Break />
                  {t('actone.heading_costs_p3')}
                  <Yellow>
                    <b>{t('actone.heading_costs_total_per_individual')}</b>
                  </Yellow>
                  {t('actone.heading_costs_p4')}
                  <Break />
                  {t('actone.heading_costs_p5')}
                  <Break />
                  {t('actone.heading_costs_p6')}
                </div>
              </TextBlock>
            </Fade>

            <Element name="Registration">
              <Fade bottom>
                <TextBlock style={{ border: '1px lightgrey dashed', borderRadius: '1rem', padding: '1rem' }}>
                  <Heading>{t('actone.heading_registration')}</Heading>
                  <div>
                    {t('actone.heading_registration_1')}
                    <Yellow>
                      <b>{t('actone.heading_registration_2')}</b>
                    </Yellow>
                    {t('actone.heading_registration_3')}
                    <Yellow>
                      <b>{t('actone.heading_registration_4')}</b>
                    </Yellow>
                    {t('actone.heading_registration_5')}
                    <a href="mailto:info@ariseforchrist.com" style={{ textDecoration: 'underline' }}>
                      {t('actone.heading_registration_6')}
                    </a>
                    {t('actone.heading_registration_7')}
                  </div>

                  <ButtonWrapper>
                    <Button
                      onClick={() =>
                        window.open('https://www.ariseforchrist.com/public/docs/actone_application_form.pdf', '_blank')
                      }
                      startIcon={<CloudDownloadIcon />}
                      style={{
                        backgroundColor: '#e3cd58',
                        borderRadius: '1rem',
                        color: '#1d1c2e',
                        marginRight: '1rem',
                      }}
                      variant="contained"
                    >
                      application form
                    </Button>

                    <Button
                      onClick={() =>
                        window.open(
                          'https://www.ariseforchrist.com/public/docs/actone_pastor_recommendation.pdf',
                          '_blank',
                        )
                      }
                      startIcon={<CloudDownloadIcon />}
                      style={{ backgroundColor: '#e3cd58', borderRadius: '1rem', color: '#1d1c2e' }}
                      variant="contained"
                    >
                      pastoral recommendation
                    </Button>
                  </ButtonWrapper>
                </TextBlock>
              </Fade>
            </Element>

            <Fade bottom>
              <TextBlock>
                <Heading>{t('actone.heading_why')}</Heading>
                <div>
                  {t('actone.heading_why_p1')}
                  <Break />
                  {t('actone.heading_why_p2')}
                </div>
              </TextBlock>
            </Fade>
          </Content>
        </MaxWidth>
      </Container>
      <Footer />
    </Background>
  )
}

export default ActOne

const Background = styled.div`
  background-color: #1d1c2e;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 2rem;

  @media (max-width: 760px) {
    font-size: 0.8rem;
  }
`

const MaxWidth = styled.div`
  max-width: 1600px;
  overflow: hidden;
`

const Heading = styled.div`
  color: #e3cd58;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.257;
  padding-bottom: 1rem;

  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`

const HeroSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem 2rem 5rem;
  background-color: #1d1c2e;

  @media (max-width: 760px) {
    padding: 0rem 0rem 3rem 0rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0rem 8rem 0rem;
  color: #fff;

  @media (max-width: 760px) {
    margin-top: 2rem;
  }
`

const TextBlock = styled.div`
  margin-bottom: 3rem;
`

const Yellow = styled.span`
  color: #e3cd58;
`

const Break = styled.div`
  margin-bottom: 1rem;
`

const RightArrow = styled(KeyboardArrowRightIcon)`
  color: #e3cd58;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  @media (max-width: 760px) {
    display: block;
    margin-top: 2rem;

    button {
      margin-top: 1.5rem;
    }
  }
`

const ImageWrapper = styled.div`
  cursor: pointer;
`
