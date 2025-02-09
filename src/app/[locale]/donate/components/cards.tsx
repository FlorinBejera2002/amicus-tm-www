import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Star from '../../../../../public/undraw_stars_e9bi.svg'
import Helper from '../../../../../public/Helping a partner-amico.svg'
import World from '../../../../../public/undraw_connected-world_anke.svg'
const WhyGetInvolvedSection = () => {
  const t = useTranslations('donate')

  const reasons = [
    {
      title: t('reasons.title1'),
      description: t('reasons.description1'),
      linkText: t('reasons.linkText1'),
      icon: Star
    },
    {
      title: t('reasons.title2'),
      description: t('reasons.description2'),
      linkText: t('reasons.linkText2'),
      icon: Helper
    },
    {
      title: t('reasons.title3'),
      description: t('reasons.description3'),
      linkText: t('reasons.linkText3'),
      icon: World
    }
  ]
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reasons.map((reason, index) => (
          <div key={index} className=" text-center">
            <div className="text-7xl mb-4">
              <Image
                src={reason.icon}
                alt={`${reason.title} icon`}
                className="w-36 h-36 mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              {reason.title.toLocaleUpperCase()}
            </h3>
            <p className="text-gray-600 mb-4">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyGetInvolvedSection
