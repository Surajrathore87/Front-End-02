import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function AboutUs(props) {
  const { aboutData } = props;
  //console.log(aboutData);

  const areaSettings = {
    dots: true,
    infinite: true,
    centerPadding: '50px',
    focusOnSelect: true,
    speed: 700,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
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
  const projectsList = [
    {
      title: 'Ashapurna Heritage',
      location: 'Near Airport, Jodhpur',
      status: 'Ready to Occupy',
      image: '/images/sections/ashapurna-heritage.webp',
      link: 'residential/ashapurna-heritage',
      logo: '/images/sections/heritage-logo.webp',
    },
    {
      title: 'Ashapurna Anmol',
      location: 'Near New High Court, Jodhpur',
      status: 'Under Construction',
      image: '/images/sections/ashapurna-anmol.webp',
      link: 'residential/ashapurna-anmol',
      logo: '/images/sections/anmol-logo.webp',
    },
    {
      title: 'Ashapurna Aangan',
      location: 'Pachpadra, Barmer',
      status: 'Ready to Occupy',
      image: '/images/sections/ashapurna-aangan.webp',
      link: 'residential/ashapurna-pachpadra',
      logo: '/images/sections/aangan-logo.webp',
    },
    {
      title: 'Ashapurna NRI',
      location: 'Main Pali Highway, Jodhpur',
      status: 'Under Construction',
      image: '/images/sections/ashapurna-nri.webp',
      link: '/ashapurna-nri',
      logo: '/images/sections/nri-logo.webp',
    },
    {
      title: 'Ashapurna Basera',
      location: 'Pal, Sangariya Road',
      status: 'Under Construction',
      image: '/images/sections/ashapurna-basera.webp',
      link: 'residential/ashapurna-basera-second-phase',
      logo: '/images/sections/basera-logo.webp',
    },
  ];
  return (
    <>
      <section className="aboutus-main">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="aboutmain-left text-center">
                <img
                  src={aboutData.about_us_image_path + aboutData.aboutUs.image}
                  className="img-fluid"
                  alt={aboutData.aboutUs.title}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="aboutmain-right pt-4 pt-lg-0 ps-0 ps-lg-3">
                <span className="text-uppercase golden-color subtitle subtitle-bgtext position-relative pe-3">
                  {aboutData.aboutUs.title}
                </span>
                <h1 className="blue-color fw-600 fs-35 mb-10">Welcome to Ashapurna </h1>
                <div className="text-color aboutusContent fw-400 lh-24 fs-14">
                  {ReactHtmlParser(aboutData.aboutUs.description)}
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="aboutmain-features px-3">
                <Row>
                  <Col lg={3} md={3} xs={6}>
                    <div className="aboutfeature-block text-center mb-5 mb-md-0">
                      <div className="aboutfeature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                        <img
                          src={aboutData.about_us_image_path + aboutData.aboutUs.year_of_experience_image}
                          alt={aboutData.aboutUs.year_of_experience_heading}
                        />
                      </div>
                      <h4 className="golden-color fs-36 fw-700">{aboutData.aboutUs.year_of_experience}</h4>
                      <h6 className="text-white fs-16 text-capitalize">
                        {aboutData.aboutUs.year_of_experience_heading}
                      </h6>
                    </div>
                  </Col>
                  <Col lg={3} md={3} xs={6}>
                    <div className="aboutfeature-block text-center mb-5  mb-md-0">
                      <div className="aboutfeature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                        <img
                          src={aboutData.about_us_image_path + aboutData.aboutUs.project_completed_image}
                          alt={aboutData.aboutUs.project_completed_heading}
                        />
                      </div>
                      <h4 className="golden-color fs-36 fw-700">{aboutData.aboutUs.project_completed}</h4>
                      <h6 className="text-white fs-16 text-capitalize">
                        {aboutData.aboutUs.project_completed_heading}
                      </h6>
                    </div>
                  </Col>
                  <Col lg={3} md={3} xs={6}>
                    <div className="aboutfeature-block text-center mb-0 mb-md-0">
                      <div className="aboutfeature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                        <img
                          src={aboutData.about_us_image_path + aboutData.aboutUs.villas_completed_image}
                          alt={aboutData.aboutUs.villas_completed_heading}
                        />
                      </div>
                      <h4 className="golden-color fs-36 fw-700">{aboutData.aboutUs.villas_completed}</h4>
                      <h6 className="text-white fs-16 text-capitalize">{aboutData.aboutUs.villas_completed_heading}</h6>
                    </div>
                  </Col>
                  <Col lg={3} md={3} xs={6}>
                    <div className="aboutfeature-block text-center mb-0 mb-md-0">
                      <div className="aboutfeature-icon bg-white d-flex align-items-center justify-content-center rounded-1 mx-auto mb-20">
                        <img
                          src={aboutData.about_us_image_path + aboutData.aboutUs.plots_hand_over_image}
                          alt={aboutData.aboutUs.plots_hand_over_heading}
                        />
                      </div>
                      <h4 className="golden-color fs-36 fw-700">{aboutData.aboutUs.plots_hand_over}</h4>
                      <h6 className="text-white fs-16">{aboutData.aboutUs.plots_hand_over_heading}</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={12}>
              <div className="aboutmain-areascover">
                <h2 className="text-center blue-color fs-35 fw-600 text-capitalize mb-25">Areas We Cover</h2>
                <div className="aboutmain-areaslider">
                  <Slider {...Settings}>
                    {projectsList.map((item, key) => (
                      <div className="px-1 pb-xl-3 pt-2" key={key}>
                        <div className="our-project-card p-2 bg-white shadow rounded position-relative">
                          <img src={item.logo} className="img-fluid position-absolute buisness-logo" height={50} />
                          <div className="img-box">
                            <img src={item.image} alt="" className="img-fluid rounded" />
                          </div>
                          <div
                            className="position-absolute bg-white shadow-sm
                                    project-card-inner rounded text-start"
                          >
                            <p className="fs-18 fw-500 mb-1">{item.title}</p>
                            <p className="fs-14 m-0 p-0">
                              <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                className="me-2 blue-color"
                                width={16}
                                height={16}
                              />
                              {item.location}
                            </p>
                            <div className="fs-14 d-flex align-items-center justify-content-between project-inner-bottom">
                              <span>
                                <FontAwesomeIcon icon={faHome} className="me-1 blue-color" width={16} height={16} />
                                Ready to Occupy
                              </span>
                              <Link href={item.link}>
                                <a className="project-tag fs-13 cursor-pointer">See All</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="missionVision-main">
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="ourmission bg-white py-3 py-lg-0 me-lg-1 mb-3 mb-lg-0">
                <Row className="m-0 align-items-center">
                  <Col lg={4} className="p-0">
                    <div className="ourmission-image mb-3 mb-lg-0 text-center">
                      <img
                        src={aboutData.about_us_image_path + aboutData.aboutUs.our_vision_image}
                        alt={aboutData.aboutUs.our_vision_title}
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col lg={8} className="pe-0">
                    <div className="ourmission-content d-flex py-lg-3 py-xl-0 align-items-center h-100">
                      <div className="ps-2 pe-1">
                        <h3 className="light-blue-color position-relative fs-22 fw-600 text-uppercase">
                          {aboutData.aboutUs.our_vision_title}
                        </h3>
                        <div className="text-color fw-400 mb-0 lh-24 fs-14">
                          {ReactHtmlParser(aboutData.aboutUs.our_vision_description)}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ourmission bg-white py-3 py-lg-0 ms-lg-1 mb-3 mb-lg-0">
                <Row className="m-0 align-items-center">
                  <Col lg={4} className="p-0">
                    <div className="ourmission-image mb-3 mb-lg-0 text-center">
                      <img
                        src={aboutData.about_us_image_path + aboutData.aboutUs.our_mission_image}
                        alt={aboutData.aboutUs.our_mission_title}
                        className="img-fluid"
                      />
                    </div>
                  </Col>
                  <Col lg={8} className="pe-0">
                    <div className="ourmission-content d-flex py-lg-3 py-xl-0 align-items-center h-100">
                      <div className="ps-2 pe-1">
                        <h3 className="light-blue-color position-relative fs-22 fw-600 text-uppercase">
                          {aboutData.aboutUs.our_mission_title}
                        </h3>
                        <div className="text-color fw-400 mb-0 lh-24 fs-14">
                          {ReactHtmlParser(aboutData.aboutUs.our_mission_description)}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="ourAchievement-main">
        <Container>
          <Row>
            <Col lg={7} md={8} className="ms-auto">
              <div className="achievement-content bg-white position-relative p-4">
                <h3 className="blue-color fw-600 mb-3">{aboutData.aboutUs.our_achievement_title}</h3>
                <div className="lh-24 fs-14 text-color">
                  {ReactHtmlParser(aboutData.aboutUs.our_achievement_description)}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
