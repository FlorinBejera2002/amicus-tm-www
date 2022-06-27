import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'

export const Header = () => (
  <Container>
    <Menu>
      <ImageWrapper sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
        <Link duration={1000} offset={50} smooth={true} to="test1">
          <Image alt="Logo" height={20} src="/logo_white.png" width={100} />
        </Link>
      </ImageWrapper>

      <Button color="inherit" onClick={() => scroll.scrollToTop()}>
        <Href>Acasă</Href>
      </Button>

      <Link duration={1000} offset={50} smooth={true} to="Vision">
        <Button color="inherit">
          <Href>Viziunea</Href>
        </Button>
      </Link>

      <Link duration={1000} offset={50} smooth={true} to="About">
        <Button color="inherit">
          <Href>Despre Noi</Href>
        </Button>
      </Link>

      <Button color="inherit">
        <Href>Blog</Href>
      </Button>

      <Link duration={1000} offset={50} smooth={true} to="Contact">
        <Button color="inherit">
          <Href>Contact</Href>
        </Button>
      </Link>
    </Menu>

    <StyledButton variant="outlined">Creează Cerere</StyledButton>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666666;
  padding: 1.5rem 5rem 1.5rem 5rem;
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin-right: 3rem;
  cursor: pointer;
`

const Href = styled.div`
  text-transform: capitalize;
  font-weight: bold;

  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  :hover {
    color: #edf2f4;
  }
`

const StyledButton = styled(Button)`
  border-radius: 0px;
  padding: 0.5rem 1.5rem;
  border: 2px solid #edf2f4;

  :hover {
    background-color: #e9302e;
    border: 2px solid #e9302e;
  }
`
