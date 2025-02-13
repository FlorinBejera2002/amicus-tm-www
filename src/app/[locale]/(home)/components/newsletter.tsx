'use client'

import { useState } from 'react'
import MailchimpSubscribe, {
  type EmailFormFields,
  type FormHooks
} from 'react-mailchimp-subscribe'

import { MAILCHIMP_URL, cn } from '@/utils'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import { FaTelegramPlane } from 'react-icons/fa'

export const Newsletter = () => {
  const t = useTranslations()
  const [email, setEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (subscribe: (data: EmailFormFields) => void) => {
    // validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('invalid email')

      return
    }

    setError('')
    setEmail('')
    subscribe({ EMAIL: email })
    setIsOpen(true)
  }

  return (
    <>
      <MailchimpSubscribe
        render={({ subscribe }: FormHooks<EmailFormFields>) => (
          <div className="mt-4 md:flex w-full border-b border-[#313632] mx-auto max-w-[1480px] pb-4 ">
            <div className="w-full">
              <h2 className="text-base font-bold text-white lg:text-xl">
                {t('footer.subscribe_to_newsletter')}
              </h2>
              <p className="text-sm text-gray-500">
                {t('footer.subscribe_to_newsletter_desc')}
              </p>
            </div>

            <div className="flex w-screen gap-2 md:justify-end items-center">
              <input
                className={cn(
                  'z-10 w-40 h-10 rounded-md border bg-gray-5s0 p-2 text-xs placeholder:text-gray-500 md:w-52 lg:text-sm',
                  error && 'shadow-outline-red'
                )}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={error || t('footer.subscribe_placeholder')}
                type="email"
                value={email}
              />
              <button
                className="z-10 h-10 flex items-center gap-2 rounded bg-accent px-3 py-2 text-xs font-semibold text-black"
                onClick={() => handleSubmit(subscribe)}
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
