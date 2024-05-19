'use client'

import { useEffect, useRef } from 'react'

import ContentEvangelizationForm from './content-evangelization-form'

import { AiOutlineClose } from 'react-icons/ai'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function Modal() {
  const searchParams = useSearchParams()
  const modal = searchParams.get('ev-req-form') === 'open'
  const pathname = usePathname()
  const modalRef = useRef(null)
  const router = useRouter()

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !(modalRef.current as HTMLElement).contains(event.target as Node)
    ) {
      router.push('/')
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <>
      {modal && (
        <dialog className="md:fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 my-24 md:my-0 p-4 overflow-auto backdrop-blur flex justify-center items-center">
          <div
            className="bg-gradient-to-t relative bg-white rounded-md md:w-[50em] lg:w-[65em] mt-24 flex justify-center items-center"
            ref={modalRef}
          >
            <Link
              className="flex justify-end absolute right-12 top-12 cursor-pointer"
              href={pathname}
            >
              <AiOutlineClose className="fill-black w-7 h-7" />
            </Link>
            <ContentEvangelizationForm />
          </div>
        </dialog>
      )}
    </>
  )
}

export default Modal
