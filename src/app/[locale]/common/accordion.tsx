'use client'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

import { cn } from '@/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa6'

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
          'flex cursor-pointer flex-col rounded-lg bg-white pl-0 md:pl-6',
          customClassname
        )}
        initial={false}
        onClick={() => setExpanded(isOpen ? -1 : idx)}
      >
        <div className="flex items-center gap-2">
          {!isOpen ? (
            <FaArrowRight className="size-3" />
          ) : (
            <FaArrowDown className="size-3" />
          )}
          <div className="text-md mb-0 select-none font-semibold text-slate-900 md:text-lg">
            {title}
          </div>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              animate="open"
              className=" pl-5 text-sm leading-6 text-slate-600"
              exit="collapsed"
              initial="collapsed"
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              variants={{
                collapsed: { height: 0, opacity: 0 },
                open: { height: 'auto', opacity: 1 }
              }}
            >
              <div className="!text-md mt-2 pb-0">{description}</div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Accordion
