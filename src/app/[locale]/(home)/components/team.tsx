import InViewTransition from '../../common/in-view-transition'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Simona from '../../../../../public/img/team/simo.webp'
import Dana from '../../../../../public/img/team/dana potra.webp'
import Chris from '../../../../../public/img/team/chris potra.webp'
import Andrei from '../../../../../public/img/team/andrei bir.webp'
import AdrianCovaci from '../../../../../public/img/team/adi.webp'
import AvramSabou from '../../../../../public/img/team/Avram.webp'

export default function Team() {
  const t = useTranslations('team')

  const teamMembers = [
    { desc: t('christian-potra'), img: Chris, name: 'Christian Potra' },
    { desc: t('dana-potra'), img: Dana, name: 'Dana Potra' },
    {
      desc: t('avram-sabou'),
      desc1: t('the_team_p1_2'),
      img: AvramSabou,
      name: 'Avram Sabou'
    },
    { desc: t('adi-kovaci'), img: AdrianCovaci, name: 'Adi Kovaci' },
    { desc: t('andrei-birtea'), img: Andrei, name: 'Andrei Birtea' },
    { desc: t('simona-birtea'), img: Simona, name: 'Simona Birtea' }
  ]

  return (
    <div className="bg-color-dark p-relative custom-section-1 lazyload bg-cover bg-center px-8">
      <div className="container px-2 py-4">
        <div className="row align-items-center">
          <InViewTransition>
            <h2 className="mb-0 w-fit py-6 text-2xl font-semibold text-gray-50 lg:text-4xl">
              {t('title-a4c')}
            </h2>
          </InViewTransition>

          <div className="grid grid-cols-2 gap-3 py-5 md:grid-cols-3 xl:grid-cols-6">
            {teamMembers.map((member, idx) => (
              <InViewTransition damping={50} delay={0.25 * idx} key={idx}>
                <div className="group relative mt-3 flex flex-col items-center gap-1 overflow-hidden rounded-xl bg-gradient-to-b from-transparent via-blue-900 to-[#061e35] duration-300 hover:scale-110">
                  <Image
                    alt={member.name}
                    className="border-b border-gray-600 py-3"
                    height={300}
                    src={member.img}
                    width={150}
                  />
                  <div className="flex h-16 flex-col gap-1 p-2 text-center md:h-20 lg:h-24">
                    <b className="text-sm text-gray-50 group-hover:hidden md:text-base">
                      {member.name}
                    </b>
                    <p className="text-xs text-gray-500 group-hover:hidden md:text-sm">
                      {member.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 translate-y-full transform bg-[#122a80] bg-opacity-90 p-4 text-white transition-transform duration-1000 ease-in-out group-hover:translate-y-0">
                    <p className="text-center text-lg font-bold">
                      {member.name}
                    </p>
                    <p className="pt-20 text-sm font-medium">{member.desc1}</p>
                  </div>
                </div>
              </InViewTransition>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
