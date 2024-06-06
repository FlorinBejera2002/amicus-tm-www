// de aici
'use client'
import MailchimpSubscribe, {
  EmailFormFields,
  FormHooks
} from 'react-mailchimp-subscribe'
import { useState } from 'react'

import { FaTelegramPlane } from 'react-icons/fa'

export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const MAILCHIMP_URL =
    'https://ariseforchrist.us8.list-manage.com/subscribe/post?u=2e2f0dbc155ffea12f7b6621c&amp;id=a1fd3925be&amp;f_id=00a321e3f0'

  return (
    <MailchimpSubscribe
      render={({ subscribe }: FormHooks<EmailFormFields>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        return (
          <div className="shadow-lg max-w-sm w-full flex flex-col ">
            <h2 className=" text-base font-bold mr-10">
              Subscribe to our Newsletter
            </h2>
            <form className="flex gap-3">
              <input
                className="text-sm p-2 border border-gray-500 rounded "
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-[#e3ae04] text-black font-semibold py-2 px-3 rounded flex items-center gap-2"
                onClick={() => subscribe({ EMAIL: email })}
                type="submit"
              >
                Subscribe
                <FaTelegramPlane />
              </button>
            </form>
          </div>
        )
      }}
      url={MAILCHIMP_URL}
    />
  )
}
