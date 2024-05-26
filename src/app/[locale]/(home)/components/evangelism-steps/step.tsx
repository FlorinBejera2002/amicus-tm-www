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
        'flex gap-1 md:gap-2 md:flex-row xl:gap-4 !text-center md:!text-start',
        customClassname
      )}
    >
      {icon}
      <div className="flex flex-col !gap-2 md:!gap-0 items-start">
        <h3 className="font-semibold text-md md:text-lg mb-0 text-start">
          {headerLabel}
        </h3>
        <p className="mb-0 text-start">{description}</p>
      </div>
    </div>
  )
}
