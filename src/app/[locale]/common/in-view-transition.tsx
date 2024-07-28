'use client'

import type { ReactNode } from 'react'

import { cn } from '@/utils'
import { motion } from 'framer-motion'

const InViewTransition = ({
  children,
  customClassname,
  damping = 75,
  delay = 0.5,
  duration = 0.5,
  inAndOutRepeat = true,
  scaleIn = 1,
  scaleOut = 1,
  xIn = 0,
  xOut = 0,
  yIn = 0,
  yOut = -100
}: {
  children: ReactNode
  customClassname?: string
  damping?: number
  delay?: number
  duration?: number
  inAndOutRepeat?: boolean
  scaleIn?: number
  scaleOut?: number
  xIn?: number
  xOut?: number
  yIn?: number
  yOut?: number
}) => {
  return (
    <motion.div
      className={cn(customClassname)}
      initial="hidden"
      transition={{
        damping: damping,
        delay: delay,
        duration: duration,
        type: 'spring'
      }}
      variants={{
        hidden: {
          opacity: 0,
          transform: `translateY(${yOut}px) translateX(${xOut}px) scale(${scaleOut})`
        },
        visible: {
          opacity: 1,
          transform: `translateY(${yIn}px) translateX(${xIn}px) scale(${scaleIn}`
        }
      }}
      viewport={{ once: inAndOutRepeat }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}

export default InViewTransition
