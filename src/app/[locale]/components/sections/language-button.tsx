import React from 'react'

import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'

export default function App() {
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
      <Dropdown>
        <DropdownTrigger>
          <Button className="font-semibold px-2 capitalize text-black btn btn-primary">
            {t('language.lg_1')}
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem
            className="px-2 capitalize text-black btn btn-primary"
            onClick={handleLocaleChange}
          >
            {t('language.lg')}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
