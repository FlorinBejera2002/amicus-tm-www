'use client'

import MailchimpSubscribe, {
    EmailFormFields,
    FormHooks
} from 'react-mailchimp-subscribe'
import { useState } from 'react'

import { FaTelegramPlane } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { MAILCHIMP_URL } from '@/utils'

export const Newsletter = () => {
  const t = useTranslations()
  const [email, setEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MailchimpSubscribe
        render={({ subscribe }: FormHooks<EmailFormFields>) => (
          <div className="shadow-lg max-w-sm w-full flex flex-col ">
            <h2 className="text-sm font-bold">
              {t('footer.subscribe_to_newsletter')}
            </h2>
            <div className="w-screen flex gap-2">
              <input
                className="text-xs p-2 border w-44 md:w-52 rounded z-10"
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.subscribe_placeholder')}
                type="email"
              />
              <button
                className="bg-accent text-xs text-black font-semibold py-2 px-3 rounded flex items-center gap-2 z-10"
                onClick={() => {
                  subscribe({ EMAIL: email })
                  setEmail('')
                  setIsOpen(true)
                }}
                type="submit"
              >
                {t('button.subscribe')}
                <FaTelegramPlane />
              </button>
            </div>
          </div>
        )}
        url={MAILCHIMP_URL}
      />

      <Dialog
        className="relative z-50"
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-accent p-12 rounded">
            <DialogTitle className="font-bold">
              {t('footer.subscribe_dialog_header')}
            </DialogTitle>
            <p>{t('footer.subscribe_dialog_paragraph')}</p>

            <div className="flex gap-4">
              <button
                className="bg-black text-xs text-[#F5B298] font-semibold py-2 px-3 rounded flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                {t('footer.subscribe_dialog_button')}
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
