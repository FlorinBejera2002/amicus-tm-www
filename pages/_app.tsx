import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const ariseTheme = createTheme({
  palette: {
    primary: {
      main: '#EDF2F4',
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

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={ariseTheme}>
      <Head>
        <title>Arise For Christ</title>
        <meta content="Arise For Christ Website" name="description" />
        <link href="/tab_logo.ico" rel="icon" />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
