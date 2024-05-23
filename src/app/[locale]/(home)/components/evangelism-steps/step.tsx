import { ReactNode } from 'react'

import { cn } from '@/utils'

type EvStep = {
  customClassname?: string
  description: string
  headerLabel: string
  icon: ReactNode
}

export const Step = ({
  customClassname,
  description,
  headerLabel,
  icon
}: EvStep) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center px-2 flex-col flex-wrap gap-1 md:gap-2 md:flex-row md:justify-start xl:gap-4',
        customClassname
      )}
    >
      {icon}
      <div>
        <h3 className=" font-bold mb-0">{headerLabel}</h3>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  )
}
