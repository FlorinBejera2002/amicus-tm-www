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
        'flex gap-1 !text-center md:flex-row md:gap-2 md:!text-start xl:gap-4',
        customClassname
      )}
    >
      {icon}
      <div className="flex flex-col md:justify-center items-start !gap-2 md:!gap-0">
        <h3 className="text-md mb-0 text-start font-semibold md:text-lg">
          {headerLabel}
        </h3>
        <p className="mb-0 text-start text-sm">{description}</p>
      </div>
    </div>
  )
}
