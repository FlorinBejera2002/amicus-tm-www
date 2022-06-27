import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const Footer = () => (
  <Container>
    <Left>
      <Heading>IA LEGĂTURA</Heading>

      <Message>
        Have an idea or a concept that really excite you? Let's turn that idea into reality. Shoot me a message.
      </Message>

      <StyledButton>Contactează-ne</StyledButton>

      <Copyright>© Copyright AriseForChrist 2022</Copyright>
    </Left>

    <Right>
      <SocialItemContainer>
        <Title>Email</Title>
        <LabelWrapper>
          <Label>info@ariseforchrist.com</Label>
        </LabelWrapper>
      </SocialItemContainer>

      <SocialItemContainer>
        <Title>Phone</Title>
        <LabelWrapper>
          <Label>+197 543 2345</Label>
        </LabelWrapper>
      </SocialItemContainer>

      <SocialItemContainer>
        <Title>Social</Title>
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
  </Container>
)

const Container = styled.div`
  display: flex;
  padding-top: 16rem;
  padding-bottom: 10rem;
  background: black;
  height: 100vh;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;
`

const Heading = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
`

const Message = styled.div`
  color: #edf2f4;
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 6rem;
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
  margin-bottom: 4rem;
`

const Title = styled.div`
  font-size: 1.2rem;
  line-height: 1.333;
  color: #6d6c73;
`

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.div`
  color: #edf2f4;
  font-size: 1.8rem;
  font-weight: 300;
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

const Copyright = styled.span`
  color: #edf2f4;
  padding-top: 6rem;
  color: #6d6c73;
`
