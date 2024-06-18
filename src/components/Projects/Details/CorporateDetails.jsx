import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Nav, Tab } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FsLightbox from 'fslightbox-react';

const GalleryVideoModal = dynamic(import('components/Modals/GalleryVideoModal'));
const AmenitiesModal = dynamic(import('components/Modals/AmenitiesModal'));
const ProjectForm = dynamic(import('components/Projects/ProjectForm'));
const PlansSlider = dynamic(import('components/Projects/PlansSlider'));
const HomeEnquiryModal = dynamic(import('components/Modals/HomeEnquiryModal'));

function CorporateDetails() {
  const [showAmenities, setShowAmenities] = useState();
  const [videoUrl, setVideoUrl] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const bannerSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    centerPadding: '0',
    autoplay: true,
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
      title: 'SEWERAGE',
      subtitle: 'CONNECTION',
      icon: '/images/projects-icons/ashapurna-anmol/severage.svg',
    },
    {
      title: 'WATER',
      subtitle: 'CONNECTION',
      icon: '/images/projects-icons/ashapurna-anmol/water.svg',
    },
    {
      title: 'DEVELOPMENT TYPE',
      subtitle: 'COMMERCIAL',
      icon: '/images/projects-icons/ashapurna-anmol/development-type.svg',
    },
    {
      title: 'ADDRESS',
      subtitle: 'Opp. LIC Office, Circuit House Road, Ratanada, Jodhpur',
      icon: '/images/projects-icons/ashapurna-anmol/address.svg',
    },
  ];

  const floorPlanSadanData = [
    {
      imageSrc: '/images/projects/sadan-30x60.jpeg',
    },
  ];
  const floorPlanNiwasData = [
    {
      imageSrc: '/images/projects/niwas-25x50.jpeg',
    },
  ];
  const floorPlanNiwasOneData = [
    {
      imageSrc: '/images/projects/niwas-25x45.jpeg',
    },
  ];
  const floorPlanAawasData = [
    {
      imageSrc: '/images/projects/aawas-20x45.jpeg',
    },
  ];
  const floorPlanPlatinumData = [
    {
      imageSrc: '/images/projects/platnum-25x50.jpeg',
    },
  ];

  function toggleVideo(link) {
    setShowGallery(true);
    setVideoUrl(link);
  }

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

  return (
    <>
    <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          '/images/projects/corporate/1.jpg',
          '/images/projects/corporate/2.jpg',
          '/images/projects/corporate/3.jpg',
          '/images/projects/corporate/4.jpg',
          '/images/projects/corporate/5.jpg',
          '/images/projects/corporate/6.jpg',
          '/images/projects/corporate/7.jpg',
          '/images/projects/corporate/1.jpg',
        ]}
        slide={lightboxController.slide}
      />
      {showAmenities && <AmenitiesModal setShowAmenities={setShowAmenities} amenitiesData={amenitiesData} />}
      {/* Project banner */}
      <section className="project-banner">
        <Slider {...bannerSettings}>
          <div>
            <div
              className="project-banner-img w-100"
              style={{ background: `url(/images/projects-banners/aangan/1.jpg)` }}
            ></div>
          </div>
          <div>
            <div
              className="project-banner-img w-100"
              style={{ background: `url(/images/projects-banners/aangan/2.jpg)` }}
            ></div>
          </div>
          <div>
            <div
              className="project-banner-img w-100"
              style={{ background: `url(/images/projects-banners/aangan/3.jpg)` }}
            ></div>
          </div>
          <div>
            <div
              className="project-banner-img w-100"
              style={{ background: `url(/images/projects-banners/aangan/4.jpg)` }}
            ></div>
          </div>
          <div>
            <div
              className="project-banner-img w-100"
              style={{ background: `url(/images/projects-banners/aangan/5.jpg)` }}
            ></div>
          </div>
        </Slider>
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
                    <h1 className="fs-30 fw-600 m-0">Ashapurna Corporate Office</h1>
                    <p className="text-color fw-400 fs-16">
                      Ratanada, Jodhpur
                      <a
                        target={'blank'}
                        href="https://www.google.com/maps/dir//Sambhra+Rajasthan/@25.9259995,72.1830771,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3943e4f555201efd:0x497e6edeaa2b3627!2m2!1d72.1830771!2d25.9259995"
                        className="text-decoration-none ms-2"
                      >
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> Get Directions
                      </a>
                    </p>
                    <span className="d-block text-white fs-16 fw-400 w-max-content">1* Crore onwards</span>
                  </div>
                </div>
                <div className="d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                  <a
                    href="tel:9314041747"
                    className="mx-2 mx-lg-0 text-decoration-none text-white d-flex align-items-center justify-content-center fs-16 fw-500 call-btn"
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
                  <h2 className="fs-40 fw-600 blue-color position-relative py-lg-3 py-2 my-lg-3">Project Overview</h2>
                  <p className="text-color fs-16 fw-400 lh-30 mb-3">
                  Ashapurna Corporate Office is located in the heart of city Opp LIC Office, Circuit House Road, Ratanada and the Head Office of Ashapurna Buildcon. Along with the Head Office it also have commercial space on the Ground Floor which is 1800 Sq Ft. and the location makes it perfect for a business.
                  </p>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="fs-40 fw-600 blue-color position-relative py-lg-3 py-2 mb-lg-3 mt-lg-2">
                      Amenities
                    </h2>
                  </div>
                  <div className="row mt-3">
                    {amenitiesData.slice(0, 7).map((item, key) => {
                      return (
                        <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4" key={key}>
                          <div className="amenities d-flex align-items-center justify-content-center p-2">
                            <div className="text-center">
                              <img src={item.icon} height={50} className="img-fluid mb-lg-3 mb-2" />
                              <h3 className="fw-500 golden-color fs-19 m-0">{item.title}</h3>
                              <p className="m-0 fs-18 fw-400 text-color line-clamp-1" title={item.subtitle}>
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {/* <div className="col-6 col-lg-4 col-xl-3 mb-3 mb-lg-4">
                      <div
                        className="amenities amenities-more d-flex align-items-center justify-content-center p-2"
                        onClick={() => setShowAmenities(true)}
                        title="View All"
                      >
                        <div className="text-center">
                          <img src="/images/icons/ellips.svg" className="img-fluid h-auto" />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="area-info px-lg-4 py-2 px-3 my-lg-4 my-3 d-none">
                <div className="row">
                  <div className="col-md-6 my-2">
                    <div className="d-flex align-items-center">
                      <img src="/images/icons/area-line.svg" className="img-fluid me-3" />
                      <div>
                        <p className="fs-16 fw-500 text-white m-0">RERA Number</p>
                        <span className="golden-color lh-30 fs-20 fw-600">7654398765</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 my-2">
                    <div className="d-flex align-items-center">
                      <img src="/images/icons/area-line.svg" className="img-fluid me-3" />
                      <div>
                        <p className="fs-16 fw-500 text-white m-0">Status </p>
                        <span className="golden-color lh-30 fs-20 fw-600">Un-Construction</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 my-2">
                    <div className="d-flex align-items-center">
                      <img src="/images/icons/area-line.svg" className="img-fluid me-3" />
                      <div>
                        <p className="fs-16 fw-500 text-white m-0">Development size</p>
                        <span className="golden-color lh-30 fs-20 fw-600">2000 Sf</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 my-2">
                    <div className="d-flex align-items-center">
                      <img src="/images/icons/area-line.svg" className="img-fluid me-3" />
                      <div>
                        <p className="fs-16 fw-500 text-white m-0">Typology</p>
                        <span className="golden-color lh-30 fs-20 fw-600">Architecture</span>
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
      {/* <section className="master-plan-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="py-lg-4 pe-lg-4">
                <h2 className="fw-600 fs-40 golden-color position-relative py-2 mb-3">Master Plan</h2>
                <p className="fs-20 fw-400 lh-30 text-white">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                  visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                  as a placeholder before final copy is available.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="master-plan-img p-3 p-lg-4 mb-3 mb-lg-0 text-center">
                <img src="/images/projects/Ashapurna-aagan-master-plan.png" alt="Master Plan" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="floor-plan-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-600 fs-40 blue-color mb-3">Floor Plan</h2>
              <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                  <div className="project-plan-tabbing">
                    <Nav className="floor-tabs text-center d-block">
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="one"
                        >
                          SADAN (30x60)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="two"
                        >
                          NIWAS (25x50)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="three"
                        >
                          NIWAS (25x45)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="four"
                        >
                          AAWAS (20x45)
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="d-inline-block mb-lg-3 mx-2">
                        <Nav.Link
                          className="text-color fs-20 fw-400 text-decoration-none d-flex align-items-center px-2"
                          eventKey="five"
                        >
                          PLATINUM (25x50)
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content className="py-3">
                    <Tab.Pane eventKey="one">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/aangan/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/aangan/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanSadanData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="two">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/aangan/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/aangan/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanNiwasData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="three">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/aangan/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/aangan/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanNiwasOneData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/aangan/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/aangan/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanAawasData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="five">
                      <div
                        className="project-floor-row"
                        style={{
                          background: `url(/images/projects-banners/aangan/852-780.jpg)`,
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-6 text-center">
                            <img
                              src="/images/projects-banners/aangan/852-780.jpg"
                              alt="Floor Image"
                              className="img-fluid d-lg-none"
                            />
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="my-lg-5 py-lg-5 w-100 project-slider">
                              <PlansSlider imageSrc={floorPlanPlatinumData} />
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
      </section> */}
      {/* Nearby Landmarks */}
      {/* <section className="project-advantages">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="advantage-box">
                <h2 className="fs-40 fw-600 text-white text-center">Nearby Landmarks</h2>
                <div className="row mt-3 mt-lg-5">
                  <div className="col-lg-3 col-md-4 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/projects-icons/near-by/college.svg" height={60} className="w-100 mb-3" />
                      <h3 className="fs-18 fw-400 text-white mb-1">HOSPITAL</h3>
                      <p className="fs-24 fw-500 golden-color mb-0 text-uppercase">1.6 KM</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/icons/hrrl.svg" className="img-fluid mb-3" />
                      <h3 className="fs-18 fw-400 text-white mb-1">HRRL REFINERY PACHPADRA</h3>
                      <p className="fs-24 fw-500 golden-color mb-0 text-uppercase">1.5 KM</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/projects-icons/near-by/school.svg" height={60} className="w-100 mb-3" />
                      <h3 className="fs-18 fw-400 text-white mb-1">SCHOOL</h3>
                      <p className="fs-24 fw-500 golden-color mb-0 text-uppercase">1.4 KM</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 mb-3 mb-lg-0">
                    <div className="text-center m-auto">
                      <img src="/images/icons/nh.svg" className="img-fluid mb-3" />
                      <h3 className="fs-18 fw-400 text-white mb-1">NH 25</h3>
                      <p className="fs-24 fw-500 golden-color mb-0 text-uppercase">18 kM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Project Villa  */}
      <section className="project-villa-section gallery-section pt-lg-0 galleryvideo-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="fs-40 fw-600 blue-color text-center mb-4">Gallery</h2>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-12 project-slider p-0">
              <Slider {...gallerySettings}>
                {Array(4)
                  .fill()
                  .map((_, key) => (
                    <div key={key} className="px-3">
                      <div
                        className="project-box position-relative overflow-hidden d-flex align-items-center mb-3"
                        style={{ background: 'url(/images/sections/project-img.jpg)' }}
                      >
                        <div className="project-content position-absolute w-100 h-100 d-flex flex-column">
                          <div className="mt-auto p-3">
                            <h3 className="fs-22 fw-600 golden-color m-0 py-2">Ashapurna Pachpadra</h3>
                            <ul className="list-unstyled mb-0 mt-2">
                              <li className="fs-16 fw-500 mb-2 text-white line-clamp-1">
                                <span>
                                  <FontAwesomeIcon icon={faMapMarkerAlt} className="golden-color me-1" />
                                </span>
                                Near HRRL Refinery, Rajasthan
                              </li>
                              <li className="fs-16 fw-500 text-white line-clamp-1">
                                <span>
                                  <FontAwesomeIcon icon={faHome} className="golden-color me-1" />
                                </span>
                                Under Construction
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="project-overlay position-absolute d-flex align-items-center justify-content-center">
                          <div className="text-center">
                            <Image
                              src={'/images/logo/pachpadra-logo.png'}
                              width={192}
                              height={84}
                              className="img-fluid mb-3"
                              alt="Logo"
                            />
                            <h4 className="light-blue-color fs-24 fw-600 mb-4">Ashapurna Pachpadra</h4>
                            <Link href={'/residential/ashapurna-pachpadra'}>
                              <a className="cursor-pointer button-golden px-0 fw-500 d-flex align-items-center justify-content-center">
                                Read More
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div> */}
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/corporate/1.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(1)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/corporate/2.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(2)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/corporate/3.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(3)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/corporate/4.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(4)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/corporate/5.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(5)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/corporate/6.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(6)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/corporate/7.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(7)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/projects/corporate/1.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(8)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <h2 className="fs-40 fw-600 blue-color text-center mt-5 mb-4">Video Gallery</h2>
            </div>
          </div>
          <div className="row">
            <Col lg={4} md={6}>
              <div className="video-block bg-white p-2 mt-3 mt-lg-4">
                <div className="video-thumbnail position-relative d-flex align-items-center justify-content-center">
                  <Image
                    src={'/images/projects/mediaevent1.jpg'}
                    width={640}
                    height={427}
                    alt={'Celebrating 25 Glorious Years'}
                  />
                  <div className="video-overlay position-absolute w-100 h-100 top-0 start-0"></div>
                  <div className="iconLayer-2 position-absolute fs-22 d-flex start-0 align-items-center justify-content-center">
                    <a
                      className="youtube-color"
                      title="Gallery Video"
                      onClick={() => toggleVideo('https://www.youtube.com/embed/atXxjCYDTzY')}
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                </div>
                <div className="video-content mt-3 mb-2 ps-2">
                  <h3 className="fw-500 mb-0 text-uppercase fs-22">Celebrating 25 Glorious Years</h3>
                </div>
              </div>
            </Col>
          </div> */}
          {/* <div className="row mt-5">
            <div className="col-12 py-lg-3">
              <h2 className="fs-40 fw-600 blue-color text-center mb-4">360 View</h2>
              <div className="text-center pt-lg-4">
                <img src="/images/sections/360view.jpg" alt="360Image" className="img-fluid" />
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {showGallery && <GalleryVideoModal videoUrl={videoUrl} setShowGallery={setShowGallery} />}
    </>
  );
}

export default CorporateDetails;
