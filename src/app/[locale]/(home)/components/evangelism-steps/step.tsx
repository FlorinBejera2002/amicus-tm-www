import type { ReactNode } from 'react'

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
        'flex gap-2 !text-center md:flex-row md:gap-2 md:!text-start xl:gap-4',
        customClassname
      )}
    >
      {icon}
      <div className="flex flex-col justify-center items-start md:!gap-0">
        <h3 className="text-base mb-0 text-start font-semibold md:text-xl">
          {headerLabel}
        </h3>
        <p className="mb-0 text-start text-xs md:text-sm">{description}</p>
      </div>
    </div>
  )
}
