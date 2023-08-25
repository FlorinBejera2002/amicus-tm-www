import styled from '@emotion/styled'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Button } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import LinkNext from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, animateScroll as scroll } from 'react-scroll'

interface Props {
  isFadingHeader?: boolean
}

export const Header = (props: Props) => {
  const router = useRouter()
  const onBlogPage = router.pathname.includes('/blog')
  const onEvangelismFormPage = router.pathname.includes('/evangelism_form')
  const onHomePage = !onBlogPage && !onEvangelismFormPage
  const { t } = useTranslation('common')
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
  const [showMenu, setShowMenu] = useState(false)

  const handleLocaleChange = () =>
    router.push(router.route, router.asPath, {
      locale: router.locale === 'en' ? 'ro' : 'en',
    })

  const onClickHome = () => {
    if (onHomePage) {
      scroll.scrollToTop()
    } else {
      router.push('/')
    }
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  if (isMobile) {
    return (
      <div>
        <Container>
          <div onClick={onClickHome} style={{ display: 'flex' }}>
            {!onHomePage && <ChevronLeftIcon htmlColor="white" sx={{ marginRight: '0.5rem' }} />}

            <ImageWrapperMobile>
              <Image alt="Logo" height={28} src="/logo_horizontal_black.png" width={100} />
            </ImageWrapperMobile>
          </div>

          {onHomePage && (
            <div style={{ display: 'flex' }}>
              <Href className="mr-3" onClick={handleLocaleChange}>
                en/ro
              </Href>

              <MenuIcon htmlColor="#000" onClick={() => setShowMenu(true)} style={{ zIndex: 1 }} />
            </div>
          )}
        </Container>

        <Overlay showMenu={showMenu}>
          <CloseIcon htmlColor="white" onClick={hideMenu} sx={{ position: 'absolute', top: 30, right: 30 }} />

          <Link duration={1000} offset={50} onClick={hideMenu} smooth={true} to="Vision">
            <Href>{t('header.vision')}</Href>
          </Link>

          <Link duration={1000} offset={50} onClick={hideMenu} smooth={true} to="About">
            <Href>{t('header.about_us')}</Href>
          </Link>

          <LinkNext href="/blog" onClick={hideMenu}>
            <Href>{t('header.blog')}</Href>
          </LinkNext>

          <Link duration={1000} offset={50} onClick={hideMenu} smooth={true} to="Contact">
            <Href>{t('header.contact')}</Href>
          </Link>
        </Overlay>
      </div>
    )
  }

  return (
    <Container $isFadingHeader={props.isFadingHeader}>
      <Menu>
        <ImageWrapper onClick={onClickHome} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <Image alt="Logo" height={42} src="/logo_horizontal_black.png" width={150} />
        </ImageWrapper>

        <Href onClick={onClickHome}>{t('header.home')}</Href>

        {onHomePage && (
          <div className="flex">
            <Link duration={1000} offset={50} smooth={true} to="Vision">
              <Href>{t('header.vision')}</Href>
            </Link>

            <Link duration={1000} offset={50} smooth={true} to="About">
              <Href>{t('header.about_us')}</Href>
            </Link>
          </div>
        )}

        <LinkNext href="/blog">
          <Href>{t('header.blog')}</Href>
        </LinkNext>

        {onHomePage && (
          <Link duration={1000} offset={50} smooth={true} to="Contact">
            <Href>{t('header.contact')}</Href>
          </Link>
        )}
      </Menu>

      <div className="flex items-center">
        <Href className="mr-7" onClick={handleLocaleChange}>
          en/ro
        </Href>

        <StyledButton onClick={() => router.push('evangelism_form')} variant="outlined">
          {t('button.er_request')}
        </StyledButton>
      </div>
    </Container>
  )
}

const Container = styled.div<{ $isFadingHeader?: boolean }>`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666666;
  padding: ${({ $isFadingHeader }) => ($isFadingHeader ? '1.5rem 5rem' : '3.5rem 5rem 1.5rem 5rem')};

  @media (max-width: 760px) {
    align-items: flex-start;
    padding: 2rem 2rem 1.5rem 2rem;
  }
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

  @media (max-width: 760px) {
    display: none;
  }
`

const ImageWrapperMobile = styled(Box)`
  display: flex;
`

const Href = styled.div<{ $highlight?: boolean }>`
  z-index: 1;
  font-weight: bold;
  padding: 0 1rem;
  cursor: pointer;

  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  color: ${({ $highlight }) => $highlight && '#e3cd58'};

  :hover {
    color: #e9302e;
  }
`

const StyledButton = styled(Button)`
  border-radius: 0px;
  padding: 0.5rem 1.5rem;
  border: 2px solid #000;
  color: #000;

  :hover {
    color: #fff;
    background-color: #e9302e;
    border: 2px solid #e9302e;
  }
`

const Overlay = styled.div<{ showMenu: boolean }>`
  display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  background: #000;
  color: #fff;
  gap: 4rem;
  font-size: 2rem;
`
