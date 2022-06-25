import styled from '@emotion/styled'

export const Socials = () => (
  <Container>
    <Link onClick={() => window.open('https://www.facebook.com/AriseForChristRomania/', '_blank')}>facebook</Link>
    <Span>/</Span>
    <Link onClick={() => window.open('https://www.instagram.com/p/CfL2FveIMpn/', '_blank')}>instagram</Link>
    <Span>/</Span>
    <Link onClick={() => window.open('https://www.youtube.com/c/Ariseforchrist/', '_blank')}>youtube</Link>
  </Container>
)

const Container = styled.div`
  display: flex;
  margin-top: 3rem;
`

const Link = styled.span`
  color: #edf2f4;
  font-weight: 200;
  cursor: pointer;

  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  :hover {
    color: #e9302e;
  }
`

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #edf2f4;
  font-size: 0.8rem;
  margin: 0rem 1rem;
  opacity: 0.1;
`
