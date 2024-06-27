import ContentEvangelizationForm from './components/ev-form'
import InViewTransition from '../common/in-view-transition'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaAngleRight } from 'react-icons/fa'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Metadata } from 'next'

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
  const t = useTranslations()

  return (
    <div className="main flex flex-col items-center">
      <section className="page-header p-relative bg-quaternary m-0 !mt-4 w-screen overflow-hidden border-0 p-0">
        <InViewTransition
          damping={100}
          delay={0.25}
          duration={0.5}
          yIn={0}
          yOut={0}
        >
          <CustomHeroBg />
        </InViewTransition>

        <div className="row align-items-center !my-10 !pb-10 pt-5">
          <InViewTransition delay={0.25}>
            <div className="col my-5 pb-5 text-center">
              <ul className="breadcrumb justify-content-center font-weight-medium text-4-5 mt-8 flex gap-2">
                <li className="z-[1]">
                  <Link
                    className="text-color-primary text-decoration-none"
                    href="/"
                  >
                    {t('header.home')}
                  </Link>
                </li>
                <FaAngleRight className="text-color-primary z-[1] mt-0.5" />
                <li className="text-color-primary active z-[1]">
                  {t('evangelismForm.title')}
                </li>
              </ul>
              <h1 className="text-color-light font-weight-bold text-10">
                {t('evangelismForm.title')}
              </h1>
            </div>
          </InViewTransition>
        </div>

        <Animation />
      </section>

      <div className="custom-page-content z-index-2 max-w-6xl py-4">
        <div className="my-4 rounded-md bg-white !p-8 md:!p-12">
          <ContentEvangelizationForm />
        </div>
      </div>
    </div>
  )
}

export default EvangelismRequest
