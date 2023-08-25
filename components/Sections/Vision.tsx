import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Fade from 'react-reveal/Fade'

export const Vision = () => {
  const { t } = useTranslation('common')
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <Container>
      <Content>
        <SectionTag>{t('section.vision')}</SectionTag>
        <Heading>
          <Fade top>
            <div className="flex justify-center pt-5">
              <Image alt="arise logo" height={150} layout="fixed" src="/logo.svg" width={150} />
            </div>
          </Fade>
        </Heading>
        <SubHeading>
          <Fade bottom>
            <div className="flex flex-col justify-center text-center">
              <Message>{t('vision.presentation_title')}</Message>
            </div>
          </Fade>
        </SubHeading>
        <Fade bottom>
          <Description>
            {t('vision.presentation_p1_1')}
            <b>{t('vision.presentation_p1_2')}</b>
            {t('vision.presentation_p1_3')}
            <b>{t('vision.presentation_p1_4')}</b>
            {t('vision.presentation_p1_5')}
          </Description>

          <Description className="pt-5">{t('vision.presentation_p2')}</Description>

          <Description className="pt-5">
            {t('vision.presentation_p3_1')}
            <u>
              <b>{t('vision.presentation_p3_2')}</b>
            </u>{' '}
            <u>
              <b>{t('vision.presentation_p3_3')}</b>
            </u>{' '}
            <u>
              <b>{t('vision.presentation_p3_4')}</b>
            </u>
          </Description>
        </Fade>
        <SubHeading>
          <Fade bottom>
            <Description className="flex justify-center text-center">
              <Message>{t('vision.projects_title')}</Message>
            </Description>
          </Fade>
        </SubHeading>
        <Fade bottom>
          <Description className="pt-5">
            {t('vision.projects_p1_1')}
            <u>
              <b>{t('vision.projects_p1_2')}</b>
            </u>{' '}
            {t('vision.projects_p1_3')}
          </Description>

          <Description className="pt-5">
            <u>
              <b>{t('vision.projects_p2_1')}</b>
            </u>{' '}
            {t('vision.projects_p2_2')}
          </Description>

          <Description className="pt-5">
            <u>
              <b>{t('vision.projects_p3_1')}</b>
            </u>{' '}
            {t('vision.projects_p3_2')}
            <u>{t('vision.projects_p3_3')}</u> {t('vision.projects_p3_4')}
            <u>{t('vision.projects_p3_5')}</u>
            <Description className="pt-5">
              {t('vision.projects_p3_6')}
              <u>
                <b>{t('vision.projects_p3_7')}</b>
              </u>{' '}
              {t('vision.projects_p3_8')}
            </Description>
          </Description>

          <Description className="pt-5">
            <u>
              <b>{t('vision.projects_p4_1')}</b>
            </u>{' '}
            {t('vision.projects_p4_2')}
          </Description>

          <Description className="pt-5">{t('vision.projects_p5')}</Description>
        </Fade>
        <SubHeading>
          <Fade bottom>
            <div className="flex justify-center text-center">
              <Message>{t('vision.title')}</Message>
            </div>
          </Fade>
        </SubHeading>
        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step1_title')}</StepHeader>
              {t('vision.step1_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step1" height={300} src="/step1.jpg" width={500} />
            </Right>
          </Row>
        </Fade>
        <Fade bottom>
          {isMobile ? (
            <Row>
              <Left>
                <StepHeader>{t('vision.step2_title')}</StepHeader>
                {t('vision.step2_description')}
              </Left>
              <Right>
                <Image alt="step2" height={300} src="/step2.jpg" width={500} />
              </Right>
            </Row>
          ) : (
            <Row>
              <Left>
                <Image alt="step2" height={300} src="/step2.jpg" width={500} />
              </Left>
              <VerticalLine />
              <Right>
                <StepHeader>{t('vision.step2_title')}</StepHeader>
                {t('vision.step2_description')}
              </Right>
            </Row>
          )}
        </Fade>
        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step3_title')}</StepHeader>
              {t('vision.step3_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step3" height={300} src="/step3.jpg" width={500} />
            </Right>
          </Row>
        </Fade>
        <Fade bottom>
          {isMobile ? (
            <Row>
              <Left>
                <StepHeader>{t('vision.step4_title')}</StepHeader>
                {t('vision.step4_description')}
              </Left>
              <Right>
                <Image alt="step4" height={300} src="/step4.jpg" width={500} />
              </Right>
            </Row>
          ) : (
            <Row>
              <Left>
                <Image alt="step4" height={300} src="/step4.jpg" width={500} />
              </Left>
              <VerticalLine />
              <Right>
                <StepHeader>{t('vision.step4_title')}</StepHeader>
                {t('vision.step4_description')}
              </Right>
            </Row>
          )}
        </Fade>
        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step5_title')}</StepHeader>
              {t('vision.step5_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step5" height={300} src="/step5.jpg" width={500} />
            </Right>
          </Row>
        </Fade>
        <Fade bottom>
          {isMobile ? (
            <Row>
              <Left>
                <StepHeader>{t('vision.step6_title')}</StepHeader>
                {t('vision.step6_description')}
              </Left>
              <Right>
                <Image alt="step6" height={300} src="/step6.jpg" width={500} />
              </Right>
            </Row>
          ) : (
            <Row>
              <Left>
                <Image alt="step6" height={300} src="/step6.jpg" width={500} />
              </Left>
              <VerticalLine />
              <Right>
                <StepHeader>{t('vision.step6_title')}</StepHeader>
                {t('vision.step6_description')}
              </Right>
            </Row>
          )}
        </Fade>
        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step7_title')}</StepHeader>
              {t('vision.step7_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step7" height={300} src="/step7.jpg" width={500} />
            </Right>
          </Row>
        </Fade>
        <Fade bottom>
          {isMobile ? (
            <Row id="last_row">
              <Left>
                <StepHeader>{t('vision.step8_title')}</StepHeader>
                {t('vision.step8_description')}
              </Left>
              <Right>
                <Image alt="step8" height={300} src="/step8.jpg" width={500} />
              </Right>
            </Row>
          ) : (
            <Row>
              <Left>
                <Image alt="step8" height={300} src="/step8.jpg" width={500} />
              </Left>
              <VerticalLine />
              <Right>
                <StepHeader>{t('vision.step8_title')}</StepHeader>
                {t('vision.step8_description')}
              </Right>
            </Row>
          )}
        </Fade>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10rem 12rem;
  background: #fff;

  @media (max-width: 760px) {
    padding: 4rem 2rem;
    font-size: 1.5rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;

  #last_row {
    border-bottom: none;
  }
`

const SectionTag = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
  letter-spacing: 0.4rem;
`

const Message = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #ec4e4d;

  @media (max-width: 760px) {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
    border-bottom: 1px solid #e9302e;
    padding-bottom: 30px;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 7rem 2rem 0rem;

  @media (max-width: 760px) {
    margin-top: 2rem;
    font-size: 0.8rem;
    padding: 1rem 0rem 1rem 3rem;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  padding: 2rem 0rem 2rem 7rem;

  @media (max-width: 760px) {
    font-size: 0.8rem;
    align-items: flex-start;
    text-align: start;
    padding: 1rem 0rem 1rem 3rem;
  }
`

const VerticalLine = styled.div`
  border-left: 3px solid #e9302e;
  border-radius: 4px;
  height: 15rem;

  @media (max-width: 760px) {
    display: none;
  }
`

const Heading = styled.div`
  display: flex;
  padding-bottom: 1rem;
  justify-content: center;

  @media (max-width: 1900px) {
    font-size: 3.8rem;
  }

  @media (max-width: 1500px) {
    font-size: 3.2rem;
  }

  @media (max-width: 1000px) {
    font-size: 2.6rem;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`

const SubHeading = styled.div`
  display: flex;
  padding-top: 10rem;
  padding-bottom: 3rem;
  justify-content: center;

  @media (max-width: 1900px) {
    font-size: 3.8rem;
  }

  @media (max-width: 1500px) {
    font-size: 3.2rem;
  }

  @media (max-width: 1000px) {
    font-size: 2.6rem;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`

const Description = styled.div`
  @media (max-width: 760px) {
    font-size: 0.8rem;
  }
`

const StepHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 760px) {
    font-size: 1rem;
  }
`
