'use client'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import React, { useState } from 'react'

import { stringify } from 'querystring'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
const MAILCHIMP_URL =
  'https://app.us22.list-manage.com/subscribe/post?u=41ac89857e074d884af936f25&amp;id=cc995c9835&amp;f_id=00c8c4e1f0'

const ContentEvangelizationForm = () => {
  const t = useTranslations('form')
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()
  const [successMessage, setSuccessMessage] = useState(stringify)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <MailchimpSubscribe
      render={({ subscribe }: any) => {
        const handleSubmit = async (event: any) => {
          event.preventDefault()
          const email = event.target.email.value

          try {
            if (isChecked) {
              await subscribe({ EMAIL: email })
              setSuccessMessage(t('successful_submission'))
              setTimeout(() => {
                router.push('/')
              }, 3000)
            } else {
              router.push('/')
            }
          } catch (error) {
            console.error(
              'A apărut o eroare la trimiterea formularului:',
              error
            )
          }
        }

        return (
          <div>
            <div className="flex flex-col items-center">
              <h1 className="text-xl pb-4">{t('title')}</h1>
              <p className="text-sm">{t('subtitle')}</p>
              <p className="text-sm">{t('text')}</p>
            </div>
            <form className="pt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className=" flex gap-3 w-full mb-4 ">
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

              <div className="relative z-0 w-full group">
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
              <div className="flex gap-2">
                <input
                  checked={isChecked}
                  className="flex w-5 h-5"
                  id="consent"
                  onChange={handleCheckboxChange}
                  type="checkbox"
                />
                <label className="text-sm" htmlFor="consent">
                  {t('checkbox_text')}
                </label>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#e3ae04] rounded-md px-20 hover:shadow-2xl hover:-translate-2 hover:scale-105 hover:bg-[#e3ae04] duration-700 text-black font-bold py-1 size-9 flex justify-center items-center"
                  type="submit"
                >
                  {t('send')}
                </button>
              </div>
            </form>
            {successMessage && (
              <div className="success-message p-5 absolute flex justify-center items-center text-green-900 h-24 rounded-xl bottom-5 right-5">
                {successMessage}
              </div>
            )}
          </div>
        )
      }}
      url={MAILCHIMP_URL}
    />
  )
}

export default ContentEvangelizationForm
