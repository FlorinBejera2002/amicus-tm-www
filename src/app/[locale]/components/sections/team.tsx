import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

import AdrianCovaci from "../../../../../public/img/team/adi.png";
import AvramSabou from "../../../../../public/img/team/Avram.png";
import Simona from "../../../../../public/img/team/simo.png";
import Chris from "../../../../../public/img/team/chris potra.png";
import Andrei from "../../../../../public/img/team/andrei bir.png";
import Dana from "../../../../../public/img/team/dana potra.png";

export default function Team() {
  const t = useTranslations("team");
  return (
    <div className="bg-color-dark p-relative z-index-1 custom-section-1 bg-position-center bg-size-cover lazyload">
      <div className="container py-4">
        <div className="row align-items-center ">
          <h1 className="items-center flex justify-center text-5xl text-gray-600 py-6">
            {t("title-a4c")}
          </h1>

          <div className="py-5 flex gap-4 justify-center">
            <div
              className="cursor-pointer relative overflow-hidden w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center   hover:scale-110 hover:bg-indigo-900 duration-300  "
              style={{
                transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1);",
              }}
            >
              <div
                className="hover:translate-y-0 "
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  position: "absolute",
                  background: "rgba(33, 150, 243, 0.9)",
                  transform: " translateY(102%)",
                  transition: " transform 250ms linear",
                  opacity: "0.5",
                }}
              >
                <p className="">
                  Fondator al misiunii Arise for Christ și coordonator în
                  Statele Unite.
                </p>
              </div>
              <Image
                alt=""
                className="border-b-2 pb-2 border-gray-600"
                height={150}
                src={Chris}
                width={150}
              />
              <b className="text-gray-400">Christian Potra</b>
              <p className="text-gray-600">{t("christian-potra")}</p>
            </div>
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  alt=""
                  className="border-b-2 pb-2 border-gray-600"
                  height={150}
                  src={Dana}
                  width={150}
                />
              </Link>
              <b className="text-gray-400">Dana Potra</b>
              <p className="text-gray-600">{t("dana-potra")}</p>
            </div>
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  alt=""
                  className="border-b-2 pb-2 border-gray-600"
                  height={150}
                  src={AvramSabou}
                  width={150}
                />
              </Link>
              <b className="text-gray-400">Avram Sabou</b>
              <p className="text-gray-600">{t("avram-sabou")}</p>
            </div>
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  alt=""
                  className="border-b-2 pb-2 border-gray-600"
                  height={150}
                  src={AdrianCovaci}
                  width={150}
                />
              </Link>
              <b className="text-gray-400">Adi Kovaci</b>
              <p className="text-gray-600">{t("adi-kovaci")}</p>
            </div>
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  alt=""
                  className="border-b-2 pb-2 border-gray-600"
                  height={150}
                  src={Andrei}
                  width={150}
                />
              </Link>
              <b className="text-gray-400">Andrei Birtea</b>
              <p className="text-gray-600">{t("andrei-birtea")}</p>
            </div>
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300 ">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  alt=""
                  className="border-b-2 pb-2 border-gray-600"
                  height={150}
                  src={Simona}
                  width={150}
                />
              </Link>
              <b className="text-gray-400">Simona Birtea </b>
              <p className="text-gray-600">{t("simona-birtea")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
