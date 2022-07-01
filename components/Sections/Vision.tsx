import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import ariseImg from '../../public/logo_vertical.jpg'
import step1 from '../../public/step1.jpg'
import step2 from '../../public/step2.jpg'
import step3 from '../../public/step3.jpg'
import step4 from '../../public/step4.jpg'
import step5 from '../../public/step5.jpg'
import step6 from '../../public/step6.jpg'
import step7 from '../../public/step7.jpg'
import step8 from '../../public/step8.jpg'

export const Vision = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <SectionTag>{t('section.vision')}</SectionTag>

      <Heading>
        <Fade left>
          <div className="flex w-9/12 flex-col items-center justify-center pt-5">
            <Image alt="arise logo" height={100} layout="fixed" src={ariseImg} width={150} />

            {/* <div className="px-2 pt-5 text-center text-sm">{t('vision.description')}</div> */}
          </div>
        </Fade>

        <Fade bottom>
          <div className="flex justify-center text-center">
            <Message>{t('vision.title')}</Message>
          </div>
        </Fade>
      </Heading>

      <Content>
        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step1_title')}</StepHeader>
              {t('vision.step1_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step1" height={300} src={step1} width={500} />
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <Image alt="step2" height={300} src={step2} width={500} />
            </Left>
            <VerticalLine />
            <Right>
              <StepHeader>{t('vision.step2_title')}</StepHeader>
              {t('vision.step2_description')}
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step3_title')}</StepHeader>
              {t('vision.step3_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step3" height={300} src={step3} width={500} />
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <Image alt="step4" height={300} src={step4} width={500} />
            </Left>
            <VerticalLine />
            <Right>
              <StepHeader>{t('vision.step4_title')}</StepHeader>
              {t('vision.step4_description')}
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step5_title')}</StepHeader>
              {t('vision.step5_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step5" height={300} src={step5} width={500} />
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <Image alt="step6" height={300} src={step6} width={500} />
            </Left>
            <VerticalLine />
            <Right>
              <StepHeader>{t('vision.step6_title')}</StepHeader>
              {t('vision.step6_description')}
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <StepHeader>{t('vision.step7_title')}</StepHeader>
              {t('vision.step7_description')}
            </Left>
            <VerticalLine />
            <Right>
              <Image alt="step7" height={300} src={step7} width={500} />
            </Right>
          </Row>
        </Fade>

        <Fade bottom>
          <Row>
            <Left>
              <Image alt="step8" height={300} src={step8} width={500} />
            </Left>
            <VerticalLine />
            <Right>
              <StepHeader>{t('vision.step8_title')}</StepHeader>
              {t('vision.step8_description')}
            </Right>
          </Row>
        </Fade>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 12rem;
  background: #edf2f4;
`

const SectionTag = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
  letter-spacing: 0.4rem;
`

const Message = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 7rem;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  padding: 5rem;
  padding: 2rem 7rem;
`

const VerticalLine = styled.div`
  border-left: 3px solid #e9302e;
  border-radius: 4px;
  height: 15rem;
`

const Heading = styled.div`
  display: flex;
  padding-bottom: 5rem;

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

const StepHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`
