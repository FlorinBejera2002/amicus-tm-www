import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// Can be imported from a shared config
const locales = ['en', 'ro']

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const messages: { [key: string]: () => Promise<{ default: any }> } = {
  en: () => import('@i18n/en.json'),
  ro: () => import('@i18n/ro.json')
}

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  return {
    messages: (await messages[locale]()).default
  }
})
