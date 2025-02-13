import {
  devotionalTranslationImports,
  getDevotionalDayIndex,
  getDevotionalWeekIndex
} from '@/utils'
import { NextIntlClientProvider } from 'next-intl'
import Devotional from './devotional'

interface IProps {
  locale: string
}

export default async function DailyDevotional(props: IProps) {
  const devotionalTranslations = (
    await devotionalTranslationImports[props.locale]()
  ).default
  const devotionalKey = `week-${getDevotionalWeekIndex()}_day-${getDevotionalDayIndex()}`

  return (
    <NextIntlClientProvider
      messages={devotionalTranslations}
      locale={props.locale}
    >
      <Devotional devotionalKey={devotionalKey} locale={props.locale} />
    </NextIntlClientProvider>
  )
}
