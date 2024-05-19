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
        'flex justify-center items-center px-2 flex-col flex-wrap gap-1 md:gap-2 md:flex-row md:justify-start xl:gap-4',
        styles
      )}
    >
      {props.numberImage}
      <div>
        <h3 className=" font-bold mb-0">{props.header}</h3>
        <p className="mb-0">{props.description}</p>
      </div>
    </div>
  )
}
