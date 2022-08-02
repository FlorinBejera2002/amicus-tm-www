import styled from '@emotion/styled'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Button } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import LinkNext from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, animateScroll as scroll } from 'react-scroll'

export const Header = () => {
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
              <Image alt="Logo" height={19} src="/logo_horizontal_white.png" width={70} />
            </ImageWrapperMobile>
          </div>

          {onHomePage && <MenuIcon htmlColor="white" onClick={() => setShowMenu(true)} />}
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
    <Container>
      <Menu>
        <ImageWrapper onClick={onClickHome} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <Image alt="Logo" height={28} src="/logo_horizontal_white.png" width={100} />
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666666;
  padding: 3.5rem 5rem 1.5rem 5rem;

  @media (max-width: 390px) {
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

  @media (max-width: 390px) {
    display: none;
  }
`

const ImageWrapperMobile = styled(Box)`
  display: flex;
`

const Href = styled.div`
  font-weight: bold;
  padding: 0 1rem;
  cursor: pointer;

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
