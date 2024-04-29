'use client'
import React, { useState } from 'react'

import ContentEvangelizationForm from './content-evangelization-form'
export default function FormEvangelism() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <>
      <ContentEvangelizationForm isChecked={isChecked} />
      <label className="flex gap-2 ">
        <input
          checked={isChecked}
          className="flex w-5 h-5"
          onChange={handleCheckboxChange}
          type="checkbox"
        />
        <span className="text-sm">
          Prin bifarea casutei îți dai acordul pentru prelucrarea datelor tale
          personale în scopul primirii comunicărilor periodice din partea
          noastră.
        </span>
      </label>
    </>
  )
}
