import React from "react";
import Image from "next/image";
import LucianBalanescu from "../../../../../public/img/Podcast-Lucian-Balanescu.png";

export default function StepsEvangelization() {
  return (
    <section className="  bg-slate-50" id="concept">
      <div className="container d-flex justify-center gap-16  bg-color-light p-relative z-index-2 py-1 mt-3">
        <div>
          <Image
            className=""
            src={LucianBalanescu}
            alt="Stps for Evangelisation"
            width={400}
            height={400}
          />
        </div>
        <div className="d-flex flex-col gap-4">
          <h1 className="text-7xl">
            <b>Pasii de evanghelizare:</b>
          </h1>
          <div className="">
            <b className="text-7xl  p-5">1</b>
            <button> Button</button>
          </div>
          <div className="">
            <b className="text-7xl  p-5">2</b>
          </div>
          <div className="">
            <b className="text-7xl  p-5">3</b>
          </div>
        </div>
      </div>
    </section>
  );
}
