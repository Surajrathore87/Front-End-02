import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

export default function AshapurnaNri() {
  return (
    <>
      <section className="bg-light-blue-color ashapurnaNri-main">
        <Container className="d-none">
          <Row>
            <Col lg={6}>
              <div className="ashapurnaNri-left pe-lg-5">
                <h2 className="text-capitalize fw-500 text-white fs-40 mb-10">Ashapurna NRI</h2>
                <span className="text-uppercase golden-color subtitle position-relative">project overview</span>
                <p className="text-white lh-30 mt-3">
                  The theme which gained the most traction included the classic styles and designs of the European
                  renaissance. The concept aims at inspiring buyers by providing them a larger than life experience.
                  European theme-based edifice and architecture define royalism in itself. This project is inspired by
                  European architecture that is complete harmony and synchronization with the locality.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="ashapurnaNri-right">
                <h2 className="text-capitalize fw-600 text-white fs-40 mb-50">Facility</h2>
                <Row>
                  <Col xl={4} lg={6} md={4} xs={6}>
                    <div className="facility-blocks d-flex align-items-start mb-25">
                      <div className="facility-icon me-2 me-md-3">
                        <img src="/images/icons/rera.png" alt="RERA" />
                      </div>
                      <div className="facilityIcon-content">
                        <h4 className="golden-color fs-18 mb-1 fw-600">RERA</h4>
                        <span className="text-white fs-16">Approved</span>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} lg={6} md={4} xs={6}>
                    <div className="facility-blocks d-flex align-items-start mb-25">
                      <div className="facility-icon me-2 me-md-3">
                        <img src="/images/icons/availability.png" alt="Availability" />
                      </div>
                      <div className="facilityIcon-content">
                        <h4 className="golden-color fs-18 mb-1 fw-600">Availability</h4>
                        <span className="text-white fs-16">2BHK/ 3BHK/ 4BHK</span>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} lg={6} md={4} xs={6}>
                    <div className="facility-blocks d-flex align-items-start mb-25">
                      <div className="facility-icon me-2 me-md-3">
                        <img src="/images/icons/swimming-pool.png" alt="swimming-pool" />
                      </div>
                      <div className="facilityIcon-content">
                        <h4 className="golden-color text-capitalize fs-18 mb-1 fw-600">Swimming Pool</h4>
                        <span className="text-white fs-16">Area</span>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} lg={6} md={4} xs={6}>
                    <div className="facility-blocks d-flex align-items-start mb-25">
                      <div className="facility-icon me-2 me-md-3">
                        <img src="/images/icons/full-size.png" alt="Development Size" />
                      </div>
                      <div className="facilityIcon-content">
                        <h4 className="golden-color text-capitalize fs-18 mb-1 fw-600">Development Size</h4>
                        <span className="text-white fs-16">300 Bighas</span>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} lg={6} md={4} xs={6}>
                    <div className="facility-blocks d-flex align-items-start mb-25">
                      <div className="facility-icon me-2 me-md-3">
                        <img src="/images/icons/club-house.png" alt="Club House" />
                      </div>
                      <div className="facilityIcon-content">
                        <h4 className="golden-color text-capitalize fs-18 mb-1 fw-600">Club House</h4>
                        <span className="text-white fs-16">30,000 SQ. FT.</span>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} lg={6} md={4} xs={6}>
                    <div className="facility-blocks d-flex align-items-start mb-25">
                      <div className="facility-icon me-2 me-md-3">
                        <img src="/images/icons/park.png" alt="10+ Garden" />
                      </div>
                      <div className="facilityIcon-content">
                        <h4 className="golden-color text-capitalize fs-18 mb-1 fw-600">10+ Garden</h4>
                        <span className="text-white fs-16">Landscaped</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={12}>
              <div className="ashapurnaNri-button mt-4 mt-lg-5 text-center">
                <Link href={''}>
                  <a className="button-golden">View More</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
