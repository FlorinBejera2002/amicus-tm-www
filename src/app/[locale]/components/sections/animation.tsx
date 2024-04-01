import Image from "next/image";
import React from "react";

import arrowUpLight from "../../../../../public/img/demos/creative-agency-2/svg/arrow-up-light.svg";

export default function Animation() {
  return (
    <>
      <div className="p-absolute custom-el-1 custom-el-pos-1">
        <div
          className="appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay="0"
        >
          <Image
            alt="arrowUpLight"
            className="object-contain"
            src={arrowUpLight}
            width={140}
          />
        </div>
        <div
          className="appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay="100"
        >
          <Image
            alt="arrowUpLight"
            className="object-contain"
            src={arrowUpLight}
            width={140}
          />
        </div>
        <div
          className="appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay="200"
        >
          <Image
            alt="arrowUpLight"
            className="object-contain"
            src={arrowUpLight}
            width={140}
          />
        </div>
      </div>
      <div className="p-absolute custom-el-2 custom-el-pos-2">
        <div
          className="appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay="0"
        >
          <Image
            alt="arrowUpLight"
            className="object-contain"
            src={arrowUpLight}
            width={70}
          />
        </div>
        <div
          className="appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay="100"
        >
          <Image
            alt="arrowUpLight"
            className="object-contain"
            src={arrowUpLight}
            width={70}
          />
        </div>
        <div
          className="appear-animation"
          data-appear-animation="fadeInUpShorter"
          data-appear-animation-delay="200"
        >
          <Image
            alt="arrowUpLight"
            className="object-contain"
            src={arrowUpLight}
            width={70}
          />
        </div>
      </div>
    </>
  );
}
