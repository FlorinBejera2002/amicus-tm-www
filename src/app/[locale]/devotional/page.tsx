import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Animation from '../common/animation'
import CustomHeroBg from '../common/custom-hero-bg'
import InViewTransition from '../common/in-view-transition'
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
  const t = useTranslations()

  return (
    <div className="main flex flex-col items-center bg-white" role="main">
      <section className="page-header p-relative bg-quaternary m-0 w-screen overflow-hidden border-0 p-0">
        <InViewTransition
          damping={100}
          delay={0.25}
          duration={0.5}
          yIn={0}
          yOut={0}
        >
          <CustomHeroBg />
        </InViewTransition>
        <div className="row align-items-center my-5 pb-4 pt-5">
          <div className="col my-5 pb-5 text-center">
            <InViewTransition delay={0.25}>
              <div className="py-4">
                <ul className="breadcrumb justify-content-center font-weight-medium text-4-5 mb-2 flex gap-2">
                  <li className="z-[1]">
                    <a
                      className="text-color-primary text-decoration-none"
                      href="/"
                    >
                      {t('header.home')}
                    </a>
                  </li>
                  <li className="text-color-primary active z-[1]">
                    {t('header.devotional')}
                  </li>
                </ul>
                <h1 className="text-color-light font-weight-bold text-10">
                  {t('header.devotional')}
                </h1>
              </div>
            </InViewTransition>
          </div>
        </div>
        <Animation />
      </section>

      <div className="custom-page-content p-relative z-index-2 text-base flex w-full justify-center ">
        <div className="mx-w-7xl rounded-md shadow-xl shadow-black relative">
          <DevotionalFetcher />
        </div>
      </div>
    </div>
  )
}
export default DevotionalPage
