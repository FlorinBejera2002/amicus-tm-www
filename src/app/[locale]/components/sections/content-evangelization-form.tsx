'use client'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import React, { useState } from 'react'

import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/utils'

import horizontalLogo from '../../../../../public/logo_horizontal_black.png'

const MAILCHIMP_URL =
  'https://app.us22.list-manage.com/subscribe/post?u=41ac89857e074d884af936f25&amp;id=cc995c9835&amp;f_id=00c8c4e1f0'

type SubmitMessage = {
  content: string
  type: 'error' | 'success'
}

const ContentEvangelizationForm = () => {
  const t = useTranslations('form')
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()
  const [message, setMessage] = useState<SubmitMessage | undefined>(undefined)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <MailchimpSubscribe
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render={({ subscribe }: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleSubmit = async (event: any) => {
          event.preventDefault()
          const email = event.target.email.value

          try {
            if (isChecked) {
              await subscribe({ EMAIL: email })
              setMessage({
                content: t('successful_submission'),
                type: 'success'
              })
              setTimeout(() => {
                router.push('/')
              }, 3000)
            }
          } catch (error) {
            setMessage({
              content: 'A apărut o eroare la trimiterea formularului: ' + error,
              type: 'error'
            })
          }
        }

        return (
          <div className="m-2 md:p-5 lg:p-10">
            <Image
              alt="arise for christ logo"
              className="absolute left-12 top-12 hidden md:flex"
              height={40}
              src={horizontalLogo}
              width={140}
            />
            <div className="flex flex-col md:items-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl md:pb-4 pt-3">
                {t('title')}
              </h1>
              <div className="grid md:grid-cols-3 md:gap-5">
                <p className="text-xs md:text-base flex flex-col gap-1">
                  <PiNumberCircleOneFill className="w-10 h-10 ml-5" />
                  {t('step1')}
                </p>
                <p className="text-xs md:text-base flex flex-col gap-1">
                  <PiNumberCircleTwoFill className="w-10 h-10 ml-5" />
                  {t('step2')}
                </p>
                <p className="text-xs md:text-base flex flex-col gap-1">
                  <PiNumberCircleThreeFill className="w-10 h-10 ml-5" />
                  {t('step3')}
                </p>
              </div>
            </div>
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
                    required={true}
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
                  name="det"
                  rows={1}
                />
                <label
                  className="peer-focus:font-medium absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="details"
                >
                  {t('details')}
                </label>
              </div>
              <div className="flex gap-2 pt-3">
                <input
                  checked={isChecked}
                  className="flex w-5 h-5"
                  id="consent"
                  onChange={handleCheckboxChange}
                  type="checkbox"
                />
                <label className="text-xs md:sm" htmlFor="consent">
                  {t('checkbox_text')}
                </label>
              </div>

              {message?.content && (
                <div
                  className={cn(
                    message.type === 'success'
                      ? 'text-green-600'
                      : 'text-red-500'
                  )}
                >
                  {message.content}
                </div>
              )}

              <div className="flex justify-center items-center pb-3 pt-3 md:py-0">
                <button
                  className="bg-[#e3ae04] rounded-md px-20 hover:shadow-2xl hover:-translate-2 hover:scale-105 hover:bg-[#e3ae04] duration-700 text-black font-bold py-1 size-9 flex justify-center items-center disabled:opacity-50 disabled:pointer-events-none"
                  disabled={!isChecked}
                  type="submit"
                >
                  {t('send')}
                </button>
              </div>
            </form>
          </div>
        )
      }}
      url={MAILCHIMP_URL}
    />
  )
}

export default ContentEvangelizationForm
