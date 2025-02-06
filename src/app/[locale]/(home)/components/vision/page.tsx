'use client'

import Image from 'next/image'
import VisionIlustration from '../../../../../../public/vision-ilustration.svg'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

const Vision = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <InViewTransition delay={0.25}>
            <div className="relative flex justify-center max-w-xl w-[90%]">
              <Image
                src={VisionIlustration}
                alt="Vision of Arise for Christ"
                width={500}
                height={400}
              />
            </div>
          </InViewTransition>
          <div className="flex flex-col">
            <InViewTransition delay={0}>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Our Vision
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug">
                Arise for Christ{' '}
                <span className="text-accent">Association</span>
              </h2>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Our name is inspired from Isaiah 60:1:{' '}
                <span className="italic">
                  „Arise, shine! For your light has come! And the glory of the
                  Lord is risen upon you.”
                </span>
                Also from Romans 11:36:{' '}
                <span className="italic">
                  „For of Him and through Him and to Him are all things, to whom
                  be glory forever. Amen.”
                </span>
              </p>
            </InViewTransition>

            <InViewTransition delay={0.5}>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Arise for Christ is a Christian mission that operates for the
                Kingdom of God. Our goal is to mobilize Christians for personal
                evangelization and the restoration of those who have fallen away
                from faith.
              </p>
            </InViewTransition>
          </div>
        </div>
      </section>
    </>
  )
}

export default Vision
