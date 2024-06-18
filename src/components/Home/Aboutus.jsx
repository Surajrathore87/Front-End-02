import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function Aboutus(props) {
  const { aboutusImagePath, aboutData, featureImagePath, featuresData } = props;
  return (
    <>
      <section className="aboutUs-main">
        <Container>
          <Row>
            <Col lg={5} md={8} className="mx-auto">
              <div className="aboutus-left pt-80">
                <img src="/images/sections/aboutus.webp" className="img-fluid" alt="About Us Image" />
              </div>
            </Col>
            <Col lg={7} className="d-flex align-items-center">
              <div className="aboutus-right position-relative">
                <span className="text-uppercase golden-color subtitle position-relative pe-3">About us</span>
                <h1 className="blue-color fw-600 fs-35 mb-15">Welcome to Ashapurna </h1>
                <div className="text-color aboutusContent fw-400 lh-24 fs-14">
                  {ReactHtmlParser(aboutData.homepage_description)}
                </div>
                <div className="aboutus-features bg-light-golden-color px-3 py-4">
                  <Row>
                    <Col>
                      <div className="features mb-4 mb-md-0 text-center">
                        <div className="featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10">
                          <img
                            src={featureImagePath + featuresData.about_years_experience_image}
                            className="img-fluid"
                            alt={featuresData.about_years_experience_title}
                          />
                        </div>
                        <span className="fs-26 blue-color fw-700">{featuresData.about_years_experience_value}</span>
                        <p className="text-capitalize text-color mb-0 fs-16">
                          {featuresData.about_years_experience_title}
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div className="features mb-4 mb-md-0 text-center">
                        <div className="featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10">
                          <img src="/images/icons/property.svg" className="img-fluid" alt="icons" />
                        </div>
                        <span className="fs-26 blue-color fw-700">40</span>
                        <p className="text-capitalize text-color mb-0 fs-16">Projects</p>
                      </div>
                    </Col>
                    <Col>
                      <div className="features mb-4 mb-md-0 text-center">
                        <div className="featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10">
                          <img
                            src={featureImagePath + featuresData.about_happy_families_image}
                            className="img-fluid"
                            alt={featuresData.about_happy_families_title}
                          />
                        </div>
                        <span className="fs-26 blue-color fw-700">{featuresData.about_happy_families_value}</span>
                        <p className="text-capitalize mb-0 text-color fs-16">
                          {featuresData.about_happy_families_title}
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div className="features mb-0 mb-md-0 text-center">
                        <div className="featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10">
                          <img
                            src={featureImagePath + featuresData.about_delivered_image}
                            className="img-fluid"
                            alt={featuresData.about_delivered_title}
                          />
                        </div>
                        <span className="fs-26 blue-color fw-700">{featuresData.about_delivered_value}</span>
                        <p className="text-capitalize mb-0 text-color fs-16">{featuresData.about_delivered_title}</p>
                      </div>
                    </Col>
                    <Col>
                      <div className="features mb-0 mb-md-0 text-center">
                        <div className="featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10">
                          <img
                            src={featureImagePath + featuresData.about_units_image}
                            className="img-fluid"
                            alt={featuresData.about_units_title}
                          />
                        </div>
                        <span className="fs-26 blue-color fw-700">{featuresData.about_units_value}</span>
                        <p className="text-capitalize mb-0 text-color fs-16">{featuresData.about_units_title}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
