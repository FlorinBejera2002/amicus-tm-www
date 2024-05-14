import { ReactNode } from 'react'

import { cn } from '@/utils'

type Props = {
  description: string
  header: string
  numberImage: ReactNode
  styles?: string
}

export const StepEvangelization = (props: Props) => {
  const combinedStyles = cn(
    'flex',
    'justify-center ',
    'md:justify-start ',
    'flex-col',
    'md:flex-ro ',
    'flex-wrap ',
    'items-center',
    'gap-1',
    'md:gap-2',
    'xl:gap-4 ',
    props.styles
  )

  return (
    <div className={combinedStyles}>
      {props.numberImage}
      <h3 className="font-bold mb-0">{props.header}</h3>
      <p className="">{props.description}</p>
    </div>
  )
}
