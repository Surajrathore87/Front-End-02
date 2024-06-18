import Link from 'next/link';
import Slider from 'react-slick';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function AshapurnaProjects(props) {
  const { getFeaturedData, featuredImagePath, featuredProjectData } = props;
  const ashapaSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="ashapurnaProjects-main">
        <Container>
          <Row>
            <Col lg={12}>
              <span className="text-uppercase golden-color subtitle position-relative pe-3">
                {getFeaturedData.our_work_title}
              </span>
              <div className="d-flex ashapurnaProjects-heading flex-wrap justify-content-between align-items-center mt-2">
                <h2 className="text-capitalize fw-600 text-white fs-35">{getFeaturedData.our_work_tagline}</h2>
                <div className="d-none">
                  <Link href={''}>
                    <a className="button-light-blue">See All</a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="ashapurnaProjects-slider">
                <Slider {...ashapaSettings}>
                  {featuredProjectData &&
                    featuredProjectData.map((item, key) => {
                      return (
                        <div key={key}>
                          <div className="row align-items-center">
                            <div className="col-xl-5">
                              <img
                                src={featuredImagePath + item.project_logo_1}
                                className="mx-xl-3 mb-4 mb-xl-0 img-fluid mx-auto ashapaImg"
                                alt={item.name}
                              />
                            </div>
                            <div className="col-xl-7">
                              <Row>
                                <Col lg={12}>
                                  <div className="ashapurnaNri-left">
                                    <h2 className="text-capitalize fw-500 text-white fs-30 mb-10">{item.name}</h2>
                                    <span className="text-uppercase golden-color subtitle position-relative">
                                      project overview
                                    </span>
                                    <div className="text-white lh-24 fs-14 mt-3 pe-xl-3 line-clamp-5">
                                      {item.overview}
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={12}>
                                  <div className="ashapurnaNri-right">
                                    <h2 className="text-capitalize fw-600 text-white fs-30 mt-4 mb-30">Facility</h2>
                                    <Row>
                                      <Col xl={4} lg={4} xs={6}>
                                        <div className="facility-blocks d-flex align-items-start mb-25">
                                          <div className="facility-icon me-2 me-md-3">
                                            <img src="/images/icons/rera.png" alt="RERA" />
                                          </div>
                                          <div className="facilityIcon-content">
                                            <h4 className="golden-color fs-16 mb-1 fw-600">RERA</h4>
                                            <span className="text-white fs-14">Approved</span>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xl={4} lg={4} xs={6}>
                                        <div className="facility-blocks d-flex align-items-start mb-25">
                                          <div className="facility-icon me-2 me-md-3">
                                            <img src="/images/icons/availability.png" alt="Availability" />
                                          </div>
                                          <div className="facilityIcon-content">
                                            <h4 className="golden-color fs-16 mb-1 fw-600">Availability</h4>
                                            <span className="text-white fs-14">2BHK/ 3BHK/ 4BHK</span>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xl={4} lg={4} xs={6}>
                                        <div className="facility-blocks d-flex align-items-start mb-25">
                                          <div className="facility-icon me-2 me-md-3">
                                            <img src="/images/icons/swimming-pool.png" alt="swimming-pool" />
                                          </div>
                                          <div className="facilityIcon-content">
                                            <h4 className="golden-color text-capitalize fs-16 mb-1 fw-600">
                                              Swimming Pool
                                            </h4>
                                            <span className="text-white fs-14">Area</span>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xl={4} lg={4} xs={6}>
                                        <div className="facility-blocks d-flex align-items-start mb-25">
                                          <div className="facility-icon me-2 me-md-3">
                                            <img src="/images/icons/full-size.png" alt="Development Size" />
                                          </div>
                                          <div className="facilityIcon-content">
                                            <h4 className="golden-color text-capitalize fs-16 mb-1 fw-600">
                                              Development Size
                                            </h4>
                                            <span className="text-white fs-14">300 Bighas</span>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xl={4} lg={4} xs={6}>
                                        <div className="facility-blocks d-flex align-items-start mb-25">
                                          <div className="facility-icon me-2 me-md-3">
                                            <img src="/images/icons/club-house.png" alt="Club House" />
                                          </div>
                                          <div className="facilityIcon-content">
                                            <h4 className="golden-color text-capitalize fs-16 mb-1 fw-600">
                                              Club House
                                            </h4>
                                            <span className="text-white fs-14">30,000 SQ. FT.</span>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col xl={4} lg={4} xs={6}>
                                        <div className="facility-blocks d-flex align-items-start mb-25">
                                          <div className="facility-icon me-2 me-md-3">
                                            <img src="/images/icons/park.png" alt="10+ Garden" />
                                          </div>
                                          <div className="facilityIcon-content">
                                            <h4 className="golden-color text-capitalize fs-16 mb-1 fw-600">
                                              10+ Garden
                                            </h4>
                                            <span className="text-white fs-14">Landscaped</span>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                                <Col lg={12}>
                                  <div className="ashapurnaNri-button mt-4 mt-lg-5 text-center">
                                    <Link href={'/' + item.category.slug + '/' + item.slug}>
                                      <a className="button-golden">View More</a>
                                    </Link>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
