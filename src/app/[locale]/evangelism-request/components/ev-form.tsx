'use client'

import MailchimpSubscribe, {
  EmailFormFields,
  FormHooks
} from 'react-mailchimp-subscribe'
import React, { useState } from 'react'

import InViewTransition from '../../common/in-view-transition'

import {
  PiNumberCircleOneFill,
  PiNumberCircleThreeFill,
  PiNumberCircleTwoFill
} from 'react-icons/pi'
import { useTranslations } from 'next-intl'
import { cn } from '@/utils'

const CMS_URL = 'https://cms-backend.ariseforchrist.com'
const MAILCHIMP_URL =
  'https://app.us22.list-manage.com/subscribe/post?u=41ac89857e074d884af936f25&amp;id=cc995c9835&amp;f_id=00c8c4e1f0'

type SubmitMessage = {
  content: string
  type: 'error' | 'success'
}

const ContentEvangelizationForm = () => {
  const t = useTranslations('form')
  const [isChecked, setIsChecked] = useState(false)

  const [message, setMessage] = useState<SubmitMessage | undefined>(undefined)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <MailchimpSubscribe
      render={({ subscribe }: FormHooks<EmailFormFields>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleSubmit = async (event: any) => {
          event.preventDefault()
          const name = event.target.name.value
          const email = event.target.email.value
          const phone = event.target.phone.value
          const details = event.target.details.value

          // submit
          try {
            await fetch(CMS_URL + '/evangelism-requests', {
              body: JSON.stringify({
                applicantEmail: email,
                applicantMobile: phone,
                applicantName: name,
                category: 'EvangelismRequest',
                otherdetails: details,
                status: 'InProgress'
              }),
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'POST'
            })

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
            <div className="flex flex-col md:items-center !gap-0 md:!gap-4">
              <div className="flex !gap-4 sm:!gap-2 flex-wrap">
                <InViewTransition
                  customClassname="text-md md:text-lg flex flex-row md:flex-col gap-2 flex-1 min-w-[200px] items-start h-full"
                  delay={0.3}
                >
                  <PiNumberCircleOneFill className="w-full h-full max-w-[50px] self-start" />
                  {t('step1')}
                </InViewTransition>
                <InViewTransition
                  customClassname="text-md md:text-lg flex flex-row md:flex-col gap-2 flex-1 min-w-[200px] items-start h-full"
                  delay={0.4}
                >
                  <PiNumberCircleTwoFill className="w-full h-full max-w-[50px] self-start" />
                  {t('step2')}
                </InViewTransition>
                <InViewTransition
                  customClassname="text-md md:text-lg flex flex-row md:flex-col gap-2 flex-1 min-w-[200px] items-start h-full"
                  delay={0.5}
                >
                  <PiNumberCircleThreeFill className="w-full h-full max-w-[50px] self-start" />
                  {t('step3')}
                </InViewTransition>
              </div>
            </div>

            <InViewTransition customClassname="mt-4" delay={0.75}>
              <form
                className="pt-4 flex flex-col md:gap-4"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-3 gap-5 w-full md:mb-4 ">
                  <div className="relative z-0 w-full group">
                    <input
                      className="block px-0 p-1 w-full text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                      id="name"
                      name="name"
                      required={true}
                      type="name"
                    />
                    <label
                      className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="name"
                    >
                      {t('name')}
                    </label>
                  </div>

                  <div className="relative z-0 w-full group">
                    <input
                      className="block px-0 w-full p-1  text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                      id="email"
                      name="email"
                      required={true}
                      type="email"
                    />
                    <label
                      className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="email"
                    >
                      {t('email')}
                    </label>
                  </div>

                  <div className="relative z-0 w-full group">
                    <input
                      className="block px-0 w-full p-1 text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                      id="phone"
                      name="phone"
                      type="phone"
                    />
                    <label
                      className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="phone"
                    >
                      {t('mobile')}
                    </label>
                  </div>
                </div>

                <div className="relative z-0 w-full group mt-10 md:mt-2">
                  <textarea
                    className="resize-none block px-0 w-full p-1 text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                    id="details"
                    name="details"
                    rows={1}
                  />
                  <label
                    className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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

                <div className="flex gap-2 pt-6 items-start">
                  <input
                    checked={isChecked}
                    className="flex w-5 h-5 cursor-pointer"
                    id="consent"
                    onChange={handleCheckboxChange}
                    type="checkbox"
                  />
                  <label className="text-sm cursor-pointer" htmlFor="consent">
                    {t('checkbox_text')}
                  </label>
                </div>

                <button
                  className="bg-[#e3ae04] rounded-md px-20 text-black font-bold py-1 size-9 flex justify-center items-center disabled:opacity-50 disabled:pointer-events-none self-start md:self-center !mt-4 md:!mt-0"
                  disabled={!isChecked}
                  type="submit"
                >
                  {t('send')}
                </button>
              </form>
            </InViewTransition>
          </div>
        )
      }}
      url={MAILCHIMP_URL}
    />
  )
}

export default ContentEvangelizationForm
