import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import { TopBar } from '../components/TopBar'

const ariseTheme = createTheme({
  palette: {
    primary: {
      main: '#2B2D42',
    },
    secondary: {
      main: '#8D99AE',
    },
    background: {
      default: '#EDF2F4',
    },
    text: {
      primary: '#2B2D42',
    },
    error: {
      main: '#D90429',
      A100: '#EF233C',
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ariseTheme}>
      <TopBar />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
