import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

function JdaJodhpur() {
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
              <h1 className="blue-color fw-600 text-center mb-lg-5 my-3 fs-35">JDA Approved Property</h1>
              <div className="lh-24 fs-14 windmills-inner property-type-content">
                <div className="row property-col-reverse align-items-center">
                  <div className="col-lg-7">
                    <p>
                      Ashapurna Buildcon Limited is one of the respected and best real estate developers in Jodhpur. The
                      company always aims at offering the finest blend of comfort and luxury in every dream home it
                      designs and develops. Ashapurna’s diverse project portfolios includes options of both residential
                      and commercial property in Jodhpur at almost all prime and upcoming locations of Jodhpur also
                      these property are JDA Approved Projects in Jodhpur. Jodhpur Development Authority is the
                      regulatory body authorized by the Government of India’s Department of Urban Development and
                      Housing. It is in charge of urban development in the capital, under the Ministry of Urban
                      Development’s supervision. It has authority over an area of 3000 square kilometers.
                    </p>
                    <p>
                      If you purchase a JDA Approved Projects in Jodhpur, you will enjoy various benefits. First and
                      foremost, it would ensure that the plot is linked to all public utility systems, such as water
                      supply, power, and drainage. The Jodhpur Development Authority (JDA) is the city’s governing body.
                      If they accept certain plots, it ensures they are in accordance with government laws and
                      regulations, making it easier to get bank loans. And they provide you with all legal documents
                      pertaining to your land and title.
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
                    <p>
                      JDA approved projects in Jodhpur can be found in almost every area and 725 villages nearby. You
                      should use the check our listing to look for JDA approved projects in Jodhpur or villa in Jodhpur.
                      Looking at Ashapurna Buildcon’s portals, you will find many JDA Approved Projects in Jodhpur that
                      too within your price range. Why go somewhere else? When we are here! Ashapurna Buildcon provides
                      the best options for the people looking for JDA approved properties with all the facilities and
                      benefits. We ensure the maximum rewards for all the parties in the contract.
                    </p>
                    <p>
                      Purchasing a JDA approved projects in Jodhpur will help you earn a decent return on investment.
                      Furthermore, long-term leases will help you produce passive income. However, before purchasing a
                      plot, you can examine its past and prospects for future development. But you need not worry about
                      these parameters when you are trading through us! We try to list only the properties with a bright
                      future perspective. Ashapurna Buildcon is a business that builds real estate townships in a much
                      faster and more recent fashion. Ashapurna Buildcon, the most well-known name in Jodhpur, is
                      devoted to excellence.We take our promises very seriously and are always striving to improve.
                    </p>
                    <p>
                      Before making any listings, we ensure that they are available on schedule and that the necessary
                      legal permits and paperwork have been obtained. Without a doubt, you can depend on our commitments
                      for your Jodhpur property. Each project features high-quality architecture. Earthquake resistance
                      is a primary feature of the structure we create, and our buildings are well-designed and
                      meticulously constructed. We not only assist you in locating the best real estate, but we also
                      ensure that the buying process is as easy and efficient as possible.
                    </p>
                    <p>
                      We understand that many factors should be considered when purchasing or renting a house, such as
                      location, ideal location, budget, facilities, and many others. Ashapurna Buildcon is the place to
                      go if you want to discover India’s best properties. If you’re looking for a rental property or
                      dreaming of building your dream home, you’ll find it all on our real estate portal. We have top
                      residential projects in Jodhpur and commercial real estate listings for sale and rent across the
                      country. So, what are you waiting for?
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

export default JdaJodhpur;
