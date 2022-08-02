import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Left>
        <SectionTag>{t('section.contact')}</SectionTag>

        <Heading>
          <div>{t('contact.title')}</div>
          <div className="mt-10">{t('contact.subtitle')}</div>
        </Heading>

        <DesktopAction>
          <StyledButton href="mailto:info@ariseforchrist.com">{t('button.contact_us')}</StyledButton>

          <Copyright>© Copyright AriseForChrist 2022</Copyright>
        </DesktopAction>
      </Left>

      <Right>
        <SocialItemContainer>
          <Title>{t('contact.email')}</Title>
          <LabelWrapper>
            <Label>info@ariseforchrist.com</Label>
          </LabelWrapper>
        </SocialItemContainer>

        <SocialItemContainer>
          <Title>{t('contact.phone')}</Title>
          <LabelWrapper>
            <Label>+0721 804 560</Label>
            <Label>0356 175 148</Label>
          </LabelWrapper>
        </SocialItemContainer>

        <SocialItemContainer>
          <Title>{t('contact.social')}</Title>
          <LabelWrapper>
            <Label>
              <Link onClick={() => window.open('https://www.facebook.com/AriseForChristRomania/', '_blank')}>
                Facebook
              </Link>
            </Label>
            <Label>
              <Link onClick={() => window.open('https://www.instagram.com/p/CfL2FveIMpn/', '_blank')}>Instagram</Link>
            </Label>
            <Label>
              <Link onClick={() => window.open('https://www.youtube.com/c/Ariseforchrist/', '_blank')}>Youtube</Link>
            </Label>
          </LabelWrapper>
        </SocialItemContainer>
      </Right>

      <MobileContact>
        <StyledButton href="mailto:info@ariseforchrist.com">{t('button.contact_us')}</StyledButton>

        <Copyright>© Copyright AriseForChrist 2022</Copyright>
      </MobileContact>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding-top: 10rem;
  padding-bottom: 1rem;
  background: black;

  @media (max-width: 390px) {
    padding: 4rem 2rem;
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;

  @media (max-width: 390px) {
    padding: 0rem;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;

  @media (max-width: 390px) {
    padding: 0rem;
  }
`

const SectionTag = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
  letter-spacing: 0.4rem;
`

const Heading = styled.div`
  color: #edf2f4;
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 6rem;

  @media (max-width: 390px) {
    font-size: 1rem;
    padding-bottom: 3rem;
  }
`

const StyledButton = styled(Button)`
  border-radius: 0px;
  padding: 0.5rem 1.5rem;
  background-color: #e9302e !important;
  border: 2px solid #e9302e;
  width: 100%;

  :hover {
    background-color: #e9302e;
    border: 2px solid #e9302e;
  }
`

const SocialItemContainer = styled.div`
  margin-top: 6rem;

  @media (max-width: 390px) {
    margin-top: 1rem;
  }
`

const Title = styled.div`
  font-size: 1.2rem;
  line-height: 1.333;
  color: #6d6c73;
  text-transform: capitalize;

  @media (max-width: 390px) {
    font-size: 0.8rem;
  }
`

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.div`
  color: #edf2f4;
  font-size: 1.8rem;
  font-weight: 300;

  @media (max-width: 390px) {
    font-size: 0.8rem;
  }
`

const Link = styled.span`
  color: #edf2f4;
  cursor: pointer;

  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  :hover {
    color: #e9302e;
  }
`

const Copyright = styled.div`
  color: #edf2f4;
  padding-top: 6rem;
  color: #6d6c73;

  @media (max-width: 390px) {
    padding-top: 3rem;
  }
`

const DesktopAction = styled.div`
  display: block;

  @media (max-width: 390px) {
    display: none;
  }
`

const MobileContact = styled.div`
  display: none;
  margin-top: 6rem;

  @media (max-width: 390px) {
    display: block;
  }
`
