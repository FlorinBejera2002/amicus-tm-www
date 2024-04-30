'use client'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import React, { useState } from 'react'

import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

// Greseala: const email = event.target.email.value se initializaza doar o data pentru ca nu e  useState
// Sar putea ca nici useState sa nu mearga daca nu facem ceva
// Posibila solutie: sa pun event.target.email.value direct in handleSubmit si sa loghez email-ul ininte sa dau subscribe ca sa ma asigur ca are valoare

const ContentEvangelizationForm = () => {
  const t = useTranslations('form')
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  const MAILCHIMP_URL =
    'https://app.us22.list-manage.com/subscribe/post?u=41ac89857e074d884af936f25&amp;id=cc995c9835&amp;f_id=00c8c4e1f0'

  return (
    <MailchimpSubscribe
      render={({ subscribe }: any) => {
        function handleSubmit(event: any) {
          const email = event.target.email.value

          if (isChecked) {
            event.preventDefault()
            subscribe({ EMAIL: email })
            router.push('/')
          } else {
            event.preventDefault()
            router.push('/')
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
              <div className="flex mb-4">
                <div className=" flex gap-3 w-full   ">
                  <div className="relative z-0 w-full group">
                    <input
                      className="block px-0 p-1 w-full text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                      id="name"
                      name="name"
                      required={true}
                      type="name"
                    />
                    <label
                      className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="name"
                    >
                      {t('name')}
                    </label>
                  </div>

                  <div className="relative z-0 w-full group">
                    <input
                      className="block px-0 w-full p-1  text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                      id="email"
                      name="email"
                      required={true}
                      type="email"
                    />
                    <label
                      className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="email"
                    >
                      {t('email')}
                    </label>
                  </div>

                  <div className="relative z-0 w-full group">
                    <input
                      className="block px-0 w-full p-1 text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                      id="phone"
                      name="phone"
                      required={true}
                      type="phone"
                    />
                    <label
                      className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      htmlFor="phone"
                    >
                      {t('mobile')}
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative z-0 w-full group">
                <textarea
                  className="resize-none block px-0 w-full p-1 text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                  id="details"
                  name="det"
                  rows={1}
                />
                <label
                  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="details"
                >
                  {t('details')}
                </label>
              </div>
              <label className="flex gap-2 ">
                <input
                  checked={isChecked}
                  className="flex w-5 h-5"
                  onChange={handleCheckboxChange}
                  type="checkbox"
                />
                <span className="text-sm">{t('checkbox_text')}</span>
              </label>

              <div className="flex justify-center items-center">
                <div className="bg-[#e3ae04] rounded-md flex justify-center items-center py-1 w-44 hover:shadow-2xl hover:-translate-2 hover:scale-105 hover:bg-[#e3ae04] duration-700">
                  <button
                    className="text-black font-bold py-1 size-9 flex justify-center items-center"
                    type="submit"
                  >
                    {t('send')}
                  </button>
                </div>
              </div>
            </form>
            <div className=" relative mb-10 flex justify-center w-full">
              <div
                className="size-5 text-green-800 absolute hidden"
                id="success"
              >
                Your Message Successfully Sent!
              </div>
              <div
                className="size-5 text-green-800 absolute hidden"
                id="danger"
              >
                Feilds Can not be Empty!
              </div>
            </div>
          </div>
        )
      }}
      url={MAILCHIMP_URL}
    />
  )
}

export default ContentEvangelizationForm
