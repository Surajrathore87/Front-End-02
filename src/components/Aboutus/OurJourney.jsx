import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function OurJourney(props) {
  const { journeyData } = props;
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <section className="ourAchievement-main journey-achievement">
        <Container>
          <Row>
            <Col lg={7} md={8} className="ms-auto">
              <div className="achievement-content bg-white position-relative p-4">
                <span className="text-uppercase golden-color subtitle subtitle-bgtext position-relative pe-3">
                  {journeyData.getOurJourneyPageContent.title}
                </span>
                <h1 className="blue-color fw-600 fs-35 mb-15">{journeyData.getOurJourneyPageContent.tagline}</h1>
                <div className="lh-24 fs-14 text-color">
                  {ReactHtmlParser(journeyData.getOurJourneyPageContent.description)}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="aboutus-main py-5 journey-features">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="aboutmain-features px-3">
                <Row>
                  <Col lg={3} md={3} xs={6}>
                    <div className="aboutfeature-block text-center mb-5 mb-md-0">
                      <div className="aboutfeature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                        <img src={'/images/icons/experience-check.svg'} alt={journeyData.aboutUs.year_of_experience} />
                      </div>
                      <h4 className="golden-color fs-26 fw-700">{journeyData.aboutUs.year_of_experience}</h4>
                      <h6 className="text-white fs-16 text-capitalize">
                        {journeyData.aboutUs.year_of_experience_heading}
                      </h6>
                    </div>
                  </Col>
                  <Col lg={3} md={3} xs={6}>
                    <div className="aboutfeature-block text-center mb-5  mb-md-0">
                      <div className="aboutfeature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                        <img src={'/images/icons/project-completed.svg'} alt={journeyData.aboutUs.project_completed} />
                      </div>
                      <h4 className="golden-color fs-26 fw-700">{journeyData.aboutUs.project_completed}</h4>
                      <h6 className="text-white fs-16 text-capitalize">
                        {journeyData.aboutUs.project_completed_heading}
                      </h6>
                    </div>
                  </Col>
                  <Col lg={3} md={3} xs={6}>
                    <div className="aboutfeature-block text-center mb-0 mb-md-0">
                      <div className="aboutfeature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                        <img src={'/images/icons/villas-completed.svg'} alt={journeyData.aboutUs.villas_completed} />
                      </div>
                      <h4 className="golden-color fs-26 fw-700">{journeyData.aboutUs.villas_completed}</h4>
                      <h6 className="text-white fs-16 text-capitalize">
                        {journeyData.aboutUs.villas_completed_heading}
                      </h6>
                    </div>
                  </Col>
                  <Col lg={3} md={3} xs={6}>
                    <div className="aboutfeature-block text-center mb-0 mb-md-0">
                      <div className="aboutfeature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                        <img src={'/images/icons/units.svg'} alt="Units" />
                      </div>
                      <h4 className="golden-color fs-26 fw-700">{journeyData.aboutUs.plots_hand_over}</h4>
                      <h6 className="text-white fs-16">{journeyData.aboutUs.plots_hand_over_heading}</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-lg-5 pt-4 milestones-section">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="text-center blue-color text-capitalize mb-25 fw-600">
                {journeyData.getOurJourneyPageContent.flourishing_title}
              </h2>
            </Col>
            <Col lg={12}>
              {/* <div className="text-center mt-3 mt-lg-4">
                <img
                  src="/images/sections/ashapurna-journey.jpg"
                  alt="Ashapurna Journey"
                  className="img-fluid cursor-pointer"
                  onClick={() => setToggler(!toggler)}
                />
                <FsLightbox toggler={toggler} sources={['/images/sections/ashapurna-journey.jpg']} />
              </div> */}
              <div className="milestones-column position-relative mt-lg-5 mt-0">
                {journeyData &&
                  journeyData.getOurJournies.map((item, key) => (
                    <div
                      className={`milestones-box px-3 py-4 text-center ${
                        (item.id % 2 == 0 && 'float-start') || 'float-end'
                      }`}
                      key={key}
                    >
                      <h3 className="blue-color fs-35 fw-600">{item.title}</h3>
                      <div className="lh-30 text-color fs-16 text-start">{ReactHtmlParser(item.description)}</div>
                      <div className="triangle_shape"></div>
                      <span className="milestone-dot"></span>
                    </div>
                  ))}
                <div className="clearfix"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
