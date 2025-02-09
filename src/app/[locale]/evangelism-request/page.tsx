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
  return <ContentEvangelizationForm />
}

export default EvangelismRequest
