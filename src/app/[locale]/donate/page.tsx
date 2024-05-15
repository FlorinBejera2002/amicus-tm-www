import CustomHeroBg from '../components/sections/custom-hero-bg'

import { useTranslations } from 'next-intl'

export default function Donate() {
  const t = useTranslations('hero')

  return (
    <div className="main" role="main">
      <section
        className="p-relative border-0 bg-quaternary overflow-hidden px-2"
        id="home"
      >
        <div className="font-bold custom-hero-heading text-white">
          {t('title-hero')}
        </div>
        <CustomHeroBg />
      </section>
    </div>
  )
}
