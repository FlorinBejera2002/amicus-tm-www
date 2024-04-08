import { StepEvangelization } from './step-evangelization'

import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import Image from 'next/image'

import logoArise from '../../../../../public/logo_horizontal_black.png'

export default function StepsEvangelization() {
  return (
    <section className=" bg-slate-50" id="concept">
      <div className="container d-flex justify-center gap-16  bg-color-light p-relative z-index-2  mt-5 pb-10">
        <div className="flex items-center">
          <Image
            alt="Stps for Evangelisation"
            className=""
            height={400}
            src={logoArise}
            width={400}
          />
        </div>
        <div className="d-flex flex-col gap-20">
          <h1 className="text-5xl font-poppins text-center ">
            <b>Pasii de evanghelizare</b>
          </h1>

          <StepEvangelization
            description="Intră pe site-ul nostru și caută butonul cu cererea de
                evanghelizare."
            header="Scanează codul QR"
            numberImage={<PiNumberCircleOneFill className="w-24 h-24" />}
          />
          <div className="flex  justify-end flex-wrap items-center gap-3">
            <PiNumberCircleTwoFill className="w-24 h-24" />
            <div>
              <b>Completează o cerere de evanghelizare</b>
              <p>
                Dorești mântuirea cuiva drag? <br /> Vrei să încurajezi pe
                cineva?
                <br />
                Completează o cerere de evanghelizare!
              </p>
            </div>
          </div>
          <StepEvangelization
            description=" Noi vom prelua această cerere pentru a face un plan de
            evanghelizare!"
            header="Noi îl vom contacta"
            numberImage={<PiNumberCircleThreeFill className="w-24 h-24" />}
            styles="justify-center"
          />
        </div>
      </div>
    </section>
  )
}
