import { useCallback, useEffect, useState } from 'react'

import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/utils'

const spring = {
  damping: 30,
  stiffness: 700,
  type: 'spring'
}

type Language = 'en' | 'ro'

export default function ChangeLanguage() {
  const pathname = usePathname()
  const [language, setLanguage] = useState(pathname.split('/')[1] as Language)
  const t = useTranslations()

  const router = useRouter()

  const handleLocaleChange = useCallback(() => {
    if (language === 'en') {
      router.push(pathname.replace('/ro', '/en'))

      return
    }
    router.push(pathname.replace('/en', '/ro'))
  }, [language, pathname, router])

  const toggleSwitch = () => {
    setLanguage((prev) => {
      if (prev === 'en') {
        return 'ro'
      }

      return 'en'
    })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLocaleChange()
    }, 150)

    return () => clearTimeout(timeout)
  }, [handleLocaleChange, language])

  return (
    <button
      className={cn(
        'flex cursor-pointer p-[10px] rounded-full h-[40px] w-[75px] min-w-[75px] bg-[#e3ae04] items-center relative',
        language === 'en' ? 'justify-end' : ''
      )}
      onClick={toggleSwitch}
    >
      <motion.div
        className=" bg-white rounded-full -ml-1 -mr-1 size-8"
        layout={true}
        transition={spring}
      />

      <motion.div
        className={cn(
          'absolute font-semibold text-sm z-2 left-[12px]',
          language === 'en' ? 'text-white' : 'text-black'
        )}
      >
        {t('language.ro')}
      </motion.div>
      <motion.div
        className={cn(
          'absolute font-semibold text-sm z-2 right-[12px] mr-[1px]',
          language === 'ro' ? 'text-white' : 'text-black'
        )}
      >
        {t('language.en')}
      </motion.div>
    </button>
  )
}
