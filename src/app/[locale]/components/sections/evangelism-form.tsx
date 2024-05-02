'use client'

import ContentEvangelizationForm from './content-evangelization-form'

import { AiOutlineClose } from 'react-icons/ai'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function Modal() {
  const searchParams = useSearchParams()
  const modal = searchParams.get('ev-req-form')
  const pathname = usePathname()

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center ">
          <div className="bg-gradient-to-t relative bg-white m-auto p-16 rounded-md w-[65em] h-[32em]">
            <Link href={pathname}>
              <button
                className="flex justify-end absolute right-10 top-10"
                type="button"
              >
                <AiOutlineClose className="fill-black w-7 h-7" />
              </button>
            </Link>
            <ContentEvangelizationForm />
          </div>
        </dialog>
      )}
    </>
  )
}

export default Modal
