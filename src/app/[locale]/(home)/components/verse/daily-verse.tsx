import {
  devotionalTranslationImports,
  getDevotionalDayIndex,
  getDevotionalWeekIndex
} from '@/utils'
import { NextIntlClientProvider, useTranslations } from 'next-intl'
import Verse from './verse'

interface IProps {
  locale: string
}

export default async function DailyVerse(props: IProps) {
  const devotionalTranslations = (
    await devotionalTranslationImports[props.locale]()
  ).default
  const devotionalKey = `week-${getDevotionalWeekIndex()}_day-${getDevotionalDayIndex()}`

  return (
    <NextIntlClientProvider
      messages={devotionalTranslations}
      locale={props.locale}
    >
      <Verse devotionalKey={devotionalKey} locale={props.locale} />
    </NextIntlClientProvider>
  )
}
