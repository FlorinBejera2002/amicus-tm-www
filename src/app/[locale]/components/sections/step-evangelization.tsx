import { ReactNode } from 'react'

import { cn } from '@/utils'

type Props = {
  description: string
  header: string
  numberImage: ReactNode
  styles?: string
}

export const StepEvangelization = ({ styles, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex justify-centermd:justify-start flex-col md:flex-row flex-wrap items-center gap-1 md:gap-2 xl:gap-4',
        styles
      )}
    >
      {props.numberImage}
      <div>
        <h3 className="font-bold mb-0">{props.header}</h3>
        <p className="">{props.description}</p>
      </div>
    </div>
  )
}
