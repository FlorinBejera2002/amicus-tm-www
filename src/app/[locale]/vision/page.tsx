import CustomHeroBg from '../components/sections/custom-hero-bg'

import { useTranslations } from 'next-intl'

export default function Vision() {
  const t = useTranslations('hero')

  return (
    <div className="main" role="main">
      <section
        className="p-relative border-0 bg-quaternary overflow-hidden px-2"
        id="home"
      >
        <div className="custom-hero-heading text-white">
          <strong>{t('title-hero')}</strong>
        </div>
        <CustomHeroBg />
        <div className="container p-relative z-index-3">
          <div className="row min-vh-100 align-items-center"></div>
        </div>
      </section>
    </div>
  )
}
