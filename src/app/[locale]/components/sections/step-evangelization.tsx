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
      className={`flex justify-start flex-wrap items-center gap-3 ${props.styles}`}
    >
      {props.numberImage}
      <div>
        <h3 className="font-bold mb-0">{props.header}</h3>
        <p className="">{props.description}</p>
      </div>
    </div>
  )
}
