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
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  alt=""
                  className="border-b-2 pb-2 border-gray-600"
                  height={150}
                  src={Chris}
                  width={150}
                />
              </Link>
              <b className="text-gray-400">Christian Potra</b>
              <p className="text-gray-600">{t("christian-potra")}</p>
            </div>
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
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
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
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
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
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
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
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
            <div className="w-52 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
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
