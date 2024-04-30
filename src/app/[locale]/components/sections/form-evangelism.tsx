'use client'
import React, { useState } from 'react'

import ContentEvangelizationForm from './content-evangelization-form'

import { useRouter } from 'next/navigation'
export default function FormEvangelism() {
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <>
      <ContentEvangelizationForm isChecked={isChecked} router={router} />
    </>
  )
}
