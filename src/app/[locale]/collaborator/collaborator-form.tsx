'use client'
import { cn } from '@/utils'
import { createClient } from '@supabase/supabase-js'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import InViewTransition from '../common/in-view-transition'

type SubmitMessage = {
  content: string
  type: 'error' | 'success'
}

export default function CollaboratorForm() {
  const [message, setMessage] = useState<SubmitMessage | undefined>(undefined)
  const t = useTranslations()
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

      setMessage({
        content: t('successful_submission'),
        type: 'success'
      })

      setTimeout(() => {
        event.target.reset()
        setMessage(undefined)
      }, 5000)
    } catch (error) {
      setMessage({
        content: 'A apărut o eroare la trimiterea formularului: ' + error,
        type: 'error'
      })
    }
  }

  return (
    <div>
      <InViewTransition delay={0.25}>
        <p className="text-gray-800 font-bold m-0">{t('collaborator.form')}</p>

        <form
          className="flex flex-col gap-3 md:gap-4 mt-4"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full gap-5 md:mb-4 md:grid-cols-2 ">
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
            <div className="group relative z-0 w-full">
              <input
                className="peer block w-full appearance-none border-b border-gray-500 bg-transparent p-1 px-0 text-sm text-gray-900 focus:border-yellow-500 focus:outline-none focus:ring-0"
                id="address"
                name="address"
                type="address"
              />
              <label
                className="absolute top-3 -z-10 origin-[0]  -translate-y-6 scale-75 transform text-sm text-black duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75  peer-focus:font-medium peer-focus:text-yellow-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                htmlFor="address"
              >
                {t('address')}
              </label>
            </div>
          </div>

          {message?.content && (
            <div
              className={cn(
                message.type === 'success' ? 'text-green-600' : 'text-red-500',
                '!mt-2 md:!mt-0'
              )}
            >
              {message.content}
            </div>
          )}

          <button
            className=" flex size-9 items-center justify-center self-start rounded-md bg-accent px-20 py-1 font-bold text-black disabled:pointer-events-none disabled:opacity-50 md:!mt-0 md:self-center"
            type="submit"
          >
            {t('collaborator.send')}
          </button>
        </form>
      </InViewTransition>
    </div>
  )
}
function uuid() {
  throw new Error('Function not implemented.')
}
