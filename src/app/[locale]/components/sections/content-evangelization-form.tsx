import { useTranslations } from 'next-intl'

export default function ContentEvangelizationForm() {
  const t = useTranslations('form')

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
      </div>
    </div>
  )
}
