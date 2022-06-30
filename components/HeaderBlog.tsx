import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import LinkNext from 'next/link'
import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { EvangelismForm } from './EvangelismForm'

export const HeaderBlog = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const handleOpen = () => {
    setOpenDialog(true)
  }
  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <Container>
      <Menu>
        <ImageWrapper onClick={() => scroll.scrollToTop()} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <Image alt="Logo" height={20} src="/logo_white.png" width={100} />
        </ImageWrapper>

        <LinkNext href="/">
          <Href>Acasă</Href>
        </LinkNext>

        <LinkNext href="/blog">
          <Href>Blog</Href>
        </LinkNext>
      </Menu>

      <StyledButton onClick={handleOpen} variant="outlined">
        Creează Cerere
      </StyledButton>

      <EvangelismForm handleClose={handleClose} open={openDialog} />
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
  text-transform: capitalize;
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
