import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import { TopBar } from '../components/TopBar'
import Head from 'next/head'
import { Footer } from '../components/Footer'

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
      <Head>
        <title>Arise For Christ</title>
        <meta name="description" content="Arise For Christ Website" />
        <link rel="icon" href="/small_logo.svg" />
      </Head>

      <TopBar />
      <Component {...pageProps} />
      <Footer />
      
    </ThemeProvider>
  )
}

export default MyApp
