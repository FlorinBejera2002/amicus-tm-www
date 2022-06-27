import styled from '@emotion/styled'

export const Vision = () => (
  <Container>
    <Heading>VIZIUNEA</Heading>

    <div className="container-fluid py-5" id="story">
      <div className="timeline position-relative container p-0">
        <div className="row">
          <div className="col-md-6 text-md-right text-center">
            <img alt="" className="img-fluid mr-md-3" src="img/story-1.jpg" />
          </div>
          <div className="col-md-6 text-md-left text-center">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary ml-md-3 p-4">
              <h4 className="mb-2">First Meet</h4>
              <p className="text-uppercase mb-2">01 Jan 2050</p>
              <p className="m-0">
                Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum,
                labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-md-right text-center">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary mr-md-3 p-4">
              <h4 className="mb-2">First Date</h4>
              <p className="text-uppercase mb-2">01 Jan 2050</p>
              <p className="m-0">
                Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum,
                labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.
              </p>
            </div>
          </div>
          <div className="col-md-6 text-md-left text-center">
            <img alt="" className="img-fluid ml-md-3" src="img/story-2.jpg" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-md-right text-center">
            <img alt="" className="img-fluid mr-md-3" src="img/story-3.jpg" />
          </div>
          <div className="col-md-6 text-md-left text-center">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary ml-md-3 p-4">
              <h4 className="mb-2">Proposal</h4>
              <p className="text-uppercase mb-2">01 Jan 2050</p>
              <p className="m-0">
                Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum,
                labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-md-right text-center">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary mr-md-3 p-4">
              <h4 className="mb-2">Enagagement</h4>
              <p className="text-uppercase mb-2">01 Jan 2050</p>
              <p className="m-0">
                Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum,
                labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.
              </p>
            </div>
          </div>
          <div className="col-md-6 text-md-left text-center">
            <img alt="" className="img-fluid ml-md-3" src="img/story-4.jpg" />
          </div>
        </div>
      </div>
    </div>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding-top: 16rem;
  padding-bottom: 10rem;
  padding-left: 5rem;
  padding-right: 5rem;
  height: 100vh;
  background: green;
`

const Heading = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
`
