"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import LucianBalanescu from "../../../../../public/img/Podcast-Lucian-Balanescu.png";
import IonutProdan from "../../../../../public/img/Ionut-Prodan.png";
import CatalinOnitiu from "../../../../../public/img/Catalin-Onitiu.png";

import LogoYouTube from "../../../../../public/img/logos/Logo-grey.jpeg";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex h-96 pt-10 align-middle">
        <div
          className="flex  gap-14 6 min-w-0 w-25 pt-10  justify-center border-t"
          style={{ flex: "100% 0 0" }}
        >
          <Link href="https://www.youtube.com/watch?v=XhQIeYzccUI">
            <Image
              className=""
              src={LucianBalanescu}
              width={500}
              height={500}
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-1 ">
            <Link
              href="https://www.youtube.com/watch?v=XhQIeYzccUI"
              style={{ textDecoration: "none" }}
            >
              <h1 className="pb-1">
                #46 PODCAST Lucian Bălănescu "Tot timpul ne căsătorim cu
                persoana nepotrivită"
              </h1>
              <p className="text-gray-500 text-sm">
                27 K de vizionări • acum 1 an
              </p>
            </Link>

            <div className="flex gap-2 pt-3">
              <Link
                href="https://www.youtube.com/c/Ariseforchrist"
                className="flex gap-2 "
                style={{ textDecoration: "none" }}
              >
                <Image
                  className="rounded-full"
                  src={LogoYouTube}
                  width={25}
                  height={25}
                  alt=""
                />
                <p className="text-gray-500 text-sm">Arise for Chist</p>
              </Link>
            </div>
            <p className="text-gray-500 pt-3 text-xs pb-1">
              Episodul 46 | Podcast Arise for Christ “Tot timpul ne căsătorim cu
              persoana nepotrivită❗️” ...
            </p>

            <b className="text-gray-500 text-xs w-5 h-5  rounded-1 flex items-center  justify-center bg-gray-200">
              4K
            </b>
          </div>
        </div>
         
        <div
          className="flex  gap-14 6 min-w-0 w-25 pt-10  justify-center border-t"
          style={{ flex: "100% 0 0" }}
        >
          <Link href="https://www.youtube.com/watch?v=VputJkB5E8g">
            <Image
              className=""
              src={IonutProdan}
              width={500}
              height={500}
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-1 ">
            <Link
              href="https://www.youtube.com/watch?v=VputJkB5E8g"
              style={{ textDecoration: "none" }}
            >
              <h1 className="pb-1">
                #84 CE NU AM REUȘIT SĂ-I MAI CITESC FETIȚEI MELE - IONUȚ PRODAN
              </h1>
              <p className="text-gray-500 text-sm">
                7,5 K de vizionări • acum 8 zile
              </p>
            </Link>

            <div className="flex gap-2 pt-3">
              <Link
                href="https://www.youtube.com/c/Ariseforchrist"
                className="flex gap-2 "
                style={{ textDecoration: "none" }}
              >
                <Image
                  className="rounded-full"
                  src={LogoYouTube}
                  width={25}
                  height={25}
                  alt=""
                />
                <p className="text-gray-500 text-sm">Arise for Chist</p>
              </Link>
            </div>
            <p className="text-gray-500 pt-3 text-xs pb-1">
              Sezonul 3 episodul84 În episodul nostru special, ne întâlnim cu
              Ionuț Prodan, un om cu o poveste de viață ....
            </p>

            <b className="text-gray-500 text-xs w-5 h-5  rounded-1 flex items-center  justify-center bg-gray-200">
              4K
            </b>
          </div>
        </div>

        <div
          className="flex  gap-14 6 min-w-0 w-25 pt-10  justify-center border-t"
          style={{ flex: "100% 0 0" }}
        >
          <Link href="https://www.youtube.com/watch?v=n8AgQqQjejU">
            <Image
              className=""
              src={CatalinOnitiu}
              width={500}
              height={500}
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-1 ">
            <Link
              href="https://www.youtube.com/watch?v=n8AgQqQjejU"
              style={{ textDecoration: "none" }}
            >
              <h1 className="pb-1">
                #27 PODCAST Călin Onițiu "Provocările părinților de adolescenți"
              </h1>
              <p className="text-gray-500 text-sm">
                13 K de vizionări • acum 1 an
              </p>
            </Link>

            <div className="flex gap-2 pt-3">
              <Link
                href="https://www.youtube.com/c/Ariseforchrist"
                className="flex gap-2 "
                style={{ textDecoration: "none" }}
              >
                <Image
                  className="rounded-full"
                  src={LogoYouTube}
                  width={25}
                  height={25}
                  alt=""
                />
                <p className="text-gray-500 text-sm">Arise for Chist</p>
              </Link>
            </div>
            <p className="text-gray-500 pt-3 text-xs pb-1">
              Sezonul 3 episodul84 În episodul nostru special, ne întâlnim cu
              Ionuț Prodan, un om cu o poveste de viață ....
            </p>

            <b className="text-gray-500 text-xs w-5 h-5  rounded-1 flex items-center  justify-center bg-gray-200">
              4K
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
