'use client'

import { ReactNode } from 'react'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        stiffness: 50,
        type: 'spring'
      }}
    >
      {children}
    </motion.div>
  )
}
