import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import { Header } from '../components/Header'
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
    <div>
      <Header />

      <HeroSection>
        <Fade>
          <ImageWrapper>
            <Image
              alt="hero_background"
              height={500}
              layout="fixed"
              objectFit="contain"
              placeholder="blur"
              src={heroBackground}
              width={889}
            />
          </ImageWrapper>
        </Fade>
      </HeroSection>

      <Container>
        {/* <SectionTag>Be part of what God is doing in Asia!</SectionTag> */}
        <Content>
          <Fade bottom>
            <div>
              <Heading>Be part of what God is doing in Asia! </Heading>
              <div>
                <Red>
                  <b>Arise for Christ Romania</b>
                </Red>{' '}
                in partnership with Credo TV is producing the first ever Romanian christian reality TV show on the
                Filipino mission field!
                <Break />
                We are looking for 12 passionate Romanian christians to join us for one month in the Philippines! From
                the pulpits to the slums, from schools to prisons and door to door evangelism, you will have the
                opportunity to be part of the revival that has started in the Philippines. And the most exciting part is
                that you get to share this experience with the Christian community around the world through the
                televised reality show!
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div>
              <Heading>What the mission trip will be like</Heading>
              <div>
                Our destination is Orion, located in the southern part of Bataan Peninsula. For one month, you will have
                the opportunity to present to the Romanian community what it’s like to be a missionary in Asia - the
                highs and the lows, the joys and the sorrows.
                <Break /> We will split into groups of four missionaries, accompanied by videographers who will capture
                all the important moments of the day - from the moment you go out to serve, to the end of the day
                debrief.
                <Break />
                You'll have the opportunity to serve in a number of different areas, including visiting schools, playing
                with kids, encouraging pastors and the local church family, helping with construction projects,
                attending local church events, and encouraging kids at schools and in their communities. All these
                activities will build your faith and teach you the value of servanthood.
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div>
              <Heading>What activities will we be part of:</Heading>
              <ol style={{ listStyle: 'circle' }}>
                <li>Sharing testimonies in churches / schools</li>
                <li>Visiting church members in their homes</li>
                <li>Door to door witnessing</li>
                <li>Prayer meetings</li>
                <li>Ministry work in surrounding villages</li>
                <li>Participating in special church/school services</li>
                <li>Visiting and feeding the poor in surrounding areas</li>
                <li>Tribal ministry</li>
                <li>Prison ministry</li>
              </ol>
            </div>
          </Fade>
          <Fade bottom>
            <div>
              <Heading>The missionary’s profile</Heading>
              <div>We are looking for born again believers who:</div>
              <ol style={{ listStyle: 'circle' }}>
                <li>are active members in a local church</li>
                <li>are active members in a local church</li>
                <li>have a passion to share the gospel with those around them</li>
                <li>Have some Bible knowledge</li>
                <li>love people and have the heart of a servant</li>
                <li>are flexible and can adjust to any living situation</li>
                <li>are not afraid to get out of their comfort zone</li>
                <li>are proficient in English</li>
                <li>are comfortable to be on camera and television</li>
                <li>have no serious medical conditions that can hinder them from daily activities on the field</li>
              </ol>
            </div>
          </Fade>

          <Fade bottom>
            <div>
              <Heading>Costs</Heading>
              <div>
                The total costs of this project will be aprox.{' '}
                <Red>
                  <b>400 000 USD</b>
                </Red>
                . This will include all video & sound equipment, production/video production, team salaries, travel
                expenses, events logistics, supplies, admin & all other associated activities.
                <Break />
                Each individual missionary will be required to raise{' '}
                <Red>
                  <b>$7500</b>
                </Red>
                . This amount will help cover all your food, lodging, ministry expenses, and other associated costs. We
                can also support you with fundraising strategies.
                <Break />
                Your flight is not included in the trip costs. We will welcome you at the airport in Manila and
                transportation will be provided to the ministry location.
                <Break />
                According to current Philippine Government regulations, all persons entering the Philippines must be
                fully vaccinated for COVID-19, including having all necessary booster shots, at least fourteen days
                before entering the country.
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div>
              <Heading>Registration</Heading>
              <div>
                Please download and complete the{' '}
                <Red>
                  <b>application form📄</b>
                </Red>{' '}
                and{' '}
                <Red>
                  <b>pastoral recommendation📄</b>
                </Red>{' '}
                and send them to info@ariseforchrist.com . We will review them and contact you for further instructions.
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div>
              <Heading>Why the Philippines?</Heading>
              <div>
                With a population of more than 106 million people across its 7,500 islands, the Philippines proudly
                boasts to be the only Christian nation in Asia. Heavily influenced by the West, they are the
                fifth-largest English-speaking country, and Roman Catholicism is the predominant religion with about 80%
                of Filipinos identifying as such. Only 13% identify as evangelical Christians. There is great need for
                evangelism, church strengthening, leadership development, and cross-cultural missions training in the
                Philippines.
                <Break />
                Arise for Christ has been partnering with local churches in the Bataan region for multiple years, being
                involved in church planting and other missionary work.
              </div>
            </div>
          </Fade>
        </Content>
      </Container>
    </div>
  )
}

export default ActOne

const Container = styled.div`
  overflow: hidden;
  padding: 0 10rem;
  background-color: #000;

  @media (max-width: 760px) {
    padding: 2rem 1rem;
  }
`

const Heading = styled.div`
  color: #edf2f4;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.257;
  padding-top: 2rem;
  padding-right: 3.2rem;
  padding-bottom: 1rem;
`

const HeroSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;
  margin: 2em;
  /* background-color: #1d1c2e; */
  background: linear-gradient(90deg, #000 0%, #1d1c2e 10%, #1d1c2e 90%, #000 100%);

  @media (max-width: 760px) {
    display: block;
    margin-top: 7rem;
    max-width: 350px;
    padding: 0rem 0.5rem;
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

  @media (max-width: 760px) {
    display: inline;
    font-size: 1.5rem;
  }
`

const ImageWrapper = styled.div`
  border-radius: 190px;

  @media (max-width: 1200px) {
    display: none;
  }
`

const SectionTag = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
  letter-spacing: 0.4rem;
`

const Red = styled.span`
  color: #ec4e4d;
`

const Break = styled.div`
  margin-bottom: 1rem;
`
