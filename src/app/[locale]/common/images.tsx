import InViewTransition from '@/app/[locale]/common/in-view-transition'
import Image from 'next/image'

import step1 from '../../../../public/img/common/step1.webp'
import step2 from '../../../../public/img/common/step2.webp'
import step3 from '../../../../public/img/common/step3.webp'
import step4 from '../../../../public/img/common/step4.webp'
import step5 from '../../../../public/img/common/step5.webp'

const images = () => {
  return (
    <div className="col-lg-6 hidden flex-col text-center md:flex">
      <InViewTransition xOut={-100} yOut={0}>
        <div className="d-flex mb-3">
          <div className="flex-fill p-2">
            <div
              className="custom-el-3 bg-color-tertiary custom-border-radius-1 appear-animation mx-auto"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="100"
            >
              <Image
                alt="Arise photo"
                className="custom-el-3-img p-relative size-full object-cover"
                src={step5}
              />
            </div>
          </div>

          <div className="flex-fill p-2">
            <Image
              alt="Arise photo"
              className="custom-el-3 bg-color-primary custom-border-radius-2 appear-animation mx-auto object-cover object-left"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="200"
              src={step2}
            />
          </div>

          <div className="flex-fill p-2">
            <div
              className="custom-el-3 custom-el-3-pos-1 bg-color-dark custom-border-radius-3 appear-animation mx-auto"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="300"
            >
              <Image
                alt="Arise photo"
                className="custom-el-3-img p-relative size-full object-cover"
                src={step1}
              />
            </div>
          </div>
        </div>
        <div className="d-flex custom-el-4-pos mb-3">
          <div className="flex-fill p-2">
            <div
              className="custom-el-3 custom-el-3-pos-2 bg-color-dark custom-border-radius-4 appear-animation ms-auto"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="400"
            >
              <Image
                alt="Arise photo"
                className="custom-el-3-img p-relative size-full object-cover"
                src={step3}
              />
            </div>
          </div>

          <div className="flex-fill p-2">
            <div
              className="custom-el-3 bg-color-tertiary custom-border-radius-5 appear-animation me-auto"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="500"
            >
              <Image
                alt="Arise photo"
                className="custom-el-3-img p-relative size-full object-cover"
                src={step4}
              />
            </div>
          </div>
        </div>
      </InViewTransition>
    </div>
  )
}

export default images
