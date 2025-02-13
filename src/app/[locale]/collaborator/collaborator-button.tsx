'use client'

import { useTranslations } from 'next-intl'
import { FaHandsHelping } from 'react-icons/fa'

export const CollaboratorButton = () => {
  const t = useTranslations()
  const handleMailToClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    window.location.href =
      'mailto:info@ariseforchrist.com?subject=Vreau%20să%20mă%20implic&body=Mă%20numesc%20...%20și%20vreau%20să%20mă%20implic%20în%20lucrare'
  }

  return (
    <button
      className="w-fit text-decoration-none flex gap-2 items-center justify-center self-start rounded-md bg-accent px-12 py-2.5 font-bold text-black disabled:pointer-events-none md:!mt-0 md:self-center"
      onClick={handleMailToClick}
    >
      {t('collaborator.send')}
      <FaHandsHelping />
    </button>
  )
}
