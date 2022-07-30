import styled from '@emotion/styled'
import { AlertColor, Box, Button, Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import LinkNext from 'next/link'
import { useRouter } from 'next/router'
import React, { forwardRef, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { EvangelismForm } from './EvangelismForm'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const Header = () => {
  const router = useRouter()
  const onBlogPage = router.pathname.includes('/blog')
  const { t } = useTranslation('common')
  const [openDialog, setOpenDialog] = useState(false)

  //snackbar
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false)
  const [snackBarMessage, setSnackBarMessage] = useState<string>(t('form.successful_submission'))
  const [snackBarType, setSnackBarType] = useState<AlertColor>('success')

  const handleCloseSnackBar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setShowSnackBar(false)
  }

  const handleLocaleChange = () =>
    router.push(router.route, router.asPath, {
      locale: router.locale === 'en' ? 'ro' : 'en',
    })

  const handleOpen = () => {
    setOpenDialog(true)
  }
  const handleClose = () => {
    setOpenDialog(false)
  }

  const onClickHome = () => {
    if (onBlogPage) {
      router.push('/')
    } else {
      scroll.scrollToTop()
    }
  }

  return (
    <Container>
      <Menu>
        <ImageWrapper onClick={onClickHome} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <Image alt="Logo" height={20} src="/logo_white.png" width={100} />
        </ImageWrapper>

        <Href onClick={onClickHome}>{t('header.home')}</Href>

        {!onBlogPage && (
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

        {!onBlogPage && (
          <Link duration={1000} offset={50} smooth={true} to="Contact">
            <Href>{t('header.contact')}</Href>
          </Link>
        )}
      </Menu>

      <div className="flex items-center">
        <Href className="mr-7" onClick={handleLocaleChange}>
          en/ro
        </Href>

        <StyledButton onClick={handleOpen} variant="outlined">
          {t('button.er_request')}
        </StyledButton>
      </div>

      <EvangelismForm
        handleClose={handleClose}
        open={openDialog}
        setShowSnackBar={setShowSnackBar}
        setSnackBarMessage={setSnackBarMessage}
        setSnackBarType={setSnackBarType}
      />

      <Snackbar autoHideDuration={6000} onClose={handleCloseSnackBar} open={showSnackBar}>
        <Alert onClose={handleCloseSnackBar} severity={snackBarType} sx={{ width: '100%' }}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}

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
