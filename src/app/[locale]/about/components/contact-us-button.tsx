'use client'

import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ContactUsBtn = () => {
  const t = useTranslations()
  const pathname = usePathname()
  const language = pathname.split('/')[1]

  return (
    <InViewTransition delay={1}>
      <Link
        className="bg-[#e3ae04] p-4 py-2 rounded-md flex items-center gap-2 !no-underline hover:!no-underline text-black"
        href={`/${language}/evangelism-request`}
      >
        {t('button.contact_us')}
      </Link>
    </InViewTransition>
  )
}

export default ContactUsBtn
