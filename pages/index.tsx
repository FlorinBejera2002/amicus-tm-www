import { Search } from '@mui/icons-material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { TopBar } from '../components/TopBar'
import { Footer } from '../components/footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arise For Christ</title>
        <meta name="description" content="Arise For Christ Website" />
        <link rel="icon" href="/small_logo.svg" />
      </Head>
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Arise For Christ
        </h1>


        
      </main>

      <Footer />
    </div>
  )
}

export default Home
