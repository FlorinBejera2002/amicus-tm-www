import styled from '@emotion/styled'
import Image from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'

const ANIMATION_DURATION = 500

interface Props {
  children: React.ReactNode
}

export default ({ children }: Props) => {
  const [showLoading, setShowLoading] = useState(true)
  const [splashOpacity, setSplashOpacity] = useState(1)
  const [logoOpacity, setLogoOpacity] = useState(1)

  const wait = (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time))

  const animate = useCallback(async () => {
    await wait(ANIMATION_DURATION * 2)
    setLogoOpacity(0)
    await wait(ANIMATION_DURATION)
    setSplashOpacity(0)
    await wait(ANIMATION_DURATION)
    setShowLoading(false)
  }, [])

  useEffect(() => {
    animate()
  }, [animate])

  if (showLoading) {
    return (
      <Splash opacity={splashOpacity}>
        <Logo alt="Logo" height={28} opacity={logoOpacity} src="/logo_red.svg" width={100} />
      </Splash>
    )
  }

  return <>{children}</>
}

const Splash = styled.div<{ opacity: number }>`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  opacity: ${({ opacity }) => opacity};
  transition: opacity ${ANIMATION_DURATION}ms ease-in-out;
  background: #000;
`

const Logo = styled(Image)<{ opacity: number }>`
  transition: opacity ${ANIMATION_DURATION}ms ease-in-out;
  opacity: ${({ opacity }) => opacity};
`
