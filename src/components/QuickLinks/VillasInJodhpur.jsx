import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

function VillasInJodhpur() {
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
              <h1 className="blue-color fw-600 text-center mb-lg-5 fs-35 my-3">Buy Luxury Villas In Jodhpur</h1>
              <div className="lh-24 fs-14 windmills-inner">
                <div className="row property-col-reverse align-items-center">
                  <div className="col-lg-7">
                    <p>
                      Owning a house or villa in Jodhpur is a dream for many. This is families with securities and the
                      comfort of living. It also allows for socializing, engaging and connecting with others. After
                      completing the necessary financial planning and accumulating the necessary savings, the next
                      question is whether to buy an apartment or a luxurious villa in Jodhpur. Ashapurna is attracting
                      most of the buyers who want to invest in their favorite residential properties. Ashapurna Buildcon
                      provides you with top residential projects in Jodhpur, which are considerably affordable and the
                      best investment in your lifetime.
                    </p>
                    <p>
                      When aspiring home, buyers ask about a project, they ask about the amenities and views before
                      asking about the unit size and number of bedrooms. They choose a development that has facilities
                      to enjoy with their friends. Young homebuyers have different expectations and want facilities that
                      enable them to live a particular lifestyle. In this way, Ashapurna, the top builders in Jodhpur,
                      creates an environment that promotes buyers’ lifestyle. [H13]
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <img src="/images/sections/aboutus.webp" className="img-fluid mb-lg-0 mb-3" />
                  </div>
                </div>
                <Row>
                  <Col lg="12">
                    <div className="benefit-forth-section bg-white py-md-5 pb-5 px-3 px-md-3 px-lg-0 property-type-slider">
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
                    <h5 className="blue-color">Ashapurna’s lavish villa in Jodhpur:</h5>
                    <ul className="property-type-content-ul">
                      <li>Ashapurna Aangan</li>
                      <li>The Ashapurna Enclave</li>
                      <li>Ashapurna Anmol</li>
                    </ul>
                    <p>
                      These villas in Jodhpur are a perfect representation of what our active buyers and investors want
                      in their ideal space. The Ashapurna Buildcon Limited houses or villas are the first choice for
                      those who want the privacy of an independent house but want to avoid the hassle of building a
                      house. Ashapurna Buildcon Limited provides high-quality and ready to move in villas & JDA approved
                      projects in Jodhpur with all the available amenities.
                    </p>
                    <h5> Reasons to invest in our villas:</h5>
                    <ul className="property-type-content-ul">
                      <li>
                        The owner uses privacy and command to design and construct the house and use materials and
                        quality cost-effectively.
                      </li>
                      <li>
                        Ashapurna, the top developer in Jodhpur, is aware of the need to keep prices affordable.
                        Nowadays, considering rising costs, the need to offer more
                      </li>
                      <li>If you have the patience to hold it for a long time, land has excellent resale value.</li>
                      <li>It is also a fruitful investment that will benefit future generations.</li>
                    </ul>
                    <p>
                      These residential villas are more suitable for those with a big family, concerned about living
                      together under one roof, nature, and those who love their privacy. In addition, Ashapurna’s
                      residential projects help many residents buy cost-efficient and affordable villas. For small
                      modern families with tight budgets or aged people who want to spend the rest of life with peace of
                      mind, our villas are the best place.
                    </p>
                    <p>
                      Ashapurna Buildcon – the best real estate in Jodhpur, has a skillful team of professionals with
                      diverse levels of experience and expertise on board. The Ashapurna teams are seamlessly aligned
                      towards a common objective by a passion-driven approach to serve best to the customers. Ashapurna
                      projects residences combine the best features of ideal space and perfect combinations of values by
                      offering buyers a luxurious yet simple living experience.
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

export default VillasInJodhpur;
