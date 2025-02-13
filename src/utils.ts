import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const MAILCHIMP_URL =
  'https://ariseforchrist.us8.list-manage.com/subscribe/post?u=2e2f0dbc155ffea12f7b6621c&amp;id=a1fd3925be&amp;f_id=00a321e3f0'

export const CMS_URL = 'https://cms-backend.ariseforchrist.com'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getDevotionalDayIndex = (): number => {
  let dayIndex = new Date().getDay()
  if (dayIndex === 0 || dayIndex === 6) {
    dayIndex = 5
  }

  return dayIndex
}

export const getDevotionalWeekIndex = (): number => {
  const startDate = new Date(new Date().getFullYear(), 0, 1)
  const today = new Date()

  const firstMonday = new Date(
    startDate.setDate(startDate.getDate() - startDate.getDay() + 1)
  )

  const diffInTime = today.getTime() - firstMonday.getTime()
  const dayOfYear = Math.floor(diffInTime / (1000 * 60 * 60 * 24))

  return Math.ceil((dayOfYear + 1) / 7)
}

export const devotionalTranslationImports: {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: () => Promise<{ default: any }>
} = {
  en: () => import('@i18n/devotional.en.json'),
  ro: () => import('@i18n/devotional.ro.json')
}
