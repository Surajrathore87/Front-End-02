import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FsLightbox from 'fslightbox-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AmenitiesModal = dynamic(import('components/Modals/AmenitiesModal'));
const ProjectForm = dynamic(import('components/Projects/ProjectForm'));
const PlansSlider = dynamic(import('components/Projects/PlansSlider'));
const GalleryVideoModal = dynamic(import('components/Modals/GalleryVideoModal'));
const HomeEnquiryModal = dynamic(import('components/Modals/HomeEnquiryModal'));
const Image360 = dynamic(import('components/Projects/Image360'), { ssr: false });

function HeritageDetails() {
  const [showAmenities, setShowAmenities] = useState();
  const [videoUrl, setVideoUrl] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [enquiryModal, setEnquiryModal] = useState(false);
  const [projectDetail, setProjectDetail] = useState(null);
  const bannerSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    focusOnSelect: true,
    autoplay: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const amenitiesData = [
    {
      title: 'AVAILABILITY',
      subtitle: 'VILLAS / PLOTS',
      icon: '/images/projects-icons/ashapurna-heritage/availabilty.svg',
    },
    {
      title: 'NUMBER OF UNITS',
      subtitle: '671',
      icon: '/images/projects-icons/ashapurna-heritage/number-of-units.svg',
    },
    {
      title: 'DEVELOPMENT TYPE',
      subtitle: 'RESIDENTIAL',
      icon: '/images/projects-icons/ashapurna-heritage/development-type.svg',
    },
    {
      title: 'PROPERTY STATUS',
      subtitle: 'UNDER CONSTRUCTION',
      icon: '/images/projects-icons/ashapurna-heritage/property-status.svg',
    },
    {
      title: 'ADDRESS',
      subtitle: 'Basni Benda, near Airport, Jodhpur',
      icon: '/images/projects-icons/ashapurna-heritage/address.svg',
    },
    {
      title: 'CLUB',
      subtitle: 'HOUSE',
      icon: '/images/projects-icons/ashapurna-heritage/club.svg',
    },
    {
      title: 'CLOCK',
      subtitle: 'TOWER',
      icon: '/images/projects-icons/ashapurna-heritage/clock.svg',
    },
    {
      title: 'SWIMMING',
      subtitle: 'POOL',
      icon: '/images/projects-icons/ashapurna-heritage/swimming.svg',
    },
    {
      title: 'PARTY',
      subtitle: 'LAWN',
      icon: '/images/projects-icons/ashapurna-heritage/party.svg',
    },
    {
      title: 'KIDS PLAY',
      subtitle: 'AREA',
      icon: '/images/projects-icons/ashapurna-heritage/kids-play.svg',
    },
    {
      title: '6KM AWAY',
      subtitle: 'RAILWAY STATION',
      icon: '/images/projects-icons/ashapurna-heritage/6km-away.svg',
    },
    {
      title: '4KM AWAY',
      subtitle: 'AIRPORT',
      icon: '/images/projects-icons/ashapurna-heritage/4km-away.svg',
    },
    {
      title: 'TEMPLE',
      subtitle: 'NEARBY',
      icon: '/images/projects-icons/ashapurna-heritage/temple.svg',
    },
    {
      title: 'INDOOR',
      subtitle: 'AREA',
      icon: '/images/projects-icons/ashapurna-heritage/indoor.svg',
    },
    {
      title: 'DEVELOPMENT SIZE',
      subtitle: '72 ACRE',
      icon: '/images/projects-icons/ashapurna-anmol/development-size.svg',
    },
  ];

  function toggleVideo(link) {
    setShowGallery(true);
    setVideoUrl(link);
  }

  const floorPlanOneData = [
    {
      imageSrc: '/images/projects/chittar-villa-30x50-4.jpg',
    },
    {
      imageSrc: '/images/projects/chittar-villa-30x60-4.jpg',
    },
  ];
  const floorPlanTwoData = [
    {
      imageSrc: '/images/projects/kundan-villa-25x50-4.jpg',
    },
  ];
  const floorPlanKhaasVillaData = [
    {
      imageSrc: '/images/projects/khas-villa-40x60-5.jpg',
    },
  ];
  // const floorPlanKhaasVillaSecondData = [
  //   {
  //     imageSrc: '/images/projects/khas-villa-25x50-4.jpg',
  //   },
  // ];
  const floorPlanMotiVillaData = [
    {
      imageSrc: '/images/projects/moti-villa-45x60-5.jpg',
    },
  ];
  const floorPlanRajVillaData = [
    {
      imageSrc: '/images/projects/raj-villa-60x90-5.jpg',
    },
  ];
  const ImagesFullview = [
    {
      img: '/images/projects/heritage/1.jpg',
    },
    {
      img: '/images/projects/heritage/2.jpg',
    },
    {
      img: '/images/projects/heritage/3.jpg',
    },
  ];
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  function downloadBroChure(pageID) {
    setEnquiryModal(true);
    setProjectDetail({
      id: pageID,
      pagename: 'Ashapurna Heritage',
    });
  }

  return (
    <>
      {showAmenities && <AmenitiesModal setShowAmenities={setShowAmenities} amenitiesData={amenitiesData} />}

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          '/images/projects/heritage/1.jpg',
          '/images/projects/heritage/2.jpg',
          '/images/projects/heritage/3.jpg',
          '/images/projects/heritage/4.jpg',
          '/images/projects/heritage/5.jpg',
          '/images/projects/heritage/6.jpg',
          '/images/projects/heritage/7.jpg',
          '/images/projects/heritage/8.jpg',
        ]}
        slide={lightboxController.slide}
      />

      {enquiryModal && <HomeEnquiryModal setEnquiryModal={setEnquiryModal} projectDetail={projectDetail} />}
      {/* Project banner */}
      {/* <section className="project-banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Slider {...bannerSettings}>
                <div>
                  <div
                    className="project-banner-img w-100"
                    style={{ background: `url(/images/projects-banners/heritage/1.jpg)` }}
                  ></div>
                </div>
                <div>
                  <div
                    className="project-banner-img w-100"
                    style={{ background: `url(/images/projects-banners/heritage/2.jpg)` }}
                  ></div>
                </div>
                <div>
                  <div
                    className="project-banner-img w-100"
                    style={{ background: `url(/images/projects-banners/heritage/4.jpg)` }}
                  ></div>
                </div>
                <div>
                  <div
                    className="project-banner-img w-100"
                    style={{ background: `url(/images/projects-banners/heritage/5.jpg)` }}
                  ></div>
                </div>
                <div>
                  <div
                    className="project-banner-img w-100"
                    style={{ background: `url(/images/projects-banners/heritage/6.jpg)` }}
                  ></div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section> */}
      <section className="homeBanner-main">
        <Container className="p-0 px-lg-3">
          <Row className="home-banner-row">
            <Col lg={12} className="p-0 px-lg-3">
              <Slider {...bannerSettings}>
                <div className="position-relative h-100">
                  <div
                    className="homeBanner-wrapper projectBanner-wrapper position-relative"
                    style={{ background: `url(/images/projects-banners/heritage/1.jpg)` }}
                  ></div>
                </div>
                <div className="position-relative h-100">
                  <div
                    className="homeBanner-wrapper projectBanner-wrapper position-relative"
                    style={{ background: `url(/images/projects-banners/heritage/2.jpg)` }}
                  ></div>
                </div>
                <div className="position-relative h-100">
                  <div
                    className="homeBanner-wrapper projectBanner-wrapper position-relative"
                    style={{ background: `url(/images/projects-banners/heritage/4.jpg)` }}
                  ></div>
                </div>
                <div className="position-relative h-100">
                  <div
                    className="homeBanner-wrapper projectBanner-wrapper position-relative"
                    style={{ background: `url(/images/projects-banners/heritage/5.jpg)` }}
                  ></div>
                </div>
                <div className="position-relative h-100">
                  <div
                    className="homeBanner-wrapper projectBanner-wrapper position-relative"
                    style={{ background: `url(/images/projects-banners/heritage/6.jpg)` }}
                  ></div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Project overviw */}
      <section className="project-detail-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="high-fields-box position-relative overflow-hidden
        text-center text-lg-start d-lg-flex justify-content-between align-items-center"
              >
                <div className="d-md-flex">
                  <div className="d-lg-flex align-items-center h-100 text-center text-lg-start ">
                    <img
                      src="/images/logo/logo-transparent.svg"
                      width={156}
                      height={94}
                      alt="Logo"
                      className="img-fluid me-lg-3"
                    />
                    <img
                      src="/images/icons/vertical-line.svg"
                      width={3}
                      height={121}
                      alt="Line"
                      className="img-fluid d-none d-lg-inline"
                    />
                  </div>
                  <div className="high-field-content">
                    <h1 className="fs-26 fw-600 m-0">Ashapurna Heritage</h1>
                    <p className="text-color fw-400 fs-15">
                      Basni Benda, near Jodhpur, Airport, Jodhpur, Rajasthan 342011
                      <a
                        target={'blank'}
                        href="https://www.google.com/maps/dir//Ashapurna+Heritage+Basni+Benda+near+Jodhpur,+Airport+Jodhpur,+Rajasthan+342011/@26.2516835,73.0742852,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3941f56c72bdb719:0xb0b3c8b263169195"
                        className="text-decoration-none ms-2 fs-15"
                      >
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> Get Directions
                      </a>
                    </p>
                    <span className="d-block text-white fs-14 fw-400 w-max-content">1* Crore onwards</span>
                  </div>
                </div>
                <div className="d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                  <a
                    onClick={() => downloadBroChure(1)}
                    className="cursor-pointer me-lg-4 mx-2 mx-lg-0 text-decoration-none fs-15 golden-color d-flex align-items-center justify-content-center fw-500 brochure-btn"
                  >
                    <img
                      src="/images/icons/download-icon-gold.svg"
                      width={20}
                      height={14}
                      alt="Download"
                      className="img-fluid me-2 arrow-gold"
                    />
                    <img
                      src="/images/icons/download-icon-white.svg"
                      width={20}
                      height={14}
                      alt="Download"
                      className="img-fluid me-2 d-none arrow-white"
                    />
                    Brochure
                  </a>
                  <a
                    href="tel:9314041747"
                    className="mx-2 mx-lg-0 text-decoration-none text-white d-flex align-items-center justify-content-center fs-15 fw-500 call-btn"
                  >
                    <FontAwesomeIcon icon={faPhoneAlt} className="me-1" />
                    9314041747
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-lg-5 mt-4">
            <div className="col-lg-8">
              <div className="detail-overview pe-lg-5">
                <div>
                  <h2 className="fs-35 fw-600 blue-color position-relative py-1 my-lg-3">Project Overview</h2>
                  <p className="text-color fs-14 fw-400 lh-24 mb-3">
                    Ashapurna Heritage is township project spread across approximately 170 bighas and located at Basni
                    Benda near airport. The project is a fusion of contemporary and traditional architecture which
                    offers a world-class living experience. Every fine detail has been taken into consideration in the
                    design of the project. Ashapurna Heritage is a collage of captivating beauty, stylish lifestyle and
                    ultra modern comfort that perfectly suits the taste of contemporary lifestyle seekers.
                  </p>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="fs-35 fw-600 blue-color position-relative py-lg-3 py-2 mb-lg-3 mt-lg-2">
                      Amenities
                    </h2>
                    <a
                      onClick={() => downloadBroChure(1)}
                      className="cursor-pointer text-decoration-none text-white d-flex align-items-center justify-content-center fs-15 fw-500 brochure-btn2"
                    >
                      <img
                        src="/images/icons/download-icon-gold.svg"
                        width={15}
                        height={10}
                        alt="Download"
                        className="img-fluid me-2 arrow-gold d-none"
                      />
                      <img
                        src="/images/icons/download-icon-white.svg"
                        width={15}
                        height={10}
                        alt="Download"
                        className="img-fluid me-2 arrow-white"
                      />
                      E-Brochure
                    </a>
                  </div>
                  <div className="row mt-3">
                    {amenitiesData.slice(0, 7).map((item, key) => {
                      return (
                        <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4" key={key}>
                          <div className="amenities d-flex align-items-center justify-content-center p-2">
                            <div className="text-center">
                              <img src={item.icon} height={50} className="img-fluid mb-lg-3 mb-2" />
                              <h3 className="fw-500 golden-color fs-16 m-0">{item.title}</h3>
                              <p className="m-0 fs-15 fw-400 text-color line-clamp-1" title={item.subtitle}>
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
                      <div
                        className="amenities amenities-more d-flex align-items-center justify-content-center p-2"
                        onClick={() => setShowAmenities(true)}
                        title="View All"
                      >
                        <div className="text-center">
                          <img src="/images/icons/ellips.svg" height={50} className="img-fluid h-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="area-info px-lg-4 py-2 px-3 my-lg-4 my-3">
                <div className="row">
                  <div className="col-md-6 my-2">
                    <div className="d-flex align-items-center">
                      <img src="/images/icons/area-line.svg" className="img-fluid me-3" />
                      <div>
                        <p className="fs-15 fw-500 text-white m-0">RERA Number</p>
                        <span className="golden-color lh-30 fs-18 fw-600">7654398765</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 my-2">
                    <div className="d-flex align-items-center">
                      <img src="/images/icons/area-line.svg" className="img-fluid me-3" />
                      <div>
                        <p className="fs-15 fw-500 text-white m-0">Status </p>
                        <span className="golden-color lh-30 fs-18 fw-600">Under Construction</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 my-2">
                    <div className="d-flex align-items-center">
                      <img src="/images/icons/area-line.svg" className="img-fluid me-3" />
                      <div>
                        <p className="fs-15 fw-500 text-white m-0">Development size</p>
                        <span className="golden-color lh-30 fs-18 fw-600">2000 Sf</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 my-2">
                    <div className="d-flex align-items-center">
                      <img src="/images/icons/area-line.svg" className="img-fluid me-3" />
                      <div>
                        <p className="fs-15 fw-500 text-white m-0">Typology</p>
                        <span className="golden-color lh-30 fs-18 fw-600">Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ProjectForm />
            </div>
          </div>
        </div>
      </section>
      {/* Project Master and Florr Plans */}
      <section className="master-plan-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="py-lg-4 pe-lg-4">
                <h2 className="fw-600 fs-35 golden-color position-relative py-2 mb-3">Master Plan</h2>
                <p className="fs-18 fw-400 lh-30 text-white">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                  visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                  as a placeholder before final copy is available.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="master-plan-img p-3 p-lg-4 mb-3 mb-lg-0 text-center">
                <img src="/images/projects/Heritage-Master Plan.jpg" alt="Master Plan" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="floor-plan-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-600 fs-35 blue-color mb-3">Floor Plan</h2>
              <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                  <div className="project-plan-tabbing">
                    <Nav className="floor-tabs text-center d-block">
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2"
                          eventKey="one"
                        >
                          Chittar Villa (30x60)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2"
                          eventKey="two"
                        >
                          Kundan Villa (25x50)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2"
                          eventKey="three"
                        >
                          Khaas Villa (40x60)
                        </Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2"
                          eventKey="four"
                        >
                          Khaas Villa (25x50)
                        </Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2"
                          eventKey="five"
                        >
                          Moti Villa (45x60)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fw-400 text-decoration-none d-flex fs-15 align-items-center px-2"
                          eventKey="six"
                        >
                          Raj Villa (60x90)
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content className="py-3">
                    <Tab.Pane eventKey="one">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/heritage/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/heritage/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanOneData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="two">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/heritage/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/heritage/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanTwoData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="three">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/heritage/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/heritage/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanKhaasVillaData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="four">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/heritage/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/heritage/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanKhaasVillaSecondData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="five">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/heritage/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/heritage/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanMotiVillaData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="six">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/heritage/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/heritage/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanRajVillaData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Nearby Landmarks */}
      <section className="project-advantages">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="advantage-box">
                <h2 className="fs-35 fw-600 text-white text-center">Nearby Landmarks</h2>
                <div className="row mt-3 mt-lg-5">
                  <div className="col-lg-3 col-md-4 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/projects-icons/near-by/railwaystation.svg" height={60} className="w-100 mb-3" />
                      <h3 className="fs-17 fw-400 text-white mb-1">RAILWAY STATION</h3>
                      <p className="fs-22 fw-500 golden-color mb-0 text-uppercase">8.5 KM</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/projects-icons/near-by/airport.svg" height={60} className="w-100 mb-3" />
                      <h3 className="fs-17 fw-400 text-white mb-1">AIRPORT</h3>
                      <p className="fs-22 fw-500 golden-color mb-0 text-uppercase">3 KM</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/projects-icons/near-by/highcourt.svg" height={60} className="w-100 mb-3" />
                      <h3 className="fs-17 fw-400 text-white mb-1">NEW HIGH COURT</h3>
                      <p className="fs-22 fw-500 golden-color mb-0 text-uppercase">6 KM</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/projects-icons/near-by/school.svg" height={60} className="w-100 mb-3" />
                      <h3 className="fs-17 fw-400 text-white mb-1">BODHI INTERNATIONAL</h3>
                      <p className="fs-22 fw-500 golden-color mb-0 text-uppercase">3 KM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Villa */}
      <section className="project-villa-section gallery-section py-lg-5 galleryvideo-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="fs-35 fw-600 blue-color text-center mb-3">Gallery</h2>
            </div>
          </div>
          <div className="row">
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/heritage/1.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(1)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/heritage/2.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(2)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/heritage/3.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(3)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/heritage/4.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(4)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/heritage/5.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(5)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/heritage/6.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(6)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/heritage/7.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(7)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/heritage/8.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(8)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="fs-35 fw-600 blue-color text-center mt-5 mb-3">Video Gallery</h2>
            </div>
          </div>
          <div className="row">
            <Col lg={4} md={6}>
              <div className="video-block bg-white p-2 mt-3 mt-lg-4">
                <div className="video-thumbnail position-relative d-flex align-items-center justify-content-center">
                  <Image
                    src={'/images/projects/heritage/1thumbnailheritage.jpg'}
                    width={640}
                    height={427}
                    alt={'Ashapurna Heritage Prime'}
                  />
                  <div className="video-overlay position-absolute w-100 h-100 top-0 start-0"></div>
                  <div
                    className="iconLayer-2 position-absolute fs-22 d-flex start-0 align-items-center justify-content-center cursor-pointer"
                    onClick={() => toggleVideo('https://www.youtube.com/embed/JqNsyCnNJu0')}
                  >
                    <a className="youtube-color" title="Ashapurna Heritage Prime">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                </div>
                <div className="video-content mt-3 mb-2 ps-2">
                  <h3
                    className="fw-500 mb-0 text-uppercase fs-18 text-center cursor-pointer"
                    onClick={() => toggleVideo('https://www.youtube.com/embed/JqNsyCnNJu0')}
                  >
                    Ashapurna Heritage Prime
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="video-block bg-white p-2 mt-3 mt-lg-4">
                <div className="video-thumbnail position-relative d-flex align-items-center justify-content-center">
                  <Image
                    src={'/images/projects/heritage/2thumbnailheritage.jpg'}
                    width={640}
                    height={427}
                    alt={'Luxurious Villas at Basni Benda'}
                  />
                  <div className="video-overlay position-absolute w-100 h-100 top-0 start-0"></div>
                  <div
                    className="iconLayer-2 position-absolute fs-22 d-flex start-0 align-items-center justify-content-center cursor-pointer"
                    onClick={() => toggleVideo('https://www.youtube.com/embed/k6HX-sdcnwA')}
                  >
                    <a className="youtube-color" title="Luxurious Villas at Basni Benda">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                </div>
                <div className="video-content mt-3 mb-2 ps-2">
                  <h3
                    className="fw-500 mb-0 text-uppercase fs-18 text-center cursor-pointer"
                    onClick={() => toggleVideo('https://www.youtube.com/embed/k6HX-sdcnwA')}
                  >
                    Luxurious Villas at Basni Benda
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="video-block bg-white p-2 mt-3 mt-lg-4">
                <div className="video-thumbnail position-relative d-flex align-items-center justify-content-center">
                  <Image
                    src={'/images/projects/heritage/3thumnnailheritagewalk.jpg'}
                    width={640}
                    height={427}
                    alt={'Ashapurna Heritage 45x60'}
                  />
                  <div className="video-overlay position-absolute w-100 h-100 top-0 start-0"></div>
                  <div
                    className="iconLayer-2 position-absolute fs-22 d-flex start-0 align-items-center justify-content-center cursor-pointer"
                    onClick={() => toggleVideo('https://www.youtube.com/embed/pCLSRH8YQWY')}
                  >
                    <a className="youtube-color" title="Ashapurna Heritage 45x60">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                </div>
                <div className="video-content mt-3 mb-2 ps-2">
                  <h3
                    className="fw-500 mb-0 text-uppercase fs-18 text-center cursor-pointer"
                    onClick={() => toggleVideo('https://www.youtube.com/embed/pCLSRH8YQWY')}
                  >
                    Ashapurna Heritage 45x60
                  </h3>
                </div>
              </div>
            </Col>
          </div>
          <div className="row mt-5">
            <div className="col-12 py-lg-3">
              <h2 className="fs-35 fw-600 blue-color text-center mb-3">360 View</h2>
              <div className="text-center pt-lg-4">
                {/* <img src="/images/sections/360view.jpg" alt="360Image" className="img-fluid" /> */}
                <Image360 images={ImagesFullview} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {showGallery && <GalleryVideoModal videoUrl={videoUrl} setShowGallery={setShowGallery} />}
    </>
  );
}

export default HeritageDetails;
