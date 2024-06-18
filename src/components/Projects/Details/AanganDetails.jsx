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

const GalleryVideoModal = dynamic(import('components/Modals/GalleryVideoModal'));
const AmenitiesModal = dynamic(import('components/Modals/AmenitiesModal'));
const ProjectForm = dynamic(import('components/Projects/ProjectForm'));
const PlansSlider = dynamic(import('components/Projects/PlansSlider'));
const HomeEnquiryModal = dynamic(import('components/Modals/HomeEnquiryModal'));

function AanganDetails() {
  const [showAmenities, setShowAmenities] = useState();
  const [videoUrl, setVideoUrl] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [enquiryModal, setEnquiryModal] = useState(false);
  const [projectDetail, setProjectDetail] = useState(null);
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
      title: 'CCTV',
      subtitle: 'Hitech Security',
      icon: '/images/projects-icons/ashapurna-pachpadra/cctv.svg',
    },
    {
      title: 'COMMUNITY',
      subtitle: 'Hall',
      icon: '/images/projects-icons/ashapurna-pachpadra/community.svg',
    },
    {
      title: 'Gated',
      subtitle: 'Township',
      icon: '/images/projects-icons/ashapurna-pachpadra/gated.svg',
    },
    {
      title: 'KIDS PLAY ',
      subtitle: 'Area',
      icon: '/images/projects-icons/ashapurna-pachpadra/kids-play.svg',
    },
    {
      title: 'Temple',
      subtitle: 'Area',
      icon: '/images/projects-icons/ashapurna-pachpadra/temple.svg',
    },
    {
      title: 'CCTV',
      subtitle: 'SECURITY SYSTEM',
      icon: '/images/projects-icons/ashapurna-pachpadra/cctv.svg',
    },
    {
      title: 'BASKETBALL',
      subtitle: 'COURT',
      icon: '/images/projects-icons/ashapurna-pachpadra/basketball.svg',
    },
    {
      title: 'VOLLYBALL',
      subtitle: 'GROUND',
      icon: '/images/icons/vollyball.svg',
    },
    {
      title: 'FOOTBALL',
      subtitle: 'GROUND',
      icon: '/images/projects-icons/ashapurna-pachpadra/',
    },
    {
      title: 'CRICKET ',
      subtitle: 'GROUND',
      icon: '/images/projects-icons/ashapurna-pachpadra/cricket.svg',
    },
    {
      title: 'TENNIS ',
      subtitle: 'COURT',
      icon: '/images/projects-icons/ashapurna-pachpadra/tennis.svg',
    },
    {
      title: 'BADMINTON ',
      subtitle: 'COURT',
      icon: '/images/projects-icons/ashapurna-pachpadra/badminton.svg',
    },
    {
      title: 'GYMNASSIUM ',
      subtitle: 'AREA',
      icon: '/images/projects-icons/ashapurna-pachpadra/Gymnassium.svg',
    },
    {
      title: 'YOGA',
      subtitle: 'AREA',
      icon: '/images/projects-icons/ashapurna-pachpadra/yoga.svg',
    },
    {
      title: 'LIBRARY',
      subtitle: 'AREA',
      icon: '/images/projects-icons/ashapurna-pachpadra/library.svg',
    },
    {
      title: 'OPEN AIR',
      subtitle: 'THEATER',
      icon: '/images/projects-icons/ashapurna-pachpadra/open-air.svg',
    },
    {
      title: 'CHESS',
      subtitle: 'ROOM',
      icon: '/images/projects-icons/ashapurna-pachpadra/chess.svg',
    },
    {
      title: 'PARTY',
      subtitle: 'HALL',
      icon: '/images/projects-icons/ashapurna-pachpadra/party.svg',
    },
    {
      title: 'Under ground ',
      subtitle: 'electrification',
      icon: '/images/projects-icons/ashapurna-pachpadra/under-ground.svg',
    },
    {
      title: 'roads',
      subtitle: 'cc and power blocks ',
      icon: '/images/projects-icons/ashapurna-pachpadra/roads.svg',
    },
    {
      title: 'Heavy ',
      subtitle: 'gate',
      icon: '/images/projects-icons/ashapurna-pachpadra/heavy.svg',
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

  function downloadBroChure(pageID) {
    setEnquiryModal(true);
    setProjectDetail({
      id: pageID,
      pagename: 'Ashapurna Aangan',
    });
  }

  return (
    <>
      {showAmenities && <AmenitiesModal setShowAmenities={setShowAmenities} amenitiesData={amenitiesData} />}
      {enquiryModal && <HomeEnquiryModal setEnquiryModal={setEnquiryModal} projectDetail={projectDetail} />}
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
                    <h1 className="fs-30 fw-600 m-0">Ashapurna Aangan</h1>
                    <p className="text-color fw-400 fs-16">
                      Sambhra, Rajasthan
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
                    onClick={() => downloadBroChure(3)}
                    className="cursor-pointer me-lg-4 mx-2 mx-lg-0 text-decoration-none golden-color d-flex align-items-center justify-content-center fs-16 fw-500 brochure-btn"
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
                    Ashapurna Township Pachpadra is the address of a life that welcomes you with all modernity and
                    grandeur. The imposing gate of the township gives a sense of luxury to its visitors. The township
                    houses everything that makes life comfortable and luxurious. Ashapura Township Pachpadra is a
                    complete world in itself where life experiences a new joy everyday. The township is not a fresh
                    beginning in Pachpadra only but it’s also the dawn of a new era in Barmer as a whole.
                  </p>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="fs-40 fw-600 blue-color position-relative py-lg-3 py-2 mb-lg-3 mt-lg-2">
                      Amenities
                    </h2>
                    <a
                      onClick={() => downloadBroChure(3)}
                      className="cursor-pointer text-decoration-none text-white d-flex align-items-center justify-content-center fs-16 fw-500 brochure-btn2"
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
                              <h3 className="fw-500 golden-color fs-19 m-0">{item.title}</h3>
                              <p className="m-0 fs-18 fw-400 text-color line-clamp-1" title={item.subtitle}>
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
                          <img src="/images/icons/ellips.svg" className="img-fluid h-auto" />
                        </div>
                      </div>
                    </div>
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
      <section className="master-plan-section">
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
      </section>
      <section className="floor-plan-section">
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
      </section>
      {/* Nearby Landmarks */}
      <section className="project-advantages">
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
      </section>
      {/* Project Villa  */}
      <section className="project-villa-section gallery-section galleryvideo-section">
        <div className="container">
          {/*<div className="row">
            <div className="col-12">
              <h2 className="fs-40 fw-600 blue-color text-center mb-4">Gallery</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 project-slider p-0">
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
            </div>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/instagram/instagram8.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(1)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/instagram/instagram7.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(2)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/instagram/instagram6.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(3)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/instagram/instagram5.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(4)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/instagram/instagram4.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(5)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/instagram/instagram3.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(6)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/instagram/instagram2.jpg'} width={345} height={250} alt="Photo Gallery" />
                <div className="gallery-overlay position-absolute w-100 h-100 align-items-center justify-content-center top-0 start-0">
                  <a className="viewImageBtn cursor-pointer" onClick={() => openLightboxOnSlide(7)}>
                    View
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gallery-image mt-3 position-relative mt-lg-4 p-2 text-center">
                <Image src={'/images/instagram/instagram1.jpg'} width={345} height={250} alt="Photo Gallery" />
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
          <div className="row mt-5">
            <div className="col-12 py-lg-3">
              <h2 className="fs-40 fw-600 blue-color text-center mb-4">360 View</h2>
              <div className="text-center pt-lg-4">
                <img src="/images/sections/360view.jpg" alt="360Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {showGallery && <GalleryVideoModal videoUrl={videoUrl} setShowGallery={setShowGallery} />}
    </>
  );
}

export default AanganDetails;
