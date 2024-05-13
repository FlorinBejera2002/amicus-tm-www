import { StepEvangelization } from './step-evangelization'

import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import Image from 'next/image'

import logoArise from '../../../../../public/logo_horizontal_black.png'

export default function StepsEvangelization() {
  return (
    <section className="" id="concept">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 bg-color-light p-relative z-index-2 pb-10">
        <div className="hidden md:flex items-center justify-center">
          <Image
            alt="Stps for Evangelisation"
            className=""
            height={400}
            src={logoArise}
            width={400}
          />
        </div>
        <div className="flex flex-col gap-8 md:gap-12 xl:gap-20 px-2 md:px-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-poppins text-center ">
            <b>Pasii de evanghelizare</b>
          </h1>
          <StepEvangelization
            description="Intră pe site-ul nostru și caută butonul cu cererea de
                evanghelizare."
            header="Scanează codul QR"
            numberImage={<PiNumberCircleOneFill className="w-24 h-24" />}
          />
          <StepEvangelization
            description=" Completeaza o cerere de evanghelizare!
            "
            header="Completează cererea"
            numberImage={<PiNumberCircleTwoFill className="w-24 h-24" />}
            styles="xl:justify-end"
          />
          <StepEvangelization
            description=" Noi vom prelua cerere pentru un plan de
            evanghelizare!"
            header="Noi îl vom contacta"
            numberImage={<PiNumberCircleThreeFill className="w-24 h-24" />}
            styles="xl:justify-center"
          />
        </div>
      </div>
    </section>
  )
}
