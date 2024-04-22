import bgImage from '../../../../../public/test-email_2.jpg'

export default function HeroSection() {
  return (
    <>
      <div
        className="container w-screen mt-28 pt-64 pb-4 bg-auto bg-no-repeat flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundPosition: 'center',
          height: '100%',
          width: '100%'
        }}
      >
        <h1 className="flex items-center justify-center text-white font-bold ">
          TIMPUL ESTE ACUM 2023
        </h1>
        <div className="mt-96 px-4 flex flex-col gap-4 items-center justify-center text-white ">
          <h2 className="text-[#f3a61d] font-bold">
            URMĂREȘTE SERIA DE 15 EPISOADE
          </h2>
          <p className="border-b pb-4 border-white text-lg">
            O echipă dedicată de misionari se îndreaptă către orașele sărace din
            Filipine, împărtășindu-și credința în comunitățile locale. Aceștia
            se confruntă cu numeroase provocări, experimentând momente intense
            în fiecare zi. Filipinezii sunt ajutați în construirea bisericilor
            și în răspândirea Evangheliei în întregul oraș.
          </p>
          <p className="border-b pb-4 border-white text-lg">
            Te invităm să vizionezi serialul ,,Timpul este acum”, care conține
            15 episoade de 25 de minute fiecare. În această călătorie,
            misionarii străbat triburi, munți și insule, plantând biserici și
            ducând Evanghelia filipinezilor.
          </p>
        </div>
      </div>
    </>
  )
}
