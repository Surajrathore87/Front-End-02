import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

function PropertyType() {
  const Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    centerPadding: '50px',
    speed: 700,
    autoplay: true,
    slidesToShow: 3,
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
      title: 'Ashapurna Heritage Interior',
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
      <section className="news-letter">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="blue-color fw-600 text-center mb-lg-5 my-3 fs-35">Types of Property In Jodhpur</h1>
              <div className="lh-24 fs-14 windmills-inner property-type-content">
                <div className="row property-col-reverse align-items-center">
                  <div className="col-lg-7">
                    <p>
                      As real estate investments are long-term commitments, it is essential to make smart decisions
                      while buying any property in Jodhpur, such as proper legal advice, document review, and review of
                      relevant property-related information. As a result, the buyer can ensure that the investment
                      offers peace of mind and security. Ashapurna Buildcon Limited, the top developer in Jodhpur,
                      offers active investors the opportunity to acquire high-quality assets in prime locations with
                      reliable earning power. Ashapurna ensures that every property for sale in Jodhpur is free of
                      hassles and that there will be no complications in the future. Ashapurna’s goal is to ensure
                      transparency and trust in all transactions. Buying a home or villa in Jodhpur often times can be a
                      lot more confusing. Ashapurna, the top builder in Jodhpur, strives to make the buying process a
                      pleasant experience until you take over the property or own it.
                    </p>
                    <p>
                      Ashapurna sticks to its commitment to provide more affordable housing and flats in Jodhpur. As the
                      new offer penetrates a great investment, planning is required, supported by in-depth analysis and
                      market research. Top residential projects in Jodhpur that is synced in terms of location, price
                      and product will have an advantage. Ashapurna’s ideal residential projects include Patta Suda
                      Plots in Jodhpur, 1bhk Flat in Jodhpur, 2bhk Flat in Jodhpur, 3bhk Flats in Jodhpur, 4bhk Flats in
                      Jodhpur.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <img src="/images/sections/jda-mainimage.webp" className="img-fluid mb-lg-0 mb-3" />
                  </div>
                </div>
                <Row>
                  <Col lg={12}>
                    <div className="benefit-forth-section bg-white py-md-5 pb-5 property-type-slider">
                      <Slider {...Settings}>
                        {projectsList.map((item, key) => (
                          <div className="px-3 pb-5 pt-2" key={key}>
                            <div>
                              <div className="our-project-card p-3 bg-white shadow rounded position-relative">
                                <div className="img-box">
                                  <img src={item.image} alt="" className="img-fluid rounded" />
                                </div>
                                <div
                                  className="position-absolute bg-white shadow
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
                                  <div className="d-flex fs-14 text-color align-items-center justify-content-between project-inner-bottom">
                                    <span>
                                      <FontAwesomeIcon
                                        icon={faHome}
                                        className="me-1 blue-color"
                                        width={16}
                                        height={16}
                                      />{' '}
                                      Ready to Occupy
                                    </span>
                                    <Link href={item.link}>
                                      <a className="project-tag fs-13 cursor-pointer">See All</a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <ul className="property-type-content-ul">
                      <li>
                        Ashapurna Buildcon provides a golden opportunity for first-time homebuyers to purchase their
                        dream homes at prices available according to their respective budgets.
                      </li>
                      <li>
                        Documentation to transaction runs smoothly and hassle-free with Ashapurna as they are one of the
                        most famous and committed real estate developers in Jodhpur.
                      </li>
                      <li>
                        Real estate investments are acquiring a future cash flow from the property, and Ashapurna can
                        offer several advantages over various types of investments, be it equity or gold; Ashapurna
                        Buildcon offers investments that include potentially more significant returns, security,
                        coverage as compared to others.
                      </li>
                      <li>
                        Ashapurna Buildcon is more realistic in its price expectations. They had brought changes in the
                        market, hence attracting investors and homebuyers who never had such opportunities few years
                        back.
                      </li>
                    </ul>
                    <p>
                      Ashapurna believes in delivering the right property to clients with defect less, integrated, and
                      consistent results. They provide suitable property to the right target customers through which the
                      customers get their requirements fulfilled.
                    </p>
                    <p>
                      All your queries must be solved after reading this. You are informed of some property types in
                      Jodhpur for maximum returns and luxurious housings. Ashapurna Buildcon, the best real estate
                      developer in Jodhpur, is ready to help you any time for investing in these properties.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PropertyType;
