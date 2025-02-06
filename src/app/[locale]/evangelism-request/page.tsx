import ContentEvangelizationForm from './components/ev-form'

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'metadata.request' })

  return {
    description: t('description'),
    icons: [
      { rel: 'icon', url: '/logo.ico' },
      { rel: 'apple-touch-icon', url: '/logo.ico' }
    ],
    keywords: t('keywords'),
    og: {
      description: t('description'),
      title: t('title')
    },
    title: t('title')
  } as Metadata
}

const EvangelismRequest = () => {
  return (
    <div className="main flex flex-col items-center">
      <div className="custom-page-content z-index-2 max-w-6xl py-4">
        <div className="my-4 rounded-md bg-white !p-8 shadow-lg md:!p-12">
          <ContentEvangelizationForm />
        </div>
      </div>
    </div>
  )
}

export default EvangelismRequest
