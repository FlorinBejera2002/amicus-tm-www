'use client'

import { Dispatch, ReactNode, SetStateAction } from 'react'

import { FaArrowDown, FaArrowRight } from 'react-icons/fa6'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/utils'

interface IAccordionProps {
  customClassname?: string
  description: ReactNode | string
  expanded: number
  idx: number
  setExpanded: Dispatch<SetStateAction<number>>
  title: ReactNode | string
}

const Accordion = ({
  customClassname,
  description,
  expanded,
  idx,
  setExpanded,
  title
}: IAccordionProps) => {
  const isOpen = idx === expanded

  return (
    <>
      <motion.div
        className={cn(
          'rounded-lg cursor-pointer flex flex-col bg-white pl-0 md:pl-6',
          customClassname
        )}
        initial={false}
        onClick={() => setExpanded(isOpen ? -1 : idx)}
      >
        <div className="flex gap-2 items-center">
          {!isOpen ? (
            <FaArrowRight className="size-3" />
          ) : (
            <FaArrowDown className="size-3" />
          )}
          <div className="text-slate-900 font-semibold select-none mb-0 text-lg">
            {title}
          </div>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              animate="open"
              className="text-sm leading-6 text-slate-600 pl-5"
              exit="collapsed"
              initial="collapsed"
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              variants={{
                collapsed: { height: 0, opacity: 0 },
                open: { height: 'auto', opacity: 1 }
              }}
            >
              <div className="mt-2 pb-0 !text-md">{description}</div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Accordion
