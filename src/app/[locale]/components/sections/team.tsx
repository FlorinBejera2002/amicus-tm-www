import React from "react";
import Image from "next/image";
import Link from "next/link";
import AdrianCovaci from "../../../../../public/img/team/Adrian-Covaci.png";

export default function Team() {
  return (
    <div className="bg-color-dark p-relative z-index-1 custom-section-1 bg-position-center bg-size-cover lazyload">
      <div className="container py-4">
        <div className="row align-items-center ">
          <h1 className="items-center flex justify-center text-5xl text-gray-600 py-6">
            Arise for Christ Team Timișoara 📍
          </h1>
          <div className="py-5 flex gap-5">
            <div className="w-48 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  className="border-b-2 pb-2 border-gray-600"
                  src={AdrianCovaci}
                  width={150}
                  height={150}
                  alt=""
                />
              </Link>
              <b className="text-gray-400">Avram Sabou</b>
              <p className="text-gray-600">Mission President</p>
            </div>
            <div className="w-48 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  className="border-b-2 pb-2 border-gray-600"
                  src={AdrianCovaci}
                  width={150}
                  height={150}
                  alt=""
                />
              </Link>
              <b className="text-gray-400">Avram Sabou</b>
              <p className="text-gray-600">Mission President</p>
            </div>
            <div className="w-48 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  className="border-b-2 pb-2 border-gray-600"
                  src={AdrianCovaci}
                  width={150}
                  height={150}
                  alt=""
                />
              </Link>
              <b className="text-gray-400">Avram Sabou</b>
              <p className="text-gray-600">Mission President</p>
            </div>
            <div className="w-48 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  className="border-b-2 pb-2 border-gray-600"
                  src={AdrianCovaci}
                  width={150}
                  height={150}
                  alt=""
                />
              </Link>
              <b className="text-gray-400">Avram Sabou</b>
              <p className="text-gray-600">Mission President</p>
            </div>
            <div className="w-48 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  className="border-b-2 pb-2 border-gray-600"
                  src={AdrianCovaci}
                  width={150}
                  height={150}
                  alt=""
                />
              </Link>
              <b className="text-gray-400">Avram Sabou</b>
              <p className="text-gray-600">Mission President</p>
            </div>
            <div className="w-48 h-80 bg-gradient-to-t from-gray-800 to-transparent rounded-xl gap-1 flex flex-col justify-center  items-center">
              <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
                <Image
                  className="border-b-2 pb-2 border-gray-600"
                  src={AdrianCovaci}
                  width={150}
                  height={150}
                  alt=""
                />
              </Link>
              <b className="text-gray-400">Avram Sabou</b>
              <p className="text-gray-600">Mission President</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
