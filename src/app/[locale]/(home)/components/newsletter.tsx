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
          <div className="flex w-full max-w-sm flex-col shadow-lg ">
            <h2 className="text-sm font-bold">
              {t('footer.subscribe_to_newsletter')}
            </h2>
            <div className="flex w-screen gap-2">
              <input
                className="z-10 w-44 rounded border p-2 text-xs md:w-52"
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.subscribe_placeholder')}
                type="email"
              />
              <button
                className="z-10 flex items-center gap-2 rounded bg-accent px-3 py-2 text-xs font-semibold text-black"
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
          <DialogPanel className="max-w-lg space-y-4 rounded bg-accent p-12">
            <DialogTitle className="font-bold">
              {t('footer.subscribe_dialog_header')}
            </DialogTitle>
            <p>{t('footer.subscribe_dialog_paragraph')}</p>

            <div className="flex gap-4">
              <button
                className="flex items-center gap-2 rounded bg-black px-3 py-2 text-xs font-semibold text-[#F5B298]"
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
