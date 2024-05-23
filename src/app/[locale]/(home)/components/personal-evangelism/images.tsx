import Image from 'next/image'
import InViewTransition from '@/app/[locale]/common/in-view-transition'

import step5 from '../../../../../../public/img/step5.webp'
import step4 from '../../../../../../public/img/step4.webp'
import step3 from '../../../../../../public/img/step3.webp'
import step2 from '../../../../../../public/img/step2.webp'
import step1 from '../../../../../../public/img/step1.webp'

const images = () => {
  return (
    <div className="hidden md:flex flex-col col-lg-6 text-center">
      <InViewTransition xOut={-100} yOut={0}>
        <div className="d-flex mb-3">
          <div className="p-2 flex-fill">
            <div
              className="custom-el-3 bg-color-tertiary custom-border-radius-1 mx-auto appear-animation"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="100"
            >
              <Image
                alt="Arise photo"
                className="object-cover custom-el-3-img p-relative size-full"
                src={step5}
              />
            </div>
          </div>

          <div className="p-2 flex-fill">
            <Image
              alt="Arise photo"
              className="object-left object-cover custom-el-3 bg-color-primary custom-border-radius-2 mx-auto appear-animation"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="200"
              src={step2}
            />
          </div>

          <div className="p-2 flex-fill">
            <div
              className="custom-el-3 custom-el-3-pos-1 bg-color-dark custom-border-radius-3 mx-auto appear-animation"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="300"
            >
              <Image
                alt="Arise photo"
                className="object-cover custom-el-3-img p-relative size-full"
                src={step1}
              />
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 custom-el-4-pos">
          <div className="p-2 flex-fill">
            <div
              className="custom-el-3 custom-el-3-pos-2 bg-color-dark custom-border-radius-4 ms-auto appear-animation"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="400"
            >
              <Image
                alt="Arise photo"
                className="object-cover custom-el-3-img p-relative size-full"
                src={step3}
              />
            </div>
          </div>

          <div className="p-2 flex-fill">
            <div
              className="custom-el-3 bg-color-tertiary custom-border-radius-5 me-auto appear-animation"
              data-appear-animation="zoomIn"
              data-appear-animation-delay="500"
            >
              <Image
                alt="Arise photo"
                className="object-cover custom-el-3-img p-relative size-full"
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
