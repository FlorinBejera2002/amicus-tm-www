import type { Metadata } from 'next'
import DevotionalFetcher from './components/get-devotional'

// Generare metadate pentru SEO
export const metadata: Metadata = {
  title: 'Daily Devotional',
  description: 'A devotional for your spiritual growth.',
  icons: [
    { rel: 'icon', url: '/logo.ico' },
    { rel: 'apple-touch-icon', url: '/logo.ico' }
  ]
}

const DevotionalPage = () => {
  return <DevotionalFetcher />
}
export default DevotionalPage
