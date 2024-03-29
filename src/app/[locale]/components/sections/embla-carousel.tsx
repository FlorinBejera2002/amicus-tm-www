"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import horizontalLogo from "../../../../../public/img/Christian-divorce-image.jpg";

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
          className="flex  gap-14 6 min-w-0 w-25 pt-10  justify-center"
          style={{ flex: "100% 0 0" }}
        >
          <div>
            <Image
              className=""
              src={horizontalLogo}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <h1>Slide2</h1>
            <p>text you wantadghavdvdvhavhavdvahvahvdvahdvadvdvavd</p>
          </div>
        </div>
        <div
          className="flex  gap-14 6 min-w-0 w-25 pt-10  justify-center"
          style={{ flex: "100% 0 0" }}
        >
          <div>
            <Image
              className=""
              src={horizontalLogo}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <h1>Slide2</h1>
            <p>text you wantadghavdvdvhavhavdvahvahvdvahdvadvdvavd</p>
          </div>
        </div>
        <div
          className="flex  gap-14 6 min-w-0 w-25 pt-10  justify-center"
          style={{ flex: "100% 0 0" }}
        >
          <div>
            <Image
              className=""
              src={horizontalLogo}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div>
            <h1>Slide2</h1>
            <p>text you wantadghavdvdvhavhavdvahvahvdvahdvadvdvavd</p>
          </div>
        </div>
      </div>
    </div>
  );
}
