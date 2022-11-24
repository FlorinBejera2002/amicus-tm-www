import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

export default () => {
  return (
    <Overlay>
      <Center>
        <Logo height={120} src="/logo_red.svg" width={100} />
      </Center>
    </Overlay>
  )
}

const Overlay = styled.div`
  background: #000;
  display: flex;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  right: 0;

  animation: disappear 1s forwards;
  animation-delay: 2s;
`

const Center = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  place-items: center center;
`

const Logo = styled(Image)`
  animation: disappear 0.7s forwards;
  animation-delay: 1s;
`
