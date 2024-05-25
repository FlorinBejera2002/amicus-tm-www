'use client'

import { useEffect, useRef } from 'react'

import ContentEvangelizationForm from './content'

import { AiOutlineClose } from 'react-icons/ai'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

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

  useEffect(() => {
    const htmlElement = document.documentElement

    const handleOverflow = () => {
      if (modal) {
        htmlElement.style.overflow = 'hidden'
      } else {
        htmlElement.style.overflow = ''
      }
    }

    handleOverflow()

    // Clean up the effect when the component unmounts
    return () => {
      htmlElement.style.overflow = ''
    }
  }, [modal])

  return (
    <AnimatePresence>
      {modal && (
        <motion.dialog
          animate={{ opacity: 1 }}
          className="fixed left-0 top-[-95px] md:top-0 w-full h-full bg-black bg-opacity-50 z-[9999] my-24 md:my-0 p-4 backdrop-blur flex justify-center items-center"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-gradient-to-t relative bg-white rounded-md md:w-[50em] lg:w-[65em] flex justify-center items-center p-8 max-h-[600px] overflow-y-auto"
            ref={modalRef}
          >
            <Link
              className="flex justify-end absolute right-[24px] top-[24px] cursor-pointer"
              href={pathname}
            >
              <AiOutlineClose className="fill-black w-7 h-7" />
            </Link>
            <ContentEvangelizationForm />
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>
  )
}

export default Modal
