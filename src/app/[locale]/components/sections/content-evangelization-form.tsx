import { useTranslations } from 'next-intl'

export default function ContentEvangelizationForm() {
  const t = useTranslations('form')

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl ">{t('title')}</h1>
        <p className="text-sm">{t('subtitle')}</p>
        <p className="text-sm">{t('text')}</p>
        <form className="pt-4 flex flex-col gap-4">
          <div className="flex">
            <div className=" flex gap-3 w-full   ">
              <div className="relative z-0 w-full group">
                <input
                  className="block px-0 p-1 w-full text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                  id="floating_email"
                  name="floating_email"
                  placeholder=" "
                  required={true}
                  type="email"
                />
                <label
                  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="floating_email"
                >
                  {t('name')}
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input
                  className="block px-0 w-full p-1  text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                  id="floating_email"
                  name="floating_email"
                  placeholder=" "
                  required={true}
                  type="email"
                />
                <label
                  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="floating_email"
                >
                  {t('email')}
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input
                  className="block px-0 w-full p-1 text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
                  id="floating_email"
                  name="floating_email"
                  placeholder=" "
                  required={true}
                  type="email"
                />
                <label
                  className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  htmlFor="floating_email"
                >
                  {t('mobile')}
                </label>
              </div>
            </div>
          </div>

          <div className="relative z-0 w-full group">
            <textarea
              className="resize-none block px-0 w-full p-1 text-sm text-gray-900 bg-transparent border-b border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              id="floating_email"
              name="det"
              placeholder=" "
              rows={2}
            />
            <label
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              htmlFor="floating_email"
            >
              {t('details')}
            </label>
          </div>

          <div className="flex justify-center items-center">
            <div className="bg-[#e3ae04] rounded-md flex justify-center items-center py-1 my-4 w-44 hover:shadow-2xl hover:-translate-2 hover:scale-105 hover:bg-[#e3ae04] duration-700">
              <button
                className="text-black font-bold py-1 size-9 flex justify-center items-center"
                type="submit"
              >
                {t('send')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
