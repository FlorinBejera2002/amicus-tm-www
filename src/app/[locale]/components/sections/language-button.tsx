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
          <Button
            className="px-3 capitalize text-white btn btn-primary"
            variant="bordered"
          >
            {t('language.lg_1')}
          </Button>
        </DropdownTrigger>
        <DropdownMenu className=" text-white">
          <DropdownItem onClick={handleLocaleChange}>
            {t('language.lg')}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
