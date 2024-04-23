/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client'
import { Collapse } from 'react-collapse'
import { useState } from 'react'

import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const Acordion = ({ content, title }: any) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div
      className="toggle toggle-minimal toggle-dark pt-4"
      data-plugin-toggle={true}
    >
      <div
        className="toggle"
        onClick={toggle}
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <p
          className="toggle-title text-dark text-4 "
          style={{
            margin: 0
          }}
        >
          <strong>{title}</strong>
        </p>
        {open ? <AiOutlineDown /> : <AiOutlineUp />}
      </div>
      <hr />
      <Collapse isOpened={open}>
        <div className="toggle content">
          <p>{content}</p>
        </div>
      </Collapse>
    </div>
  )
}

export default Acordion
