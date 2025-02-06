import InViewTransition from '@/app/[locale]/common/in-view-transition'
import Project1 from '../.../../../../../../../public/project1.svg'
import Project2 from '../.../../../../../../../public/project2.svg'
import Project3 from '../.../../../../../../../public/project3.svg'
import Project4 from '../.../../../../../../../public/project4.svg'
import Project5 from '../.../../../../../../../public/project5.svg'
import Image from 'next/image'

export default function Projects() {
  return (
    <section className="bg-white py-12" id="projects">
      <div className="container mx-auto px-6 lg:px-12 bg-white">
        <div className="text-start mb-5">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Our Projects
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Spreading the Gospel and{' '}
            <span className="text-accent">Empowering Communities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <InViewTransition delay={0.5}>
            <div className="bg-blue-50 p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
              <Image
                src={Project1}
                alt="Personal Evangelism"
                width={100}
                height={100}
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Personal Evangelism
              </h4>
              <p className="text-gray-600 mt-2 text-sm">
                Connecting with unchurched individuals within the families of
                believers. Every believer has someone unchurched to reach.
              </p>
            </div>
          </InViewTransition>

          <InViewTransition delay={0.75}>
            <div className="bg-blue-50 p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
              <Image
                src={Project2}
                alt="Recovery of the Fallen"
                width={100}
                height={100}
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Recovery of the Fallen
              </h4>
              <p className="text-gray-600 mt-2 text-sm">
                Helping those who have fallen away from faith, guiding them
                towards spiritual healing and restoration.
              </p>
            </div>
          </InViewTransition>

          <InViewTransition delay={1}>
            <div className="bg-blue-50 p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
              <Image
                src={Project3}
                alt="Biblical Counseling"
                width={100}
                height={100}
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Biblical Counseling
              </h4>
              <p className="text-gray-600 mt-2 text-sm">
                Providing spiritual guidance for those facing difficulties,
                helping them find faith-based solutions.
              </p>
            </div>
          </InViewTransition>

          <InViewTransition delay={1.25}>
            <div className="bg-blue-50 p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
              <Image
                src={Project4}
                alt="Intercessory Prayer"
                width={100}
                height={100}
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Intercessory Prayer
              </h4>
              <p className="text-gray-600 mt-2 text-sm">
                Each person we work with is supported through prayer, a key
                element in all of our efforts.
              </p>
            </div>
          </InViewTransition>

          <InViewTransition delay={1.5}>
            <div className="bg-blue-50 p-3 rounded-md h-60 shadow-md flex flex-col items-center text-center">
              <Image
                src={Project5}
                alt="Multimedia Projects"
                width={100}
                height={100}
              />
              <h4 className="text-lg font-semibold text-gray-900">
                Multimedia Projects
              </h4>
              <p className="text-gray-600 mt-2 text-sm">
                Spreading the Word of God through digital media, podcasts, and
                biblical video content.
              </p>
            </div>
          </InViewTransition>
        </div>
      </div>
    </section>
  )
}
