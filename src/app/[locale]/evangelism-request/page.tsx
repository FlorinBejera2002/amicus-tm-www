import ContentEvangelizationForm from './components/ev-form'
import InViewTransition from '../common/in-view-transition'
import CustomHeroBg from '../common/custom-hero-bg'
import Animation from '../common/animation'

import { FaAngleRight } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arise for Christ | Evangelization'
}

const EvangelismRequest = () => {
  const t = useTranslations()

  return (
    <div className="main flex flex-col items-center">
      <section className="page-header p-relative bg-quaternary m-0 !mt-4 overflow-hidden border-0 p-0 w-screen">
        <InViewTransition
          damping={100}
          delay={0.75}
          duration={1}
          yIn={0}
          yOut={0}
        >
          <CustomHeroBg />
        </InViewTransition>

        <div className="row align-items-center !my-10 !pb-10 pt-5">
          <InViewTransition delay={0.25}>
            <div className="col my-5 pb-5 text-center">
              <ul className="breadcrumb flex gap-2 justify-content-center font-weight-medium text-4-5 mt-8">
                <li className="z-[1]">
                  <Link
                    className="text-color-primary text-decoration-none"
                    href="/"
                  >
                    {t('header.home')}
                  </Link>
                </li>
                <FaAngleRight className="text-color-primary mt-0.5 z-[1]" />
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

      <div className="custom-page-content max-w-6xl z-index-2 py-4">
        <div className="rounded-md bg-white !p-8 md:!p-12 my-2">
          <ContentEvangelizationForm />
        </div>
      </div>
    </div>
  )
}

export default EvangelismRequest
