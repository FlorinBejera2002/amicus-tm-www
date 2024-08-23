'use client'

import type React from 'react'
import { useState } from 'react'
import MailchimpSubscribe, {
  type EmailFormFields,
  type FormHooks
} from 'react-mailchimp-subscribe'

import InViewTransition from '../../common/in-view-transition'

import { MAILCHIMP_URL, cn } from '@/utils'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { createClient } from '@supabase/supabase-js'
import { useTranslations } from 'next-intl'
import { IoLink } from 'react-icons/io5'
import { MdOutlineContentCopy } from 'react-icons/md'
import {
  PiNumberCircleOneFill,
  PiNumberCircleThreeFill,
  PiNumberCircleTwoFill
} from 'react-icons/pi'
import { v4 as uuid } from 'uuid'

type SubmitMessage = {
  content: string
  type: 'error' | 'success'
}

const ContentEvangelizationForm = () => {
  const t = useTranslations('form')
  const [isChecked, setIsChecked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showCopyLabel, setShowCopyLabel] = useState(false)
  const [message, setMessage] = useState<SubmitMessage | undefined>(undefined)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  const code = `
  <a href="https://www.ariseforchrist.com/en/evangelism-request" target="_blank">
    <button style="background-color: black; color:#F5B298; font-weight: 600; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
        ${t('ev_embed_code_button_label')}
    </button>
  </a>
`

  return (
    <MailchimpSubscribe
      render={({ subscribe }: FormHooks<EmailFormFields>) => {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const handleSubmit = async (event: any) => {
          event.preventDefault()
          const name = event.target.name.value
          const email = event.target.email.value
          const phone = event.target.phone.value
          const details = event.target.details.value

          // submit
          try {
            // supabase
            const supabaseUrl = process.env.SUPABASE_URL as string
            const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string
            const supabase = createClient(supabaseUrl, supabaseAnonKey)

            const evReqId = uuid()
            const personRequestingId = uuid()

            const { error: requesterError } = await supabase
              .from('requesters')
              .insert({
                details: details || '',
                email: email || '',
                id: personRequestingId,
                name: name || '',
                phone: phone || ''
              })

            if (requesterError) {
              throw new Error(requesterError.message)
            }

            const { error: reqError } = await supabase
              .from('evangelism_requests')
              .insert({
                category: 'evangelism',
                id: evReqId,
                person_requesting_id: personRequestingId,
                status: 'received'
              })

            if (reqError) {
              throw new Error(reqError.message)
            }

            if (isChecked) {
              await subscribe({ EMAIL: email })
            }

            setMessage({
              content: t('successful_submission'),
              type: 'success'
            })

            setTimeout(() => {
              event.target.reset()
              setMessage(undefined)
              setIsChecked(false)
            }, 5000)
          } catch (error) {
            setMessage({
              content: 'A apărut o eroare la trimiterea formularului: ' + error,
              type: 'error'
            })
          }
        }

        return (
          <div className="flex flex-col">
            <div className="flex flex-col !gap-0 md:items-center md:!gap-4">
              <div className="flex flex-wrap !gap-4 sm:!gap-2">
                <InViewTransition
                  customClassname="text-md md:text-lg flex flex-row md:flex-col gap-2 flex-1 min-w-[200px] items-start h-full"
                  delay={0.3}
                >
                  <PiNumberCircleOneFill className="h-full w-full max-w-[50px] self-start" />
                  {t('step1')}
                </InViewTransition>
                <InViewTransition
                  customClassname="text-md md:text-lg flex flex-row md:flex-col gap-2 flex-1 min-w-[200px] items-start h-full"
                  delay={0.4}
                >
                  <PiNumberCircleTwoFill className="h-full w-full max-w-[50px] self-start" />
                  {t('step2')}
                </InViewTransition>
                <InViewTransition
                  customClassname="text-md md:text-lg flex flex-row md:flex-col gap-2 flex-1 min-w-[200px] items-start h-full"
                  delay={0.5}
                >
                  <PiNumberCircleThreeFill className="h-full w-full max-w-[50px] self-start" />
                  {t('step3')}
                </InViewTransition>
              </div>
            </div>

            <InViewTransition customClassname="mt-4" delay={0.25}>
              <form
                className="flex flex-col pt-4 md:gap-4"
                onSubmit={handleSubmit}
              >
                <div className="grid w-full gap-5 md:mb-4 md:grid-cols-3 ">
                  <div className="group relative z-0 w-full">
                    <input
                      className="peer block w-full appearance-none border-b border-gray-500 bg-transparent p-1 px-0 text-sm text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-0"
                      id="name"
                      name="name"
                      required={true}
                      type="name"
                    />
                    <label
                      className="absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:font-medium peer-focus:text-yellow-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                      htmlFor="name"
                    >
                      {t('name')}
                    </label>
                  </div>

                  <div className="group relative z-0 w-full">
                    <input
                      className="peer block w-full appearance-none  border-b border-gray-500 bg-transparent p-1 px-0 text-sm text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-0"
                      id="email"
                      name="email"
                      required={true}
                      type="email"
                    />
                    <label
                      className="absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:font-medium peer-focus:text-yellow-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                      htmlFor="email"
                    >
                      {t('email')}
                    </label>
                  </div>

                  <div className="group relative z-0 w-full">
                    <input
                      className="peer block w-full appearance-none border-b border-gray-500 bg-transparent p-1 px-0 text-sm text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-0"
                      id="phone"
                      name="phone"
                      type="phone"
                    />
                    <label
                      className="absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:font-medium peer-focus:text-yellow-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                      htmlFor="phone"
                    >
                      {t('mobile')}
                    </label>
                  </div>
                </div>

                <div className="group relative z-0 mt-10 w-full md:mt-2">
                  <textarea
                    className="peer block w-full resize-none appearance-none border-b border-gray-500 bg-transparent p-1 px-0 text-sm text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-0"
                    id="details"
                    name="details"
                    rows={1}
                  />
                  <label
                    className="absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:font-medium peer-focus:text-yellow-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                    htmlFor="details"
                  >
                    {t('details')}
                  </label>
                </div>

                {message?.content && (
                  <div
                    className={cn(
                      message.type === 'success'
                        ? 'text-green-600'
                        : 'text-red-500',
                      '!mt-2 md:!mt-0'
                    )}
                  >
                    {message.content}
                  </div>
                )}

                <div className="flex items-start gap-2 pt-6">
                  <input
                    checked={isChecked}
                    className="flex h-5 w-5 cursor-pointer"
                    id="consent"
                    onChange={handleCheckboxChange}
                    type="checkbox"
                  />
                  <label className="cursor-pointer text-sm" htmlFor="consent">
                    {t('checkbox_text')}
                  </label>
                </div>

                <button
                  className="mt-4 flex size-9 items-center justify-center self-start rounded-md bg-accent px-20 py-1 font-bold text-black disabled:pointer-events-none disabled:opacity-50 md:!mt-0 md:self-center"
                  type="submit"
                  disabled={!isChecked}
                >
                  {t('send')}
                </button>
              </form>

              <div
                className="mt-4 flex items-center justify-end"
                onClick={() => {
                  setIsOpen(true)
                }}
              >
                <IoLink color="#e3ae04" />
                <label className="flex cursor-pointer justify-end pl-2 text-sm font-bold text-accent hover:text-accent">
                  {t('ev_embed')}
                </label>
              </div>
            </InViewTransition>

            <Dialog
              className="relative z-50"
              onClose={() => {
                setShowCopyLabel(false)
                setIsOpen(false)
              }}
              open={isOpen}
            >
              <div className="fixed inset-0 flex items-center justify-center p-4 mt-20">
                <DialogPanel className="w-full max-w-lg overflow-y-auto space-y-4 rounded bg-accent p-3 md:p-6">
                  <DialogTitle className="font-bold text-center text-lg md:text-xl">
                    {t('ev_embed')}
                  </DialogTitle>
                  <p className="text-sm text-center">
                    {t('ev_embed_description')}
                  </p>

                  <p className="text-sm">
                    {t('ev_embed_code_label')}{' '}
                    {showCopyLabel && (
                      <span className="font-bold">copiat!</span>
                    )}
                  </p>
                  <div className="relative overflow-hidden rounded bg-white text-xs p-2">
                    <div className="absolute right-0 top-0 p-1">
                      <MdOutlineContentCopy
                        className="cursor-pointer"
                        onClick={() => {
                          setShowCopyLabel(true)
                          navigator.clipboard.writeText(code)
                        }}
                      />
                    </div>
                    {code}
                  </div>

                  <p className="text-sm text-center mt-2">
                    {t('ev_embed_example_label')}
                  </p>
                  <div className="flex justify-center rounded border-2 border-dashed border-black p-3">
                    <button className="flex items-center gap-2 rounded bg-black px-3 py-2 text-xs font-semibold text-[#F5B298]">
                      {t('ev_embed_example_button')} <br />{' '}
                      {t('ev_embed_example_button2')}
                    </button>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      className="flex items-center gap-2 rounded bg-black px-3 py-2 text-xs font-semibold text-[#F5B298]"
                      onClick={() => {
                        setShowCopyLabel(false)
                        setIsOpen(false)
                      }}
                    >
                      {t('ev_embed_close_button')}
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          </div>
        )
      }}
      url={MAILCHIMP_URL}
    />
  )
}

export default ContentEvangelizationForm
