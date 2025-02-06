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
  return (
    <div className="main flex flex-col items-center bg-white" role="main">
      <div className="custom-page-content p-relative z-index-2 text-base flex w-full justify-center ">
        <div className="mx-w-7xl rounded-md shadow-xl shadow-black relative">
          <DevotionalFetcher />
        </div>
      </div>
    </div>
  )
}
export default DevotionalPage
