import { ReactNode } from 'react'

import Link from 'next/link'
import Image from 'next/image'
type Props = {
  episodImage: ReactNode
  styles?: string
  title: any
  url: any
}

export default function Episod(props: Props) {
  return (
    <div className={`flex flex-wrap items-center ${props.styles}`}>
      <Link href="">
        <Image
          alt="arise for christ logo"
          className="object-contain"
          src={props.episodImage}
        />
      </Link>
      <h4>{props.title}</h4>
    </div>
  )
}
