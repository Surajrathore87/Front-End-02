import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faBed, faCrown, faGift, faKey, faRupeeSign, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import Image from 'next/image';

function Benefits() {
  const Settings = {
    dots: false,
    className: '',
    infinite: true,
    speed: 2000,
    autoplay: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (<>
      <section className="news-letter">
        <Container>
          <Row>
            <Col lg={12} className="benefits-section pt-0">
              <div className="team-wrapper">
                <h1 className="blue-color fw-600 text-center mb-lg-5 my-2 mb-3">Ashapurna Properties</h1>
              </div>
              <Row className='pb-lg-5 pb-md-3'>
                <Col lg={4}>
                  <div className="denefits-card mb-4 mb-md-0">
                    <div className="text-center card-icon m-auto">
                      <img src="/images/icons/park.png" alt="" />
                    </div>
                    <h2 className='text-center mt-md-3 mt-2'>
                      Visualize it
                    </h2>
                    <p className='text-center'>
                      Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                    <div className="">
                      <div className="arrow-icon m-auto cursor-pointer">
                        <img src="/images/quick-links/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="denefits-card mb-4 mb-md-0">
                    <div className="text-center card-icon m-auto">
                      <img src="/images/icons/park.png" alt="" />
                    </div>
                    <h2 className='text-center mt-md-3 mt-2'>
                      Create it
                    </h2>
                    <p className='text-center'>
                      Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                    <div className="">
                      <div className="arrow-icon m-auto cursor-pointer">
                        <img src="/images/quick-links/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="denefits-card mb-4 mb-md-0">
                    <div className="text-center card-icon m-auto">
                      <img src="/images/icons/park.png" alt="" />
                    </div>
                    <h2 className='text-center mt-md-3 mt-2'>
                      Grow it
                    </h2>
                    <p className='text-center'>
                      Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                    <div className="">
                      <div className="arrow-icon m-auto cursor-pointer">
                        <img src="/images/quick-links/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <section className='benefits-second-section benefits-section'>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center benefit-content">
                  <h2>Our Achievement</h2>
                  <p className='lh-40 fs-18'>
                    “Indian Leadership Award for Infrastructure Development 2011” for Outstanding Contribution in the Field of Infrastructure Development to Shri Karan Singh Uchiyarda, Chairman & Managing Director, Ashapurna Buildcon by “Indian Economic Development & Research Association, New Delhi”
                  </p>
                  <p className='lh-40 fs-18'>
                    Dignitaries Present: Dr. Bhishma Narayan Singh, Former Governor, Tamil Nadu; Dr. GVG Krishnamoorti, Former Chief Election Commissioner, Government of India
                  </p>
                  <div className="">
                    <button className='learn-more-btn'>Learn More</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='benefit-third-section benefits-section'>
          <Container>
            <Row className=''>
              <h2 className='text-center mb-lg-5 mb-3'>Benefits of working with us</h2>
              <Col lg={4}>
                <div className="bg-blue-color text-white denefits-card mb-4">
                    <div className="text-center card-icon m-auto">
                      <img src="/images/icons/park.png" alt="" />
                    </div>
                    <h2 className='text-center text-white mt-3'>
                      Visualize it
                    </h2>
                    <p className='text-center'>
                      Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                    <div className="">
                      <div className="arrow-icon m-auto cursor-pointer">
                        <img src="/images/quick-links/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4}>
                <div className="denefits-card mb-4">
                    <div className="text-center card-icon m-auto">
                      <img src="/images/icons/park.png" alt="" />
                    </div>
                    <h2 className='text-center mt-3'>
                      Visualize it
                    </h2>
                    <p className='text-center'>
                      Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                    <div className="">
                      <div className="arrow-icon m-auto cursor-pointer">
                        <img src="/images/quick-links/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4}>
                <div className="bg-blue-color text-white denefits-card mb-4">
                    <div className="text-center card-icon m-auto">
                      <img src="/images/icons/park.png" alt="" />
                    </div>
                    <h2 className='text-center text-white mt-3'>
                      Visualize it
                    </h2>
                    <p className='text-center'>
                      Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                    <div className="">
                      <div className="arrow-icon m-auto cursor-pointer">
                        <img src="/images/quick-links/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4}>
                <div className="denefits-card mb-4">
                    <div className="text-center card-icon m-auto">
                      <img src="/images/icons/park.png" alt="" />
                    </div>
                    <h2 className='text-center mt-3'>
                      Visualize it
                    </h2>
                    <p className='text-center'>
                      Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                    <div className="">
                      <div className="arrow-icon m-auto cursor-pointer">
                        <img src="/images/quick-links/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4}>
                <div className="bg-blue-color text-white denefits-card mb-4">
                    <div className="text-center card-icon m-auto">
                      <img src="/images/icons/park.png" alt="" />
                    </div>
                    <h2 className='text-center text-white mt-3'>
                      Visualize it
                    </h2>
                    <p className='text-center'>
                      Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                    <div className="">
                      <div className="arrow-icon m-auto cursor-pointer">
                        <img src="/images/quick-links/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={4}>
                <div className="denefits-card mb-4">
                    <div className="text-center card-icon m-auto">
                      <img src="/images/icons/park.png" alt="" />
                    </div>
                    <h2 className='text-center mt-3'>
                      Visualize it
                    </h2>
                    <p className='text-center'>
                      Sample text. Click to select the text box. Click again or double click to start editing the text.
                    </p>
                    <div className="">
                      <div className="arrow-icon m-auto cursor-pointer">
                        <img src="/images/quick-links/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='benefit-forth-section benefits-section'>
          <Container>
            <Row>
              <h2 className='text-center mb-lg-5 mb-3'>Our Work</h2>
              <Col lg={4} className="mb-lg-5 pb-4">
                <div className="our-project-card p-3 bg-white shadow rounded position-relative">
                    <div className="img-box"><img src="/images/quick-links/denefit-box.jpg" alt="" className='img-fluid rounded' /></div>
                  <div className="position-absolute bg-white shadow
                      project-card-inner rounded text-start">
                    <p className='fs-20 fw-500 mb-1'>Ashapurna NRI</p>
                    <p className='fs-15 m-0 p-0'>Pali Road, Mogra, Rajasthan 342308</p>
                    <div className="d-flex align-items-center justify-content-between project-inner-bottom">
                      <span><FontAwesomeIcon icon={faBed} className="me-1"/> 1, 2, 3</span>
                      <div className='project-tag fs-13 cursor-pointer'>6.9* Crore onwards</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mb-lg-5 pb-4">
                <div className="our-project-card p-3 bg-white shadow rounded position-relative">
                    <div className="img-box"><img src="/images/quick-links/denefit-box.jpg" alt="" className='img-fluid rounded' /></div>
                  <div className="position-absolute bg-white shadow
                      project-card-inner rounded text-start">
                    <p className='fs-20 fw-500 mb-1'>Ashapurna NRI</p>
                    <p className='fs-15 m-0 p-0'>Pali Road, Mogra, Rajasthan 342308</p>
                    <div className="d-flex align-items-center justify-content-between project-inner-bottom">
                      <span><FontAwesomeIcon icon={faBed} className="me-1"/> 1, 2, 3</span>
                      <div className='project-tag fs-13 cursor-pointer'>6.9* Crore onwards</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mb-lg-5 pb-4">
                <div className="our-project-card p-3 bg-white shadow rounded position-relative">
                    <div className="img-box"><img src="/images/quick-links/denefit-box.jpg" alt="" className='img-fluid rounded' /></div>
                  <div className="position-absolute bg-white shadow
                      project-card-inner rounded text-start">
                    <p className='fs-20 fw-500 mb-1'>Ashapurna NRI</p>
                    <p className='fs-15 m-0 p-0'>Pali Road, Mogra, Rajasthan 342308</p>
                    <div className="d-flex align-items-center justify-content-between project-inner-bottom">
                      <span><FontAwesomeIcon icon={faBed} className="me-1"/> 1, 2, 3</span>
                      <div className='project-tag fs-13 cursor-pointer'>6.9* Crore onwards</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mb-lg-5 pb-4">
                <div className="our-project-card p-3 bg-white shadow rounded position-relative">
                    <div className="img-box"><img src="/images/quick-links/denefit-box.jpg" alt="" className='img-fluid rounded' /></div>
                  <div className="position-absolute bg-white shadow
                      project-card-inner rounded text-start">
                    <p className='fs-20 fw-500 mb-1'>Ashapurna NRI</p>
                    <p className='fs-15 m-0 p-0'>Pali Road, Mogra, Rajasthan 342308</p>
                    <div className="d-flex align-items-center justify-content-between project-inner-bottom">
                      <span><FontAwesomeIcon icon={faBed} className="me-1"/> 1, 2, 3</span>
                      <div className='project-tag fs-13 cursor-pointer'>6.9* Crore onwards</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mb-lg-5 pb-4">
                <div className="our-project-card p-3 bg-white shadow rounded position-relative">
                    <div className="img-box"><img src="/images/quick-links/denefit-box.jpg" alt="" className='img-fluid rounded' /></div>
                  <div className="position-absolute bg-white shadow
                      project-card-inner rounded text-start">
                    <p className='fs-20 fw-500 mb-1'>Ashapurna NRI</p>
                    <p className='fs-15 m-0 p-0'>Pali Road, Mogra, Rajasthan 342308</p>
                    <div className="d-flex align-items-center justify-content-between project-inner-bottom">
                      <span><FontAwesomeIcon icon={faBed} className="me-1"/> 1, 2, 3</span>
                      <div className='project-tag fs-13 cursor-pointer'>6.9* Crore onwards</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mb-lg-5 pb-4">
                <div className="our-project-card p-3 bg-white shadow rounded position-relative">
                    <div className="img-box"><img src="/images/quick-links/denefit-box.jpg" alt="" className='img-fluid rounded' /></div>
                  <div className="position-absolute bg-white shadow
                      project-card-inner rounded text-start">
                    <p className='fs-20 fw-500 mb-1'>Ashapurna NRI</p>
                    <p className='fs-15 m-0 p-0'>Pali Road, Mogra, Rajasthan 342308</p>
                    <div className="d-flex align-items-center justify-content-between project-inner-bottom">
                      <span><FontAwesomeIcon icon={faBed} className="me-1"/> 1, 2, 3</span>
                      <div className='project-tag fs-13 cursor-pointer'>6.9* Crore onwards</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='benefits-section bg-blue-color'>
          <Container>
            <Row className="text-white benefit-counter-section">
              <div className="text-center benefit-counter-inner">
                <h2 className='mb-3'>Always Living Up To Our Promise</h2>
                <p className='mb-5 grey-color fs-18'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <Col lg={5} className="benefit-counter-inner">
                <div>
                  <h3 className='golden-color'>
                    How and where to learn mindfulness How and where to learn mindfulness
                  </h3>
                  <p className='grey-color fs-18'>
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </Col>
              <Col lg={7}>
                <img src="/images/banner/banner-bg.jpg" alt="" className='img-fluid' />
              </Col>
              <Col lg={12}>
                <div className="d-lg-flex align-items-center pt-3 pt-md-0">
                  <Col lg={5} className="benefit-counter-inner">
                    <h3>Introductory courses, taster sessions and groups Formal mindfulness courses</h3>
                    <p className='grey-color fs-18'>
                      Sample text. Click to select the Text Element. Sample text. Click to select the Text Element. Sample text. Click to select the Text Element. Sample text. Click to select the Text Element. Sample text. Click to select the Text Element. Sample text. Click to select the Text Element. Sample text. Click to select the Text Element.
                    </p>
                  </Col>
                  <Col lg={7}>
                    <div className="d-lg-flex salign-items-center justify-content-between px-3 ms-lg-3">
                      <div className="px-2 text-center counter-box">
                        <span>26+</span>
                        <p className='fs-20 text-nowrap'>Years Of Experience</p>
                      </div>
                      <div className="px-2 text-center counter-box">
                        <span>26,000+</span>
                        <p className='fs-20 text-nowrap'>Happy Families</p>
                      </div>
                      <div className="px-2 text-center counter-box">
                        <span>36+</span>
                        <p className='fs-20 text-nowrap'>Lakh Sq.Ft Delivered</p>
                      </div>
                    </div>
                    {/* <div className="d-flex align-items-center justify-content-between">
                      <div className="px-md-5 px-2 text-center counter-box">
                        <span>11,000+</span>
                        <p className='fs-20'>Units</p>
                      </div>
                    </div> */}
                  </Col>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='benefits-section'>
          <Container>
            <Row>
              <h2 className='text-center mb-lg-5 mb-3'>Our Services</h2>
              <Col lg={2} md={3} sm={6}>
                <div className="benefit-service">
                  <FontAwesomeIcon icon={faKey} className="mb-3" width={50} height={50}/>
                  <p className='fs-22 fw-500'>Easy Lease</p>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className="benefit-service">
                  <FontAwesomeIcon icon={faGift} className="mb-3" width={50} height={50}/>
                  <p className='fs-22 fw-500'>Loyalty Program</p>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className="benefit-service">
                  <FontAwesomeIcon icon={faRupeeSign} className="mb-3" width={50} height={50}/>
                  <p className='fs-22 fw-500'>Home Loan Support</p>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className="benefit-service">
                  <FontAwesomeIcon icon={faUsers} className="mb-3" width={50} height={50}/>
                  <p className='fs-22 fw-500'>Registration Support</p>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className="benefit-service">
                  <FontAwesomeIcon icon={faCrown} className="mb-3" width={50} height={50}/>
                  <p className='fs-22 fw-500'>Facility Management</p>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className="benefit-service">
                  <FontAwesomeIcon icon={faCrown} className="mb-3" width={50} height={50}/>
                  <p className='fs-22 fw-500'>NRI</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
  </>)
}

export default Benefits;
