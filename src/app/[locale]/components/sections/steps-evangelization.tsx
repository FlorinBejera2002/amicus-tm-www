import React from "react";
import Image from "next/image";
import horizontalLogo from "../../../../../public/logo_horizontal_black.png";

export default function StepsEvangelization() {
  return (
    <section className="   m-20  bg-slate-50  relative  ">
      <div className="container d-flex justify-center gap-16 pt-20">
        <div>
          <Image
            className=""
            src={horizontalLogo}
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
