import { AppBar } from '@mui/material'
import { CSSProperties } from 'react'

interface Props {
  children: JSX.Element
  style: CSSProperties
}

export const Topbar = ({ children, style }: Props) => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#000', ...style }}>
    {children}
  </AppBar>
)
