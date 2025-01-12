'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const CardCollaborator = () => {
  const t = useTranslations('')
  const pathname = usePathname()

  const language = pathname.split('/')[1]

  return (
    <div className='flex flex-col gap-3'>
      <Link
        href={`${language}/collaborator`}
        className="flex flex-col w-fit items-center gap-4 rounded-md bg-accent px-3 py-2.5 text-xs font-semibold text-black no-underline hover:!no-underline"
      >
        <div className="flex gap-2 justify-between w-full items-center">
          <p className="text-black text-bold m-0">
            {t('collaborator.involve')}
          </p>
        </div>
      </Link>

      <Link
        className="mr-auto flex rounded-md bg-accent px-3 py-2.5 text-xs font-semibold text-black no-underline hover:!no-underline lg:hidden w-auto"
        href={`/${language}/evangelism-request`}
        type="button"
      >
        {t('form.title')}
      </Link>
    </div>
  )
}
