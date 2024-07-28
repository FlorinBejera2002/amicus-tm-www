'use client'

import { useState } from 'react'

import Accordion from '../../../common/accordion'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import { useTranslations } from 'next-intl'

const AccordionSection = () => {
  const [expanded, setExpanded] = useState(-1)
  const t = useTranslations('vision')

  const accordionItems = [
    {
      description: t('step1_description'),
      title: t('step1_title')
    },
    {
      description: t('step2_description'),
      title: t('step2_title')
    },
    {
      description: t('step3_description'),
      title: t('step3_title')
    },
    {
      description: t('step4_description'),
      title: t('step4_title')
    },
    {
      description: t('step5_description'),
      title: t('step5_title')
    },
    {
      description: t('step6_description'),
      title: t('step6_title')
    },
    {
      description: t('step7_description'),
      title: t('step7_title')
    },
    {
      description: t('step8_description'),
      title: t('step8_title')
    }
  ]

  return (
    <>
      {accordionItems.map((item, idx) => (
        <InViewTransition damping={25} delay={idx * 0.25} key={idx}>
          <div className="md:mr-10">
            <Accordion
              description={item.description}
              expanded={expanded}
              idx={idx}
              setExpanded={setExpanded}
              title={item.title}
            />
          </div>
        </InViewTransition>
      ))}
    </>
  )
}

export default AccordionSection
