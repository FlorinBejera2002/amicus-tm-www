import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export default function Language() {
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations()

  const handleLocaleChange = () =>
    router.push(
      pathname.includes('/en')
        ? pathname.replace('/en', '/ro')
        : pathname.replace('/ro', '/en')
    )

  return (
    <div className="pl-4">
      <button
        className="font-semibold px-2 capitalize text-black btn btn-primary"
        onClick={handleLocaleChange}
      >
        {t('language.lg')}
      </button>
    </div>
  )
}
