import { ReactNode } from 'react'

type Props = {
  description: string
  header: string
  numberImage: ReactNode
  styles?: string
}

export const StepEvangelization = (props: Props) => {
  return (
    <div
      className={`flex justify-center md:justify-start flex-col md:flex-ro flex-wrap items-center gap-1 md:gap-2 xl:gap-4 ${props.styles}`}
    >
      {props.numberImage}
      <h3 className="font-bold mb-0">{props.header}</h3>
      <p className="">{props.description}</p>
    </div>
  )
}
