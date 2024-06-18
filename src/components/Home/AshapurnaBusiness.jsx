import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import Slider from 'react-slick';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ReactHtmlParser from 'react-html-parser';

export default function AshapurnaBusiness(props) {
  const { getProjectOverviewData, projectPath, projectsData } = props;
  const Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    centerPadding: '50px',
    speed: 700,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="ashapurnaBusiness-main">
        <Container>
          <Row>
            <Col xl={5} lg={7}>
              <div className="ashapurnaBusiness-left">
                <span className="text-uppercase golden-color subtitle position-relative pe-3">
                  {getProjectOverviewData.project_overview_title}
                </span>
                <h1 className="blue-color fw-600 fs-35 mb-15 text-capitalize">
                  {getProjectOverviewData.project_overview_tagline}
                </h1>
                <div className="fw-400 text-color lh-24 fs-14">
                  {ReactHtmlParser(getProjectOverviewData.project_overview_description)}
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="ashapurnaBusiness-right position-relative">
                <Tab.Container id="property-tabs" className="flex-row" defaultActiveKey="first">
                  <Nav variant="pills" className="flex-row ashapurnaTabs fw-400 fs-18">
                    <Nav.Item>
                      {/* <Nav.Link eventKey="first"> */}
                      <Link href={'/residential'}>
                        <a className="nav-link fs-15">Residential</a>
                      </Link>
                      {/* </Nav.Link> */}
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Commercial</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="benefit-forth-section bg-transparent px-md-2 px-lg-0 property-type-slider">
                        <Slider {...Settings}>
                          {projectsData &&
                            projectsData.slice(0, 7).map((item, key) => (
                              <div className="px-1 pb-xl-3 pt-2" key={key}>
                                <div className="our-project-card p-2 bg-white shadow rounded position-relative">
                                  <img
                                    src={projectPath + item.project_logo_2}
                                    className="img-fluid position-absolute buisness-logo"
                                    height={50}
                                  />
                                  <div className="img-box">
                                    <img
                                      src={projectPath + item.project_logo_1}
                                      alt=""
                                      className="img-fluid rounded"
                                      height={320}
                                    />
                                  </div>
                                  <div
                                    className="position-absolute bg-white shadow-sm
                                    project-card-inner rounded text-start"
                                  >
                                    <p className="fs-18 fw-500 mb-1">{item.name}</p>
                                    <p className="fs-14 m-0 p-0">
                                      <FontAwesomeIcon
                                        icon={faMapMarkerAlt}
                                        className="me-2 blue-color"
                                        width={16}
                                        height={16}
                                      />
                                      {item.address}
                                    </p>
                                    <div className="fs-14 d-flex align-items-center justify-content-between project-inner-bottom">
                                      {item.current_status && (
                                        <span>
                                          <FontAwesomeIcon
                                            icon={faHome}
                                            className="me-1 blue-color"
                                            width={16}
                                            height={16}
                                          />
                                          {item.current_status}
                                        </span>
                                      )}
                                      <Link href={'/' + item.category.slug + '/' + item.slug}>
                                        <a className="project-tag fs-13 cursor-pointer">See All</a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </Slider>
                      </div>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">
                      <Slider {...businessSettings}>
                        <div className="busniess-slider-block">
                          <img
                            src="/images/sections/busniess-property.jpg"
                            className="img-fluid"
                            alt="Ashapura Busniess Projects"
                          />
                        </div>
                        <div className="busniess-slider-block">
                          <img
                            src="/images/sections/busniess-property.jpg"
                            className="img-fluid"
                            alt="Ashapura Busniess Projects"
                          />
                        </div>
                        <div className="busniess-slider-block">
                          <img
                            src="/images/sections/busniess-property.jpg"
                            className="img-fluid"
                            alt="Ashapura Busniess Projects"
                          />
                        </div>
                        <div className="busniess-slider-block">
                          <img
                            src="/images/sections/busniess-property.jpg"
                            className="img-fluid"
                            alt="Ashapura Busniess Projects"
                          />
                        </div>
                      </Slider>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
